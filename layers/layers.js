var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_siatka_analiza_15m_1 = new ol.format.GeoJSON();
var features_siatka_analiza_15m_1 = format_siatka_analiza_15m_1.readFeatures(json_siatka_analiza_15m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_analiza_15m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_analiza_15m_1.addFeatures(features_siatka_analiza_15m_1);
var lyr_siatka_analiza_15m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_analiza_15m_1, 
                style: style_siatka_analiza_15m_1,
                popuplayertitle: 'siatka_analiza_15m',
                interactive: true,
    title: 'siatka_analiza_15m<br />\
    <img src="styles/legend/siatka_analiza_15m_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/siatka_analiza_15m_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/siatka_analiza_15m_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/siatka_analiza_15m_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/siatka_analiza_15m_1_4.png" /> 80 - 100<br />' });
var format_granice_miasta_2 = new ol.format.GeoJSON();
var features_granice_miasta_2 = format_granice_miasta_2.readFeatures(json_granice_miasta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_granice_miasta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_granice_miasta_2.addFeatures(features_granice_miasta_2);
var lyr_granice_miasta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_granice_miasta_2, 
                style: style_granice_miasta_2,
                popuplayertitle: 'granice_miasta',
                interactive: true,
                title: '<img src="styles/legend/granice_miasta_2.png" /> granice_miasta'
            });
var format_proponowane_nowe_poi_3 = new ol.format.GeoJSON();
var features_proponowane_nowe_poi_3 = format_proponowane_nowe_poi_3.readFeatures(json_proponowane_nowe_poi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_proponowane_nowe_poi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_proponowane_nowe_poi_3.addFeatures(features_proponowane_nowe_poi_3);
var lyr_proponowane_nowe_poi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_proponowane_nowe_poi_3, 
                style: style_proponowane_nowe_poi_3,
                popuplayertitle: 'proponowane_nowe_poi',
                interactive: true,
                title: '<img src="styles/legend/proponowane_nowe_poi_3.png" /> proponowane_nowe_poi'
            });
var format_poi_skonsolidowane_4 = new ol.format.GeoJSON();
var features_poi_skonsolidowane_4 = format_poi_skonsolidowane_4.readFeatures(json_poi_skonsolidowane_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_skonsolidowane_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_skonsolidowane_4.addFeatures(features_poi_skonsolidowane_4);
var lyr_poi_skonsolidowane_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poi_skonsolidowane_4, 
                style: style_poi_skonsolidowane_4,
                popuplayertitle: 'poi_skonsolidowane',
                interactive: true,
    title: 'poi_skonsolidowane<br />\
    <img src="styles/legend/poi_skonsolidowane_4_0.png" /> poi_edukacja<br />\
    <img src="styles/legend/poi_skonsolidowane_4_1.png" /> poi_handel<br />\
    <img src="styles/legend/poi_skonsolidowane_4_2.png" /> poi_transport<br />\
    <img src="styles/legend/poi_skonsolidowane_4_3.png" /> poi_zdrowie<br />\
    <img src="styles/legend/poi_skonsolidowane_4_4.png" /> poi_zielen<br />' });
var group_BLOK4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'BLOK4'});

lyr_ESRITopo_0.setVisible(true);lyr_siatka_analiza_15m_1.setVisible(true);lyr_granice_miasta_2.setVisible(true);lyr_proponowane_nowe_poi_3.setVisible(true);lyr_poi_skonsolidowane_4.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_siatka_analiza_15m_1,lyr_granice_miasta_2,lyr_proponowane_nowe_poi_3,lyr_poi_skonsolidowane_4];
lyr_siatka_analiza_15m_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'id_2': 'id_2', 'left_2': 'left_2', 'top_2': 'top_2', 'right_2': 'right_2', 'bottom_2': 'bottom_2', 'row_index_': 'row_index_', 'col_index_': 'col_index_', 'cnt_edukac': 'cnt_edukac', 'cnt_zdrowi': 'cnt_zdrowi', 'cnt_handel': 'cnt_handel', 'cnt_zielen': 'cnt_zielen', 'cnt_transp': 'cnt_transp', 'index_15m': 'index_15m', });
lyr_granice_miasta_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', });
lyr_proponowane_nowe_poi_3.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', 'CLUSTER_ID': 'CLUSTER_ID', });
lyr_poi_skonsolidowane_4.set('fieldAliases', {'osm_id_2': 'osm_id_2', 'name_2': 'name_2', 'osm_id_3': 'osm_id_3', 'name_3': 'name_3', 'osm_id_2_2': 'osm_id_2_2', 'name_2_2': 'name_2_2', 'osm_id': 'osm_id', 'name': 'name', 'osm_id_4': 'osm_id_4', 'name_4': 'name_4', 'osm_id_2_3': 'osm_id_2_3', 'name_2_3': 'name_2_3', 'layer': 'layer', 'path': 'path', });
lyr_siatka_analiza_15m_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'id_2': 'TextEdit', 'left_2': 'TextEdit', 'top_2': 'TextEdit', 'right_2': 'TextEdit', 'bottom_2': 'TextEdit', 'row_index_': 'TextEdit', 'col_index_': 'TextEdit', 'cnt_edukac': 'TextEdit', 'cnt_zdrowi': 'TextEdit', 'cnt_handel': 'TextEdit', 'cnt_zielen': 'TextEdit', 'cnt_transp': 'TextEdit', 'index_15m': 'TextEdit', });
lyr_granice_miasta_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', });
lyr_proponowane_nowe_poi_3.set('fieldImages', {'MEAN_X': 'TextEdit', 'MEAN_Y': 'TextEdit', 'CLUSTER_ID': 'TextEdit', });
lyr_poi_skonsolidowane_4.set('fieldImages', {'osm_id_2': 'TextEdit', 'name_2': 'TextEdit', 'osm_id_3': 'TextEdit', 'name_3': 'TextEdit', 'osm_id_2_2': 'TextEdit', 'name_2_2': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'osm_id_4': 'TextEdit', 'name_4': 'TextEdit', 'osm_id_2_3': 'TextEdit', 'name_2_3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_siatka_analiza_15m_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'id_2': 'hidden field', 'left_2': 'hidden field', 'top_2': 'hidden field', 'right_2': 'hidden field', 'bottom_2': 'hidden field', 'row_index_': 'hidden field', 'col_index_': 'hidden field', 'cnt_edukac': 'hidden field', 'cnt_zdrowi': 'hidden field', 'cnt_handel': 'hidden field', 'cnt_zielen': 'hidden field', 'cnt_transp': 'hidden field', 'index_15m': 'inline label - visible with data', });
lyr_granice_miasta_2.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'name': 'no label', });
lyr_proponowane_nowe_poi_3.set('fieldLabels', {'MEAN_X': 'hidden field', 'MEAN_Y': 'hidden field', 'CLUSTER_ID': 'hidden field', });
lyr_poi_skonsolidowane_4.set('fieldLabels', {'osm_id_2': 'hidden field', 'name_2': 'inline label - visible with data', 'osm_id_3': 'hidden field', 'name_3': 'inline label - visible with data', 'osm_id_2_2': 'hidden field', 'name_2_2': 'inline label - visible with data', 'osm_id': 'hidden field', 'name': 'inline label - visible with data', 'osm_id_4': 'hidden field', 'name_4': 'inline label - visible with data', 'osm_id_2_3': 'hidden field', 'name_2_3': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_poi_skonsolidowane_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});