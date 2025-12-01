var size = 0;
var placement = 'point';

var style_buffer_500m_3 = function (feature, resolution) {
    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,150,250,1)',
            width: 2,
            lineDash: [8, 4]        // garis putus-putus
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,255,245,0.10)'  // transparansi 25%
        })
    })];
};
