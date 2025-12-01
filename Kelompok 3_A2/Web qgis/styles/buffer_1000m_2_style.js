var style_buffer_1000m_2 = function (feature, resolution) {
    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,180,0,1)',
            width: 2,
            lineDash: [8, 4]  // garis putus-putus
        }),
        fill: new ol.style.Fill({
            color: 'rgba(97,255,0,0.10)'  // transparansi 10%
        })
    })];
};
