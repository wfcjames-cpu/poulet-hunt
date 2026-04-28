ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-0.380678, 39.470354, -0.370307, 39.479740]);
var wms_layers = [];


        var lyr_CartoDBDarkMatter_0 = new ol.layer.Tile({
            'title': 'CartoDB Dark Matter',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_GameArea_1 = new ol.format.GeoJSON();
var features_GameArea_1 = format_GameArea_1.readFeatures(json_GameArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GameArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GameArea_1.addFeatures(features_GameArea_1);
var lyr_GameArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GameArea_1, 
                style: style_GameArea_1,
                popuplayertitle: 'Game Area',
                interactive: false,
                title: '<img src="styles/legend/GameArea_1.png" /> Game Area'
            });
var format_Venues_2 = new ol.format.GeoJSON();
var features_Venues_2 = format_Venues_2.readFeatures(json_Venues_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Venues_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Venues_2.addFeatures(features_Venues_2);
cluster_Venues_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Venues_2
});
var lyr_Venues_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Venues_2, 
                style: style_Venues_2,
                popuplayertitle: 'Venues',
                interactive: true,
    title: 'Venues<br />\
    <img src="styles/legend/Venues_2_0.png" /> Large Beer (Pinta)<br />\
    <img src="styles/legend/Venues_2_1.png" /> Shot (Chupito)<br />\
    <img src="styles/legend/Venues_2_2.png" /> Small Beer (Caña)<br />\
    <img src="styles/legend/Venues_2_3.png" /> Agua de Valencia Pitcher<br />' });

lyr_CartoDBDarkMatter_0.setVisible(true);lyr_GameArea_1.setVisible(true);lyr_Venues_2.setVisible(true);
var layersList = [lyr_CartoDBDarkMatter_0,lyr_GameArea_1,lyr_Venues_2];
lyr_GameArea_1.set('fieldAliases', {'fid': 'fid', });
lyr_Venues_2.set('fieldAliases', {'fid': 'fid', 'Venue_Name': 'Venue_Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Type': 'Type', 'Style': 'Style', 'Street': 'Street', 'Forfeit': 'Forfeit', });
lyr_GameArea_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Venues_2.set('fieldImages', {'fid': 'Hidden', 'Venue_Name': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Type': 'TextEdit', 'Style': 'TextEdit', 'Street': 'TextEdit', 'Forfeit': 'TextEdit', });
lyr_GameArea_1.set('fieldLabels', {'fid': 'no label', });
lyr_Venues_2.set('fieldLabels', {'Venue_Name': 'no label', 'Type': 'hidden field', 'Style': 'hidden field', 'Street': 'no label', 'Forfeit': 'no label', });
lyr_Venues_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});