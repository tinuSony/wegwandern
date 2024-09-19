<?php

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

/**
 * @since 3.0
 */
class FrmProFieldCheckbox extends FrmFieldCheckbox {

	protected function field_settings_for_type() {
		$settings = parent::field_settings_for_type();

		$settings['read_only']     = true;
		$settings['default_value'] = true;

		FrmProFieldsHelper::fill_default_field_display( $settings );
		return $settings;
	}

	/**
	 * @since 4.0
	 * @param array $args - Includes 'field', 'display', and 'values'
	 */
	public function show_extra_field_choices( $args ) {
		$field = $args['field'];
		if ( isset( $field['post_field'] ) && $field['post_field'] === 'post_category' ) {
			return;
		}

		$hide_other = false;
		include FrmProAppHelper::plugin_path() . '/classes/views/frmpro-fields/back-end/other-option.php';
		include FrmProAppHelper::plugin_path() . '/classes/views/frmpro-fields/back-end/checkbox-limit.php';
	}

	/**
	 * @since 4.06
	 *
	 * @param array $args - Includes 'field', 'display', and 'values'
	 */
	public function show_priority_field_choices( $args = array() ) {
		FrmProImages::show_image_choices( $args );
	}

	/**
	 * @since 4.02
	 */
	protected function extra_field_opts() {
		return array_merge(
			parent::extra_field_opts(),
			array(
				'limit_selections' => '',
				'min_selections'   => '',
				'image_options'    => 0,
				'hide_image_text'  => 0,
				'image_size'       => '',
			)
		);
	}

	/**
	 * @since 4.06
	 */
	protected function include_front_form_file() {
		$has_images  = FrmField::get_option( $this->field, 'image_options' );
		$is_post_cat = FrmField::get_option( $this->field, 'post_field' ) === 'post_category';

		if ( $has_images && ! $is_post_cat ) {
			return FrmProAppHelper::plugin_path() . '/classes/views/frmpro-fields/front-end/image-options.php';
		}

		return parent::include_front_form_file();
	}

	/**
	 * @since 4.02
	 */
	public function validate( $args ) {
		if ( is_array( $args['value'] ) ) {
			$this->trim_excess_values( $args );
		}
		return $this->validate_min_selections( $args );
	}

	private function validate_min_selections( $args ) {
		$min = intval( FrmField::get_option( $this->field, 'min_selections' ) );
		if ( $min < 1 ) {
			return array();
		}

		$value = array_filter( (array) $args['value'] );
		if ( ! $value ) {
			// If no checkbox is selected, let required field validation do its job.
			return array();
		}

		if ( count( $value ) >= $min ) {
			return array();
		}

		$error_msg = sprintf(
			self::get_error_messages()['min_selections'],
			$min,
			count( $value )
		);

		return array( 'field' . $args['id'] => $error_msg );
	}

	/**
	 * @since 4.02
	 */
	private function trim_excess_values( $args ) {

		$original_value = $args['value'];

		$this->maybe_trim_excess_values( $args['value'] );

		if ( $original_value != $args['value'] ) {
			// trimming has happened
			$this->maybe_unset_other_values( $args, $args['value'] );
			FrmEntriesHelper::set_posted_value( $this->field, $args['value'], $args );
		}
	}

	/**
	 * @since 4.02
	 */
	public function maybe_trim_excess_values( &$value ) {
		if ( ! is_array( $value ) ) {
			return;
		}

		$selections_limit = 0;
		if ( is_object( $this->field ) || is_array( $this->field ) ) {
			$selections_limit = FrmField::get_option( $this->field, 'limit_selections' );
		} elseif ( $this->field ) {
			$this->field = FrmField::getOne( $this->field );
			if ( $this->field ) {
				$selections_limit = FrmField::get_option_in_object( $this->field, 'limit_selections' );
			}
		}

		$selections_limit = absint( $selections_limit );
		if ( ! $selections_limit || count( $value ) <= $selections_limit ) {
			return;
		}

		$value = array_slice( $value, 0, $selections_limit, true );
	}

	/**
	 * @since 4.02
	 */
	private function maybe_unset_other_values( $args, $retained_values ) {
		$meta = FrmAppHelper::get_post_param( 'item_meta', array() );
		if ( ! empty( $args['parent_field_id'] ) ) {
			$meta = $meta[ $args['parent_field_id'] ][ $args['key_pointer'] ];
		}

		if ( empty( $meta['other'] ) ) {
			return;
		}

		$all_other_values = $meta['other'];
		if ( ! isset( $all_other_values[ $this->field_id ] ) ) {
			return;
		}

		if ( $this->unset_other_values( $all_other_values, $retained_values ) ) {
			if ( ! empty( $args['parent_field_id'] ) ) {
				unset( $_POST['item_meta'][ $args['parent_field_id'] ][ $args['key_pointer'] ]['other'] );
			} else {
				unset( $_POST['item_meta']['other'] );
			}
		}
	}

	/**
	 * @since 4.02
	 *
	 * Remove 'Other' text inputs from $_POST.
	 *
	 * @return bool Whether to unset all 'other' values. True if all 'other' values are empty, false otherwise.
	 */
	private function unset_other_values( &$all_other_values, $retained_values ) {
		$field_other_values = $all_other_values[ $this->field_id ];

		foreach ( $field_other_values as $key => $other_value ) {
			// Check if key exists; it suffices to use isset rather than array-key-exists since if the
			// key exists but the value is null for some reason, then it's not useful & can be removed.
			if ( isset( $retained_values[ $key ] ) ) {
				continue;
			}

			if ( isset( $all_other_values[ $this->field_id ][ $key ] ) ) {
				unset( $all_other_values[ $this->field_id ][ $key ] );
			}
		}

		// if it's now empty, obliterate it so that no traces of it.
		if ( empty( $all_other_values[ $this->field_id ] ) ) {
			unset( $all_other_values[ $this->field_id ] );
		}

		return empty( $all_other_values );
	}

	/**
	 * Format image options.
	 *
	 * @since 4.06
	 */
	protected function prepare_display_value( $value, $atts ) {
		$value = parent::prepare_display_value( $value, $atts );
		if ( FrmProImages::has_image_option_markup( $value ) ) {
			$value = '<div class="frm_has_image_options">' . $value . ' </div>';
		}
		return $value;
	}

	/**
	 * @since 6.8
	 *
	 * @param array|string $value
	 * @param array        $atts
	 * @return string
	 */
	public function get_display_value( $value, $atts = array() ) {
		$has_image_option_markup = FrmProImages::has_image_option_markup( $value );

		if ( $has_image_option_markup ) {
			add_filter( 'frm_allowed_form_input_html', 'FrmProImages::allow_image_option_html' );
		}

		$value = parent::get_display_value( $value, $atts );

		if ( $has_image_option_markup ) {
			remove_filter( 'frm_allowed_form_input_html', 'FrmProImages::allow_image_option_html' );
		}

		return $value;
	}

	/**
	 * When there are other options, $value will look something like array( 0 => '', 'other_2' => '' )
	 * This as getting saved in the database as a:0:{} when it should be left out entirely since it is empty.
	 * Instead of saving an empty array in the database, save nothing.
	 *
	 * @param array|string $value
	 * @param array        $atts
	 * @return array|string
	 */
	public function get_value_to_save( $value, $atts ) {
		if ( is_array( $value ) ) {
			$value = array_filter(
				$value,
				function ( $current ) {
					return '' !== $current;
				}
			);
			if ( 0 === count( $value ) ) {
				$value = '';
			}
		}
		return $value;
	}

	/**
	 * Gets error messages.
	 *
	 * @since 6.14
	 *
	 * @return array
	 */
	public static function get_error_messages() {
		return array(
			// Translators: %1$d: min selections, %2$d: actual selections count.
			'min_selections' => __( 'This field requires a minimum of %1$d selected options but only %2$d were submitted.', 'formidable-pro' ),
		);
	}
}
