var myLayerKosan = layer_LokasiKost_4;
var myLayerKuliner = layer_KulinerUSU_3;
var radiusFilter = 100;

// --- 1. GENERATE LIST SIDEBAR (VERSI UPDATE: CUMA 'nama') ---
function generateSidebarList() {
  var container = document.getElementById("kos-list-container");
  container.innerHTML = ""; // Bersihkan list dulu

  // Cek Layer
  if (!myLayerKosan) {
    console.error("Layer Kosan Gak Ketemu! Cek nama variabelnya lagi.");
    return;
  }

  myLayerKosan.eachLayer(function (layer) {
    var props = layer.feature.properties;

    // UPDATE DISINI: Panggil kolom 'nama' (sesuai data kamu)
    // Kadang QGIS export jadi 'nama', 'Nama', atau 'NAMA'. Kita jaga-jaga pake OR (||)
    var namaKos = props["nama"] || props["Nama"] || props["NAMA"] || "Tanpa Nama";

    // Karena harga gak ada, kita apus variabel harga atau ganti text dummy
    var infoBawah = "Klik untuk lihat detail";

    var item = document.createElement("div");
    item.className = "kos-item";
    item.style.cssText = "padding: 15px; border-bottom: 1px solid #f0f0f0; cursor: pointer; transition: 0.2s;";

    // TAMPILAN ITEM DI LIST
    item.innerHTML = `
            <div style="font-weight:600; color:#2d3436; margin-bottom:4px; font-size:1rem;">
                ${namaKos}
            </div>
            <div style="font-size:0.8rem; color:#0984e3;">
                <i class="fa-solid fa-location-dot"></i> ${infoBawah}
            </div>
        `;

    // Hover Effect
    item.onmouseover = function () {
      this.style.background = "#f8f9fa";
    };
    item.onmouseout = function () {
      this.style.background = "white";
    };

    // KLIK ITEM
    item.onclick = function () {
      focusOnKos(layer);
    };

    container.appendChild(item);
  });
}

// FITUR SEARCH BAR
document.getElementById("search-input").addEventListener("keyup", function (e) {
  var searchVal = e.target.value.toLowerCase();
  var listItems = document.querySelectorAll(".kos-item");
  listItems.forEach(function (item) {
    var text = item.innerText.toLowerCase();
    item.style.display = text.includes(searchVal) ? "block" : "none";
  });
});

function focusOnKos(selectedLayer) {
  var centerPoint = selectedLayer.getLatLng();

  // A. Terbang ke lokasi
  map.flyTo(centerPoint, 19, { duration: 1.5 });

  // B. Buka Popup
  setTimeout(function () {
    selectedLayer.openPopup();
  }, 1500);

  // C. Munculin Tombol Reset
  document.getElementById("btn-reset").style.display = "block";

  // D. FILTER KOSAN LAIN (SEMBUNYIKAN YANG BUKAN DIPILIH)
  myLayerKosan.eachLayer(function (marker) {
    if (marker === selectedLayer) {
      setMarkerVisible(marker, true); // Ini yang dipilih, tetep muncul
    } else {
      setMarkerVisible(marker, false); // Yang lain ngilang
    }
  });

  // E. FILTER KULINER (HITUNG JARAK)
  if (myLayerKuliner) {
    myLayerKuliner.eachLayer(function (foodMarker) {
      var foodLoc = foodMarker.getLatLng();
      // Hitung jarak (distanceTo adalah fungsi bawaan Leaflet, satuannya Meter)
      var distance = centerPoint.distanceTo(foodLoc);

      if (distance <= radiusFilter) {
        setMarkerVisible(foodMarker, true); // Muncul kalo deket (<= 100m)
      } else {
        setMarkerVisible(foodMarker, false); // Ilang kalo jauh
      }
    });
  }
}

function resetMap() {
  // Balikin zoom peta (opsional, sesuaikan koordinat default map kamu)
  // map.setView([3.5xxx, 98.6xxx], 15);

  // Munculin Semua Kosan
  myLayerKosan.eachLayer(function (marker) {
    setMarkerVisible(marker, true);
  });

  // Munculin Semua Kuliner
  if (myLayerKuliner) {
    myLayerKuliner.eachLayer(function (marker) {
      setMarkerVisible(marker, true);
    });
  }

  // Umpetin Tombol Reset
  document.getElementById("btn-reset").style.display = "none";

  // Tutup popup kalo ada yang kebuka
  map.closePopup();
}

// --- HELPER: CARA NGILANGIN MARKER DI LEAFLET ---
function setMarkerVisible(marker, isVisible) {
  if (isVisible) {
    marker.setOpacity(1);
    if (marker.getElement()) marker.getElement().style.display = ""; // Munculin HTML elementnya
    marker.unbindTooltip(); // Opsional: balikin tooltip
  } else {
    marker.setOpacity(0); // Bikin transparan
    if (marker.getElement()) marker.getElement().style.display = "none"; // Sembunyiin HTML elementnya biar gak bisa diklik
    marker.closePopup();
  }
}

// Jalankan fungsi setelah map ready
generateSidebarList();
