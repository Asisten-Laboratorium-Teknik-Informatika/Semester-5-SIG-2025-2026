var size = 0;
var placement = 'point';
function categories_Titik_Pendidikan_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Lainnya':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1024, 721],
                  scale: 0.0107421875,
                  anchor: [512.0, 360.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/SLB_Logo_2022.svg.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PAUD/TK':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [405, 405],
                  scale: 0.04691358024691358,
                  anchor: [202.5, 202.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/2d57400bf03bbdbfd9e33560e4cfc62c.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SD':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1200, 630],
                  scale: 0.015833333333333335,
                  anchor: [600.0, 315.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Logo Sekolah Dasar (Logo SD).svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SMA':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [720, 405],
                  scale: 0.02638888888888889,
                  anchor: [360.0, 202.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/980232_720.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SMK':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [600, 556],
                  scale: 0.03166666666666667,
                  anchor: [300.0, 278.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/cropped-logo.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SMP':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [600, 338],
                  scale: 0.03166666666666667,
                  anchor: [300.0, 169.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/logo-osis-sma_169.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Titik_Pendidikan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Jenjang");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Titik_Pendidikan_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
