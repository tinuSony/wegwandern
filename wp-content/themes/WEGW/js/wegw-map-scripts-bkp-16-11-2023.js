var json_gpx_data_single_hike_detail;
var gpx_file_single_hike_detail;
var openPopupMap = () => { };
var openPopupMapDetailPage = () => { };
var openMap = () => { };
var showFullScreen = () => { };
var closeFullScreen = () => { };
var close_map_popup = () => { };
var close_map_popupCluster = () => { };
var closeElementDetailPage = () => {};
(function ($) {
    const swisstopo_layer = 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg';
    const transportLayer = 'https://wmts.geo.admin.ch/1.0.0/ch.bav.haltestellen-oev/default/current/3857/{z}/{x}/{y}.png';
    const slop30Layer = 'https://wmts100.geo.admin.ch/1.0.0/ch.swisstopo.hangneigung-ueber_30/default/current/3857/{z}/{x}/{y}.png';
    const wildlifeLayer = 'https://wmts100.geo.admin.ch/1.0.0/ch.bafu.wrz-wildruhezonen_portal/default/current/3857/{z}/{x}/{y}.png';
    let closureHikesLayer;
    /* Map views */
    const greyView = 'https://wmts100.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-grau/default/current/3857/{z}/{x}/{y}.jpeg';
    const aerialView = 'https://wmts100.geo.admin.ch/1.0.0/ch.swisstopo.swissimage/default/current/3857/{z}/{x}/{y}.jpeg';

    const transportLayerPopupInfo = $('#transport-layer-info-popup');
    const url_path = "../../wp-content/themes/WEGW/img/icons";
    // Style for the clusters
    var hikeDescriptionLetterCount = 197;
    var styleCache = {}, clusters;    
    var gpx_file;
    var json_gpx_data;
    var currentDiv;
    let mapLayer;
    var event_icon;
    let event_icon_markers;
    let event_icon_markers_location_plot;
    var source;
    var clusterSource;
    var clusterLayer;
    var markers;
    let styleEventMarker;
    let popup_display_element;
    let popup;
    var mapTransportLayer, mapTransportLayerCluster;
    var mapclosurHikeLayer, mapclosurHikeLayerCluster;  
    var mapSlopeLayer, mapSlopeLayerCluster;  
    var mapWildLifeLayer, mapWildLifeLayerCluster;  
    var mapgreyView, mapaerialView, mapswisstopo_layer;
    const app = {

        init: function () {
            transportLayerPopupInfo.hide();  
            app._initLayer(swisstopo_layer);
            openPopupMap = app._openPopupMap;
            openPopupMapDetailPage = app._openPopupMapDetailPage;
            openMap = app._openMap;
            showFullScreen = app._showFullScreen;
            closeFullScreen = app._closeFullScreen;
            close_map_popup = app._close_map_popup;
            close_map_popupCluster = app._close_map_popupCluster;
            closeElementDetailPage = app._closeElementDetailPage;
         
            var zoom = 5;
            if(jQuery('.mapView').length > 0){
                zoom = 5;
            }
            if(jQuery('.map_region').length > 0){
                zoom = 9.5;
            }
            /**tournportal page desktop view map initialization and for region page too */
            mapDesk = new ol.Map({
                controls: ol.control.defaults.defaults(),
                target: 'map_desktop',
                view: new ol.View({
                zoom: zoom, 
                opacity: 1.0,
                minZoom: 8,
                center: ol.proj.fromLonLat([7.78949890, 46.93998300]),
                }),
                layers: [app._initLayer(swisstopo_layer)]
            }); 

            /**tournportal page desktop view cluster rendering */
            if(jQuery('#map_desktop').length > 0){
                app._placeCoord(mapDesk, 'map_desktop');
                jQuery('#map_desktop #transport-layer-info-popup').css('display','none');
                jQuery('#map_desktop .ol-attribution.ol-unselectable.ol-control').removeClass('ol-collapsed');
            }

            /** single hike page map rendering */
            if(jQuery('#weg-map-popup-detail-page-wrapper').length > 0){
                if(json_gpx_data_single_hike_detail === undefined){
                    app._initMap([900000, 5900000], 12, ol.control.defaults.defaults().extend([new ol.control.FullScreen()]), 'weg-map-popup-detail-page-wrapper'); 
                    document.getElementById('mapOptions').innerHTML = "<h2>Please upload the GPX file.</h2>";
                    app._layerFunction(map, 'weg-map-popup-detail-page-wrapper','weg-map-popup-detail-page-wrapper', null);
                }else{
                    gpx_file = gpx_file_single_hike_detail;
                    app._gpxData(json_gpx_data_single_hike_detail, 'weg-map-popup-detail-page-wrapper','weg-map-popup-detail-page-wrapper');
                }
              
            }     
        },
        _showFullScreen : function(){
            /**show full screen map */
             jQuery("#map_desktop").addClass("fullscreenView");
             jQuery("#map_desktop .close_map_section").removeClass('hide');
             jQuery("#map_desktop .FullScreen").addClass('hide');
             jQuery("#map_desktop #weg-results-filter-btn").removeClass('hide');
             mapDesk.updateSize();
        },
        _closeFullScreen : function(){
            /**close full screen map */
            jQuery("#map_desktop .close_map_section").addClass('hide');
            jQuery("#map_desktop #weg-results-filter-btn").addClass('hide');
            jQuery("#map_desktop .FullScreen").removeClass('hide');
            jQuery("#map_desktop").removeClass("fullscreenView");
        },
        _openMap : function(){
            /**tournportal page responsive view map initialization */
            jQuery('#map-resp').addClass('karteClick');
            jQuery('#map-resp').removeClass('hide');
            jQuery("#map-resp .ol-viewport").addClass('hide');
             
            mapRes = new ol.Map({
                controls: ol.control.defaults.defaults().extend([new ol.control.FullScreen()]),
                target: 'map-resp',
                view: new ol.View({
                zoom: 8, 
                opacity: 1.0,
                minZoom: 8,
                center: ol.proj.fromLonLat([7.78949890, 46.93998300]),
                }),
                layers: [app._initLayer(swisstopo_layer)]
            }); 

             /**tournportal page responsive view cluster rendering */
            app._placeCoord(mapRes, 'map-resp');
            jQuery('#map_resp #transport-layer-info-popup').css('display','none');
            jQuery('#map_resp .ol-attribution.ol-unselectable.ol-control').removeClass('ol-collapsed');
            jQuery("#map-resp .ol-zoom .ol-zoom-in").html("");
            jQuery("#map-resp .ol-zoom .ol-zoom-out").html("");
            jQuery("#map-resp .ol-rotate .ol-rotate-reset .ol-compass").html("");
        },
        _openPopupMap: function(ele) {
             /**elevation profile(gpx) map view with */
                var hikeID = jQuery(ele).attr("data-hikeid");

                jQuery.ajax({
                    type: 'POST',
                    url: ajax_object.ajax_url,
                    data: {
                        action : 'wegwandern_get_hike_gpx_file',
                        hike_id: hikeID
                    },
                    success: function(response) {
                        if (response) {
                            jQuery("#weg-map-popup").css("display", "block");
                            jQuery('#weg-map-popup #transport-layer-info-popup').css('display','none');
                            jQuery('body').addClass("weg_ele_popup_show");
                            jQuery("#weg-map-popup .ol-viewport").addClass("hide");
                            jQuery("#mapOptions").html("");

                            var parseJsonData = JSON.parse(response);
                            if( parseJsonData.gpx_file_name === "" ) { 
                                /**render map if gpx data is empty */
                                app._initMap([900000, 5900000], 12, ol.control.defaults.defaults().extend([new ol.control.FullScreen()]), 'weg-map-popup-inner-wrapper');
                                document.getElementById('mapOptions').innerHTML = "<h2>Please upload the GPX file.</h2>";
                                app._layerFunction(map, 'weg-map-popup-inner-wrapper', 'weg-map-popup', null);
                            } else {
                                json_gpx_data = JSON.parse( JSON.parse(response).json_gpx_data);
                                gpx_file = JSON.parse(response).gpx_file_name;
                                app._gpxData(json_gpx_data, 'weg-map-popup-inner-wrapper', 'weg-map-popup');
                            }

                            jQuery('#weg-map-popup .ol-attribution.ol-unselectable.ol-control').removeClass('ol-collapsed');
                            jQuery("#weg-map-popup .ol-zoom .ol-zoom-in").html("");
                            jQuery("#weg-map-popup .ol-zoom .ol-zoom-out").html("");
                            jQuery("#weg-map-popup .ol-rotate .ol-rotate-reset .ol-compass").html("");
                        }
                    }
                });
                
                jQuery("#weg-map-popup .ol-zoom .ol-zoom-in").html("");
                jQuery("#weg-map-popup .ol-zoom .ol-zoom-out").html("");
                jQuery("#weg-map-popup .ol-rotate .ol-rotate-reset .ol-compass").html("");

        },
        _closeElementDetailPage:function(element) {
            /** close map popup in detail hike page */
            jQuery('#weg-map-popup-full-detail-page').css("display", "none");
            jQuery('body').removeClass("weg_ele_popup_show");
            jQuery("#weg-map-popup-full-detail-page .ol-viewport").remove();
            jQuery(".popover").css("display", "none");
            /**insert the popup div in detail page when the map popup is closed */
            jQuery("<div id='detailPgPopup'><div id='detailPgPopupContent'></div></div>").insertAfter("#weg-map-popup-full-detail-page");
            
            if(jQuery('#weg-map-popup-detail-page-wrapper').length > 0){
                if(json_gpx_data_single_hike_detail === undefined){
                    app._initMap([900000, 5900000], 12, ol.control.defaults.defaults().extend([new ol.control.FullScreen()]), 'weg-map-popup-detail-page-wrapper'); 
                    document.getElementById('mapOptions').innerHTML = "<h2>Please upload the GPX file.</h2>";
                    app._layerFunction(map, 'weg-map-popup-detail-page-wrapper','weg-map-popup-detail-page-wrapper', null);
                }else{
                    gpx_file = gpx_file_single_hike_detail;
                    app._gpxData(json_gpx_data_single_hike_detail, 'weg-map-popup-detail-page-wrapper','weg-map-popup-detail-page-wrapper');
                }
                /* Popup for single hike page (not map popup)  */
                const container = document.getElementById('detailPgPopup');
                popup = new ol.Overlay({
                    element: container,
                    positioning: 'center-center',
                    autoPan: true,
                    autoPanAnimation: {
                        duration: 250
                    }
                });
                map.addOverlay(popup);
                popup_display_element = jQuery(popup.getElement());
              
            }
            /**remove the default zoom in / zoom out */
            jQuery(".ol-zoom .ol-zoom-in").html("");
            jQuery(".ol-zoom .ol-zoom-out").html("");
            jQuery(".ol-rotate .ol-rotate-reset .ol-compass").html("");
        },
         _openPopupMapDetailPage: function(ele) {
             /**elevation profile(gpx) map view in detail hike page in button click popup */
                var hikeID = jQuery(ele).attr("data-hikeid");

                jQuery.ajax({
                    type: 'POST',
                    url: ajax_object.ajax_url,
                    data: {
                        action : 'wegwandern_get_hike_gpx_file',
                        hike_id: hikeID
                    },
                    success: function(response) {
                        if (response) {
                            jQuery("<div id='detailPgPopup'><div id='detailPgPopupContent'></div></div>").insertAfter("#weg-map-popup-full-detail-page");
                            jQuery("#weg-map-popup-full-detail-page").css("display", "block");
                            jQuery('#weg-map-popup-full-detail-page #transport-layer-info-popup').css('display','none');
                            jQuery('body').addClass("weg_ele_popup_show");
                             jQuery("#weg-map-popup-full-detail-page .ol-viewport").remove();
                            jQuery("#mapOptions").html("");
                            /**remove the main page map of detail hike page */
                            jQuery("#weg-map-popup-detail-page-wrapper .ol-viewport").remove();


                            if(JSON.parse(response).json_gpx_data === ""){
                                    app._initMap([900000, 5900000], 12, ol.control.defaults.defaults().extend([new ol.control.FullScreen()]), 'weg-map-popup-inner-wrapper-full-detail-page'); 
                                
                                document.getElementById('mapOptions').innerHTML = "<h2>Please upload the GPX file.</h2>";
                                app._layerFunction(map, 'weg-map-popup-inner-wrapper-full-detail-page','weg-map-popup-full-detail-page', null);
                            }else{
                                json_gpx_data = JSON.parse( JSON.parse(response).json_gpx_data);
                                gpx_file = JSON.parse(response).gpx_file_name;
                                app._gpxData(json_gpx_data, 'weg-map-popup-inner-wrapper-full-detail-page','weg-map-popup-full-detail-page');
                            }
                            jQuery('#weg-map-popup-full-detail-page .ol-attribution.ol-unselectable.ol-control').removeClass('ol-collapsed');
                            jQuery("#weg-map-popup-full-detail-page .ol-zoom .ol-zoom-in").html("");
                            jQuery("#weg-map-popup-full-detail-page .ol-zoom .ol-zoom-out").html("");
                            jQuery("#weg-map-popup-full-detail-page .ol-rotate .ol-rotate-reset .ol-compass").html("");
                        } else {
                            $("#current_location_container").html('Not Available');
                        }
                    }
                });
                
                jQuery("#weg-map-popup-full-detail-page .ol-zoom .ol-zoom-in").html("");
                jQuery("#weg-map-popup-full-detail-page .ol-zoom .ol-zoom-out").html("");
                jQuery("#weg-map-popup-full-detail-page .ol-rotate .ol-rotate-reset .ol-compass").html("");

        },
        _initLayer: function (layer) {
            return mapLayer = new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: layer,
                    target: 'map',
                })
            });
        },
        _initMap: function (center, zoom, control, target) {
            map = new ol.Map({
                controls: control,
                target: target,
                view: new ol.View({
                zoom: zoom, 
                opacity: 1.0,
                minZoom: 7,
                center: center,
                }),
                layers: [app._initLayer(swisstopo_layer)]
            }); 

        },
        _layerFunction: function(map,currentDiv,parentDiv, json_gpx_data){
            /**each layer click functions */
            mapTransportLayer = null;
                    mapSlopeLayer = null;            
                    mapWildLifeLayer = null;
                    mapclosurHikeLayer = null;
            $('#'+ parentDiv +' input#transport_layer_checkbox').on('click', function(){
                app._selTransportLayer(map, currentDiv);
                
            });
            app._selTransportLayer(map, currentDiv);

            $('#'+ currentDiv +' input#slope_30_layer').on('click', function(){
                app._selSlope30Layer(map, currentDiv);
            });
            app._selSlope30Layer(map, currentDiv);

            $('#'+ currentDiv +' input#wildlife_layer').on('click', function(){
                app._selWildlifeLayer(map, currentDiv);
            });
            app._selWildlifeLayer(map, currentDiv);

            $('#'+ currentDiv +' input#closure_hikes_layer').on('click', function(){
                app._selClosureHikesLayer(map, currentDiv);
            });
            app._selClosureHikesLayer(map, currentDiv);

            app._selGreyView(map, currentDiv,  json_gpx_data);
            app._selAerialView(map, currentDiv,  json_gpx_data);
            app._selColorMapView(map, currentDiv,  json_gpx_data);

            $('#'+ currentDiv +' input#waypoints_layer').on('click', function(){
                app._selWayPoints(map, currentDiv , json_gpx_data);
                if(json_gpx_data !== null){
                    if( currentDiv === 'weg-map-popup-detail-page-wrapper'){
                        app._wayPoints(map, json_gpx_data);
                    }
                }
            });

            app._selWayPoints(map, currentDiv , json_gpx_data);
            if(json_gpx_data !== null){
                if( currentDiv === 'weg-map-popup-detail-page-wrapper'){
                    app._wayPoints(map, json_gpx_data);
                }
            }
                
        },
        _gpxData: function (json_gpx_data, currentDiv, parentDiv) {
            var max_altitude, min_altitude;
            /* Get GPX XML file and parsing it to get the longitude and latitude of the `Track Points(trkpt)` */
            // if( typeof json_gpx_data !== 'undefined') {
                if ( json_gpx_data != false ) {
                    /* Initialise Map */
                     
                    let gpx_trackpoints = json_gpx_data.trk.trkseg.trkpt;
                    let gpx_middle_cordinates = parseInt(gpx_trackpoints.length/2);
                    let gpx_elevation_points = json_gpx_data.trk.trkseg.trkpt[gpx_middle_cordinates].ele;
                    let lat = parseFloat(gpx_trackpoints[gpx_middle_cordinates]["@attributes"].lat);
                    let lon = parseFloat(gpx_trackpoints[gpx_middle_cordinates]["@attributes"].lon);
                    /** to get the highest and the lowest elevation point */
                    var tkpt_length = parseFloat(gpx_trackpoints.length);
                    if (tkpt_length > 0) {
                        let allGPXPoints  = gpx_trackpoints.map(function(v) {
                            return v.ele;
                        });
                        min_altitude = Math.min.apply( null, allGPXPoints );
					    max_altitude = Math.max.apply( null, allGPXPoints );
                    }

                    app._initMap(ol.proj.fromLonLat( [lon, lat] ), 13, ol.control.defaults.defaults(), currentDiv); 


                    mapTransportLayer = null;
                    mapSlopeLayer = null;            
                    mapWildLifeLayer = null;
                    mapclosurHikeLayer = null;
                    $('#'+ parentDiv +' input#transport_layer_checkbox').on('click', function(){
                     app._selTransportLayer(map, currentDiv);
                     
                    });
                    app._selTransportLayer(map, currentDiv);

                    $('#'+ currentDiv +' input#slope_30_layer').on('click', function(){
                        app._selSlope30Layer(map, currentDiv);
                    });
                    app._selSlope30Layer(map, currentDiv);

                    $('#'+ currentDiv +' input#wildlife_layer').on('click', function(){
                            app._selWildlifeLayer(map, currentDiv);
                    });
                        app._selWildlifeLayer(map, currentDiv);

                    $('#'+ currentDiv +' input#closure_hikes_layer').on('click', function(){
                            app._selClosureHikesLayer(map, currentDiv);
                    });
                    app._selClosureHikesLayer(map, currentDiv);

                    app._selGreyView(map, currentDiv,  json_gpx_data);
                    app._selAerialView(map, currentDiv,  json_gpx_data);
                    app._selColorMapView(map, currentDiv,  json_gpx_data);

                    $('#'+ currentDiv +' input#waypoints_layer').on('click', function(){
                        app._selWayPoints(map, currentDiv , json_gpx_data);
                    if(json_gpx_data !== null){
                        if( currentDiv === 'weg-map-popup-detail-page-wrapper'){
                            app._wayPoints(map, json_gpx_data);
                        }
                    }
                    });

                    app._selWayPoints(map, currentDiv , json_gpx_data);
                    if(json_gpx_data !== null){
                        if( currentDiv === 'weg-map-popup-detail-page-wrapper'){
                            app._wayPoints(map, json_gpx_data);
                        }
                    }
                    
                    app._plotTrack(map, currentDiv);
                    app._elevationPoint(map, gpx_elevation_points, gpx_trackpoints,  max_altitude, min_altitude);
                    // app._locationDetails(map, 'weg-map-popup-inner-wrapper'); 
                    // app._map3d(map, json_gpx_data, 'weg-map-popup-inner-wrapper');

                    //three D click
                    $('#'+ currentDiv +' #threeD').on('click', function(){
                        app._map3d(map, json_gpx_data, 'cesiumContainer');

                    });
                   
                    map.addControl(new ol.control.CanvasAttribution({ canvas: true }));
                    // Add a title control
                    map.addControl(new ol.control.CanvasTitle({
                        title: 'my title',
                        visible: false,
                        style: new ol.style.Style({ 
                            text: new ol.style.Text({ 
                                font: '20px "Lucida Grande",Verdana,Geneva,Lucida,Arial,Helvetica,sans-serif'
                            }) 
                        })
                    }));
                    //  Add a ScaleLine control
                    map.addControl(new ol.control.CanvasScaleLine());
                    //  Print control
                    var printControl = new ol.control.PrintDialog({
                        lang: 'de'
                    });
                    printControl.setSize('A4');
                    printControl.setOrientation('portrait');
                    map.addControl(printControl);

                    /* Onclick Tourenportal/Hike/Region detail page map show popup */
                    var wptInfo;
                    var popupWrappercontent =document.getElementById('detailPgPopupContent');
                    map.on("singleclick", function(evt) {
                        map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
                           
                            if ( typeof feature.get('wpt_info') != 'undefined' ) {
                                if ( feature.get('wpt_info') == '' ) {
                                    wptInfo = "<i>Keine Daten</i>";
                                } else {
                                    wptInfo = feature.get('wpt_info');
                                }

                                popupWrappercontent.innerHTML = '<div class="single-wander_popup">'+
                                    '<div class="popup_footer">'+
                                        '<div class="detail_info_popup">' + wptInfo + '</div>'+
                                        // '<div id="popup-closer" class="close_warap" onclick="close_map_popup()"><span class="filter_popup_close"></span></div>'+
                                    '</div>'+
                                '</div>';
                                popup.setPosition(evt.coordinate);
                            }

                             // Attach a click event listener to the document to close the popup when clicked outside the popup
                            var closePopupOnClick = function(event) {
                                if (!popupWrappercontent.contains(event.target)) {
                                    popup.setPosition(undefined);
                                document.removeEventListener('click', closePopupOnClick);
                                }
                            };
  
                            // Listen for clicks on the document
                            document.addEventListener('click', closePopupOnClick);
                        });
                    });

                  
                    /** plot the track such a way that, it fits in the map bound  */
                    for (let i = 0; i < gpx_trackpoints.length; i++) {
                        let mapExtent = ol.proj.transformExtent(map.getView().calculateExtent(map.getSize()), 'EPSG:3857', 'EPSG:4326');
                        if (!(ol.extent.containsXY(mapExtent, gpx_trackpoints[i]["@attributes"].lon, gpx_trackpoints[i]["@attributes"].lat))) {
                            var currentZoom = map.getView().getZoom();
                            var newZoom = currentZoom - 1;
                            map.getView().setZoom(newZoom);
                        }
                        
                    }
                    
      

                }else {
                    /* Initialise Map without coordinates */

                    if(jQuery('#weg-map-popup-detail-page-wrapper').length > 0){
                        app._initMap([900000, 5900000], 12, ol.control.defaults.defaults().extend([new ol.control.FullScreen()]), 'weg-map-popup-detail-page-wrapper');  
                        app._layerFunction(map, 'weg-map-popup-detail-page-wrapper','weg-map-popup-detail-page-wrapper', null);
                    }

                    if(jQuery('#weg-map-popup-inner-wrapper').length > 0){
                    app._initMap([900000, 5900000], 12, ol.control.defaults.defaults().extend([new ol.control.FullScreen()]), 'weg-map-popup-inner-wrapper'); 
                    app._layerFunction(map, 'weg-map-popup-inner-wrapper','weg-map-popup-inner-wrapper', null);
                    }
                     
                    document.getElementById('mapOptions').innerHTML = "<h2>Please upload the GPX file.</h2>";
                    
                }
            // }
        },
        _selWayPoints: function(map, target, json_gpx_data){
            if(json_gpx_data !== null){
                if( $('#'+target +' input#waypoints_layer').prop('checked') == true ) {
                  app._wayPoints(map, json_gpx_data);
                   
                } else {
                    /** TODO  */
                     
                }
            }
            
        },
        _selTransportLayer: function(map, target){
             /**transport layer */     
                if($('#'+ target + ' input#transport_layer_checkbox').prop('checked') == true) {
                 // console.log('loaded');
                 // console.log(target);
                 // Check if the layer already exists before creating a new one
                 if(target === 'map-resp' || target === 'map_desktop'){
                    if (!mapTransportLayerCluster) {
                        mapTransportLayerCluster = new ol.layer.Tile({
                            source: new ol.source.XYZ({
                                url: transportLayer,
                                target: target
                            })
                        });
                        map.addLayer(mapTransportLayerCluster);
                        app._locationDetails(map, target);
                     }
                 }else{
                    if (!mapTransportLayer) {
                        mapTransportLayer = new ol.layer.Tile({
                            source: new ol.source.XYZ({
                                url: transportLayer,
                                target: target
                            })
                        });
                        map.addLayer(mapTransportLayer);
                        app._locationDetails(map, target);
                     }
                 }
                 
                    
                } else {
                    if(target === 'map-resp' || target === 'map_desktop'){
                        if (mapTransportLayerCluster) {
                            map.removeLayer(mapTransportLayerCluster);
                            mapTransportLayerCluster = null; // Reset the variable
                        }
                    }else{
                        if (mapTransportLayer) {
                            map.removeLayer(mapTransportLayer);
                            mapTransportLayer = null; // Reset the variable
                        }
                    }
                    
                }
        },
        _selSlope30Layer: function(map, target){
                /** slope layer */  
                if( $('#'+ target + ' input#slope_30_layer').prop('checked') == true) {
                     // Check if the layer already exists before creating a new one
                     if(target === 'map-resp' || target === 'map_desktop'){
                        if (!mapSlopeLayerCluster) {
                            mapSlopeLayerCluster = new ol.layer.Tile({
                                source: new ol.source.XYZ({
                                    url: slop30Layer,
                                    target: target
                                })
                            });
                          
                            mapSlopeLayerCluster.setOpacity(0.4);
                            map.addLayer(mapSlopeLayerCluster);
                        }
                     }else{
                        if (!mapSlopeLayer) {
                            mapSlopeLayer = new ol.layer.Tile({
                                source: new ol.source.XYZ({
                                    url: slop30Layer,
                                    target: target
                                })
                            });
                          
                            mapSlopeLayer.setOpacity(0.4);
                            map.addLayer(mapSlopeLayer);
                        }
                     }
                    
                    
                } else { 
                    if(target === 'map-resp' || target === 'map_desktop'){
                        if (mapSlopeLayerCluster) {
                            map.removeLayer(mapSlopeLayerCluster);
                            mapSlopeLayerCluster = null; // Reset the variable
                        }
                    }else{
                        if (mapSlopeLayer) {
                            map.removeLayer(mapSlopeLayer);
                            mapSlopeLayer = null; // Reset the variable
                        }
                    }
                    
                }
        },
        _selWildlifeLayer: function(map, target){
                /** wildlife layer */ 
                if(  $('#'+ target + ' input#wildlife_layer').prop('checked') == true ) {
                    // Check if the layer already exists before creating a new one
                    if(target === 'map-resp' || target === 'map_desktop'){
                        if (!mapWildLifeLayerCluster){
                            mapWildLifeLayerCluster = new ol.layer.Tile({
                                source: new ol.source.XYZ({
                                    url: wildlifeLayer,
                                    target: target
                                })
                            });
                            map.addLayer(mapWildLifeLayerCluster);
                            app._locationDetails(map, target);
                        }
                        
                    }else{
                        if (!mapWildLifeLayer) {
                            mapWildLifeLayer = new ol.layer.Tile({
                                source: new ol.source.XYZ({
                                    url: wildlifeLayer,
                                    target: target
                                })
                            });
                            map.addLayer(mapWildLifeLayer);
                            app._locationDetails(map, target);
                        }
                    }
                    
                } else {
                    if(target === 'map-resp' || target === 'map_desktop'){
                        if (mapWildLifeLayerCluster){
                            map.removeLayer(mapWildLifeLayerCluster);
                            mapWildLifeLayerCluster = null; // Reset the variable
                        }
                       
                    }else{
                        if (mapWildLifeLayer) {
                            map.removeLayer(mapWildLifeLayer);
                            mapWildLifeLayer = null; // Reset the variable
                        }
                    }
                    
                    
                }
        },
        _selClosureHikesLayer: function(map, target){
            /** closure hikes layer */
            proj4.defs("EPSG:2056","+proj=somerc +lat_0=46.9524055555556 +lon_0=7.43958333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs +type=crs");
            ol.proj.proj4.register(proj4);

            const bbox_array = map.getView().calculateExtent(map.getSize());
            const bbox_proj_convert = ol.proj.transformExtent(bbox_array, 'EPSG:3857', 'EPSG:2056');
            closureHikesLayer = 'https://wms4.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=ch.astra.wanderland-sperrungen_umleitungen&LANG=en&WIDTH=752&HEIGHT=752&CRS=EPSG%3A2056&STYLES=&BBOX=' + parseInt( bbox_proj_convert[0] ) + '%2C' + parseInt( bbox_proj_convert[1] ) + '%2C' + parseInt( bbox_proj_convert[2] ) + '%2C' + parseInt( bbox_proj_convert[3] );
            
            if(  $('#'+ target + ' input#closure_hikes_layer').prop('checked') == true ) {
                // Check if the layer already exists before creating a new one
                if(target === 'map-resp' || target === 'map_desktop'){
                    if (!mapclosurHikeLayerCluster) {
                        mapclosurHikeLayerCluster = new ol.layer.Tile({
                            source: new ol.source.TileWMS({
                                url: closureHikesLayer,
                                target: target
                            })
                        });
                        map.addLayer(mapclosurHikeLayerCluster);
                        app._locationDetails(map, target);
                    }
                    
                }else{
                    if (!mapclosurHikeLayer) {
                        mapclosurHikeLayer = new ol.layer.Tile({
                            source: new ol.source.TileWMS({
                                url: closureHikesLayer,
                                target: target
                            })
                        });
                        map.addLayer(mapclosurHikeLayer);
                        app._locationDetails(map, target);
                    }
                }
                
               
            } else {
                if(target === 'map-resp' || target === 'map_desktop'){
                    if (mapclosurHikeLayerCluster) {
                        map.removeLayer(mapclosurHikeLayerCluster);
                        mapclosurHikeLayerCluster = null; // Reset the variable
                    }
                }else{
                    if (mapclosurHikeLayer) {
                        map.removeLayer(mapclosurHikeLayer);
                        mapclosurHikeLayer = null; // Reset the variable
                    }
                }
               
            }
        },
        _selGreyView: function(map, target,  json_gpx_data){
            /** grey color map view */
            $('#'+ target + ' #grey_view_section').on('click', function(){
                $('#'+ target + ' .weg-layer-wrap').removeClass('activeLayer');
                $(this).addClass('activeLayer');
                mapgreyView = new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: greyView,
                        target: target
                    })
                });
                map.addLayer(mapgreyView);
                app._selTransportLayer(map, target);
                app._selSlope30Layer(map, target);
                app._selWildlifeLayer(map, target);
                app._selClosureHikesLayer(map, target);
                if(json_gpx_data !== null){
                     app._selWayPoints(map, target, json_gpx_data);
                }

                
                if(target == "map_desktop" || target == "map-resp"){
                    if(mapTransportLayerCluster){
                        mapTransportLayerCluster.setZIndex(15);
                    }if(mapSlopeLayerCluster){
                        mapSlopeLayerCluster.setZIndex(15);
                    }if(mapWildLifeLayerCluster){
                        mapWildLifeLayerCluster.setZIndex(15);
                    }if(mapclosurHikeLayerCluster){
                        mapclosurHikeLayerCluster.setZIndex(15);
                    }  
                    clusters.setZIndex(15);
                }else{
                    if(mapTransportLayer){
                        mapTransportLayer.setZIndex(15);
                    }if(mapSlopeLayer){
                        mapSlopeLayer.setZIndex(15);
                    }if(mapWildLifeLayer){
                        mapWildLifeLayer.setZIndex(15);
                    }if(mapclosurHikeLayer){
                        mapclosurHikeLayer.setZIndex(15);
                    }  
                }
                
            });
            
        },
        _selAerialView: function(map, target,  json_gpx_data){
            /** Aerial map view */
            $('#'+ target + ' #aerial_view_section').on('click', function(){
                $('#'+ target + ' .weg-layer-wrap').removeClass('activeLayer');
                $(this).addClass('activeLayer');
                mapaerialView = new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: aerialView,
                        target: target
                    })
                });
                map.addLayer(mapaerialView);
                app._selTransportLayer(map, target);
                app._selSlope30Layer(map, target);
                app._selWildlifeLayer(map, target);
                app._selClosureHikesLayer(map, target);
                if(json_gpx_data !== null){
                    app._selWayPoints(map, target, json_gpx_data);
                }
                
                
                // clusters.setZIndex(15);
                if(target == "map_desktop" || target == "map-resp"){
                    if(mapTransportLayerCluster){
                        mapTransportLayerCluster.setZIndex(15);
                    }if(mapSlopeLayerCluster){
                        mapSlopeLayerCluster.setZIndex(15);
                    }if(mapWildLifeLayerCluster){
                        mapWildLifeLayerCluster.setZIndex(15);
                    }if(mapclosurHikeLayerCluster){
                        mapclosurHikeLayerCluster.setZIndex(15);
                    }   
                    clusters.setZIndex(15);
                }else{
                    if(mapTransportLayer){
                        mapTransportLayer.setZIndex(15);
                    }if(mapSlopeLayer){
                        mapSlopeLayer.setZIndex(15);
                    }if(mapWildLifeLayer){
                        mapWildLifeLayer.setZIndex(15);
                    }if(mapclosurHikeLayer){
                        mapclosurHikeLayer.setZIndex(15);
                    }  
                }
            });
             
        },
        _selColorMapView: function(map, target,  json_gpx_data){
             /**  color map view */
            $('#'+ target +  ' #colormap_view_section').on('click', function(){
                $('#'+ target + ' .weg-layer-wrap').removeClass('activeLayer');
                $(this).addClass('activeLayer');
                mapswisstopo_layer = new ol.layer.Tile({
                    source: new ol.source.XYZ({
                        url: swisstopo_layer,
                        target: target
                    })
                });
                map.addLayer(mapswisstopo_layer);
                app._selTransportLayer(map, target);
                app._selSlope30Layer(map, target);
                app._selWildlifeLayer(map, target);
                app._selClosureHikesLayer(map, target);
                if(json_gpx_data !== null){
                    app._selWayPoints(map, target, json_gpx_data);
                }
               
                if(target == "map_desktop" || target == "map-resp"){
                    if(mapTransportLayerCluster){
                        mapTransportLayerCluster.setZIndex(15);
                    }if(mapSlopeLayerCluster){
                        mapSlopeLayerCluster.setZIndex(15);
                    }if(mapWildLifeLayerCluster){
                        mapWildLifeLayerCluster.setZIndex(15);
                    }if(mapclosurHikeLayerCluster){
                        mapclosurHikeLayerCluster.setZIndex(15);
                    }                   
                    clusters.setZIndex(15);
                }else{
                    if(mapTransportLayer){
                        mapTransportLayer.setZIndex(15);
                    }if(mapSlopeLayer){
                        mapSlopeLayer.setZIndex(15);
                    }if(mapWildLifeLayer){
                        mapWildLifeLayer.setZIndex(15);
                    }if(mapclosurHikeLayer){
                        mapclosurHikeLayer.setZIndex(15);
                    }  
                }
            });
             
        },
        _markerPoints: function(source,style){
            return markers = new ol.layer.Vector({
                source: source,
                style: style
            });
        },
        _wayPoints: function(map, json_gpx_data){
            /* Popup for hike detail page */
            const container = document.getElementById('detailPgPopup');
            popup = new ol.Overlay({
                element: container,
                positioning: 'center-center',
                autoPan: true,
                autoPanAnimation: {
                    duration: 250
                }
            });
            map.addOverlay(popup);
            popup_display_element = jQuery(popup.getElement());

            let gpx_waypoints = json_gpx_data.trk.wpt;
            /* Get the longitude and latitude of the `Way Points(wpt)` to plot event icons */
            if (gpx_waypoints !== undefined) {
                let wpt_length = parseFloat(gpx_waypoints.length);
                if (wpt_length > 0) {
                    for (let i = 0; i < wpt_length; i++) {
                        let event_name = gpx_waypoints[i].name;
                        let event_icon = "";
                        let wpt_info   = gpx_waypoints[i].wpt_info;
    
                        if (event_name == 'Piacenza') {
                            event_icon = url_path +"/hospital.png";
                        } else if (event_name == 'Parma') {
                            event_icon = url_path +"/bus.png";
                        } else if (event_name == 'Arrow') {
                            event_icon = url_path +"/hoME.png";
                        } else if (event_name == 'Modena') {
                            event_icon = url_path +"/hotel.png";
                        } else {
                            if (gpx_waypoints[i].wptImage) {
                                event_icon = gpx_waypoints[i].wptImage;
                            } else {
                                event_icon = url_path +"/home.png";
                            }
                        }
                        styleEventMarker = new ol.style.Style({
                            image: new ol.style.Icon({
                                anchor: [0.5, 1],
                                src: event_icon,
                                scale: 0.3
                            })
                        })
                      
                        source = new ol.source.Vector();
                        app._markerPoints( source ,styleEventMarker );
                        event_icon_markers = markers;
                        map.addLayer(event_icon_markers);
                        event_icon_markers.setZIndex(25);
    
                        let wpt_lat = parseFloat(gpx_waypoints[i]["@attributes"].lat);
                        let wpt_lon = parseFloat(gpx_waypoints[i]["@attributes"].lon);
    
                        event_icon_markers_location_plot = new ol.Feature({
                            id: "weg_custom_event_icons",
                            geometry: new ol.geom.Point(ol.proj.fromLonLat([wpt_lon, wpt_lat]), 'XYZ'),
                        });
                        event_icon_markers_location_plot.setId('weg_custom_event_icons');
                        event_icon_markers_location_plot.set( 'wpt_info', wpt_info );
                        event_icon_markers.getSource().addFeature(event_icon_markers_location_plot);
                    }
                }
            }
        },
        _gpx_source: function(map){
            return gpx_source = new ol.source.Vector({
                url:  gpx_file,
                format: new ol.format.GPX()
            });
        },
        _plotTrack: function (map, currentDiv) {
            /* Get dynamic GPX file and plot track inside the map */
            app._gpx_source(map);
            var elevationIcon = "";
            if ( currentDiv == 'weg-map-popup-detail-page-wrapper' ) {
                elevationIcon = "";
            } else {
                elevationIcon = new ol.style.RegularShape({
                    points: 4,
                    radius: 13,
                    angle: Math.PI / 4,
                    fill: new ol.style.Fill({ color: '#00B453' })
                });
            }

            let styleGpx_path_plot_layer =new ol.style.Style({
                image: elevationIcon,
                stroke: new ol.style.Stroke({
                    color: [255, 0, 0],
                    width: 8
                })
            })
            
            app._markerPoints( gpx_source,styleGpx_path_plot_layer);
            let gpx_path_plot_layer = markers;
            gpx_path_plot_layer.setZIndex(15);
            map.addLayer(gpx_path_plot_layer);
        },
        _elevationPoint: function (map, gpx_elevation_points, gpx_trackpoints,  max_altitude, min_altitude) {
             /* Check if the `Elevation points(ele)` present in the GPX file to display graph & animation */
            if (gpx_elevation_points !== undefined) {

                /* GPX profile plotting in map & graph on hover - Start */

                /* Elevation profil inside the map */
                let gpx_elevation_map_profil = new ol.control.Profil();
                map.addControl(gpx_elevation_map_profil);

                /* Elevation graph profil outside the map */
                let gpx_elevation_graph_profil = new ol.control.Profil({
                    target: document.querySelector(".options"),
                    selectable: true,
                    info: {
                        zmin: "Tiefster Punkt",
                        zmax: "Höchster Punkt",
                        ytitle: " Höhe (m)",
                        xtitle: "Kilometer (km) ",
                        time: "Zeit",
                        altitude: "Höhe",
                        distance: "Distanz",
                        altitudeUnits: " m",
                        distanceUnitsM: " m",
                        distanceUnitsKM: " km",
                        xUnits: " km",
                        yUnits: " m"
                    },
                     zoomable: true,
                    style: new ol.style.Style({
                        fill: new ol.style.Fill({ color: '#ccc' })
                    }),
                    width: (window.innerWidth - 100),
                   /* height: 200*/
                    height: 150
                    
                });

                map.addControl(gpx_elevation_graph_profil);

                /* Show elevation profil inside the map when loaded */
                let pt, feature;
                gpx_source.once('change', function(e) {
                    if (gpx_source.getState() === 'ready') {
                        feature = gpx_source.getFeatures()[0];
                        gpx_elevation_map_profil.setGeometry(feature);
                        gpx_elevation_graph_profil.setGeometry(feature, {
                            graduation: 250,
                            amplitude: 1000,
                           // zmin: 0
                             zmin: min_altitude
                        });
                        pt = new ol.Feature(new ol.geom.Point([0, 0]));
                        pt.setStyle([]);
                        gpx_source.addFeature(pt);
                    }
                });
                // setTimeout(function() {
                //   jQuery('.ol-profil .ol-inner table .track-info .zmin').html(parseInt(jQuery('.ol-profil .ol-inner table .track-info .zmin')[1].innerHTML) + ' m');
                //     jQuery('.ol-profil .ol-inner table .track-info .zmax').html(parseInt(jQuery('.ol-profil .ol-inner table .track-info .zmax')[1].innerHTML)+ ' m');
                // }, 2000);
                
                /* Function to draw point on the map when mouse hover over elevation graph profil outside the map */
                function drawPoint(e) {
                    if (!pt) return;
                    if (e.type == "over") {
                        // Show point at coord
                        var coords = ol.proj.toLonLat(e.coord);
                        
                        for(i=0; i< gpx_trackpoints.length; i++){
                            if( parseFloat(gpx_trackpoints[i].ele) === e.coord[2]){
                               jQuery('.ol-profil .ol-inner table .track-info .time').html(gpx_trackpoints[i].timeSet);
                               jQuery('.ol-profil .ol-inner table .point-info .time').html(gpx_trackpoints[i].timeSet);
                            }
                            /** rounding the altitude to 2 didgit when hovered over the elevation graph */
                            var numberElement =  jQuery('.ol-profil .ol-inner table .point-info .z').last()[0];
                            // var number = parseFloat(numberElement.innerHTML);
                            // numberElement.innerHTML = Math.round(number)+' m';
                            var number = parseInt(numberElement.innerHTML);
                            numberElement.innerHTML = number +' m';
                            
                        }
                        pt.setGeometry(new ol.geom.Point(e.coord));
                        pt.setStyle(null);
                    } else {
                        // hide point
                        pt.setStyle([]);
                    }
                };

                /* Sync GPX graph & map track marker. On hover gpx graph outside map area, show the marker in same track coordinates inside the map */
                gpx_elevation_graph_profil.on(["over", "out"], drawPoint);

                /* Sync map track marker & GPX graph. On hover gpx graph inside map area, show the marker in same coordinates inside the graph */
                let hover = new ol.interaction.Hover({ cursor: "pointer", hitTolerance: 10 });
                map.addInteraction(hover);

                hover.on("hover", function(e) {
                    // Point on the line
                    var c = feature.getGeometry().getClosestPoint(e.coordinate);
                    drawPoint({ type: "over", coord: c });
                    // Show profil
                    var p = gpx_elevation_map_profil.showAt(e.coordinate);
                  //  gpx_elevation_map_profil.popup(p[2] + " m");
                    gpx_elevation_graph_profil.showAt(e.coordinate);
                    var time = jQuery('.ol-profil .ol-inner table .track-info .time').html();
                    jQuery('.ol-profil .ol-inner table .point-info .time').html(time);

                    /** rounding the altitude to 2 didgit when hovered over the line/track in map */
                    var numberElement =  jQuery('.ol-profil .ol-inner table .point-info .z').last()[0];
                    // var number = parseFloat(numberElement.innerHTML);
                    // numberElement.innerHTML = Math.round(number)+' m';
                    var number = parseInt(numberElement.innerHTML);
                    numberElement.innerHTML = number +' m';
                });    
                hover.on("leave", function(e) {
                    drawPoint({});
                });

                /* Map GPX route plotting animation in map on click - End */
            } else {
                document.getElementById('animate_icon_checkbox_wrapper').style.display = 'none';
                document.getElementById('mapOptions').innerHTML = "<h2>Elevation points not present in the GPX file. Please upload a GPX file with Elevetion points to plot graph and display animation.</h2>";
            }
        },
        _locationDetails: function(map, target){
           //   Register EPSG 2056 for Swisstopo coordinates to populate information regarding transport layers points 
            proj4.defs("EPSG:2056","+proj=somerc +lat_0=46.9524055555556 +lon_0=7.43958333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs +type=crs");
            ol.proj.proj4.register(proj4);
          
            map.on('click', evt => {
                if(jQuery("#"+ target + " .panel #transport_layer_checkbox").prop('checked') === true || 
                jQuery("#"+ target + " .panel #closure_hikes_layer").prop('checked') === true ||
                jQuery("#"+ target + " .panel #slope_30_layer").prop('checked') === true ||
                jQuery("#"+ target + " .panel #wildlife_layer").prop('checked') === true){
                      
                if(target === 'weg-map-popup-inner-wrapper'){
                    target = 'weg-map-popup';
                }
                if(target === 'weg-map-popup-inner-wrapper-full-detail-page'){
                    target = 'weg-map-popup-full-detail-page';
                }
                     
                $('#'+ target +' #tl-content-area').html('');
                jQuery('#'+ target +' #transport-layer-info-popup').css('display','block');
                let map_extent = map.getView().calculateExtent(map.getSize());
                let convert_coordinate = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:2056');
                let convert_map_extent = new ol.proj.transformExtent(map_extent, 'EPSG:3857', 'EPSG:2056');
                let locationStatus = true, wildlifeStatus = true, closuresStatus = true;

                if($('#'+ target + ' input#transport_layer_checkbox').prop('checked') == true){
                    $.ajax({
                        url:'https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=' + convert_coordinate[0] + ',' + convert_coordinate[1] + '&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1280,331,96&lang=en&layers=all:ch.bav.haltestellen-oev&limit=10&mapExtent=' + 
                        convert_map_extent + '&returnGeometry=true&sr=2056&tolerance=10',
                        async: false,
                        success: function(details) {
                            let location_info = details.results;

                            for (let i = 0; i < location_info.length; i++) {
                                locationStatus = false;
                                jQuery('.errorMessage').remove();
                                let location_feature_id = location_info[i].featureId;
                                //   Get location details via API 
                                $('#'+ target +' #tl-content-area').append('<div class="htmlpopup-header"><span>Haltestellen des öffentlichen Nahverkehrs</span> (Bundesamt für Verkehr BAV)</div><div class="htmlpopup-content" ><p class="content-area"><b>' + 
                                                                                                            location_info[i].properties.label + '</b>, nächste Abfahrten nach:</p><div id="tl-departures-area_'+[i]+'"></div><div class="popup_more_info"><a href="https://api3.geo.admin.ch/rest/services/ech/MapServer/ch.bav.haltestellen-oev/' + location_feature_id + '/extendedHtmlPopup?lang=en" target="_blank">Mehr Info</a></div></div>');
                                let current_timestamp = Date.now();

                                // Get departure details of buses in specific location 
                                $.ajax({
                                    url: 'https://api3.geo.admin.ch/stationboard/stops/' + location_feature_id + '?_=' + current_timestamp,
                                    dataType: 'json',
                                    async: false,
                                    success: function(dep) {
                                        if( dep ) { 
                                            for (var j = 0; j < dep.length; j++) {
                                                var date = dep[j].departureDate.slice(-6);
                                                $('#tl-departures-area_'+[i]).append('<p><span class="dep_label"><b>' + dep[j].label + '</b></span> <span  class="dep_name">' + 
                                                                                            dep[j].destinationName + ' </span><span  class="dep_date">' + date + '</span></p>');
                                            }
                                        } else {
                                            $('#tl-departures-area_'+[i]).append('<p class="errorMessage">Für diesen Stopp sind keine Daten verfügbar</p>');
                                        }
                                    },
                                    error:function(err){
                                        if(err.statusText === "error"){
                                            $('#tl-departures-area_'+[i]).append('<p class="errorMessage">Für diesen Stopp sind keine Daten verfügbar</p>');
                                        }
                                    }
                                });
                            }

                        }
                    });
                }
                if(  $('#'+ target + ' input#wildlife_layer').prop('checked') == true ){
                     //get wildlife details via API
                    $.ajax({
                        url:'https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=' + convert_coordinate[0] + ',' + convert_coordinate[1] + '&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1280,331,96&lang=en&layers=all:ch.bafu.wrz-wildruhezonen_portal&limit=10&mapExtent=' + 
                        convert_map_extent + '&returnGeometry=true&sr=2056&tolerance=10',
                        async: false,
                        success: function(details) {
                            let wildLife_info = details.results;
                            for (let i = 0; i < wildLife_info.length; i++) {
                                wildlifeStatus = false;
                                jQuery('.errorMessage').remove();
                                let wildLife_feature_id = wildLife_info[i].featureId;
                           
                                $.ajax({
                                    url:'https://api3.geo.admin.ch/rest/services/ech/MapServer/ch.bafu.wrz-wildruhezonen_portal/'+ wildLife_feature_id +'/htmlPopup?coord='+ convert_coordinate[0] +','+ convert_coordinate[1] + '&imageDisplay=556,722,96&lang=de&mapExtent='+convert_map_extent+'&sr=2056',
                                //   dataType: 'json',
                                    async: false,
                                    success: function(dep) {
                                        if( dep ) { 
                                            $('#'+ target +' #tl-content-area').append(dep);
                                    
                                        } else {
                                            $('#'+ target +' #tl-content-area').append('<p class="errorMessage">Für diesen Stopp sind keine Daten verfügbar</p>');
                                        }
                                    },
                                    error:function(err){
                                        if(err.statusText === "error"){
                                            $('#'+ target +' #tl-content-area').append('<p class="errorMessage">Für diesen Stopp sind keine Daten verfügbar</p>');
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
                if(  $('#'+ target + ' input#closure_hikes_layer').prop('checked') == true ){
                    //get closures details via API
                    $.ajax({
                        url:'https://api3.geo.admin.ch/rest/services/all/MapServer/identify?geometry=' + convert_coordinate[0] + ',' + convert_coordinate[1] + '&geometryFormat=geojson&geometryType=esriGeometryPoint&imageDisplay=1280,331,96&lang=en&layers=all:ch.astra.wanderland-sperrungen_umleitungen&limit=10&mapExtent=' + 
                        convert_map_extent + '&returnGeometry=true&sr=2056&tolerance=10',
                        async: false,
                        success: function(details) {
                            let closures_info = details.results;
                            for (let i = 0; i < closures_info.length; i++) {
                                closuresStatus = false;
                                jQuery('.errorMessage').remove();
                                let closures_feature_id = closures_info[i].featureId;
                           
                                $.ajax({
                                    url:'https://api3.geo.admin.ch/rest/services/ech/MapServer/ch.astra.wanderland-sperrungen_umleitungen/'+ closures_feature_id +'/htmlPopup?coord='+ convert_coordinate[0] +','+ convert_coordinate[1] + '&imageDisplay=556,722,96&lang=de&mapExtent='+convert_map_extent+'&sr=2056',
                                    //   dataType: 'json',
                                    async: false,
                                    success: function(dep) {
                                        if( dep ) { 
                                            $('#'+ target +' #tl-content-area').append(dep);
                                        } else {
                                            $('#'+ target +' #tl-content-area').append('<p class="errorMessage">Für diesen Stopp sind keine Daten verfügbar</p>');
                                        }
                                    },
                                    error:function(err){
                                        if(err.statusText === "error"){
                                            $('#'+ target +' #tl-content-area').append('<p class="errorMessage">Für diesen Stopp sind keine Daten verfügbar</p>');
                                        }
                                    }
                                });
                            }
                        }
                    });
                }

                if(locationStatus && wildlifeStatus && closuresStatus){
                    $('#'+ target +' #tl-content-area').append('<p class="errorMessage">Keine weiteren Informationen</p>');
                }

                }
                
            });
           
        },
        _getStyle: function(feature, resolution){

            // Style for the clusters
            var size = feature.get('features').length;
            
            var style = styleCache[size];
            if (!style) {
            
                var color = size > 25 ? "192,0,0" : size > 8 ? "255,128,0" : "0,128,0";
                var newRadius = size < 10 ? "/Ellipse35.svg" : size < 20 ? "/Ellipse45.svg" : size < 30 ? "/Ellipse49.svg" :  size < 80 ? "/Ellipse57.svg" : size < 100 ? "/Ellipse58.svg" : "/Ellipse72.svg";
                var fontSize = size < 10 ? "16px" : size < 20 ? "17px" : size < 30 ? "18px" :  size < 80 ? "19px" : size < 100 ? "19px" : "19px";
                var radius = Math.max(8, Math.min(size * 0.75, 20));
                var dash = 2 * Math.PI * radius / 6;
                var dash = [0, dash, dash, dash, dash, dash, dash];
                if(size == 1){
                    style = styleCache[size] = new ol.style.Style({
                        image: new ol.style.Icon({
                                            anchor: [0.5, 1],
                                            src: url_path +"/pin_wanderung.svg",
                                        }),
                                        zIndex:1,
                    })
                }else{
                    style = styleCache[size] = new ol.style.Style({
                        image: new ol.style.Icon({
                                        // anchor: [0.5, 1],
                                        //anchor: [0.5, 0.5], // Set anchor point to the center of the image
                                            src: "../../wp-content/themes/WEGW/img" + newRadius,
                                        }),
                        text: new ol.style.Text({
                            text: size.toString(),
                          //  font: '21px Roboto', // Set the font to Roboto and font size
                            textAlign: 'center', // Align text to the center
                            textBaseline: 'middle', // Align text vertically to the middle
                            offsetX: 0, // Adjust the X position if needed
                            offsetY: 1, // Adjust the Y position if needed
                            fill: new ol.style.Fill({
                                color: '#FFFFFF',
                            }),
                            font: fontSize + ' Roboto Regular',
                                zIndex:100,

                        })
                    });
                }
                
            }
            return style;
        },
        _map_cluster_feature: function(weg_hikes_length, map){
             // Cluster Source
            clusterSource = new ol.source.Cluster({
                distance: 40,
                source: new ol.source.Vector()
            });

             /* Filter Results page map cluster functionality starts */
            var ext = map.getView().calculateExtent(map.getSize());
            var features = [];
            let latC = 0;
            let lngC = 0;
            let cLength = 0;
            for (var i = 0; i < places.length; i++) {
                features[i] = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([places[i]['longitude'], places[i]['latitude']])));

                features[i].set('location_id', places[i]['location_id']);
                features[i].set('longitude', places[i]['longitude']);
                features[i].set('latitude', places[i]['latitude']);
                features[i].set('location_regionen_name', places[i]['location_regionen_name']);
                features[i].set('location_feature_image', places[i]['location_feature_image']);
                features[i].set('location_name', places[i]['location_name']);
                features[i].set('location_desc', places[i]['location_desc']);
                features[i].set('location_level_cls', places[i]['location_level_cls']);
                features[i].set('location_level_name', places[i]['location_level_name']);
                features[i].set('location_hike_time', places[i]['location_hike_time']);
                features[i].set('location_travel_distance', places[i]['location_travel_distance']);
                features[i].set('location_hike_ascent', places[i]['location_hike_ascent']);
                features[i].set('location_hike_descent', places[i]['location_hike_descent']);
                features[i].set('location_wander_saison_name', places[i]['location_wander_saison_name']);
                features[i].set('location_link', places[i]['location_link']);
                features[i].set('watchlisted', places[i]['watchlisted']);
                features[i].set('average_rating', places[i]['average_rating']);

                if(places[i]['longitude'] != "" || places[i]['latitude'] != ""){
                    latC += parseFloat(places[i]['latitude']);
                    lngC += parseFloat(places[i]['longitude']);
                    cLength++;
                }
                
            }

            latC /= cLength;
            lngC /= cLength;

            map.getView().setCenter(ol.proj.transform([lngC, latC], 'EPSG:4326', 'EPSG:3857'));
            clusterSource.getSource().clear();
            clusterSource.getSource().addFeatures(features);

            
            clusters = new ol.layer.Vector({
                source: clusterSource,
                style: app._getStyle
            });
            map.addLayer(clusters);
            clusters.setZIndex(15);
            
        },
        _placeCoord: function(map, mapContainer){
            /*
             * On click Currrent location icon onside map
             */
            $(document).on("click", "#current_location_icon,.map_currentLocation", function() {
                $.getJSON("https://api.ipify.org/?format=json", function(e) {
                    var current_ip = e.ip;
                    showCurrentLocation(current_ip);
                });

                function showCurrentLocation(current_ip) {
                    $.getJSON('https://ipapi.co/' + current_ip + '/json', function(data) {
                        var city = data.city;
                        var region = data.region;
                        var country = data.country;

                        /* Check if location within Switzerland */
                        if (country == "CH") {
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(showPosition);
                            } else {
                                alert("Geolocation is not supported by this browser.");
                            }
                        } else {
                            alert("Location not found within Switzerland.");
                        }
                    });
                }
            });

            /*
             * On click Currrent location icon onside map - Focus inside map
             */
            function showPosition(position) {
                map.getView().animate({
                    center: ol.proj.fromLonLat([position.coords.longitude, position.coords.latitude]),
                    zoom: 12,
                    easing: ol.easing.easeOut
                });
            }
            
            /*
             * On select location(via Select2) spot on map
             */
            $('#'+ mapContainer +' #map_search' ).autocomplete({
                source: function( request, response ) {
                    $.ajax( {
                        url: "https://api3.geo.admin.ch/rest/services/api/SearchServer?origins=kantone,district,zipcode,gazetteer",
                        dataType: "jsonp",
                        data: {
                            searchText: request.term,
                            type: 'locations',
                            lang: 'de',
                            sr: 2056,
                            limit: 15
                        },
                        success: function( data ) {
                            var options = [];
                            if ( data ) {
                                var search_value = data.results;

                                Object.keys( search_value ).forEach( function( k ) {
                                    var placeRemoveItalicsTag = search_value[k].attrs.label.replace(/<i.*?>.*?<\/i>/ig,'');
                                    var placeStripedTag = placeRemoveItalicsTag.replace( /(<([^>]+)>)/ig, '');
                                    options.push({ 
                                        'id': search_value[k].id, 
                                        'value': placeStripedTag, 
                                        'label': placeStripedTag,
                                        'latitude': search_value[k].attrs.lat, 
                                        'longitude': search_value[k].attrs.lon 
                                    });
                                });
                            }
                            response(options);     
                        }
                    });
                },
                minLength: 1,
                select: function( event, ui ) {
                    map.getView().animate({
                        center: ol.proj.fromLonLat([ui.item.longitude, ui.item.latitude]),
                        zoom: 12,
                        easing: ol.easing.easeOut
                    });
                }
            });

            mapTransportLayerCluster = null;
            mapSlopeLayerCluster = null;
            mapWildLifeLayerCluster = null;
            mapclosurHikeLayerCluster = null;
            $('#'+ mapContainer +' input#transport_layer_checkbox').on('click', function(){
                app._selTransportLayer(map, mapContainer);  
            });
            app._selTransportLayer(map, mapContainer);

            $('#'+ mapContainer +' input#slope_30_layer').on('click', function(){
                app._selSlope30Layer(map, mapContainer);
            });
            app._selSlope30Layer(map, mapContainer);

            $('#'+ mapContainer +' input#wildlife_layer').on('click', function(){
                app._selWildlifeLayer(map, mapContainer);
            });
            app._selWildlifeLayer(map, mapContainer);

            $('#'+ mapContainer +' input#closure_hikes_layer').on('click', function(){
                app._selClosureHikesLayer(map, mapContainer);
            });
            app._selClosureHikesLayer(map, mapContainer);

            app._selGreyView(map, mapContainer);
            app._selAerialView(map, mapContainer);
            app._selColorMapView(map, mapContainer);  
            // app._locationDetails(map, mapContainer); 
          
            /*
             * Re-render the cluster markers in map when search with header search icon
             */
            jQuery('.search_head').keyup(function(e) { 
                clusterSource.getSource().clear();

                // Cluster Source
                clusterSource = new ol.source.Cluster({
                    distance: 40,
                    source: new ol.source.Vector()
                });
               
                /* Filter Results page map cluster functionality starts */

                var features = [];
                if(places !== undefined){// check if the places has data
                    for (var i = 0; i < places.length; i++) {
                        features[i] = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([places[i]['longitude'], places[i]['latitude']])));
    
                        features[i].set('location_id', places[i]['location_id']);
                        features[i].set('longitude', places[i]['longitude']);
                        features[i].set('latitude', places[i]['latitude']);
                        features[i].set('location_regionen_name', places[i]['location_regionen_name']);
                        features[i].set('location_feature_image', places[i]['location_feature_image']);
                        features[i].set('location_name', places[i]['location_name']);
                        features[i].set('location_desc', places[i]['location_desc']);
                        features[i].set('location_level_cls', places[i]['location_level_cls']);
                        features[i].set('location_level_name', places[i]['location_level_name']);
                        features[i].set('location_hike_time', places[i]['location_hike_time']);
                        features[i].set('location_travel_distance', places[i]['location_travel_distance']);
                        features[i].set('location_hike_ascent', places[i]['location_hike_ascent']);
                        features[i].set('location_hike_descent', places[i]['location_hike_descent']);
                        features[i].set('location_wander_saison_name', places[i]['location_wander_saison_name']);
                        features[i].set('location_link', places[i]['location_link']);
                        features[i].set('watchlisted', places[i]['watchlisted']);
                        features[i].set('average_rating', places[i]['average_rating']);
    
                    }
                    clusterSource.getSource().clear();
                    clusterSource.getSource().addFeatures(features);
                    
                    clusters = new ol.layer.Vector({
                        source: clusterSource,
                        style: app._getStyle
                    });
                  
                    map.addLayer(clusters);

                }
                
                

                /* Trigger keyup event manually to re-render the cluster markers in map */
                $(function() {
                    var e = $.Event('keyup');
                    e.which = 13; // Character 'A'
                    $('.search_head').trigger(e);
                });

            });

            /*
            * filter reset event 
            */
            $('#wegw_map_filter_btn,.filter_reset').on('click', function(){
                clusterSource.getSource().clear();

                clusterSource = new ol.source.Cluster({
                    distance: 40,
                    source: new ol.source.Vector()
                });
           
                /* Filter Results page map cluster functionality starts */
                var ext = map.getView().calculateExtent(map.getSize());

                var features = [];
                if(places !== undefined){// check if the places has data
                    for (var i = 0; i < places.length; i++) {
                        features[i] = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([places[i]['longitude'], places[i]['latitude']])));
    
                        features[i].set('location_id', places[i]['location_id']);
                        features[i].set('longitude', places[i]['longitude']);
                        features[i].set('latitude', places[i]['latitude']);
                        features[i].set('location_regionen_name', places[i]['location_regionen_name']);
                        features[i].set('location_feature_image', places[i]['location_feature_image']);
                        features[i].set('location_name', places[i]['location_name']);
                        features[i].set('location_desc', places[i]['location_desc']);
                        features[i].set('location_level_cls', places[i]['location_level_cls']);
                        features[i].set('location_level_name', places[i]['location_level_name']);
                        features[i].set('location_hike_time', places[i]['location_hike_time']);
                        features[i].set('location_travel_distance', places[i]['location_travel_distance']);
                        features[i].set('location_hike_ascent', places[i]['location_hike_ascent']);
                        features[i].set('location_hike_descent', places[i]['location_hike_descent']);
                        features[i].set('location_wander_saison_name', places[i]['location_wander_saison_name']);
                        features[i].set('location_link', places[i]['location_link']);
                        features[i].set('watchlisted', places[i]['watchlisted']);
                        features[i].set('average_rating', places[i]['average_rating']);
    
                    }
                
                    clusterSource.getSource().clear();
                    clusterSource.getSource().addFeatures(features);
                
                    clusters = new ol.layer.Vector({
                        source: clusterSource,
                        style: app._getStyle
                    });
              
                    map.addLayer(clusters);

                }   

            });

            /*
            *3D on click event
             */
            $('#'+ mapContainer+' #threeD').on('click', function(){
                if(mapContainer === 'map_desktop'){
                    target = 'cesiumContainerDesktop';
                }else if(mapContainer === 'map-resp'){
                    target = 'cesiumContainerResp';
                }
                app._map3d(map,places, target);

            });

            // Cluster Source
             clusterSource = new ol.source.Cluster({
                distance: 40,
                source: new ol.source.Vector()
            });
            // Animated cluster layer
             clusterLayer = new ol.layer.AnimatedCluster({
                name: 'Cluster',
                source: clusterSource,
                animationDuration: 700,
                style: app._getStyle
            });
            map.addLayer(clusterLayer);
            /* Add hikes count to the cluster function*/
            if(places !== undefined){// check if the places has data
                app._map_cluster_feature(places.length, map);
            }
            

            // Style for selection
            var img = new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: "rgba(0,255,255,1)",
                    width: 3
                }),
                fill: new ol.style.Fill({
                    color: "rgba(0,255,255,0.3)"
                })
            });

            // Select interaction to spread cluster out and select features
            var selectCluster = new ol.interaction.SelectCluster({
                // Point radius: to calculate distance between the features
                pointRadius: 7,
                animate: false,
                // Feature style when it springs apart
                featureStyle: new ol.style.Style({
                    image: img
                }),
                // Style to draw cluster when selected
                style: function(f, res) {
                    var cluster = f.get('features');
                    if (cluster.length > 1) {
                        var s = [app._getStyle(f, res)];
                        return s;
                    } else {
                        return [
                            new ol.style.Style({
                                image: new ol.style.Icon({
                                             anchor: [0.5, 1],
                                             src: url_path +"/pin_wanderung.svg",
                                })
                            })
                        ];
                    }
                }
            });
            map.addInteraction(selectCluster);

            /*
             * to initialize the popup to the map container for cluster map
             */
            const container = document.getElementById('popup');
            popupC = new ol.Overlay({
                element: container,
                positioning: 'center-center',
                autoPan: true,
                autoPanAnimation: {
                    duration: 250
                }
            });
            map.addOverlay(popupC);

            popupC_display_element = jQuery(popupC.getElement());
            
            /* Filter Results page map cluster functionality ends */

            /*
            * to show curson on the marker icon via script
            */
            map.on("pointermove", function (evt) {
                var hit = this.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
                    return true;
                }); 
                if (hit) {
                    this.getTargetElement().style.cursor = 'pointer';
                } else {
                    this.getTargetElement().style.cursor = '';
                }

            });

            /*
            * to display popup content on click event 
            */
            map.on("click", function (evt) {
                var featureItem = map.forEachFeatureAtPixel(evt.pixel, function (feat, layer) {
                    return feat;
                });

                if (featureItem) {
                
                    if (featureItem.get('features').length == 1){
                        var feature = featureItem.get('features')[0];
                        var coordinate = evt.coordinate;    //default projection is EPSG:3857 you may want to use ol.proj.transform
                        var loc_season = feature.get('location_wander_saison_name');
                        if(loc_season.length > 7){
                            loc_season = loc_season.slice(0,7) +"...";

                        }
                        var content = document.getElementById('popupContent');
                        var hikeDescription = feature.get('location_desc').substring(0, hikeDescriptionLetterCount) + "...";
                        content.innerHTML = '<div class="single-wander_popup">'+
							            '<div class="single-wander-img_popup">'+
								            '<img decoding="async" class="wander-img_popup" src="' + feature.get('location_feature_image') + '">'+
								          //  '<div class="single-wander-heart_popup"></div>'+
                                            (feature.get('watchlisted') === 1 ? '<div class="single-wander-heart_popup watchlisted"></div>': '<div class="single-wander-heart_popup" onclick="addToWatchlist(this, '+ feature.get('location_id') +')"></div>')+
							            '</div>'+
                                        '<div class="single-region-rating"><h6 class="single-region">'+ feature.get('location_regionen_name') +'</h6>'+
                                        '<span class="average-rating-display">'+ feature.get('average_rating') +'<i class="fa fa-star"></i></span></div>'+
							             '<h2>'+ feature.get('location_name') +'</h2>'+
							
							            '<div class="wanderung-infobox_popup">'+
								            '<div class="hiking_info_popup">'+
                                                (feature.get('location_level_cls') !== "" ? '<div class="hike_level"><span class="' + feature.get('location_level_cls') + '"></span><p>' + feature.get('location_level_name') + '</p></div>' : '') +
									            //'<div class="hike_level"><span class="'+ feature.get('location_level_cls') +'"></span><p>'+ feature.get('location_level_name') +'</p>  </div>'+
                                                (feature.get('location_hike_time') !== "" ? '<div class="hike_time"> <span class="hike-time-icon"></span> <p>'+ feature.get('location_hike_time') +' h </p> </div>' : '')+
									          //  '<div class="hike_time"> <span class="hike-time-icon"></span> <p>'+ feature.get('location_hike_time') +' h </p> </div>'+
                                                (feature.get('location_travel_distance')  !== "" ? '<div class="hike_distance"><span class="hike-distance-icon"></span><p>'+ feature.get('location_travel_distance') +' km</p> </div>' : "")+
									           // '<div class="hike_distance"><span class="hike-distance-icon"></span><p>'+ feature.get('location_travel_distance') +' km</p> </div>'+
                                               (feature.get('location_hike_ascent') !== "" ? '<div class="hike_ascent"> <span class="hike-ascent-icon"></span><p>'+ feature.get('location_hike_ascent') +' m</p></div>' : "")+
									            //'<div class="hike_ascent"> <span class="hike-ascent-icon"></span><p>'+ feature.get('location_hike_ascent') +' m</p></div>'+
                                                (feature.get('location_hike_descent') !== "" ? '<div class="hike_descent"> <span class="hike-descent-icon"></span><p>'+ feature.get('location_hike_descent') +' m</p></div>' : "")+
									           // '<div class="hike_descent"> <span class="hike-descent-icon"></span><p>'+ feature.get('location_hike_descent') +' m</p></div>'+
                                               (loc_season !== "" ? '<div class="hike_month"><span class="hike-month-icon"></span><p>'+ loc_season +'</p></div>' : "")+
									           // '<div class="hike_month"><span class="hike-month-icon"></span><p>'+ loc_season +'</p></div>'+
							                '</div>'+
							            '</div>'+
						                '<div class="wanderung-desc_popup">'+ hikeDescription +'  </div>'+
                                        '<div class="popup_footer">'+
                                            '<a href="'+ feature.get('location_link') +'"><div class="popup_footer_button">Zur Wanderung</div></a>'+
                                            '<div id="popup-closer" class="close_warap" onclick="close_map_popupCluster()"><span  class="filter_popup_close"></span>   </div>'+
                                        '</div>'+
				                    '</div>';
                                   
                        var center = map.getView().getCenter();
                        var resolution = map.getView().getResolution();
                        popupC.setPosition([center[0] + 10*resolution, center[1] + 10*resolution]);
                        jQuery('.ol-overlaycontainer-stopevent').css('z-index','9');
                        jQuery('.ol-overlay-container.ol-selectable').css('z-index','9');
                    }
                }
                else {
                    jQuery('.ol-overlaycontainer-stopevent').css('z-index','0');
                    jQuery('.ol-overlay-container.ol-selectable').css('z-index','0');
                    popupC.setPosition(undefined);

                }
            });

            /*
            * Zoom to cluster on click
            */ 
            map.on('click', (e) => {
                clusters.getFeatures(e.pixel).then((clickedFeatures) => {
                if (clickedFeatures.length) {
                    // Get clustered Coordinates
                    const features = clickedFeatures[0].get('features');
                    if (features.length > 1) {        
                    const extent = new ol.extent.boundingExtent(
                        features.map((r) => r.getGeometry().getCoordinates())
                    );        
                    map.getView().fit(extent, {duration: 500, padding: [15, 15, 15, 15]});
                    }
                    
                }
                });
            });

            /* 
             * Fliter the map and the teaser when draged or zoom
             */
            /**check if the page has filter button(not tourenportal) */
            if($('.filter-btn.region-filter').length > 0){
                filterOtherPage = 'region';
                loadMoreHikesCount = 9;
            } else {
                filterOtherPage = '';
                loadMoreHikesCount = 20;
            }

            var dataEventAttr = $('#wanderung-loadmore').attr("data-event");
            /* Drag false when map initialize */
            var initialLoadMapDrag = false;

            map.on('moveend',function (evt) {
                /*
                * to remove the check mark if checked and close the sort window 
                */
                //check if its region page or tourenportal page
                if(filterOtherPage === 'region'){
                    if(window.innerWidth < 900){
                        /** sort div for responsive */
                        if ( jQuery(".ListHead.mob .sort-largest").prop('checked') == true ) {
                            jQuery(".ListHead.mob .sort-largest").prop('checked', false); 
                            jQuery(".ListHead.mob .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead.mob .sort_dropdown").css('max-height', "");
                        }
    
                        if ( jQuery(".ListHead.mob .sort-shortest").prop('checked') == true ) {
                            jQuery(".ListHead.mob .sort-shortest").prop('checked', false); 
                            jQuery(".ListHead.mob .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead.mob .sort_dropdown").css('max-height', "");
                        }
                    } else {
                        /**sort div for desktop */
                        if ( jQuery(".ListHead .sort-largest").prop('checked') == true ) {
                            jQuery(".ListHead .sort-largest").prop('checked', false); 
                            jQuery(".ListHead .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead .sort_dropdown").css('max-height', "");
                        }
    
                        if ( jQuery(".ListHead .sort-shortest").prop('checked') == true ) {
                            jQuery(".ListHead .sort-shortest").prop('checked', false); 
                            jQuery(".ListHead .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead .sort_dropdown").css('max-height', "");
                        }
                    }
                }else{
                    if(window.innerWidth < 1200){
                        /** sort div for responsive */
                        if ( jQuery(".ListHead.mob .sort-largest").prop('checked') == true ) {
                            jQuery(".ListHead.mob .sort-largest").prop('checked', false); 
                            jQuery(".ListHead.mob .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead.mob .sort_dropdown").css('max-height', "");
                        }
    
                        if ( jQuery(".ListHead.mob .sort-shortest").prop('checked') == true ) {
                            jQuery(".ListHead.mob .sort-shortest").prop('checked', false); 
                            jQuery(".ListHead.mob .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead.mob .sort_dropdown").css('max-height', "");
                        }
                    } else {
                        /**sort div for desktop */
                        if ( jQuery(".ListHead .sort-largest").prop('checked') == true ) {
                            jQuery(".ListHead .sort-largest").prop('checked', false); 
                            jQuery(".ListHead .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead .sort_dropdown").css('max-height', "");
                        }
    
                        if ( jQuery(".ListHead .sort-shortest").prop('checked') == true ) {
                            jQuery(".ListHead .sort-shortest").prop('checked', false); 
                            jQuery(".ListHead .ListSort .sort_dropdown").removeClass("showSort");
                            jQuery(".ListHead .sort_dropdown").css('max-height', "");
                        }
                    }
                }
                

               // initialLoadMapDrag = true;

                if ( initialLoadMapDrag == true /*&& dataEventAttr != "regionenMap" */) {
                    let details = [];
                    if(places !== undefined){
                        for (let i = 0; i < places.length; i++) {
                            let mapExtent = ol.proj.transformExtent(map.getView().calculateExtent(map.getSize()), 'EPSG:3857', 'EPSG:4326');
                            if (ol.extent.containsXY(mapExtent, places[i].longitude,  places[i].latitude )) {
                                details.push(places[i].location_id);                    
                            }
                        }
                    }

                    /* Check map rendered name type
                    var filterOtherPage;
                    if ($('.filter-btn.region-filter').length > 0) {
                        filterOtherPage = 'region';
                    } else {
                        filterOtherPage = '';
                    } */

                    /* 
                    * Ajax to get teaser based on the active markers 
                    * Map listing results get changed when draging or zooming map
                    * This functionality should only work on map zomm/drag not initial load
                    */
                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: ajax_object.ajax_url,
                        data: {
                            "action": "wanderung_drag_map_hikes_filter",
                            "location_id": details,
                            "map_page": filterOtherPage
                        }
                    }).done(function( results ) {

                        /* Check current displayed markers in map */
                        if( details.length < loadMoreHikesCount) {
                            $('#wanderung-loadmore').hide();
                        } else {
                            $('#wanderung-loadmore').show();
                            $('#wanderung-loadmore').attr("data-event", "dragMap");
                        }

                        if( details.length == 0 ) {
                            if( jQuery(".noWanderung").length > 0 ) {

                            } else {
                                jQuery("#wanderung-loadmore").before('<h2 class="noWanderung">Keine Wanderungen gefunden</h2>');    
                            }
                        } else {
                            jQuery(".noWanderung").remove();
                        }
                        jQuery(".noWanderung").remove();

                         //check if its region page or tourenportal page
                        if(filterOtherPage === 'region'){
                            $('.region-single-wander-wrappe').empty();
                        }else{
                            $('.single-wander-wrappe').empty();
                        }
                        
                        
                        if ( results != null ) {
                            for(let i=0; i< results.length; i++) {
                                var loc_season = results[i].location_wander_saison_name;
                                if( loc_season.length > 7 ) {
                                    loc_season = loc_season.slice(0,7) + "...";
                                }

                                var hikeDescriptionZoomFunc = results[i].location_desc.substring(0, hikeDescriptionLetterCount) + "...";

                                if(filterOtherPage === 'region'){
                                    $('.region-single-wander-wrappe').append('<div class="single-wander"><div class="single-wander-img"><a href="' + 
                                    results[i].location_link + '"><img class="wander-img" src="' + 
                                    results[i].location_feature_image + '"></a><div  '+
                                    (results[i].watchlisted === 0? "class='single-wander-heart' onclick='addToWatchlist(this, "+results[i].location_id +")'":"class='single-wander-heart watchlisted'" )+'></div><div class="single-wander-map" onclick="openPopupMap(this)" data-hikeid="' + 
                                    results[i].location_id + '"></div></div><div class="single-region-rating"><h6 class="single-region">' + 
                                    results[i].location_regionen_name + '</h6><span class="average-rating-display">' + 
                                    results[i].average_rating + '<i class="fa fa-star"></i></span></div><a href="' + 
                                    results[i].location_link + '" class="wander-redirect"><h2>' + 
                                    results[i].location_name + '</h2></a><div class="wanderung-infobox"><div class="hiking_info"><div class="hike_level"><span class="' + 
                                    results[i].location_level_cls + '"></span><p>' + results[i].location_level_name + '</p></div><div class="hike_time"><span class="hike-time-icon"></span><p>' + 
                                    results[i].location_hike_time + ' h </p></div><div class="hike_distance"><span class="hike-distance-icon"></span><p>' + 
                                    results[i].location_travel_distance + ' km</p></div><div class="hike_ascent"><span class="hike-ascent-icon"></span><p>' + 
                                    results[i].location_hike_ascent + ' m</p></div><div class="hike_descent"><span class="hike-descent-icon"></span><p>' +
                                     results[i].location_hike_descent + ' m</p></div><div class="hike_month"><span class="hike-month-icon"></span><p>' + 
                                     loc_season + '</p></div></div></div><div class="wanderung-desc">' + hikeDescriptionZoomFunc + '</div></div>');
                                }else{
                                    $('.single-wander-wrappe').append('<div class="single-wander"><div class="single-wander-img"><a href="' + 
                                    results[i].location_link + '"><img class="wander-img" src="' + 
                                    results[i].location_feature_image + '"></a><div '+
                                    (results[i].watchlisted === 0? "class='single-wander-heart' onclick='addToWatchlist(this, "+results[i].location_id +")'":"class='single-wander-heart watchlisted'" )+'></div><div class="single-wander-map" onclick="openPopupMap(this)" data-hikeid="' + 
                                    results[i].location_id + '"></div></div><div class="single-region-rating"><h6 class="single-region">' + 
                                    results[i].location_regionen_name + '</h6><span class="average-rating-display">' + 
                                    results[i].average_rating + '<i class="fa fa-star"></i></span></div><a href="' + 
                                    results[i].location_link + '" class="wander-redirect"><h2>' + 
                                    results[i].location_name + '</h2></a><div class="wanderung-infobox"><div class="hiking_info"><div class="hike_level"><span class="' + 
                                    results[i].location_level_cls + '"></span><p>' + results[i].location_level_name + '</p></div><div class="hike_time"><span class="hike-time-icon"></span><p>' + 
                                    results[i].location_hike_time + ' h </p></div><div class="hike_distance"><span class="hike-distance-icon"></span><p>' + 
                                    results[i].location_travel_distance + ' km</p></div><div class="hike_ascent"><span class="hike-ascent-icon"></span><p>' + 
                                    results[i].location_hike_ascent + ' m</p></div><div class="hike_descent"><span class="hike-descent-icon"></span><p>' + 
                                    results[i].location_hike_descent + ' m</p></div><div class="hike_month"><span class="hike-month-icon"></span><p>' +
                                     loc_season + '</p></div></div></div><div class="wanderung-desc">' + hikeDescriptionZoomFunc + '</div></div>');
                                }

                            }
                            
                            /* Reload button additional data-event adding for identifying it is clicked on map drag event */
                            if( $('#mapDragFilterHikeId').length > 0 ) {
                                $('#mapDragFilterHikeId').val(details);
                            } else {
                                if(filterOtherPage === 'region'){
                                    $('.region-single-wander-wrappe').after('<input type="hidden" id="mapDragFilterHikeId" value="' + details + '" />');
                                }else{
                                    $('.single-wander-wrappe').after('<input type="hidden" id="mapDragFilterHikeId" value="' + details + '" />');
                                }
                            }
                            /**to remove empty hike info*/
                            toRemoveEmptyHikeInfo();
                        }
                    });
                }
                
               // initialLoadMapDrag = false;
                initialLoadMapDrag = true;
                
            });
        },
        _close_map_popupCluster : function(){
             /*
             * cloase popup function for cluster map 
             */
            popupC.setPosition(undefined);
            jQuery('.ol-overlaycontainer-stopevent').css('z-index','0');
            jQuery('.ol-overlay-container.ol-selectable').css('z-index','0');
        },
        _close_map_popup : function(){
            /*
            *
            close popup function for elvation map 
            */
            popup.setPosition(undefined);
            jQuery('.ol-overlaycontainer-stopevent').css('z-index','0');
            jQuery('.ol-overlay-container.ol-selectable').css('z-index','0');
        },
        _map3d : function(map, json_gpx_data, target){
        /*
        * 3D of map 
        */
            let lat, lon;
            if(target === 'cesiumContainer'){
                let gpx_trackpoints = json_gpx_data.trk.trkseg.trkpt;
                let gpx_middle_cordinates = parseInt(gpx_trackpoints.length/2);
                let gpx_elevation_points = json_gpx_data.trk.trkseg.trkpt[gpx_middle_cordinates].ele;
                lat = parseFloat(gpx_trackpoints[gpx_middle_cordinates]["@attributes"].lat);
                lon = parseFloat(gpx_trackpoints[gpx_middle_cordinates]["@attributes"].lon);
            }else{
                    
                // lat = parseFloat(json_gpx_data[0].longitude);
                // lon =  parseFloat(json_gpx_data[0].latitude);
                lat = 46.93998300;
                lon = 7.78949890;

            }
            
            $('#'+ target).css("display", "block");
            if( $('#'+ target).is(':empty') ) {

                Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkMWYyMmM0Yi1kZjRmLTQxY2QtYjUwOC0zNzBkOTY2ZDUyYjgiLCJpZCI6MTE5ODkzLCJpYXQiOjE2NzIzOTE4NTB9.kpZNJj6N1vV-2SdHyuSN4Y3vLm93P1kdRGA2P8TKtHw';

                /*
                 * Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
                 *  */ 
                const viewer = new Cesium.Viewer(target, {
                    terrainProvider: Cesium.createWorldTerrain()
                });  
                
                /*
                 * Add Cesium OSM Buildings, a global 3D buildings layer.
                 * const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
                 * Fly the camera to  the given longitude, latitude, and height.
                 */
                viewer.camera.flyTo({
                    destination : Cesium.Cartesian3.fromDegrees(lon, lat, 1000),
                    orientation : {
                        heading : Cesium.Math.toRadians(0.0),
                        pitch : Cesium.Math.toRadians(-15.0),
                    }
                });
                if(target === 'cesiumContainer'){
                    for(j=0;j<json_gpx_data.trk.trkseg.trkpt.length;j++){
                        viewer.entities.add({
                            position: Cesium.Cartesian3.fromDegrees(parseFloat(json_gpx_data.trk.trkseg.trkpt[j]["@attributes"].lon), parseFloat(json_gpx_data.trk.trkseg.trkpt[j]["@attributes"].lat)),
                        
                            billboard: {
                                image: url_path +"/pin_wanderung.svg",
                                heightReference : Cesium.HeightReference.CLAMP_TO_GROUND,
                            },
                        });
                    }
                }else{
                      for(i=0;i<json_gpx_data.length; i++){
                     viewer.entities.add({
                        position: Cesium.Cartesian3.fromDegrees(parseFloat(json_gpx_data[i].longitude), parseFloat(json_gpx_data[i].latitude)),
                       
                        billboard: {
                            image: url_path +"/pin_wanderung.svg",
                            heightReference : Cesium.HeightReference.CLAMP_TO_GROUND,
                         },
                    });
                }
                }    
            }else{
                $('#'+ target).html("");
                 $('#'+ target).css("display", "none");
            }      
        }
    }
    app.init();

})(jQuery)



