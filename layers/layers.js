ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([98.576647, 3.537758, 98.719779, 3.666845]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Joinedlayer_1 = new ol.format.GeoJSON();
var features_Joinedlayer_1 = format_Joinedlayer_1.readFeatures(json_Joinedlayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Joinedlayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Joinedlayer_1.addFeatures(features_Joinedlayer_1);
var lyr_Joinedlayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Joinedlayer_1, 
                style: style_Joinedlayer_1,
                popuplayertitle: 'Joined layer',
                interactive: false,
    title: 'Joined layer<br />\
    <img src="styles/legend/Joinedlayer_1_0.png" /> 3 - 6<br />\
    <img src="styles/legend/Joinedlayer_1_1.png" /> 6 - 9<br />\
    <img src="styles/legend/Joinedlayer_1_2.png" /> 9 - 11<br />\
    <img src="styles/legend/Joinedlayer_1_3.png" /> 11 - 16<br />\
    <img src="styles/legend/Joinedlayer_1_4.png" /> 16 - 35<br />' });
var format_Polygon_Pendidikan_2 = new ol.format.GeoJSON();
var features_Polygon_Pendidikan_2 = format_Polygon_Pendidikan_2.readFeatures(json_Polygon_Pendidikan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Polygon_Pendidikan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_Pendidikan_2.addFeatures(features_Polygon_Pendidikan_2);
var lyr_Polygon_Pendidikan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_Pendidikan_2, 
                style: style_Polygon_Pendidikan_2,
                popuplayertitle: 'Polygon_Pendidikan',
                interactive: false,
                title: '<img src="styles/legend/Polygon_Pendidikan_2.png" /> Polygon_Pendidikan'
            });
var format_Titik_Pendidikan_3 = new ol.format.GeoJSON();
var features_Titik_Pendidikan_3 = format_Titik_Pendidikan_3.readFeatures(json_Titik_Pendidikan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Titik_Pendidikan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Pendidikan_3.addFeatures(features_Titik_Pendidikan_3);
var lyr_Titik_Pendidikan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_Pendidikan_3, 
                style: style_Titik_Pendidikan_3,
                popuplayertitle: 'Titik_Pendidikan',
                interactive: true,
    title: 'Titik_Pendidikan<br />\
    <img src="styles/legend/Titik_Pendidikan_3_0.png" /> Lainnya<br />\
    <img src="styles/legend/Titik_Pendidikan_3_1.png" /> PAUD/TK<br />\
    <img src="styles/legend/Titik_Pendidikan_3_2.png" /> SD<br />\
    <img src="styles/legend/Titik_Pendidikan_3_3.png" /> SMA<br />\
    <img src="styles/legend/Titik_Pendidikan_3_4.png" /> SMK<br />\
    <img src="styles/legend/Titik_Pendidikan_3_5.png" /> SMP<br />' });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: 'Buffered',
                interactive: false,
    title: 'Buffered<br />\
    <img src="styles/legend/Buffered_4_0.png" /> Lainnya<br />\
    <img src="styles/legend/Buffered_4_1.png" /> PAUD/TK<br />\
    <img src="styles/legend/Buffered_4_2.png" /> SD<br />\
    <img src="styles/legend/Buffered_4_3.png" /> SMA<br />\
    <img src="styles/legend/Buffered_4_4.png" /> SMK<br />\
    <img src="styles/legend/Buffered_4_5.png" /> SMP<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Joinedlayer_1.setVisible(true);lyr_Polygon_Pendidikan_2.setVisible(true);lyr_Titik_Pendidikan_3.setVisible(true);lyr_Buffered_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Joinedlayer_1,lyr_Polygon_Pendidikan_2,lyr_Titik_Pendidikan_3,lyr_Buffered_4];
lyr_Joinedlayer_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'id_count': 'id_count', 'Nama Sekol_count': 'Nama Sekol_count', 'NPSN_count': 'NPSN_count', 'Status_count': 'Status_count', 'Alamat_count': 'Alamat_count', 'Jenjang_count': 'Jenjang_count', 'akreditasi_count': 'akreditasi_count', 'Latitude_count': 'Latitude_count', 'Longtitude_count': 'Longtitude_count', });
lyr_Polygon_Pendidikan_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'name_en': 'name_en', 'denominati': 'denominati', 'operator': 'operator', 'name_id': 'name_id', 'phone': 'phone', 'layer': 'layer', 'grades': 'grades', 'email': 'email', 'descriptio': 'descriptio', 'website': 'website', 'school': 'school', 'amenity_1': 'amenity_1', 'religion': 'religion', 'school_typ': 'school_typ', 'operator_t': 'operator_t', 'building_m': 'building_m', 'building_f': 'building_f', 'building_c': 'building_c', 'backup_gen': 'backup_gen', 'building_p': 'building_p', 'sport': 'sport', 'lit': 'lit', 'leisure': 'leisure', 'check_date': 'check_date', 'capacity_p': 'capacity_p', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'type_id': 'type_id', 'type': 'type', 'name': 'name', 'building_w': 'building_w', 'building_s': 'building_s', 'building_r': 'building_r', 'building_l': 'building_l', 'building': 'building', 'addr_full': 'addr_full', 'access_roo': 'access_roo', });
lyr_Titik_Pendidikan_3.set('fieldAliases', {'id': 'id', 'Nama Sekol': 'Nama Sekol', 'NPSN': 'NPSN', 'Status': 'Status', 'Alamat': 'Alamat', 'Jenjang': 'Jenjang', 'akreditasi': 'akreditasi', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', });
lyr_Buffered_4.set('fieldAliases', {'id': 'id', 'Nama Sekol': 'Nama Sekol', 'NPSN': 'NPSN', 'Status': 'Status', 'Alamat': 'Alamat', 'Jenjang': 'Jenjang', 'akreditasi': 'akreditasi', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', });
lyr_Joinedlayer_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'id_count': 'TextEdit', 'Nama Sekol_count': 'TextEdit', 'NPSN_count': 'TextEdit', 'Status_count': 'TextEdit', 'Alamat_count': 'TextEdit', 'Jenjang_count': 'TextEdit', 'akreditasi_count': 'TextEdit', 'Latitude_count': 'TextEdit', 'Longtitude_count': 'TextEdit', });
lyr_Polygon_Pendidikan_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'name_en': 'TextEdit', 'denominati': 'TextEdit', 'operator': 'TextEdit', 'name_id': 'TextEdit', 'phone': 'TextEdit', 'layer': 'TextEdit', 'grades': 'TextEdit', 'email': 'TextEdit', 'descriptio': 'TextEdit', 'website': 'TextEdit', 'school': 'TextEdit', 'amenity_1': 'TextEdit', 'religion': 'TextEdit', 'school_typ': 'TextEdit', 'operator_t': 'TextEdit', 'building_m': 'TextEdit', 'building_f': 'TextEdit', 'building_c': 'TextEdit', 'backup_gen': 'TextEdit', 'building_p': 'TextEdit', 'sport': 'TextEdit', 'lit': 'TextEdit', 'leisure': 'TextEdit', 'check_date': 'TextEdit', 'capacity_p': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'type_id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'building_w': 'TextEdit', 'building_s': 'TextEdit', 'building_r': 'TextEdit', 'building_l': 'TextEdit', 'building': 'TextEdit', 'addr_full': 'TextEdit', 'access_roo': 'TextEdit', });
lyr_Titik_Pendidikan_3.set('fieldImages', {'id': 'TextEdit', 'Nama Sekol': 'TextEdit', 'NPSN': 'TextEdit', 'Status': 'TextEdit', 'Alamat': 'TextEdit', 'Jenjang': 'TextEdit', 'akreditasi': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {'id': 'TextEdit', 'Nama Sekol': 'TextEdit', 'NPSN': 'TextEdit', 'Status': 'TextEdit', 'Alamat': 'TextEdit', 'Jenjang': 'TextEdit', 'akreditasi': 'TextEdit', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', });
lyr_Joinedlayer_1.set('fieldLabels', {'KDPPUM': 'header label - visible with data', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'id_count': 'no label', 'Nama Sekol_count': 'no label', 'NPSN_count': 'no label', 'Status_count': 'no label', 'Alamat_count': 'no label', 'Jenjang_count': 'no label', 'akreditasi_count': 'no label', 'Latitude_count': 'no label', 'Longtitude_count': 'no label', });
lyr_Polygon_Pendidikan_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'name_en': 'no label', 'denominati': 'no label', 'operator': 'no label', 'name_id': 'no label', 'phone': 'no label', 'layer': 'no label', 'grades': 'no label', 'email': 'no label', 'descriptio': 'no label', 'website': 'no label', 'school': 'no label', 'amenity_1': 'no label', 'religion': 'no label', 'school_typ': 'no label', 'operator_t': 'no label', 'building_m': 'no label', 'building_f': 'no label', 'building_c': 'no label', 'backup_gen': 'no label', 'building_p': 'no label', 'sport': 'no label', 'lit': 'no label', 'leisure': 'no label', 'check_date': 'no label', 'capacity_p': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', 'type_id': 'no label', 'type': 'no label', 'name': 'no label', 'building_w': 'no label', 'building_s': 'no label', 'building_r': 'no label', 'building_l': 'no label', 'building': 'no label', 'addr_full': 'no label', 'access_roo': 'no label', });
lyr_Titik_Pendidikan_3.set('fieldLabels', {'id': 'hidden field', 'Nama Sekol': 'header label - always visible', 'NPSN': 'inline label - always visible', 'Status': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Jenjang': 'inline label - always visible', 'akreditasi': 'hidden field', 'Latitude': 'hidden field', 'Longtitude': 'hidden field', });
lyr_Buffered_4.set('fieldLabels', {'id': 'header label - visible with data', 'Nama Sekol': 'no label', 'NPSN': 'no label', 'Status': 'no label', 'Alamat': 'no label', 'Jenjang': 'no label', 'akreditasi': 'no label', 'Latitude': 'no label', 'Longtitude': 'no label', });
lyr_Buffered_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});