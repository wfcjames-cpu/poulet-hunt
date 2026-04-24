var size = 0;
var placement = 'point';
function categories_Venues_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Drink: Large Beer (Pinta)':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(253,254,111,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.032758620689655175,
                  anchor: [290.0, 290.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/food_pub.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Drink: Quick Shot (Chupito)':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(255,0,255,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 100],
                  scale: 0.19,
                  anchor: [50.0, 50.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Shot.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Drink: Small Beer (Caña)':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(255,158,23,0.6)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 100],
                  scale: 0.19,
                  anchor: [50.0, 50.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Small Beer.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Specialty: Agua de Valencia Pitcher (Group Share)':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(141,90,153,0.5019607843137255)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [100, 100],
                  scale: 0.19,
                  anchor: [50.0, 50.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Pitcher.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Venues_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Forfeit");
    var labelFont = "13.0px \'Helvetica\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Venue_Name") !== null) {
        labelText = String(feature.get("Venue_Name"));
    }
    
    var style = categories_Venues_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
