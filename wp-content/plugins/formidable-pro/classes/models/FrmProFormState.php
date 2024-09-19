<?php

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

class FrmProFormState {

	/**
	 * @var FrmProFormState
	 */
	private static $instance;

	/**
	 * @var array
	 */
	private $state;

	private function __construct() {
		$this->state = array();
	}

	/**
	 * @param string $key
	 * @param mixed  $value
	 * @return void
	 */
	public static function set_initial_value( $key, $value ) {
		self::maybe_initialize();
		self::$instance->set( $key, $value );
	}

	/**
	 * @return bool true if just initialized.
	 */
	private static function maybe_initialize() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
			return true;
		}
		return false;
	}

	public function set( $key, $value ) {
		$this->state[ $key ] = $value;
	}

	/**
	 * @param string $key
	 * @param mixed  $default
	 * @return mixed
	 */
	public static function get_from_request( $key, $default ) {
		if ( self::maybe_initialize() ) {
			self::get_state_from_request();
		}
		return self::$instance->get( $key, $default );
	}

	/**
	 * @param string $key
	 * @param mixed  $default
	 * @return mixed
	 */
	public function get( $key, $default ) {
		if ( isset( $this->state[ $key ] ) ) {
			return $this->state[ $key ];
		}
		return $default;
	}

	/**
	 * @return void
	 */
	public static function maybe_render_state_field() {
		if ( empty( self::$instance ) && ! self::get_state_from_request() ) {
			return;
		}
		self::$instance->render_state_field();
	}

	/**
	 * @return bool true if there is valid state data in the request.
	 */
	private static function get_state_from_request() {
		$encrypted_state = FrmAppHelper::get_post_param( 'frm_state', '', 'sanitize_text_field' );
		if ( ! $encrypted_state ) {
			return false;
		}
		$secret          = self::get_encryption_secret();
		$decrypted_state = openssl_decrypt( $encrypted_state, 'AES-128-ECB', $secret );
		if ( false === $decrypted_state ) {
			return false;
		}
		$decoded_state = json_decode( $decrypted_state, true );
		if ( ! is_array( $decoded_state ) ) {
			return false;
		}
		foreach ( $decoded_state as $key => $value ) {
			self::set_initial_value( self::decompressed_key( $key ), self::decompressed_value( $value ) );
		}
		return true;
	}

	public function render_state_field() {
		if ( ! self::open_ssl_is_installed() ) {
			return;
		}
		if ( ! $this->state && ! self::get_state_from_request() ) {
			return;
		}
		$state_string = $this->get_state_string();
		echo '<input name="frm_state" type="hidden" value="' . esc_attr( $state_string ) . '" />';
	}

	/**
	 * @return string
	 */
	private function get_state_string() {
		if ( ! self::open_ssl_is_installed() ) {
			return '';
		}
		$secret           = self::get_encryption_secret();
		$compressed_state = $this->compressed_state();
		$json_encoded     = json_encode( $compressed_state );
		$encrypted        = openssl_encrypt( $json_encoded, 'AES-128-ECB', $secret );
		return $encrypted;
	}

	/**
	 * Returns true if open SSL is installed.
	 *
	 * @since 6.12
	 * @return bool
	 */
	private static function open_ssl_is_installed() {
		return function_exists( 'openssl_encrypt' );
	}

	private function compressed_state() {
		$compressed = array();
		foreach ( $this->state as $key => $value ) {
			$compressed[ self::compressed_key( $key ) ] = self::compressed_value( $value );
		}
		return $compressed;
	}

	/**
	 * @param string $key
	 * @return string
	 */
	private static function compressed_key( $key ) {
		if ( 'inplace_edit' === $key ) {
			return 'ipe';
		}
		if ( 'global_post' === $key ) {
			return 'gp';
		}
		return $key[0];
	}

	private static function compressed_value( $value ) {
		return $value;
	}

	/**
	 * Keys are truncated to a single character to make the state string smaller.
	 *
	 * @param string $key
	 * @return string The full key name if one is found. If nothing is found, the $key param is passed back.
	 */
	private static function decompressed_key( $key ) {
		switch ( $key ) {
			case 'd':
				return 'description';
			case 't':
				return 'title';
			case 'i':
				return 'include_fields';
			case 'g':
				return 'get';
			case 'c':
				// Numeric value. Used to track reCAPTCHA v3 score between pages when recaptcha_checked nonce is used.
				return 'captcha';
			case 'ipe':
				return 'inplace_edit';
			case 'gp':
				return 'global_post';
		}
		return $key;
	}

	private static function decompressed_value( $value ) {
		return $value;
	}

	/**
	 * @param string $key
	 * @param string $value
	 * @return void
	 */
	public static function set_get_param( $key, $value ) {
		self::maybe_initialize();
		$get         = self::$instance->get( 'get', array() );
		$get[ $key ] = $value;
		self::set_initial_value( 'get', $get );
	}

	/**
	 * @return string
	 */
	private static function get_encryption_secret() {
		$secret_key = get_option( 'frm_form_state_key' );

		// If we already have the secret, send it back.
		if ( false !== $secret_key ) {
			return base64_decode( $secret_key ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_decode
		}

		// We don't have a secret, so let's generate one.
		$secret_key = is_callable( 'sodium_crypto_secretbox_keygen' ) ? sodium_crypto_secretbox_keygen() : wp_generate_password( 32, true, true );
		add_option( 'frm_form_state_key', base64_encode( $secret_key ) ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode

		return $secret_key;
	}
}
