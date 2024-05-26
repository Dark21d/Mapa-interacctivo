var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_Puntosapartirdetabla_2 = new ol.format.GeoJSON();
var features_Puntosapartirdetabla_2 = format_Puntosapartirdetabla_2.readFeatures(json_Puntosapartirdetabla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosapartirdetabla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosapartirdetabla_2.addFeatures(features_Puntosapartirdetabla_2);
var lyr_Puntosapartirdetabla_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosapartirdetabla_2, 
                style: style_Puntosapartirdetabla_2,
                popuplayertitle: "Puntos a partir de tabla",
                interactive: true,
                    title: '<img src="styles/legend/Puntosapartirdetabla_2.png" /> Puntos a partir de tabla'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_Puntosapartirdetabla_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_Puntosapartirdetabla_2];
lyr_Puntosapartirdetabla_2.set('fieldAliases', {'fid': 'fid', 'Etiqueta': 'Etiqueta', 'Nombre': 'Nombre', 'Coordenada x': 'Coordenada x', 'Coordenada y': 'Coordenada y', 'Imagen': 'Imagen', });
lyr_Puntosapartirdetabla_2.set('fieldImages', {'fid': 'TextEdit', 'Etiqueta': 'TextEdit', 'Nombre': 'TextEdit', 'Coordenada x': 'TextEdit', 'Coordenada y': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Puntosapartirdetabla_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Etiqueta': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Coordenada x': 'inline label - always visible', 'Coordenada y': 'inline label - always visible', 'Imagen': 'inline label - always visible', });
lyr_Puntosapartirdetabla_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});