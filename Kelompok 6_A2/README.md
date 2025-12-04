# 🌍📊 **Pemetaan Sebaran Penduduk Terpapar Kekeringan Kota Medan (2022)**


#### Proyek Sistem Informasi Geografis Menggunakan QGIS


---

## ✨ Ringkasan Proyek
```
Proyek ini memvisualisasikan sebaran penduduk terpapar kekeringan di Kota Medan berdasarkan data tahun 2022. Analisis dilakukan dengan menggabungkan data spasial (SHP) dan non-spasial (CSV), menerapkan _buffer analysis_ untuk mengetahui jangkauan air bersih PDAM, serta membuat peta tematik tingkat kerentanan menggunakan _graduated symbology_.
```


---

## 🎯 Tujuan

```
- 🔎 Mengidentifikasi distribusi wilayah terdampak kekeringan.
- 📊 Menyajikan peta tematik berbasis data penduduk terpapar, miskin, disabilitas, dan rentan.
- 🚰 Menganalisis jangkauan layanan air bersih melalui _buffer_ PDAM 1 km.
- 🗂️ Menggabungkan dataset spasial dan CSV dalam satu analisis terintegrasi.
```

---

## 🗂️ Dataset yang Digunakan

### 📁 **Layer SHP**

```
- 🗺️ Administrasi Kecamatan
- 🌊 Sungai
- 🏞️ Danau
- 🚰 Kantor Air Minum (PDAM)
- 🌾 Agrisawah
- 🌳 Agrikebun
- 🪵 Agriladang
```

### 📄 **Data CSV**

```
Memuat:

- 👥 Jumlah Penduduk Terpapar Kekeringan
- ♿ Penduduk Disabilitas
- 💸 Penduduk Miskin
- 👶 Penduduk Usia Rentan

CSV di-_join_ ke layer Administrasi Kecamatan sebagai dasar analisis tematik.
```

---

## 🧭 Metode Pengolahan


### 🔗 **1. Join CSV ke Layer Kecamatan**
```
- CSV dimuat ke QGIS dan di-_join_ berdasarkan atribut kecamatan.
- Data digunakan sebagai input klasifikasi tematik.
```
### 🟦 **2. Analisis Buffer PDAM (1 km)**
```
- Layer: titik lokasi kantor air minum.
- Radius _buffer_: 1.000 meter.
- Menggambarkan jangkauan layanan air bersih.
```
### 🎨 **3. Pembuatan Peta Tematik – Graduated Symbology**
```
- Layer: Administrasi Kecamatan
- Parameter klasifikasi: Jumlah Penduduk Terpapar Kekeringan
- Jumlah kelas: 3 segmen
- Skema warna:
  - 🟩 Hijau → tingkat terendah
  - 🟨 Kuning → tingkat sedang
  - 🟥 Merah → tingkat tertinggi
```

---

## 🛠️ Perangkat Lunak

```
- QGIS (direkomendasikan menggunakan versi terbaru)
```

---

## 📁 Struktur Direktori

```
/📂Kelompok 6_A2/
│
├── 📂Dataset/
│ ├── 🗺️ADMINISTRASIKECAMATAN
│ ├── 🗺️DANAU
│ ├── 📊data_medan
│ ├── 🗺️JANGKAUANAIRBERSIH
│ ├── 🗺️KANTORAIRMINUM
│ ├── 🗺️KEBUN
| ├── 📊kerugian_medan
│ ├── 🗺️LADANG
│ ├── 🗺️SAWAH
| └── 🗺️SUNGAI
|
├── 🖼️layout.png
│
├── 📂webQgizKekeringan
| ├── 🗂️css
| ├── 🗂️data
| ├── 🗂️js
| ├── 🗂️legend
| ├── 🗂️webfonts
| └── 📄index.html
├── 💾ProjectKelompokSIG.qgz
└── 📄README.md
```

---

## 🗺️ Output Peta

```
Peta akhir menampilkan:

- 🎯 Peta kerentanan kekeringan dengan 3 tingkat klasifikasi.
- 🌊 Danau dan sungai sebagai elemen hidrologi utama.
- 🌱 Layer penggunaan lahan (sawah, kebun, ladang).
- 🚰 Buffer 1 km PDAM.
- 🧭 Legenda, label kecamatan, dan elemen kartografi lainnya.
```

<img src="./layout.png" alt="Layout Final" style="max-width: 50%; height: auto;">


---

## 📜 Lisensi

Proyek ini dikembangkan sebagai bagian dari tugas mata kuliah dan hanya diperuntukkan  
untuk penggunaan akademik internal. Penggunaan di luar itu memerlukan izin tertulis  
dari pembuat atau pihak institusi.

