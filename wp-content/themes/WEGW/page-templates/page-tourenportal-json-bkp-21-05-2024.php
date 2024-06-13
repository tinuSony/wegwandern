<?php
/**
 * Template Name: Tourenportal Json Template
 *
 * @package wegwandern
 */

get_header();

global $post;
$post_thumb        = get_the_post_thumbnail_url( $post->ID, 'full' );
$tourenportal_page = get_field( 'select_tourenportal_page', 'option' );
$tourenportal_id   = url_to_postid( $tourenportal_page );
$current_url       = $post->ID;
$container_cls     = 'container';
if ( $current_url === $tourenportal_id ) {
	$container_cls = 'touren_container';
}
$filter_button_text    = get_field( 'filter_button_text' );
$karte_button_text     = get_field( 'karte_button_text' );
$filter_reset_text     = get_field( 'filter_reset_text' );
$load_more_button_text = get_field( 'load_more_button_text' );
$ad_title              = get_field( 'ad_title' );
$ad_placement_pos_mark = get_field( 'ads_position' );
$teaser_1_short_title  = get_field( 'teaser_1_short_title' );
$teaser_1_title        = get_field( 'teaser_1_title' );
$teaser_1_image        = get_field( 'teaser_1_image' );
$teaser_1_redirect_url = get_field( 'teaser_1_redirect_url' );
$teaser_2_short_title  = get_field( 'teaser_2_short_title' );
$teaser_2_title        = get_field( 'teaser_2_title' );
$teaser_2_image        = get_field( 'teaser_2_image' );
$teaser_2_redirect_url = get_field( 'teaser_2_redirect_url' );
$ad_script_desktop     = '';
$ad_script_tablet      = '';
$ad_script_mobile      = '';

$custom_ad_desktop = '';
$custom_ad_tablet  = '';
$custom_ad_mobile  = '';

if ( have_rows( 'manage_ad_scripts', 'option' ) ) :
	while ( have_rows( 'manage_ad_scripts', 'option' ) ) :
		the_row();

		$desktop_ad_scripts = get_sub_field( 'desktop_ad_scripts', 'option' );
		$tablet_ad_scripts  = get_sub_field( 'tablet_ad_scripts', 'option' );
		$mobile_ad_scripts  = get_sub_field( 'mobile_ad_scripts', 'option' );

		foreach ( $desktop_ad_scripts as $desktop_ad ) {
			if ( $desktop_ad['ad_size'] = '300×600' ) {
				$ad_script_desktop = $desktop_ad['ad_script'];
			}
		}

		foreach ( $tablet_ad_scripts as $tablet_ad ) {
			if ( $tablet_ad['ad_size'] = '300×250' ) {
				$ad_script_tablet = $tablet_ad['ad_script'];
			}
		}

		foreach ( $mobile_ad_scripts as $mob_ad ) {
			if ( $mob_ad['ad_size'] = '300×250' ) {
				$ad_script_mobile = $mob_ad['ad_script'];
			}
		}

	endwhile;
endif;
if ( $ad_script_desktop != '' ) {
	$custom_ad_desktop = '<div class="ad-section-wrap header-ad-desktop-wrapper">
		<p>' . $ad_title . '</p>
		<div class="ad-section">' . $ad_script_desktop . '</div>
	</div>';
}

if ( $ad_script_tablet != '' ) {
	$custom_ad_tablet = '<div class="ad-section-wrap header-ad-tablet-wrapper">
		<p>' . $ad_title . '</p>
		<div class="ad-section">' . $ad_script_tablet . '</div>
	</div>';
}

if ( $ad_script_mobile != '' ) {
	$custom_ad_mobile = '<div class="ad-section-wrap header-ad-mobile-wrapper">
		<p>' . $ad_title . '</p>
		<div class="ad-section">' . $ad_script_mobile . '</div>
	</div>';
}
$current_logged_in_user = 0;
if ( is_user_logged_in() ) {
	$current_logged_in_user = wp_get_current_user()->ID;
}
?>

<main id="primary" class="site-main">
	<div class="touren_container">
		<section class="weg-map-main-wrapper">
			<div id="weg-map-popup" >
				<div id="weg-map-popup-inner-wrapper">
					<div class="close_map" onclick="closeElement(this)"><span class="close_map_icon"></span></div>
					<div id="cesiumContainer" class="cesiumContainer"></div>
					<div class="map_currentLocation"></div>
					<div id="threeD" class="map_3d"></div>
					<div id="map_direction" class="map_direction"></div>
					<div class="botom_layer_icon">
						<div class="accordion" >
							<div class="weg-layer-wrap layer_head">
								<div class="weg-layer-text">Hintergrund</div>
							</div>
						</div>
						<div class="panel">
							<div class="weg-layer-wrap activeLayer" id="colormap_view_section">
								<div class="weg-layer-text">Karte farbig</div>
							</div>
							<div class="weg-layer-wrap" id="aerial_view_section">
								<div class="weg-layer-text">Luftbild</div>
							</div>
							<div class="weg-layer-wrap" id="grey_view_section">
								<div class="weg-layer-text">Karte SW</div>
							</div>
						</div>
					</div>
					<div class="copyRight">
						<a target="_blank" href="https://www.swisstopo.admin.ch/de/home.html">© swisstopo</a>
					</div>
					<div class="map_filter">
						<div class="map_filter_inner_wrapper">
							<div class="accordion"><?php echo __( 'Karteninformationen', 'wegwandern' ); ?></div>
							<div class="panel">
								<div class="fc_check_wrap">
									<label class="check_wrapper"><?php echo __( 'ÖV-Haltestellen', 'wegwandern' ); ?>
										<input type="checkbox" name="" id="transport_layer_checkbox" value="">
										<span class="redmark"></span>
									</label>
									<label class="check_wrapper"><?php echo __( 'Gesperrte Wanderwege', 'wegwandern' ); ?>
										<input type="checkbox" name="" id="closure_hikes_layer" value="">
										<span class="redmark"></span>
									</label>
									<label class="check_wrapper"><?php echo __( 'Hangneigungen über 30°', 'wegwandern' ); ?>
										<input type="checkbox" id="slope_30_layer" name="" value="">
										<span class="redmark"></span>
									</label>
									<label class="check_wrapper"><?php echo __( 'Wildruhezonen', 'wegwandern' ); ?>
										<input type="checkbox" id="wildlife_layer" name="" value="">
										<span class="redmark"></span>
									</label>
									<label class="check_wrapper"><?php echo __( 'Wegpunkte WegWandern.ch', 'wegwandern' ); ?>
										<input type="checkbox" id="waypoints_layer" name="" value="">
										<span class="redmark"></span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="detailPgPopup"><div id="detailPgPopupContent"></div></div>
				<div class="elevationGraph"></div>	
				<div class="options" id="mapOptions"></div>
				<div id="info"></div>
				<div class="popover" id="transport-layer-info-popup">
					<div class="arrow"></div>
					<div class="popover-title">
						<div class="popup-title"><?php echo __( 'Objekt Informationen', 'wegwandern' ); ?></div>
						<div class="popup-buttons">
							<!-- <button class="fa-print" title="Print"></button> -->
							<!-- <button class="fa-minus" title="Minimize"></button> -->
							<button class="fa fa-remove" title="Close" onclick="closeTransportLayerPopup()"></button>
						</div>
					</div>
					<div class="popover-content">
						<div class="popover-scope">
							<div class="popover-binding">
								<div class="htmlpopup-container" id="tl-content-area">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mapView hide" id="map-resp" style="width: 100%; height: 500px;">
				<div class="close_map" onclick="closeElementMapResp(this)">
					<span class="close_map_icon"></span>
				</div>
				<div class="filter-btn" id="weg-results-filter-btn" onclick="openFilter()">
					<span class="filter-btn-icon"></span>
					<span class="filter-btn-text"><?php echo $filter_button_text; ?></span>
				</div>
				<div class="map_main_search search" style="">
					<div class="map_search_map_wrapper">
						<span class="filter_search-icon"></span>
						<input type="text" class="map_search" placeholder="Ort, Region" value="" name="s">
						<span class="map_main_search_close hide"></span>
					</div>
				</div>
				<div id="cesiumContainerResp" class="cesiumContainer"></div>
				<div class="map_currentLocation"></div>
				<div id="threeD" class="map_3d"></div>
				<div id="map_direction" class="map_direction"></div>
				<div class="botom_layer_icon">
					<div class="accordion" >
						<div class="weg-layer-wrap layer_head">
							<div class="weg-layer-text">Hintergrund</div>
						</div>
					</div>
					<div class="panel">
						<div class="weg-layer-wrap activeLayer" id="colormap_view_section">
							<div class="weg-layer-text">Karte farbig</div>
						</div>
						<div class="weg-layer-wrap" id="aerial_view_section">
							<div class="weg-layer-text">Luftbild</div>
						</div>
						<div class="weg-layer-wrap" id="grey_view_section">
							<div class="weg-layer-text">Karte SW</div>
						</div>
					</div>
				</div>
				<div class="copyRight">
					<a target="_blank" href="https://www.swisstopo.admin.ch/de/home.html">© swisstopo</a>
				</div>
				<div class="map_filter">
					<div class="map_filter_inner_wrapper">
						<div class="accordion"><?php echo __( 'Karteninformationen', 'wegwandern' ); ?></div>
						<div class="panel">
							<div class="fc_check_wrap">
								<label class="check_wrapper"><?php echo __( 'ÖV-Haltestellen', 'wegwandern' ); ?>
									<input type="checkbox" name="" id="transport_layer_checkbox" value="">
									<span class="redmark"></span>
								</label>
								<label class="check_wrapper"><?php echo __( 'Gesperrte Wanderwege', 'wegwandern' ); ?>
									<input type="checkbox" id="closure_hikes_layer" name="" value="">
									<span class="redmark"></span>
								</label>
								<label class="check_wrapper"><?php echo __( 'Hangneigungen über 30°', 'wegwandern' ); ?>
									<input type="checkbox" id="slope_30_layer" name="" value="">
									<span class="redmark"></span>
								</label>
								<label class="check_wrapper "><?php echo __( 'Wildruhezonen', 'wegwandern' ); ?>
									<input type="checkbox" id="wildlife_layer" name="" value="">
									<span class="redmark"></span>
								</label>
								<label class="check_wrapper hide">
									<?php echo __( 'Wegpunkte WegWandern.ch', 'wegwandern' ); ?>
									<input type="checkbox" name="" value="">
									<span class="redmark"></span>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div id="info"></div>
				<div class="popover" id="transport-layer-info-popup">
					<div class="arrow"></div>
					<div class="popover-title">
						<div class="popup-title"><?php echo __( 'Objekt Informationen', 'wegwandern' ); ?></div>
						<div class="popup-buttons">
							<!-- <button class="fa-print" title="Print"></button> -->
							<!-- <button class="fa-minus" title="Minimize"></button> -->
							<button class="fa fa-remove" title="Close" onclick="closeTransportLayerPopup()"></button>
						</div>
					</div>
					<div class="popover-content">
						<div class="popover-scope">
							<div class="popover-binding">
								<div class="htmlpopup-container" id="tl-content-area">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="ListView">
					<?php echo get_breadcrumb(); ?>
					<h1 class="page-title"><?php echo get_the_title(); ?></h1>
					<div class="ListHead">
						<div class="Listfilter">
							<div class="karte-btn" onclick="openMap()">
								<span class="karte-btn-icon"></span>
								<span class="karte-btn-text"><?php echo $karte_button_text; ?></span>
							</div>
							<div class="filter-btn" onclick="openFilter()">
								<span class="filter-btn-icon"></span>
								<span class="filter-btn-text"><?php echo $filter_button_text; ?></span>
							</div>
							<a class="filter_reset"><?php echo $filter_reset_text; ?></a>
						</div>
						<div class="ListSort" onclick="openDropdown(this)">
							<?php echo __( 'Sortieren', 'wegwandern' ); ?>
							<div class="sort_dropdown">
								<div class="sort_padding_dropdown">
									<div class="sort_dropdown_wrapper">
										<label class="check_wrapper_sort">
											<?php echo __( 'Längste zuerst', 'wegwandern' ); ?>
											<input type="checkbox" name="sort_large" class="sort-largest"/>
											<span class="redmark"></span>
										</label>
										<label class="check_wrapper_sort"><?php echo __( 'Kürzeste zuerst', 'wegwandern' ); ?>
											<input type="checkbox" name="sort_short" class="sort-shortest"/>
											<span class="redmark"></span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="ListHead mob">
						<div class="Listfilter">
							<div class="karte-btn" onclick="openMap()">
								<span class="karte-btn-icon"></span>
								<span class="karte-btn-text"><?php echo $karte_button_text; ?></span>
							</div>
							<div class="filter-btn" onclick="openFilter()">
								<span class="filter-btn-icon"></span>
								<span class="filter-btn-text"><?php echo $filter_button_text; ?></span>
							</div>
						</div>
						<div class=" list_sort_mob">
							<a class="filter_reset"><?php echo $filter_reset_text; ?></a>
							<div class="ListSort" onclick="openDropdown(this)">
								<?php echo __( 'Sortieren', 'wegwandern' ); ?>
								<div class="sort_dropdown">
									<div class="sort_padding_dropdown">
										<div class="sort_dropdown_wrapper">
											<label class="check_wrapper_sort">
												<?php echo __( 'Längste zuerst', 'wegwandern' ); ?>
												<input type="checkbox" name="sort_large" class="sort-largest">
												<span class="redmark"></span>
											</label>
											<label class="check_wrapper_sort">
												<?php echo __( 'Kürzeste zuerst', 'wegwandern' ); ?>
												<input type="checkbox" name="sort_short" class="sort-shortest">
												<span class="redmark"></span>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="ListSec">
						<div class="single-wander-wrappe-json" data-ad-title="<?php echo esc_attr( $ad_title ); ?>" data-ad-position="<?php echo esc_attr( $ad_placement_pos_mark ); ?>" data-logged-user="<?php echo $current_logged_in_user; ?>">
							<?php echo $custom_ad_desktop . $custom_ad_mobile . $custom_ad_tablet; ?>
							<div class="promo-section">
								<a href="<?php echo $teaser_1_redirect_url; ?>" class="teaser-wrap">
									<img src="<?php echo $teaser_1_image['sizes']['region-slider']; ?>" class="teaser-section">
									<div class="teaser_info">
										<div class="sub_title"><?php echo $teaser_1_short_title; ?></div>
										<div class="title"><?php echo $teaser_1_title; ?></div>
									</div>
								</a>
								<a href="<?php echo $teaser_2_redirect_url; ?>" class="teaser-wrap">
									<img src="<?php echo $teaser_2_image['sizes']['region-slider']; ?>" class="teaser-section">
									<div class="teaser_info">
										<div class="sub_title"><?php echo $teaser_2_short_title; ?></div>
										<div class="title"><?php echo $teaser_2_title; ?></div>
									</div>
								</a>
							</div>
							<a href="<?php echo $teaser_1_redirect_url; ?>" class="teaser-wrap teaser-responsive">
								<img src="<?php echo $teaser_1_image['sizes']['region-slider']; ?>" class="teaser-section">
								<div class="teaser_info">
									<div class="sub_title"><?php echo $teaser_1_short_title; ?></div>
									<div class="title"><?php echo $teaser_1_title; ?></div>
								</div>
							</a>
							<a href="<?php echo $teaser_2_redirect_url; ?>" class="teaser-wrap teaser-responsive"> 
								<img src="<?php echo $teaser_2_image['sizes']['region-slider']; ?>" class="teaser-section">
								<div class="teaser_info">
									<div class="sub_title"><?php echo $teaser_2_short_title; ?></div>
									<div class="title"><?php echo $teaser_2_title; ?></div>
								</div>
							</a>
							</div>
						</div>
						<div class="LoadMore" id="wanderung-loadmore" data-event="">
							<!-- @todo filter -->
							<span class="LoadMoreIcon"></span>
							<span class="LoadMoreText"><?php echo $load_more_button_text; ?></span>
						</div>
						<div id="loader-icon" class="hide"></div>
					</div>

					<div class="mapView" id="map_desktop" style="width: 100%; height: 500px;">
					<div class="close_map_section hide" onclick="closeFullScreen()">
						<span class="close_map_icon"></span>
					</div>
					<div class="FullScreen" onclick="showFullScreen()">
						<span class="FullScreenIcon"></span>
					</div>
					<div class="filter-btn hide" id="weg-results-filter-btn" onclick="openFilter()">
						<span class="filter-btn-icon"></span>
						<span class="filter-btn-text"><?php echo $filter_button_text; ?></span>
					</div>
					<div class="map_main_search search" style="">
						<div class="map_search_map_wrapper">
							<span class="filter_search-icon"></span>
							<input type="text" class="map_search" placeholder="Ort, Region" value="" name="s">
							<span class="map_main_search_close hide"></span>
						</div>
					</div>
					<div id="cesiumContainerDesktop" class="cesiumContainer"></div>
					<div class="map_currentLocation"></div>
					<div id="threeD" class="map_3d" ></div>
					<div id="map_direction"  class="map_direction" ></div>
					<div id="info"></div>
					<div class="popover" id="transport-layer-info-popup">
						<div class="arrow"></div>
						<div class="popover-title">
							<div class="popup-title"><?php echo __( 'Objekt Informationen', 'wegwandern' ); ?></div>
							<div class="popup-buttons">
								<!-- <button class="fa-print" title="Print"></button> -->
								<!-- <button class="fa-minus" title="Minimize"></button> -->
								<button class="fa fa-remove" title="Close" onclick="closeTransportLayerPopup()"></button>
							</div>
						</div>
						<div class="popover-content">
							<div class="popover-scope">
								<div class="popover-binding">
									<div class="htmlpopup-container" id="tl-content-area">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="botom_layer_icon">
						<div class="accordion" >
							<div class="weg-layer-wrap layer_head">
								<div class="weg-layer-text">Hintergrund</div>
							</div>
						</div>
						<div class="panel">
							<div class="weg-layer-wrap activeLayer" id="colormap_view_section">
								<div class="weg-layer-text">Karte farbig</div>
							</div>
							<div class="weg-layer-wrap" id="aerial_view_section">
								<div class="weg-layer-text">Luftbild</div>
							</div>
							<div class="weg-layer-wrap" id="grey_view_section">
								<div class="weg-layer-text">Karte SW</div>
							</div>
						</div>
						</div>
						<div class="copyRight">
							<a target="_blank" href="https://www.swisstopo.admin.ch/de/home.html">© swisstopo</a>
						</div>
						<div class="map_filter">
							<div class="map_filter_inner_wrapper">
								<div class="accordion"><?php echo __( 'Karteninformationen', 'wegwandern' ); ?></div>
								<div class="panel">
									<div class="fc_check_wrap">
										<label class="check_wrapper"><?php echo __( 'ÖV-Haltestellen', 'wegwandern' ); ?>
											<input type="checkbox" name="" id="transport_layer_checkbox" value="">
											<span class="redmark"></span>
										</label>
										<label class="check_wrapper"><?php echo __( 'Gesperrte Wanderwege', 'wegwandern' ); ?>
											<input type="checkbox" name="" id="closure_hikes_layer" value="">
											<span class="redmark"></span>
										</label>
										<label class="check_wrapper"><?php echo __( 'Hangneigungen über 30°', 'wegwandern' ); ?>
											<input type="checkbox" id="slope_30_layer" name="" value="">
											<span class="redmark"></span>
										</label>
										<label class="check_wrapper"><?php echo __( 'Wildruhezonen', 'wegwandern' ); ?>
											<input type="checkbox" id="wildlife_layer" name="" value="">
											<span class="redmark"></span>
										</label>
										<label class="check_wrapper hide"><?php echo __( 'Wegpunkte WegWandern.ch', 'wegwandern' ); ?>
											<input type="checkbox" name="" value="">
											<span class="redmark"></span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="popup"><div id="popupContent"></div></div>
				</div>
		</section>
	</div>
</main>

<?php
// get_sidebar();
get_footer();
