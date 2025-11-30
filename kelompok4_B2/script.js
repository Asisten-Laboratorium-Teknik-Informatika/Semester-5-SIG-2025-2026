// =================================================================
// 1. INISIALISASI PETA
// =================================================================

// Pusat Peta (Mencakup area Medan dan Deli Serdang)
var center_medan = [3.58, 98.65]; 
var map = L.map('map').setView(center_medan, 10); // Zoom lebih lebar (10)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var geoJsonLayer;
const selectElement = document.getElementById('kecamatan_select');

// =================================================================
// 2. DATA (TOTAL 15 DATA) DAN DATA POLSEK
// =================================================================

// Fungsi untuk membuat poligon kotak kecil (placeholder)
function createPlaceholderPolygon(lat, lon, size = 0.001) {
    const minLon = lon - size;
    const maxLon = lon + size;
    const minLat = lat - size;
    const maxLat = lat + size;
    
    return {
        "type": "Polygon",
        "coordinates": [
            [
                [minLon, minLat], [maxLon, minLat], [maxLon, maxLat], [minLon, maxLat], [minLon, minLat]
            ]
        ]
    };
}

const dummyDataKejahatan = {
  "type": "FeatureCollection",
  "features": [
    // -----------------------------------------------------------------
    // A. DATA KOTA MEDAN (8 KECAMATAN)
    // -----------------------------------------------------------------
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Barat", "TOTAL_KEJAHATAN": 28, "PENCURIAN": 2, "NARKO": 0, "PENIPUAN": 1, "PERJUDIAN": 0,
        "PEMBUNUHAN": 2, "CURANMOR": 17, "KDRT": 0, "PCC_KEKERASAN": 6, "LAT": 3.607817, "LON": 98.668232
      }, "geometry": createPlaceholderPolygon(3.607817, 98.668232)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Timur", "TOTAL_KEJAHATAN": 67, "PENCURIAN": 0, "NARKO": 0, "PENIPUAN": 0, "PERJUDIAN": 0,
        "PEMBUNUHAN": 0, "CURANMOR": 65, "KDRT": 0, "PCC_KEKERASAN": 2, "LAT": 3.623286, "LON": 98.678749
      }, "geometry": createPlaceholderPolygon(3.623286, 98.678749)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Area", "TOTAL_KEJAHATAN": 95, "PENCURIAN": 1, "NARKO": 5, "PENIPUAN": 9, "PERJUDIAN": 2,
        "PEMBUNUHAN": 0, "CURANMOR": 65, "KDRT": 1, "PCC_KEKERASAN": 12, "LAT": 3.586089, "LON": 98.695248
      }, "geometry": createPlaceholderPolygon(3.586089, 98.695248)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Baru", "TOTAL_KEJAHATAN": 219, "PENCURIAN": 44, "NARKO": 0, "PENIPUAN": 54, "PERJUDIAN": 6,
        "PEMBUNUHAN": 0, "CURANMOR": 102, "KDRT": 3, "PCC_KEKERASAN": 10, "LAT": 3.571810, "LON": 98.657350
      }, "geometry": createPlaceholderPolygon(3.571810, 98.657350)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Helvetia", "TOTAL_KEJAHATAN": 70, "PENCURIAN": 2, "NARKO": 0, "PENIPUAN": 4, "PERJUDIAN": 1,
        "PEMBUNUHAN": 0, "CURANMOR": 16, "KDRT": 4, "PCC_KEKERASAN": 3, "LAT": 3.602559, "LON": 98.627831
      }, "geometry": createPlaceholderPolygon(3.602559, 98.627831)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Kota", "TOTAL_KEJAHATAN": 131, "PENCURIAN": 18, "NARKO": 0, "PENIPUAN": 18, "PERJUDIAN": 1,
        "PEMBUNUHAN": 0, "CURANMOR": 74, "KDRT": 16, "PCC_KEKERASAN": 16, "LAT": 3.583879, "LON": 98.686898
      }, "geometry": createPlaceholderPolygon(3.583879, 98.686898)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Sunggal", "TOTAL_KEJAHATAN": 79, "PENCURIAN": 11, "NARKO": 0, "PENIPUAN": 9, "PERJUDIAN": 1,
        "PEMBUNUHAN": 5, "CURANMOR": 22, "KDRT": 17, "PCC_KEKERASAN": 14, "LAT": 3.583077, "LON": 98.642921
      }, "geometry": createPlaceholderPolygon(3.583077, 98.642921)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Medan Tuntungan", "TOTAL_KEJAHATAN": 52, "PENCURIAN": 2, "NARKO": 0, "PENIPUAN": 7, "PERJUDIAN": 0,
        "PEMBUNUHAN": 0, "CURANMOR": 40, "KDRT": 0, "PCC_KEKERASAN": 3, "LAT": 3.524583, "LON": 98.629368
      }, "geometry": createPlaceholderPolygon(3.524583, 98.629368)
    },
    // -----------------------------------------------------------------
    // B. DATA DELI SERDANG (7 WILAYAH)
    // -----------------------------------------------------------------
    {
      "type": "Feature", "properties": {
        "NAMORI": "Patumbak (DS)", "TOTAL_KEJAHATAN": 159, "PENCURIAN": 2, "NARKO": 0, "PENIPUAN": 18, "PERJUDIAN": 0,
        "PEMBUNUHAN": 4, "CURANMOR": 114, "KDRT": 0, "PCC_KEKERASAN": 21, "LAT": 3.500207, "LON": 98.711867
      }, "geometry": createPlaceholderPolygon(3.500207, 98.711867)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Delitua (DS)", "TOTAL_KEJAHATAN": 229, "PENCURIAN": 14, "NARKO": 0, "PENIPUAN": 44, "PERJUDIAN": 2,
        "PEMBUNUHAN": 4, "CURANMOR": 123, "KDRT": 23, "PCC_KEKERASAN": 19, "LAT": 3.507778, "LON": 98.683889
      }, "geometry": createPlaceholderPolygon(3.507778, 98.683889)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Percut Sei Tuan (DS)", "TOTAL_KEJAHATAN": 225, "PENCURIAN": 0, "NARKO": 0, "PENIPUAN": 0, "PERJUDIAN": 1,
        "PEMBUNUHAN": 4, "CURANMOR": 165, "KDRT": 14, "PCC_KEKERASAN": 41, "LAT": 3.596611, "LON": 98.749472
      }, "geometry": createPlaceholderPolygon(3.596611, 98.749472)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Helvetia (DS)", "TOTAL_KEJAHATAN": 70, "PENCURIAN": 2, "NARKO": 0, "PENIPUAN": 44, "PERJUDIAN": 1,
        "PEMBUNUHAN": 0, "CURANMOR": 16, "KDRT": 4, "PCC_KEKERASAN": 3, "LAT": 3.660000, "LON": 98.636000
      }, "geometry": createPlaceholderPolygon(3.660000, 98.636000)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Pancur Batu (DS)", "TOTAL_KEJAHATAN": 115, "PENCURIAN": 11, "NARKO": 0, "PENIPUAN": 2, "PERJUDIAN": 0,
        "PEMBUNUHAN": 3, "CURANMOR": 93, "KDRT": 6, "PCC_KEKERASAN": 0, "LAT": 3.500000, "LON": 98.566667
      }, "geometry": createPlaceholderPolygon(3.500000, 98.566667)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Kutalimbaru (DS)", "TOTAL_KEJAHATAN": 27, "PENCURIAN": 8, "NARKO": 0, "PENIPUAN": 3, "PERJUDIAN": 0,
        "PEMBUNUHAN": 1, "CURANMOR": 13, "KDRT": 1, "PCC_KEKERASAN": 1, "LAT": 3.440282, "LON": 98.545803
      }, "geometry": createPlaceholderPolygon(3.440282, 98.545803)
    },
    {
      "type": "Feature", "properties": {
        "NAMORI": "Tuntungan (DS)", "TOTAL_KEJAHATAN": 52, "PENCURIAN": 2, "NARKO": 0, "PENIPUAN": 7, "PERJUDIAN": 0,
        "PEMBUNUHAN": 0, "CURANMOR": 40, "KDRT": 0, "PCC_KEKERASAN": 3, "LAT": 3.512000, "LON": 98.555000
      }, "geometry": createPlaceholderPolygon(3.512000, 98.555000)
    }
  ]
};

// Data Kantor Polisi (Polsek) 
const dataPolsek = [
    { name: "Polsek Medan Baru", lat: 3.502975, lon: 98.665328, address: "Jl. Majapahit No. 56, Medan Baru" },
    { name: "Polsek Medan Barat", lat: 3.606709, lon: 98.663123, address: "Jl. Bunga Raya No. 1, Medan Barat" },
    { name: "Polsek Medan Timur", lat: 3.601569, lon: 98.681457, address: "Jl. Jawa No. 104, Medan Timur" },
    { name: "Polsek Medan Area", lat: 3.571420, lon: 98.694600, address: "Jl. K.H. Agus Salim, Medan Area" },
    { name: "Polsek Medan Kota", lat: 3.612800, lon: 98.625800, address: "Jl. Kapten Muslim No. 55, Medan Helvetia" }, 
    { name: "Polsek Medan Sunggal", lat: 3.565800, lon: 98.662200, address: "Jl. Sm. Raja No. 17, Medan Kota" }, 
    { name: "Polsek Medan Tuntungan", lat: 3.560250, lon: 98.600750, address: "Jl. T.B. Simatupang No. 27, Medan Sunggal" }, 
    { name: "Polsek Patumbak", lat: 3.525540, lon: 98.630980, address: "Jl. Bunga Rinte No. 11, Medan Tuntungan" }, 
    { name: "Polsek Percut Sei Tuan", lat: 3.571810, lon: 98.716870, address: "Jl. Patumbak Jl. Pertahanan Ujung No. 16, Patumbak" }, 
    { name: "Polsek Kutalimbaru", lat: 3.567080, lon: 98.761500, address: "Jl. Jend. Besar A. H. Nasution Percut Sei Tuan" }, 
    { name: "Polsek Deli Serdang (Tambahan)", lat: 3.649980, lon: 98.537210, address: "Jl. Besar Kutalimbaru No. 16, Kutalimbaru" } 
];

// Fungsi untuk menambahkan marker Polsek ke peta
function addPolsekMarkers() {
    // Definisikan ikon kustom Polsek (GANTI DARI BIRU KE MERAH BINTANG)
    const policeIcon = L.divIcon({
        className: 'custom-polsek-icon',
        html: `<div style="
            background-color: #CC4C02; /* Warna Oranye-Merah */
            color: white; 
            border-radius: 50%; 
            width: 30px; 
            height: 30px; 
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            font-weight: bold;
            border: 2px solid white;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
            ">
            <i class="fas fa-star"></i> 
        </div>`,
        iconSize: [30, 30], // Ukuran div
        iconAnchor: [15, 15] // Titik tengah div
    });

    dataPolsek.forEach(polsek => {
        const marker = L.marker([polsek.lat, polsek.lon], { icon: policeIcon }).addTo(map);
        
        // Popup untuk menampilkan detail Polsek
        marker.bindPopup(
            `<b>${polsek.name}</b><br>` +
            `Alamat: ${polsek.address}<br>` +
            `<small>Lat: ${polsek.lat}, Lon: ${polsek.lon}</small>`
        );
    });
}

// =================================================================
// 3. STYLING (Pewarnaan Peta Berdasarkan Data Kejahatan)
// =================================================================

const grades = [0, 50, 200, 500, 1000]; 
const colors = ['#E0E0E0', '#B39CD0', '#6A51A3', '#3F007D', '#000000']; 

function getColor(d) {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (d > grades[i]) {
            return colors[i];
        }
    }
    return colors[0];
}

function styleKecamatan(feature) {
    const totalKejahatan = feature.properties.TOTAL_KEJAHATAN || 0;
    return {
        fillColor: getColor(totalKejahatan),
        weight: 1, 
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.8
    };
}

// =================================================================
// 4. LOGIKA INTERAKSI (POPUP, DROPDOWN, MARKER)
// =================================================================

// Simpan referensi ke elemen select
// Variabel selectElement dideklarasikan di BARIS 14.

function onEachFeature(feature, layer) {
    const props = feature.properties;
    
    // 4.1. Tambahkan Opsi ke Menu Dropdown (LIST TUNGGAL)
    if (props.NAMORI) {
        const option = document.createElement('option');
        option.value = props.NAMORI;
        option.textContent = props.NAMORI + ' (' + (props.TOTAL_KEJAHATAN || 0) + ' Kasus)';
        selectElement.appendChild(option); 
    }

    // 4.2. Tambahkan Popup Detail Keamanan
    layer.bindPopup(
        '<h4>Wilayah ' + props.NAMORI + '</h4>' +
        '<hr>' +
        '<table>' +
            '<tr><th>Total Kasus</th><td>' + (props.TOTAL_KEJAHATAN || 0) + '</td></tr>' +
            '<tr><th>Pencurian Biasa</th><td>' + (props.PENCURIAN || 0) + '</td></tr>' +
            '<tr><th>Curanmor</th><td>' + (props.CURANMOR || 0) + '</td></tr>' +
            '<tr><th>Pencurian Kekerasan</th><td>' + (props.PCC_KEKERASAN || 0) + '</td></tr>' +
            '<tr><th>Narkotika</th><td>' + (props.NARKO || 0) + '</td></tr>' +
            '<tr><th>Penipuan</th><td>' + (props.PENIPUAN || 0) + '</td></tr>' +
            '<tr><th>Perjudian</th><td>' + (props.PERJUDIAN || 0) + '</td></tr>' +
            '<tr><th>Pembunuhan</th><td>' + (props.PEMBUNUHAN || 0) + '</td></tr>' +
            '<tr><th>KDRT</th><td>' + (props.KDRT || 0) + '</td></tr>' +
        '</table>'
    );

    // 4.3. Tambahkan Marker (Simbol Lokasi) di tengah wilayah
    if (props.LAT && props.LON) {
        // Marker pusat kecamatan menggunakan ikon default
        const marker = L.marker([props.LAT, props.LON]).addTo(map);
        marker.bindPopup('<b>' + props.NAMORI + '</b>');
        layer.marker = marker; 
    }
}

// =================================================================
// 5. MEMUAT DATA SPASIAL
// =================================================================

// Bersihkan opsi lama dari select (kecuali opsi default)
while (selectElement.lastChild && selectElement.lastChild.nodeName.toLowerCase() !== 'option') {
    selectElement.removeChild(selectElement.lastChild);
}

// Hapus opsi default, agar loop dataGeoJSON bisa membuatnya kembali
const defaultOptionCheck = selectElement.querySelector('option[value=""]');
if (defaultOptionCheck) {
    selectElement.removeChild(defaultOptionCheck);
}

// Tambahkan opsi default di awal
const newDefaultOption = document.createElement('option');
newDefaultOption.value = "";
newDefaultOption.textContent = "-- Pilih Wilayah untuk Navigasi --";
selectElement.prepend(newDefaultOption);


if (typeof dummyDataKejahatan !== 'undefined' && dummyDataKejahatan.features.length > 0) {
    geoJsonLayer = L.geoJson(dummyDataKejahatan, {
        style: styleKecamatan,
        onEachFeature: onEachFeature
    }).addTo(map);

    // PANGGIL FUNGSI MARKER POLSEK
    addPolsekMarkers();

    console.log(`✅ Data 15 Wilayah dan Polsek berhasil dimuat!`);
} else {
    console.error("❌ Data GeoJSON tidak ditemukan atau kosong.");
}

// =================================================================
// 6. NAVIGASI PETA BERDASARKAN PILIHAN DROPDOWN
// =================================================================

selectElement.addEventListener('change', function (e) {
    const selectedKecamatan = e.target.value;
    
    if (!selectedKecamatan) {
        map.setView(center_medan, 11); 
        if (geoJsonLayer) {
            geoJsonLayer.eachLayer(layer => {
                geoJsonLayer.resetStyle(layer);
                if (layer.marker) {
                    layer.marker.setOpacity(1); 
                }
            });
        }
        return;
    }

    geoJsonLayer.eachLayer(function (layer) {
        const props = layer.feature.properties;
        
        if (props.NAMORI === selectedKecamatan) {
            
            map.fitBounds(layer.getBounds(), {padding: [50, 50]}); 
            layer.openPopup(); 
            
            layer.setStyle({
                weight: 5,
                color: 'yellow',
                opacity: 1,
                fillOpacity: 0.9
            });

            if (layer.marker) {
                layer.marker.setOpacity(1).addTo(map); 
            }

        } else {
            geoJsonLayer.resetStyle(layer);
            if (layer.marker) {
                 layer.marker.setOpacity(0.5); 
            }
        }
    });
});

// =================================================================
// 7. MENAMBAHKAN KONTROL LEGENDA
// =================================================================

const legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'info legend');
    let labels = [];
    div.innerHTML = '<h4>Tingkat Kejahatan</h4>';
    
    for (let i = 0; i < grades.length; i++) {
        const from = grades[i];
        const to = grades[i + 1];

        labels.push(
            '<i style="background:' + colors[i] + '"></i> ' +
            (from === 0 ? '0' : from.toLocaleString('id-ID')) + 
            (to ? '&ndash;' + to.toLocaleString('id-ID') + ' Kasus' : '+ Kasus')
        );
    }
    
    div.innerHTML += labels.join('<br>');
    return div;
};

legend.addTo(map);