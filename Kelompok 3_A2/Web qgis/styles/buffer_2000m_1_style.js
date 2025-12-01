var style_buffer_2000m_1 = function (feature, resolution) {
    return [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(230,120,0,1)',
            width: 2,
            lineDash: [8, 4]  // garis putus-putus
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,135,15,0.10)'  // transparansi 10%
        })
    })];
};
