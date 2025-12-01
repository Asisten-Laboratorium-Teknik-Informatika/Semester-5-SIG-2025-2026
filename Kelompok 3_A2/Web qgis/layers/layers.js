var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_buffer_2000m_1 = new ol.format.GeoJSON();
var features_buffer_2000m_1 = format_buffer_2000m_1.readFeatures(json_buffer_2000m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_2000m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_2000m_1.addFeatures(features_buffer_2000m_1);
var lyr_buffer_2000m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_2000m_1, 
                style: style_buffer_2000m_1,
                popuplayertitle: 'buffer_2000m',
                interactive: false,
                title: '<img src="styles/legend/buffer_2000m_1.png" /> buffer_2000m'
            });
var format_buffer_1000m_2 = new ol.format.GeoJSON();
var features_buffer_1000m_2 = format_buffer_1000m_2.readFeatures(json_buffer_1000m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_1000m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_1000m_2.addFeatures(features_buffer_1000m_2);
var lyr_buffer_1000m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_1000m_2, 
                style: style_buffer_1000m_2,
                popuplayertitle: 'buffer_1000m',
                interactive: false,
                title: '<img src="styles/legend/buffer_1000m_2.png" /> buffer_1000m'
            });
var format_buffer_500m_3 = new ol.format.GeoJSON();
var features_buffer_500m_3 = format_buffer_500m_3.readFeatures(json_buffer_500m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_500m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_500m_3.addFeatures(features_buffer_500m_3);
var lyr_buffer_500m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_500m_3, 
                style: style_buffer_500m_3,
                popuplayertitle: 'buffer_500m',
                interactive: false,
                title: '<img src="styles/legend/buffer_500m_3.png" /> buffer_500m'
            });
var format_usuarea_usu_4 = new ol.format.GeoJSON();
var features_usuarea_usu_4 = format_usuarea_usu_4.readFeatures(json_usuarea_usu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_usuarea_usu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_usuarea_usu_4.addFeatures(features_usuarea_usu_4);
var lyr_usuarea_usu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_usuarea_usu_4, 
                style: style_usuarea_usu_4,
                popuplayertitle: 'usu — area_usu',
                interactive: true,
                title: '<img src="styles/legend/usuarea_usu_4.png" /> usu — area_usu'
            });
var format_jalan_5 = new ol.format.GeoJSON();
var features_jalan_5 = format_jalan_5.readFeatures(json_jalan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_5.addFeatures(features_jalan_5);
var lyr_jalan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_5, 
                style: style_jalan_5,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_5.png" /> jalan'
            });
var format_sarana_ibadah_6 = new ol.format.GeoJSON();
var features_sarana_ibadah_6 = format_sarana_ibadah_6.readFeatures(json_sarana_ibadah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sarana_ibadah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sarana_ibadah_6.addFeatures(features_sarana_ibadah_6);
var lyr_sarana_ibadah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sarana_ibadah_6, 
                style: style_sarana_ibadah_6,
                popuplayertitle: 'sarana_ibadah',
                interactive: true,
    title: 'sarana_ibadah<br />\
    <img src="styles/legend/sarana_ibadah_6_0.png" /> Gereja<br />\
    <img src="styles/legend/sarana_ibadah_6_1.png" /> Masjid<br />\
    <img src="styles/legend/sarana_ibadah_6_2.png" /> Peribadatan/Sosial Lainnya<br />\
    <img src="styles/legend/sarana_ibadah_6_3.png" /> Pura<br />\
    <img src="styles/legend/sarana_ibadah_6_4.png" /> Vihara<br />' });
var format_swalayan_usu_7 = new ol.format.GeoJSON();
var features_swalayan_usu_7 = format_swalayan_usu_7.readFeatures(json_swalayan_usu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_swalayan_usu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_swalayan_usu_7.addFeatures(features_swalayan_usu_7);
var lyr_swalayan_usu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_swalayan_usu_7, 
                style: style_swalayan_usu_7,
                popuplayertitle: 'swalayan_usu',
                interactive: true,
                title: '<img src="styles/legend/swalayan_usu_7.png" /> swalayan_usu'
            });
var format_spbu_dekat_ususpbu_usu_8 = new ol.format.GeoJSON();
var features_spbu_dekat_ususpbu_usu_8 = format_spbu_dekat_ususpbu_usu_8.readFeatures(json_spbu_dekat_ususpbu_usu_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_spbu_dekat_ususpbu_usu_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_spbu_dekat_ususpbu_usu_8.addFeatures(features_spbu_dekat_ususpbu_usu_8);
var lyr_spbu_dekat_ususpbu_usu_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_spbu_dekat_ususpbu_usu_8, 
                style: style_spbu_dekat_ususpbu_usu_8,
                popuplayertitle: 'spbu_dekat_usu — spbu_usu',
                interactive: true,
                title: '<img src="styles/legend/spbu_dekat_ususpbu_usu_8.png" /> spbu_dekat_usu — spbu_usu'
            });
var format_layanan_kesehatan_usu_9 = new ol.format.GeoJSON();
var features_layanan_kesehatan_usu_9 = format_layanan_kesehatan_usu_9.readFeatures(json_layanan_kesehatan_usu_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layanan_kesehatan_usu_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layanan_kesehatan_usu_9.addFeatures(features_layanan_kesehatan_usu_9);
var lyr_layanan_kesehatan_usu_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_layanan_kesehatan_usu_9, 
                style: style_layanan_kesehatan_usu_9,
                popuplayertitle: 'layanan_kesehatan_usu',
                interactive: true,
                title: '<img src="styles/legend/layanan_kesehatan_usu_9.png" /> layanan_kesehatan_usu'
            });
var format_rumah_sakit_10 = new ol.format.GeoJSON();
var features_rumah_sakit_10 = format_rumah_sakit_10.readFeatures(json_rumah_sakit_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_sakit_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah_sakit_10.addFeatures(features_rumah_sakit_10);
var lyr_rumah_sakit_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah_sakit_10, 
                style: style_rumah_sakit_10,
                popuplayertitle: 'rumah_sakit',
                interactive: true,
                title: '<img src="styles/legend/rumah_sakit_10.png" /> rumah_sakit'
            });
var format_kulinerdata_11 = new ol.format.GeoJSON();
var features_kulinerdata_11 = format_kulinerdata_11.readFeatures(json_kulinerdata_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kulinerdata_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kulinerdata_11.addFeatures(features_kulinerdata_11);
var lyr_kulinerdata_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kulinerdata_11, 
                style: style_kulinerdata_11,
                popuplayertitle: 'kuliner — data',
                interactive: true,
    title: 'kuliner — data<br />\
    <img src="styles/legend/kulinerdata_11_0.png" /> Kafe<br />\
    <img src="styles/legend/kulinerdata_11_1.png" /> Kedai Kopi<br />\
    <img src="styles/legend/kulinerdata_11_2.png" /> Restoran<br />\
    <img src="styles/legend/kulinerdata_11_3.png" /> Toko Makanan<br />\
    <img src="styles/legend/kulinerdata_11_4.png" /> Warung Bakso<br />\
    <img src="styles/legend/kulinerdata_11_5.png" /> Warung Bakso  <br />\
    <img src="styles/legend/kulinerdata_11_6.png" /> Warung Hamburger<br />\
    <img src="styles/legend/kulinerdata_11_7.png" /> Warung Makanan Dan Minuman<br />\
    <img src="styles/legend/kulinerdata_11_8.png" /> Warung Padang<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_buffer_2000m_1.setVisible(true);lyr_buffer_1000m_2.setVisible(true);lyr_buffer_500m_3.setVisible(true);lyr_usuarea_usu_4.setVisible(true);lyr_jalan_5.setVisible(true);lyr_sarana_ibadah_6.setVisible(true);lyr_swalayan_usu_7.setVisible(true);lyr_spbu_dekat_ususpbu_usu_8.setVisible(true);lyr_layanan_kesehatan_usu_9.setVisible(true);lyr_rumah_sakit_10.setVisible(true);lyr_kulinerdata_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_buffer_2000m_1,lyr_buffer_1000m_2,lyr_buffer_500m_3,lyr_usuarea_usu_4,lyr_jalan_5,lyr_sarana_ibadah_6,lyr_swalayan_usu_7,lyr_spbu_dekat_ususpbu_usu_8,lyr_layanan_kesehatan_usu_9,lyr_rumah_sakit_10,lyr_kulinerdata_11];
lyr_buffer_2000m_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_buffer_1000m_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_buffer_500m_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_usuarea_usu_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_jalan_5.set('fieldAliases', {'fid': 'fid', 'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_sarana_ibadah_6.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_swalayan_usu_7.set('fieldAliases', {'fid': 'fid', 'nama_obj': 'nama_obj', 'alamat': 'alamat', 'link_maps': 'link_maps', 'jam_buka': 'jam_buka', 'latitude': 'latitude', 'Longitude': 'Longitude', });
lyr_spbu_dekat_ususpbu_usu_8.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'layer': 'layer', 'path': 'path', 'Link_Maps': 'Link_Maps', 'Alamat': 'Alamat', });
lyr_layanan_kesehatan_usu_9.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Nama Tempat': 'Nama Tempat', 'Kategori': 'Kategori', 'Alamat': 'Alamat', 'Link Maps': 'Link Maps', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Rating': 'Rating', 'Jam Buka': 'Jam Buka', 'field_10': 'field_10', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', 'layer': 'layer', 'path': 'path', });
lyr_rumah_sakit_10.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_kulinerdata_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Nama Tempat': 'Nama Tempat', 'Kategori': 'Kategori', 'Alamat': 'Alamat', 'Link Maps': 'Link Maps', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Rating': 'Rating', 'Jam Buka': 'Jam Buka', 'Deskripsi Singkat': 'Deskripsi Singkat', });
lyr_buffer_2000m_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_buffer_1000m_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_buffer_500m_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_usuarea_usu_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_jalan_5.set('fieldImages', {'fid': '', 'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_sarana_ibadah_6.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_swalayan_usu_7.set('fieldImages', {'fid': 'TextEdit', 'nama_obj': 'TextEdit', 'alamat': 'TextEdit', 'link_maps': 'TextEdit', 'jam_buka': 'TextEdit', 'latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_spbu_dekat_ususpbu_usu_8.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Link_Maps': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_layanan_kesehatan_usu_9.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Nama Tempat': 'TextEdit', 'Kategori': 'TextEdit', 'Alamat': 'TextEdit', 'Link Maps': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Rating': 'TextEdit', 'Jam Buka': 'TextEdit', 'field_10': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'LKALMT': 'TextEdit', 'TPLYST': 'Range', 'KWKPKM_': 'Range', 'KMPPKM_': 'Range', 'JPLPKM_': 'Range', 'PKMKODE_': 'TextEdit', 'PKMKAT_': 'Range', 'PKMLMT_': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_rumah_sakit_10.set('fieldImages', {'fid': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'Range', 'JPLYRS': 'Range', 'ALAMAT': 'TextEdit', });
lyr_kulinerdata_11.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Nama Tempat': 'TextEdit', 'Kategori': 'TextEdit', 'Alamat': 'TextEdit', 'Link Maps': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Rating': 'TextEdit', 'Jam Buka': 'TextEdit', 'Deskripsi Singkat': 'TextEdit', });
lyr_buffer_2000m_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_buffer_1000m_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_buffer_500m_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_usuarea_usu_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_jalan_5.set('fieldLabels', {'fid': 'hidden field', 'NAMRJL': 'no label', 'KONRJL': 'hidden field', 'MATRJL': 'hidden field', 'FGSRJL': 'hidden field', 'UTKRJL': 'hidden field', 'TOLRJL': 'hidden field', 'WLYRJL': 'hidden field', 'AUTRJL': 'hidden field', 'KLSRJL': 'hidden field', 'SPCRJL': 'hidden field', 'JPARJL': 'hidden field', 'ARHRJL': 'hidden field', 'STARJL': 'hidden field', 'KLLRJL': 'hidden field', 'MEDRJL': 'hidden field', 'LOCRJL': 'hidden field', 'JARRJL': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'SHAPE_Leng': 'hidden field', });
lyr_sarana_ibadah_6.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'no label', 'LUAS': 'hidden field', 'FGSIBD': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', });
lyr_swalayan_usu_7.set('fieldLabels', {'fid': 'hidden field', 'nama_obj': 'no label', 'alamat': 'inline label - visible with data', 'link_maps': 'inline label - visible with data', 'jam_buka': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_spbu_dekat_ususpbu_usu_8.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'no label', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Link_Maps': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', });
lyr_layanan_kesehatan_usu_9.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Nama Tempat': 'no label', 'Kategori': 'no label', 'Alamat': 'inline label - visible with data', 'Link Maps': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Rating': 'inline label - visible with data', 'Jam Buka': 'inline label - visible with data', 'field_10': 'hidden field', 'NAMOBJ': 'no label', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'REMARK': 'hidden field', 'SRS_ID': 'hidden field', 'METADATA': 'hidden field', 'LKALMT': 'hidden field', 'TPLYST': 'hidden field', 'KWKPKM_': 'hidden field', 'KMPPKM_': 'hidden field', 'JPLPKM_': 'hidden field', 'PKMKODE_': 'hidden field', 'PKMKAT_': 'hidden field', 'PKMLMT_': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_rumah_sakit_10.set('fieldLabels', {'fid': 'hidden field', 'NAMOBJ': 'no label', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'TIPRST': 'hidden field', 'JPLYRS': 'hidden field', 'ALAMAT': 'inline label - visible with data', });
lyr_kulinerdata_11.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Nama Tempat': 'no label', 'Kategori': 'no label', 'Alamat': 'inline label - visible with data', 'Link Maps': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Rating': 'inline label - visible with data', 'Jam Buka': 'inline label - visible with data', 'Deskripsi Singkat': 'inline label - visible with data', });
lyr_kulinerdata_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});