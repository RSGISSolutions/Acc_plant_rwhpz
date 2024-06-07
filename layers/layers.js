ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32643").setExtent([666629.133490, 3470666.982602, 679412.347826, 3478935.154347]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WATERSHED_AREA_1 = new ol.format.GeoJSON();
var features_WATERSHED_AREA_1 = format_WATERSHED_AREA_1.readFeatures(json_WATERSHED_AREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_WATERSHED_AREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERSHED_AREA_1.addFeatures(features_WATERSHED_AREA_1);
var lyr_WATERSHED_AREA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERSHED_AREA_1, 
                style: style_WATERSHED_AREA_1,
                popuplayertitle: "WATERSHED_AREA",
                interactive: true,
    title: 'WATERSHED_AREA<br />\
    <img src="styles/legend/WATERSHED_AREA_1_0.png" /> WS 1<br />\
    <img src="styles/legend/WATERSHED_AREA_1_1.png" /> WS 2<br />\
    <img src="styles/legend/WATERSHED_AREA_1_2.png" /> WS 3<br />\
    <img src="styles/legend/WATERSHED_AREA_1_3.png" /> WS 4<br />\
    <img src="styles/legend/WATERSHED_AREA_1_4.png" /> WS 5<br />\
    <img src="styles/legend/WATERSHED_AREA_1_5.png" /> <br />'
        });
var format_RainwaterCollectionSuitableArea_2 = new ol.format.GeoJSON();
var features_RainwaterCollectionSuitableArea_2 = format_RainwaterCollectionSuitableArea_2.readFeatures(json_RainwaterCollectionSuitableArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_RainwaterCollectionSuitableArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RainwaterCollectionSuitableArea_2.addFeatures(features_RainwaterCollectionSuitableArea_2);
var lyr_RainwaterCollectionSuitableArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RainwaterCollectionSuitableArea_2, 
                style: style_RainwaterCollectionSuitableArea_2,
                popuplayertitle: "Rainwater Collection Suitable Area",
                interactive: true,
                    title: '<img src="styles/legend/RainwaterCollectionSuitableArea_2.png" /> Rainwater Collection Suitable Area'
                });
var format_Stream_Order_3 = new ol.format.GeoJSON();
var features_Stream_Order_3 = format_Stream_Order_3.readFeatures(json_Stream_Order_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_Stream_Order_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream_Order_3.addFeatures(features_Stream_Order_3);
var lyr_Stream_Order_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stream_Order_3, 
                style: style_Stream_Order_3,
                popuplayertitle: "Stream_Order",
                interactive: true,
    title: 'Stream_Order<br />\
    <img src="styles/legend/Stream_Order_3_0.png" /> 1<br />\
    <img src="styles/legend/Stream_Order_3_1.png" /> 2<br />\
    <img src="styles/legend/Stream_Order_3_2.png" /> 3<br />\
    <img src="styles/legend/Stream_Order_3_3.png" /> 4<br />\
    <img src="styles/legend/Stream_Order_3_4.png" /> <br />'
        });
var format_VILLEGE_MAP_OF_BILASPUR__4 = new ol.format.GeoJSON();
var features_VILLEGE_MAP_OF_BILASPUR__4 = format_VILLEGE_MAP_OF_BILASPUR__4.readFeatures(json_VILLEGE_MAP_OF_BILASPUR__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_VILLEGE_MAP_OF_BILASPUR__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILLEGE_MAP_OF_BILASPUR__4.addFeatures(features_VILLEGE_MAP_OF_BILASPUR__4);
var lyr_VILLEGE_MAP_OF_BILASPUR__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILLEGE_MAP_OF_BILASPUR__4, 
                style: style_VILLEGE_MAP_OF_BILASPUR__4,
                popuplayertitle: "VILLEGE_MAP_OF_BILASPUR_",
                interactive: true,
                    title: '<img src="styles/legend/VILLEGE_MAP_OF_BILASPUR__4.png" /> VILLEGE_MAP_OF_BILASPUR_'
                });
var format_BILASPUR__5 = new ol.format.GeoJSON();
var features_BILASPUR__5 = format_BILASPUR__5.readFeatures(json_BILASPUR__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32643'});
var jsonSource_BILASPUR__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BILASPUR__5.addFeatures(features_BILASPUR__5);
var lyr_BILASPUR__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BILASPUR__5, 
                style: style_BILASPUR__5,
                popuplayertitle: "BILASPUR_",
                interactive: true,
                    title: '<img src="styles/legend/BILASPUR__5.png" /> BILASPUR_'
                });
var group_LOCATION = new ol.layer.Group({
                                layers: [lyr_VILLEGE_MAP_OF_BILASPUR__4,lyr_BILASPUR__5,],
                                fold: "open",
                                title: "LOCATION"});
var group_RWHAGWPZ = new ol.layer.Group({
                                layers: [lyr_WATERSHED_AREA_1,lyr_RainwaterCollectionSuitableArea_2,lyr_Stream_Order_3,],
                                fold: "open",
                                title: "RWHA & GWPZ"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Base Map"});

lyr_GoogleSatellite_0.setVisible(true);lyr_WATERSHED_AREA_1.setVisible(true);lyr_RainwaterCollectionSuitableArea_2.setVisible(true);lyr_Stream_Order_3.setVisible(true);lyr_VILLEGE_MAP_OF_BILASPUR__4.setVisible(true);lyr_BILASPUR__5.setVisible(true);
var layersList = [group_BaseMap,group_RWHAGWPZ,group_LOCATION];
lyr_WATERSHED_AREA_1.set('fieldAliases', {'id': 'id', 'WS': 'WS', 'Catch_Area': 'Catch_Area', });
lyr_RainwaterCollectionSuitableArea_2.set('fieldAliases', {'Id': 'Id', });
lyr_Stream_Order_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'arcid': 'arcid', 'grid_code': 'grid_code', 'from_node': 'from_node', 'to_node': 'to_node', 'Shape_Leng': 'Shape_Leng', });
lyr_VILLEGE_MAP_OF_BILASPUR__4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'STATE': 'STATE', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BILASPUR__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'STATE': 'STATE', 'TEHSIL': 'TEHSIL', 'VILLAGE': 'VILLAGE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WATERSHED_AREA_1.set('fieldImages', {'id': 'TextEdit', 'WS': 'TextEdit', 'Catch_Area': 'TextEdit', });
lyr_RainwaterCollectionSuitableArea_2.set('fieldImages', {'Id': 'Range', });
lyr_Stream_Order_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'arcid': 'TextEdit', 'grid_code': 'TextEdit', 'from_node': 'TextEdit', 'to_node': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_VILLEGE_MAP_OF_BILASPUR__4.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'STATE': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BILASPUR__5.set('fieldImages', {'OBJECTID': 'TextEdit', 'District': 'TextEdit', 'STATE': 'TextEdit', 'TEHSIL': 'TextEdit', 'VILLAGE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WATERSHED_AREA_1.set('fieldLabels', {'id': 'no label', 'WS': 'inline label - always visible', 'Catch_Area': 'inline label - always visible', });
lyr_RainwaterCollectionSuitableArea_2.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_Stream_Order_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'arcid': 'inline label - always visible', 'grid_code': 'inline label - always visible', 'from_node': 'inline label - always visible', 'to_node': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', });
lyr_VILLEGE_MAP_OF_BILASPUR__4.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'no label', 'STATE': 'no label', 'TEHSIL': 'no label', 'VILLAGE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BILASPUR__5.set('fieldLabels', {'OBJECTID': 'no label', 'District': 'inline label - always visible', 'STATE': 'inline label - always visible', 'TEHSIL': 'inline label - always visible', 'VILLAGE': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BILASPUR__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});