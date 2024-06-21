<?php

/**
 * @since 2.0
 */
class FrmRegShortcodesController {

	/**
	 * Get the HTML for a login form
	 *
	 * @since 2.0
	 *
	 * @param array $atts - User-defined attributes
	 *
	 * @return string
	 */
	public static function do_login_form_shortcode( $atts ) {
		$login_form = new FrmRegLoginForm( $atts );

		$content = self::get_login_form_html( $login_form );

		return $content;
	}

	/**
	 * Get the login form HTML
	 *
	 * @since 2.0
	 *
	 * @param FrmRegLoginForm $login_form
	 *
	 * @return string
	 */
	private static function get_login_form_html( $login_form ) {
		if ( $login_form->get_style() ) {
			$login_form->load_formidable_css();
		}

		if ( is_user_logged_in() ) {
			// Show Logout link if user is logged-in
			$logout_url = wp_logout_url( $login_form->get_logout_redirect() );
			$content    = '<a href="' . esc_url( $logout_url ) . '" class="frm_logout_link" >' . $login_form->get_log_out_label() . '</a>';
		} else {
			/**
			 * @since 2.09 Added do_action( 'login_enqueue_scripts' ) so that All in One Security can enqueue reCaptcha scripts.
			 */
			do_action( 'login_enqueue_scripts' );

			$login_form->load_login_form_js();

			$showing_error_messages = $login_form->get_show_messages() && count( $login_form->get_errors() ) > 0;
			$showing_messages       = $login_form->get_show_messages() && count( $login_form->get_messages() ) > 0;

			if ( $showing_error_messages || $showing_messages ) {
				$login_form->set_class( $login_form->get_class() . ' frm_has_message' );
			}

			ob_start();
			include FrmRegAppHelper::path() . '/views/login_form.php';
			$content = ob_get_contents();
			ob_end_clean();
		}

		return $content;
	}

	/**
	 * Add Login Form to shortcode builder
	 *
	 * @since 2.0
	 *
	 * @param array $shortcodes
	 *
	 * @return array
	 */
	public static function add_login_form_to_sc_builder( $shortcodes ) {
		$shortcodes['frm-login'] = array( 'name' => __( 'Login Form', 'frmreg' ), 'label' => __( 'Insert a Login Form', 'frmreg' ) );

		return $shortcodes;
	}

	/**
	 * Add login form options to shortcode builder
	 *
	 * @since 2.0
	 *
	 * @param array $opts
	 * @param string $shortcode
	 *
	 * @return array
	 */
	public static function get_login_form_sc_opts( $opts, $shortcode ) {
		if ( $shortcode != 'frm-login' ) {
			return $opts;
		}

		$opts = array(
			'label_username' => array(
				'val' => '',
				'label' => __( 'Username Label', 'frmreg' ),
				'type' => 'text',
			),
			'label_password' => array(
				'val' => '',
				'label' => __( 'Password Label', 'frmreg' ),
				'type' => 'text',
			),
			'label_remember' => array(
				'val' => '',
				'label' => __( 'Remember Me Label', 'frmreg' ),
				'type' => 'text',
			),
			'label_log_in' => array(
				'val' => '',
				'label' => __( 'Login Button Label', 'frmreg' ),
				'type' => 'text',
			),
			'label_log_out' => array(
				'val' => '',
				'label' => __( 'Logout Label', 'frmreg' ),
				'type' => 'text',
			),
			'layout'      => array(
				'val' => '',
				'label' => __( 'Display format', 'frmreg' ),
				'type' => 'select',
				'opts' => array(
					''     => __( 'Standard (vertical)', 'frmreg' ),
					'h'   => __( 'Inline (horizontal)', 'frmreg' ),
				),
			),
			'slide' => array(
				'val' => 1,
				'label' => __( 'Require a click to show the login form', 'frmreg' ),
			),
			'remember' => array(
				'val' => 0,
				'label' => __( 'Hide the "Remember Me" checkbox', 'frmreg' ),
			),
			'show_labels' => array(
				'val' => 0,
				'label' => __( 'Hide the username and password labels', 'frmreg' ),
			),
			'show_messages' => array(
				'val' => 0,
				'label' => __( 'Hide the login error messages', 'frmreg' ),
			),
			'username_placeholder' => array(
				'val' => '',
				'label' => __( 'Username Placeholder', 'frmreg' ),
				'type' => 'text',
			),
			'password_placeholder' => array(
				'val' => '',
				'label' => __( 'Password Placeholder', 'frmreg' ),
				'type' => 'text',
			),
			'class' => array(
				'val' => '',
				'label' => __( 'Formidable Style', 'frmreg' ),
				'type' => 'select',
				'opts' => self::style_options(),
			),
		);

		return $opts;
	}

	/**
	 * Return an array of style options for the shortcode builder
	 *
	 * @since 2.0
	 * @return array
	 */
	private static function style_options() {
		$style_options = array(
			'' => __( 'Use default Style', 'frmreg' ),
		);

		foreach ( FrmStylesController::get_style_opts() as $style ) {
			$style_options[ 'frm_style_' . $style->post_name ] = $style->post_title . ( empty( $style->menu_order ) ? '' : ' (' . __( 'default', 'frmreg' ) . ')' );
		}

		return $style_options;
	}

	/**
	 * Do the frm-reset-password shortcode
	 *
	 * @since 2.0
	 *
	 * @param array $atts
	 *
	 * @return string
	 */
	public static function do_reset_password_shortcode( $atts ) {
		if ( is_user_logged_in() ) {
			$content = self::show_lost_password_form( $atts );

		} else if ( isset( $_REQUEST['login'] ) && isset( $_REQUEST['key'] ) ) {
			$content = self::show_reset_password_form( $atts );

		} else {
			$content = self::show_lost_password_form( $atts );
		}

		return $content;
	}


	/**
	 * Show the lost password form
	 *
	 * @since 2.0
	 *
	 * @param array $atts
	 *
	 * @return string
	 */
	private static function show_lost_password_form( $atts ) {
		$lostpass_form = new FrmRegLostPWForm( $atts );

		return $lostpass_form->get_html();
	}

	/**
	 * Show the reset password form
	 *
	 * @since 2.0
	 *
	 * @param array $atts
	 *
	 * @return string
	 */
	private static function show_reset_password_form( $atts ) {
		$resetpass_form = new FrmRegResetPWForm( $atts );

		$content = $resetpass_form->get_html();

		return $content;
	}

	/**
	 * Generate the set password link for emails
	 *
	 * @since 2.0
	 *
	 * @param array $atts
	 *
	 * @return string
	 */
	public static function set_password_link( $atts ) {
		if ( ! isset( $atts['user_id'] ) || ! is_numeric( $atts['user_id'] ) ) {
			return '';
		}

		// Check user
		$user_data = get_userdata( $atts['user_id'] );

		if ( false === $user_data ) {
			return '';
		}

		// Set password reset key
		$key = get_password_reset_key( $user_data );

		if ( is_wp_error( $key ) || ! is_object( $user_data ) ) {
			return '';
		}

		$user_login = $user_data->user_login;

		// Generate reset link
		$link = site_url( "wp-login.php?action=rp&key=$key&login=" . rawurlencode( $user_login ), 'login' ) . "\r\n";

		return $link;
	}

	/**
	 * Get the full URL for a user's primary site
	 *
	 * @since 2.0
	 * @param array $atts
	 *
	 * @return string
	 */
	public static function do_primary_blog_shortcode( $atts ) {
		if ( ! isset( $atts['user_id'] ) || ! is_numeric( $atts['user_id'] ) ) {
			return site_url();
		}

		$primary_blog_id = get_user_meta( $atts['user_id'], 'primary_blog', true );

		$blog_details = get_blog_details( $primary_blog_id, false );

		if ( is_object( $blog_details ) ) {
			$url = $blog_details->domain . $blog_details->path;
		} else {
			$url = '';
		}

		return $url;
	}

	/**
	 * Make sure that only privileged users (who can edit other users) are allowed to use frm-set-password-link shortcodes.
	 * As of 2.12, these shortcodes are only allowed in email actions by default.
	 *
	 * @since 2.12
	 *
	 * @param mixed $post_content
	 * @return mixed
	 */
	public static function before_save_email_action( $post_content ) {
		if ( ! is_array( $post_content ) ) {
			return $post_content;
		}

		if ( current_user_can( 'edit_users' ) ) {
			// Only allow trusted users to use this shortcode.
			// On multi-site, only super admins have the edit_users capability.
			return $post_content;
		}

		$pattern = get_shortcode_regex( array( 'frm-set-password-link' ) );
		foreach ( $post_content as $key => $value ) {
			if ( ! is_string( $value ) ) {
				continue;
			}

			if ( false === strpos( $value, '[' ) || false === strpos( $value, 'frm-set-password-link' ) ) {
				continue;
			}

			$post_content[ $key ] = preg_replace_callback( "/$pattern/", '__return_empty_string', $value );
		}

		return $post_content;
	}
}
