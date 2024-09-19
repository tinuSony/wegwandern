<?php

if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

class FrmProAddressesController extends FrmProComboFieldsController {

	/**
	 * @since 6.11
	 *
	 * @var array|null Country codes indexed by country name. This is stored when maybe_define_country_codes is called the first time.
	 */
	private static $country_codes;

	/**
	 * @param array $field
	 * @param array $atts
	 * @return void
	 */
	public static function show_in_form( $field, $field_name, $atts ) {
		$errors  = isset( $atts['errors'] ) ? $atts['errors'] : array();
		$html_id = $atts['html_id'];

		$defaults = self::empty_value_array();
		self::fill_values( $field['value'], $defaults );
		self::fill_values( $field['default_value'], $defaults );

		$sub_fields = self::get_sub_fields( $field );

		include FrmProAppHelper::plugin_path() . '/classes/views/combo-fields/input.php';
	}

	public static function add_optional_class( $class, $field ) {
		$class .= ' frm_optional';
		return $class;
	}

	public static function get_sub_fields( $field ) {
		$fields = array(
			'line1' => array(
				'type'    => 'text',
				'classes' => '',
				'label'   => 1,
				'atts'    => array(
					'autocomplete' => 'address-line1',
				),
			),
			'line2' => array(
				'type'     => 'text',
				'classes'  => '',
				'optional' => true,
				'label'    => 1,
				'atts'     => array(
					'autocomplete' => 'address-line2',
				),
			),
			'city'  => array(
				'type'    => 'text',
				'classes' => 'frm_third frm_first',
				'label'   => 1,
				'atts'    => array(
					'autocomplete' => 'address-level2',
				),
			),
			'state' => array(
				'type'    => 'text',
				'classes' => 'frm_third',
				'label'   => 1,
				'atts'    => array(
					'autocomplete' => 'address-level1',
				),
			),
			'zip'   => array(
				'type'    => 'text',
				'classes' => 'frm_third',
				'label'   => 1,
				'atts'    => array(
					'autocomplete' => 'postal-code',
				),
			),
		);

		if ( 'europe' === $field['address_type'] ) {
			$city_field = $fields['city'];
			unset( $fields['state'], $fields['city'] );
			$fields['city']            = $city_field;
			$fields['city']['classes'] = 'frm_third';
			$fields['zip']['classes'] .= ' frm_first';
		}

		if ( $field['address_type'] === 'us' ) {
			$fields['state']['type']    = 'select';
			$fields['state']['options'] = FrmFieldsHelper::get_us_states();
		} elseif ( $field['address_type'] !== 'generic' ) {
			$fields['country'] = array(
				'type'    => 'select',
				'classes' => '',
				'label'   => 1,
				'options' => FrmFieldsHelper::get_countries(),
				'atts'    => array(
					'autocomplete' => 'country-name',
				),
			);
		}

		// Include the placeholder with the sub field.
		foreach ( $fields as $name => $f ) {
			if ( isset( $field['placeholder'] ) && isset( $field['placeholder'][ $name ] ) ) {
				$fields[ $name ]['placeholder'] = $field['placeholder'][ $name ];
			}
		}

		/**
		 * Filter sub fields so an Address field can be customized.
		 *
		 * @since 5.2.06
		 *
		 * @param array $fields
		 * @param array $field
		 */
		$fields = apply_filters( 'frm_address_sub_fields', $fields, $field );

		return $fields;
	}

	/**
	 * @param array $headings
	 * @param array $atts
	 * @return array
	 */
	public static function add_csv_columns( $headings, $atts ) {
		if ( $atts['field']->type === 'address' ) {
			$values = self::empty_value_array();

			foreach ( $values as $heading => $value ) {
				$label = self::get_field_label( $atts['field'], $heading );
				$headings[ $atts['field']->id . '_' . $heading ] = strip_tags( $label );
			}
		}
		return $headings;
	}

	/**
	 * @return array Empty address data to use as defaults.
	 */
	public static function empty_value_array() {
		/**
		 * @since 5.2.07
		 *
		 * @param array $empty_value_array array of empty address data.
		 */
		return apply_filters(
			'frm_address_empty_value_array',
			array(
				'line1'   => '',
				'line2'   => '',
				'city'    => '',
				'state'   => '',
				'zip'     => '',
				'country' => '',
			)
		);
	}

	/**
	 * Get the label for the CSV
	 *
	 * @since 2.0.23
	 *
	 * @param string $field_name
	 * @return string
	 */
	private static function get_field_label( $field, $field_name ) {
		$default_labels            = self::default_labels();
		$descriptions              = array_keys( $default_labels );
		$default_labels['line1']   = __( 'Line 1', 'formidable-pro' );
		$default_labels['line2']   = __( 'Line 2', 'formidable-pro' );
		$default_labels['country'] = __( 'Country', 'formidable-pro' );

		$label = isset( $default_labels[ $field_name ] ) ? $default_labels[ $field_name ] : '';
		if ( in_array( $field_name, $descriptions, true ) ) {
			$saved_label = FrmField::get_option( $field, $field_name . '_desc' );
			if ( $saved_label ) {
				$label = $saved_label;
			}
		}

		if ( ! $label ) {
			$label = $field_name;
		}

		$label = $field->name . ' - ' . $label;

		return $label;
	}

	/**
	 * @return array
	 */
	private static function default_labels() {
		return array(
			'line1'   => '',
			'line2'   => '',
			'city'    => __( 'City', 'formidable-pro' ),
			'state'   => __( 'State/Province', 'formidable-pro' ),
			'zip'     => __( 'Zip/Postal', 'formidable-pro' ),
			'country' => __( 'Country', 'formidable-pro' ),
		);
	}

	/**
	 * Maps Country name to Country code.
	 *
	 * @since 6.11
	 *
	 * @param string $country Country name.
	 * @return string $country_code Country code.
	 */
	public static function get_country_code( $country ) {
		self::maybe_define_country_codes();
		return isset( self::$country_codes[ $country ] ) ? self::$country_codes[ $country ] : '';
	}

	/**
	 * @since 6.11
	 *
	 * @return void
	 */
	private static function maybe_define_country_codes() {
		if ( isset( self::$country_codes ) ) {
			return;
		}

		self::$country_codes = array(
			'Afghanistan'                                  => 'AF',
			'Aland Islands'                                => 'AX',
			'Albania'                                      => 'AL',
			'Algeria'                                      => 'DZ',
			'American Samoa'                               => 'AS',
			'Andorra'                                      => 'AD',
			'Angola'                                       => 'AO',
			'Anguilla'                                     => 'AI',
			'Antarctica'                                   => 'AQ',
			'Antigua and Barbuda'                          => 'AG',
			'Argentina'                                    => 'AR',
			'Armenia'                                      => 'AM',
			'Aruba'                                        => 'AW',
			'Australia'                                    => 'AU',
			'Austria'                                      => 'AT',
			'Azerbaijan'                                   => 'AZ',
			'Bahamas'                                      => 'BS',
			'Bahrain'                                      => 'BH',
			'Bangladesh'                                   => 'BD',
			'Barbados'                                     => 'BB',
			'Belarus'                                      => 'BY',
			'Belgium'                                      => 'BE',
			'Belize'                                       => 'BZ',
			'Benin'                                        => 'BJ',
			'Bermuda'                                      => 'BM',
			'Bhutan'                                       => 'BT',
			'Bolivia'                                      => 'BO',
			'Bonaire, Saint Eustatius and Saba'            => 'BQ',
			'Bosnia and Herzegovina'                       => 'BA',
			'Botswana'                                     => 'BW',
			'Bouvet Island'                                => 'BV',
			'Brazil'                                       => 'BR',
			'British Indian Ocean Territory'               => 'IO',
			'British Virgin Islands'                       => 'VG',
			'Brunei'                                       => 'BN',
			'Bulgaria'                                     => 'BG',
			'Burkina Faso'                                 => 'BF',
			'Burundi'                                      => 'BI',
			'Cambodia'                                     => 'KH',
			'Cameroon'                                     => 'CM',
			'Canada'                                       => 'CA',
			'Cape Verde'                                   => 'CV',
			'Cayman Islands'                               => 'KY',
			'Central African Republic'                     => 'CF',
			'Chad'                                         => 'TD',
			'Chile'                                        => 'CL',
			'China'                                        => 'CN',
			'Christmas Island'                             => 'CX',
			'Cocos Islands'                                => 'CC',
			'Colombia'                                     => 'CO',
			'Comoros'                                      => 'KM',
			'Cook Islands'                                 => 'CK',
			'Costa Rica'                                   => 'CR',
			'Croatia'                                      => 'HR',
			'Cuba'                                         => 'CU',
			'Curacao'                                      => 'CW',
			'Cyprus'                                       => 'CY',
			'Czech Republic'                               => 'CZ',
			'Democratic Republic of the Congo'             => 'CD',
			'Denmark'                                      => 'DK',
			'Djibouti'                                     => 'DJ',
			'Dominica'                                     => 'DM',
			'Dominican Republic'                           => 'DO',
			'East Timor'                                   => 'TL',
			'Ecuador'                                      => 'EC',
			'Egypt'                                        => 'EG',
			'El Salvador'                                  => 'SV',
			'Equatorial Guinea'                            => 'GQ',
			'Eritrea'                                      => 'ER',
			'Estonia'                                      => 'EE',
			'Ethiopia'                                     => 'ET',
			'Falkland Islands'                             => 'FK',
			'Faroe Islands'                                => 'FO',
			'Fiji'                                         => 'FJ',
			'Finland'                                      => 'FI',
			'France'                                       => 'FR',
			'French Guiana'                                => 'GF',
			'French Polynesia'                             => 'PF',
			'French Southern Territories'                  => 'TF',
			'Gabon'                                        => 'GA',
			'Gambia'                                       => 'GM',
			'Georgia'                                      => 'GE',
			'Germany'                                      => 'DE',
			'Ghana'                                        => 'GH',
			'Gibraltar'                                    => 'GI',
			'Greece'                                       => 'GR',
			'Greenland'                                    => 'GL',
			'Grenada'                                      => 'GD',
			'Guadeloupe'                                   => 'GP',
			'Guam'                                         => 'GU',
			'Guatemala'                                    => 'GT',
			'Guernsey'                                     => 'GG',
			'Guinea'                                       => 'GN',
			'Guinea-Bissau'                                => 'GW',
			'Guyana'                                       => 'GY',
			'Haiti'                                        => 'HT',
			'Heard Island and McDonald Islands'            => 'HM',
			'Honduras'                                     => 'HN',
			'Hong Kong'                                    => 'HK',
			'Hungary'                                      => 'HU',
			'Iceland'                                      => 'IS',
			'India'                                        => 'IN',
			'Indonesia'                                    => 'ID',
			'Iran'                                         => 'IR',
			'Iraq'                                         => 'IQ',
			'Ireland'                                      => 'IE',
			'Isle of Man'                                  => 'IM',
			'Israel'                                       => 'IL',
			'Italy'                                        => 'IT',
			'Ivory Coast'                                  => 'CI',
			'Jamaica'                                      => 'JM',
			'Japan'                                        => 'JP',
			'Jersey'                                       => 'JE',
			'Jordan'                                       => 'JO',
			'Kazakhstan'                                   => 'KZ',
			'Kenya'                                        => 'KE',
			'Kiribati'                                     => 'KI',
			'Kosovo'                                       => 'XK',
			'Kuwait'                                       => 'KW',
			'Kyrgyzstan'                                   => 'KG',
			'Laos'                                         => 'LA',
			'Latvia'                                       => 'LV',
			'Lebanon'                                      => 'LB',
			'Lesotho'                                      => 'LS',
			'Liberia'                                      => 'LR',
			'Libya'                                        => 'LY',
			'Liechtenstein'                                => 'LI',
			'Lithuania'                                    => 'LT',
			'Luxembourg'                                   => 'LU',
			'Macao'                                        => 'MO',
			'Macedonia'                                    => 'MK',
			'Madagascar'                                   => 'MG',
			'Malawi'                                       => 'MW',
			'Malaysia'                                     => 'MY',
			'Maldives'                                     => 'MV',
			'Mali'                                         => 'ML',
			'Malta'                                        => 'MT',
			'Marshall Islands'                             => 'MH',
			'Martinique'                                   => 'MQ',
			'Mauritania'                                   => 'MR',
			'Mauritius'                                    => 'MU',
			'Mayotte'                                      => 'YT',
			'Mexico'                                       => 'MX',
			'Micronesia'                                   => 'FM',
			'Moldova'                                      => 'MD',
			'Monaco'                                       => 'MC',
			'Mongolia'                                     => 'MN',
			'Montenegro'                                   => 'ME',
			'Montserrat'                                   => 'MS',
			'Morocco'                                      => 'MA',
			'Mozambique'                                   => 'MZ',
			'Myanmar'                                      => 'MM',
			'Namibia'                                      => 'NA',
			'Nauru'                                        => 'NR',
			'Nepal'                                        => 'NP',
			'Netherlands'                                  => 'NL',
			'New Caledonia'                                => 'NC',
			'New Zealand'                                  => 'NZ',
			'Nicaragua'                                    => 'NI',
			'Niger'                                        => 'NE',
			'Nigeria'                                      => 'NG',
			'Niue'                                         => 'NU',
			'Norfolk Island'                               => 'NF',
			'North Korea'                                  => 'KP',
			'Northern Mariana Islands'                     => 'MP',
			'Norway'                                       => 'NO',
			'Oman'                                         => 'OM',
			'Pakistan'                                     => 'PK',
			'Palau'                                        => 'PW',
			'Palestinian Territory'                        => 'PS',
			'Panama'                                       => 'PA',
			'Papua New Guinea'                             => 'PG',
			'Paraguay'                                     => 'PY',
			'Peru'                                         => 'PE',
			'Philippines'                                  => 'PH',
			'Pitcairn'                                     => 'PN',
			'Poland'                                       => 'PL',
			'Portugal'                                     => 'PT',
			'Puerto Rico'                                  => 'PR',
			'Qatar'                                        => 'QA',
			'Republic of the Congo'                        => 'CG',
			'Reunion'                                      => 'RE',
			'Romania'                                      => 'RO',
			'Russia'                                       => 'RU',
			'Rwanda'                                       => 'RW',
			'Saint Barthelemy'                             => 'BL',
			'Saint Helena'                                 => 'SH',
			'Saint Kitts and Nevis'                        => 'KN',
			'Saint Lucia'                                  => 'LC',
			'Saint Martin'                                 => 'MF',
			'Saint Pierre and Miquelon'                    => 'PM',
			'Saint Vincent and the Grenadines'             => 'VC',
			'Samoa'                                        => 'WS',
			'San Marino'                                   => 'SM',
			'Sao Tome and Principe'                        => 'ST',
			'Saudi Arabia'                                 => 'SA',
			'Senegal'                                      => 'SN',
			'Serbia'                                       => 'RS',
			'Seychelles'                                   => 'SC',
			'Sierra Leone'                                 => 'SL',
			'Singapore'                                    => 'SG',
			'Sint Maarten'                                 => 'SX',
			'Slovakia'                                     => 'SK',
			'Slovenia'                                     => 'SI',
			'Solomon Islands'                              => 'SB',
			'Somalia'                                      => 'SO',
			'South Africa'                                 => 'ZA',
			'South Georgia and the South Sandwich Islands' => 'GS',
			'South Korea'                                  => 'KR',
			'South Sudan'                                  => 'SS',
			'Spain'                                        => 'ES',
			'Sri Lanka'                                    => 'LK',
			'Sudan'                                        => 'SD',
			'Suriname'                                     => 'SR',
			'Svalbard and Jan Mayen'                       => 'SJ',
			'Swaziland'                                    => 'SZ',
			'Sweden'                                       => 'SE',
			'Switzerland'                                  => 'CH',
			'Syria'                                        => 'SY',
			'Taiwan'                                       => 'TW',
			'Tajikistan'                                   => 'TJ',
			'Tanzania'                                     => 'TZ',
			'Thailand'                                     => 'TH',
			'Togo'                                         => 'TG',
			'Tokelau'                                      => 'TK',
			'Tonga'                                        => 'TO',
			'Trinidad and Tobago'                          => 'TT',
			'Tunisia'                                      => 'TN',
			'Turkey'                                       => 'TR',
			'Turkmenistan'                                 => 'TM',
			'Turks and Caicos Islands'                     => 'TC',
			'Tuvalu'                                       => 'TV',
			'U.S. Virgin Islands'                          => 'VI',
			'Uganda'                                       => 'UG',
			'Ukraine'                                      => 'UA',
			'United Arab Emirates'                         => 'AE',
			'United Kingdom'                               => 'GB',
			'United States'                                => 'US',
			'United States Minor Outlying Islands'         => 'UM',
			'Uruguay'                                      => 'UY',
			'Uzbekistan'                                   => 'UZ',
			'Vanuatu'                                      => 'VU',
			'Vatican'                                      => 'VA',
			'Venezuela'                                    => 'VE',
			'Vietnam'                                      => 'VN',
			'Wallis and Futuna'                            => 'WF',
			'Western Sahara'                               => 'EH',
			'Yemen'                                        => 'YE',
			'Zambia'                                       => 'ZM',
			'Zimbabwe'                                     => 'ZW',
		);

		/**
		 * Allows modifying the list of country name to code mapping.
		 *
		 * @since 6.11
		 *
		 * @param array $country_codes Array of country name to code mapping.
		 */
		self::$country_codes = apply_filters( 'frm_country_codes', self::$country_codes );
	}

	/**
	 * @deprecated 3.0
	 * @codeCoverageIgnore
	 */
	public static function display_value( $value ) {
		_deprecated_function( __FUNCTION__, '3.0', 'FrmProFieldAddress->get_display_value' );
		$field_obj = FrmFieldFactory::get_field_type( 'address' );
		return $field_obj->get_display_value( $value );
	}
}
