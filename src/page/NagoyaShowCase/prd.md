# PRD Landing Page Hunian Apartemen Modern
C:\Users\le\Documents\Arus Digital\project\JS\portfolio\src\page\NagoyaShowCase\prog.md update prog kesini
## 1. Ringkasan

Dokumen ini mendefinisikan product requirement untuk redesign landing page bertema hunian apartemen modern. Halaman ditujukan untuk mempresentasikan sebuah properti residensial premium dengan nuansa elegan, bersih, hangat, dan meyakinkan, sekaligus menyediakan mini e-commerce untuk mendukung konversi awal seperti booking unit, pembelian add-on, dan reservasi fasilitas.

Konteks implementasi saat ini berada di project portfolio React dan dapat dijadikan halaman khusus baru atau evolusi dari `src/components/NagoyaShowcasePage.tsx` bila ingin diposisikan sebagai showcase produk properti.

## 2. Tujuan Produk

### Tujuan bisnis

- Meningkatkan minat calon penghuni terhadap unit apartemen.
- Mengubah traffic landing page menjadi lead yang terukur.
- Menyediakan jalur konversi cepat untuk booking visit, booking fee, atau reservasi fasilitas.
- Menampilkan citra brand properti yang modern dan premium.

### Tujuan pengguna

- Memahami value utama apartemen dalam beberapa detik pertama.
- Menjelajahi tipe unit, fasilitas, lokasi, dan harga secara mudah.
- Melihat ketersediaan unit atau penawaran yang relevan.
- Melakukan aksi cepat tanpa harus menghubungi sales terlebih dahulu.
- Untuk audience Singapura dan luar negeri, memahami kualitas unit dan lokasi tanpa harus datang onsite di tahap awal.

## 3. Target Pengguna

### Primary

- Profesional muda usia 24-38 tahun.
- Pasangan muda yang mencari hunian pertama.
- Investor properti skala kecil hingga menengah.

### Secondary

- Existing resident yang ingin booking fasilitas atau membeli add-on layanan.
- Corporate tenant atau relokasi karyawan.
- Buyer atau tenant dari Singapura dan luar negeri yang mencari hunian strategis, second home, atau unit dekat akses bisnis dan transportasi.

### Segmentasi geografis

- Lokal Batam untuk end-user, keluarga muda, dan pembeli upgrade hunian.
- Domestik luar Batam untuk investor, pembeli second home, dan relokasi kerja.
- Singapura sebagai target cross-border buyer, business-living prospect, atau short-stay premium resident.
- Luar negeri non-Singapura untuk investor, diaspora, dan professional relocation audience.

## 4. Positioning dan Gaya Visual

Landing page harus terasa seperti brand hunian urban premium, bukan portal listing generik.

### Arah visual

- Modern, calm, premium, architectural.
- Dominan white, warm gray, charcoal, muted olive, sand, atau brass accent.
- Banyak ruang kosong, grid rapi, photography-led.
- Typography elegan dengan heading yang berkarakter dan body text yang sangat readable.

### Referensi rasa

- Developer property premium.
- Hospitality website kelas menengah atas.
- Interior editorial dengan nuansa lifestyle urban.

### Hal yang harus dihindari

- Tampilan terlalu ramai seperti marketplace umum.
- Warna terlalu neon atau kontras berlebihan.
- Card dan section yang semuanya terlihat sama.
- Kesan corporate kaku seperti dashboard internal.

## 5. Problem Statement

Calon penghuni sering mendapatkan informasi properti secara terfragmentasi: brosur, chat admin, media sosial, dan visit offline. Hal ini membuat proses evaluasi unit, fasilitas, harga, dan langkah berikutnya terasa lambat. Landing page harus menyatukan semua informasi penting dalam satu pengalaman yang aspiratif tetapi tetap konversi-oriented.

## 6. Value Proposition

- Temukan hunian modern dengan informasi lengkap dalam satu halaman.
- Lihat tipe unit, fasilitas, dan lingkungan hidup secara visual dan jelas.
- Lakukan tindakan cepat: jadwalkan kunjungan, bayar booking fee, atau beli kebutuhan pendukung.
- Bagi penghuni, akses mini e-commerce untuk kebutuhan gaya hidup dan layanan gedung.

## 7. Scope Fitur

### 7.1 Landing page utama

- Hero section dengan headline kuat, subheadline, CTA utama, dan visual bangunan/interior.
- Quick facts section berisi lokasi, starting price, serah terima, ukuran unit, dan occupancy highlights.
- Tipe unit section dengan kartu atau carousel per tipe unit.
- Fasilitas unggulan dengan visual besar dan copy singkat.
- Demo experience section untuk photo sphere dan virtual walk-in show unit.
- Lifestyle/location section dengan peta ringkas atau nearby places.
- Testimoni atau social proof.
- Promo/penawaran terbatas.
- CTA sticky untuk `Book Visit`, `Download Brochure`, dan `Check Availability`.

### 7.2 Mini e-commerce

- Product list ringan untuk item yang masih relevan dengan ekosistem apartemen.
- Kategori awal:
  - Furnishing packs.
  - Add-on smart home.
  - Housekeeping / cleaning packages.
  - Facility booking passes.
  - Moving-in assistance.
- Product card dengan image, name, short benefit, price, dan CTA.
- Simple cart/booking tray.
- Checkout ringan berbasis form, belum perlu full payment gateway di versi awal.

### 7.3 Lead capture

- Inquiry form singkat.
- Book visit form.
- Download brochure dengan capture nama, WhatsApp, dan email.
- Sticky contact CTA untuk WhatsApp dan phone call.

### 7.4 Trust building

- Developer profile singkat.
- Legal/ownership highlights.
- FAQ.
- Kebijakan booking/refund singkat jika ada transaksi mini-commerce.

## 8. Struktur Informasi Halaman

Urutan section yang direkomendasikan:

1. Navbar transparan lalu solid saat scroll.
2. Hero with cinematic image/video.
3. Quick stats / property highlights.
4. Why this residence.
5. Unit types.
6. Floor plan preview.
7. Demo experience: photo sphere / virtual walk-in.
8. Facilities and amenities.
9. Neighborhood and accessibility.
10. Mini e-commerce showcase.
11. Testimonials / occupancy signal.
12. FAQ.
13. Lead capture CTA block.
14. Footer.

## 9. Detail Kebutuhan Per Section

### 9.1 Hero

Tujuan:
- Menjual ambience dan positioning dalam 5 detik pertama.

Konten:
- Headline contoh: `Modern Urban Living, Designed Around Everyday Ease`.
- Subheadline singkat.
- CTA primer: `Schedule a Visit`.
- CTA sekunder: `Explore Unit Types`.
- Background image/video gedung, lobby, atau interior unit.

Catatan UX:
- Hero harus langsung meyakinkan tanpa terlalu banyak teks.
- Pada mobile, CTA harus muncul above the fold.

### 9.2 Quick highlights

Konten:
- Starting from price.
- Lokasi utama.
- Tipe unit tersedia.
- Estimasi service charge atau benefit tertentu.
- Status: ready / limited / presale.

Format:
- Horizontal metrics cards atau split layout.

### 9.3 Unit types

Konten minimal per unit:
- Nama tipe.
- Luas.
- Jumlah kamar tidur/kamar mandi.
- Starting price.
- 1 visual utama.
- CTA `View Details` atau `Reserve`.

Opsional:
- Floor plan modal.
- Availability badge.

### 9.4 Facilities

Konten:
- Pool.
- Gym.
- Lounge.
- Kids area.
- Parking.
- Smart access/security.

Format:
- Editorial blocks dengan kombinasi image besar dan copy pendek.

### 9.5 Demo experience

Tujuan:
- Memberi pengalaman eksplorasi unit untuk user yang belum bisa datang langsung.
- Meningkatkan trust untuk market lokal yang ingin screening cepat dan untuk audience SG/luar negeri yang mengandalkan remote evaluation.

Konten:
- Photo sphere 360 untuk lobby, show unit, balkon view, dan fasilitas utama.
- Virtual walk-in flow untuk simulasi masuk ke unit contoh.
- Hotspot info untuk menjelaskan detail penting seperti kitchen set, smart lock, storage, bathroom finish, dan view unit.

Format:
- Section imersif full-width dengan viewer utama.
- Fallback berupa galeri image statis bila viewer berat atau koneksi lambat.

CTA:
- `Explore Show Unit`
- `View 360 Tour`
- `Book Physical Visit`

### 9.6 Mini e-commerce

Fungsi:
- Menjadi jembatan antara inspirasi properti dan aksi komersial sederhana.

Use cases:
- Calon pembeli memilih furnishing starter pack.
- Existing resident booking cleaning package.
- User membeli akses amenity tertentu atau reservasi fasilitas berbayar.

MVP feature set:
- Katalog produk.
- Filter kategori.
- Product detail drawer/modal.
- Add to cart.
- Order summary.
- Checkout inquiry form.
- Order success state.

Field checkout MVP:
- Nama.
- No. WhatsApp.
- Email.
- Tipe kebutuhan.
- Catatan.
- Preferred date bila service-based.

Non-goal MVP:
- Tidak wajib full payment gateway.
- Tidak wajib user login.
- Tidak wajib stock sync real-time.

### 9.7 FAQ

Contoh topik:
- Cara booking visit.
- Apakah unit ready atau indent.
- Apa saja biaya awal.
- Apakah ada cicilan atau booking fee.
- Cara memesan layanan tambahan.

### 9.8 Final CTA

Target:
- Menutup halaman dengan CTA yang jelas dan tidak generik.

CTA utama:
- `Book Private Tour`

CTA sekunder:
- `Talk to Sales`
- `Get Brochure`

## 10. Kebutuhan Fungsional

### Core

- User dapat melihat informasi properti tanpa login.
- User dapat scroll semua section dengan performa baik di mobile.
- User dapat membuka detail unit.
- User dapat membuka demo photo sphere atau virtual walk-in di desktop dan mobile.
- User dapat membuka detail produk mini-commerce.
- User dapat menambahkan item ke cart sederhana.
- User dapat mengirim inquiry atau booking request.

### Interaksi

- CTA sticky di mobile.
- Smooth scroll antar section.
- Modal/drawer yang accessible.
- Demo 360 tetap usable dengan touch gesture di mobile.
- Form validation yang jelas.
- Success feedback setelah submit.

### Konten dinamis

- Data unit sebaiknya dipisah ke file data agar mudah diganti.
- Data mini-commerce juga sebaiknya data-driven.
- Support bilingual `en/id` bila ingin konsisten dengan struktur data yang sudah ada.

## 11. Kebutuhan Non-Fungsional

- Mobile-first dan sangat rapi di viewport sempit.
- Lighthouse performance tetap baik meskipun visual-heavy.
- Gambar harus dioptimasi.
- Asset panorama atau virtual demo harus punya fallback image yang ringan.
- Accessibility dasar: heading structure, alt text, keyboard modal close, visible focus state.
- SEO dasar: title, description, OG image, structured content per section.

## 12. Gaya UI yang Direkomendasikan

### Layout

- Grid editorial 12 kolom di desktop.
- Banyak section dengan split asymmetrical layout.
- Sticky CTA atau floating inquiry chip.

### Typography

- Heading serif modern atau display elegan.
- Body sans yang bersih dan ringan.
- Typographic scale tegas antara hero, section title, dan body.

### Motion

- Reveal halus saat scroll.
- Image parallax ringan.
- Hover card subtle, bukan animasi berlebihan.

### Components

- Glassmorphism ringan hanya jika mendukung.
- Card dengan border tipis, shadow lembut, radius medium-large.
- Button premium: solid dark, warm neutral, atau muted accent.

## 13. Daftar Komponen UI

- Navbar
- Hero media block
- CTA button set
- Stats strip
- Unit type cards
- Floor plan modal
- Photo sphere / virtual walk-in viewer
- Facility feature block
- Nearby places strip
- Product cards
- Cart drawer
- Checkout form
- FAQ accordion
- Testimonial cards
- Sticky mobile action bar

## 14. Data Model Awal yang Disarankan

### UnitType

- `id`
- `name`
- `slug`
- `size`
- `bedrooms`
- `bathrooms`
- `startingPrice`
- `availabilityStatus`
- `heroImage`
- `floorPlanImage`
- `highlights[]`

### CommerceProduct

- `id`
- `name`
- `slug`
- `category`
- `price`
- `thumbnail`
- `shortDescription`
- `tag`
- `isService`
- `ctaLabel`

### InquiryLead

- `name`
- `phone`
- `email`
- `interestType`
- `message`
- `preferredVisitDate`

### DemoExperience

- `id`
- `name`
- `type`
- `thumbnail`
- `viewerUrl`
- `fallbackImage`
- `locationLabel`
- `description`
- `hotspots[]`

## 15. Copy Direction

Tone:
- Warm
- Aspirational
- Premium
- Clear
- Not overly salesy

Contoh microcopy:
- `See how modern living feels when every detail is considered.`
- `Reserve a private tour in under a minute.`
- `Add essentials before move-in.`
- `Designed for comfort, access, and everyday rhythm.`

## 16. KPI Awal

- CTR hero CTA.
- Jumlah form inquiry submit.
- Jumlah book visit submit.
- Demo viewer open rate.
- Average interaction time pada photo sphere / walk-in demo.
- Engagement rate di section unit types.
- Add-to-cart rate mini e-commerce.
- Checkout intent submit rate.
- WhatsApp click-through rate.

## 17. MVP Prioritas

### Harus ada

- Hero premium.
- Unit type showcase.
- Demo photo sphere atau walk-in minimal untuk 1 show unit.
- Facilities section.
- Inquiry CTA.
- Mini e-commerce basic catalog.
- Simple cart + checkout inquiry.

### Bisa menyusul

- Availability real-time.
- Personalized recommendation.
- Payment gateway.
- Resident login.
- Full resident marketplace.
- Multi-language expansion khusus campaign SG/international.

## 18. Catatan Implementasi untuk Repo Ini

Jika halaman ini akan dibangun di codebase sekarang, pendekatan yang disarankan:

- Buat page/component baru terpisah dari `NagoyaShowcasePage` agar konteks assessment dan landing page properti tidak tercampur.
- Simpan data di file terpisah seperti `src/data/apartmentLandingData.ts`.
- Pecah section menjadi komponen kecil:
  - `ApartmentHeroSection.tsx`
  - `UnitTypesSection.tsx`
  - `DemoExperienceSection.tsx`
  - `AmenitiesSection.tsx`
  - `MiniCommerceSection.tsx`
  - `InquiryCtaSection.tsx`
- Bila diperlukan route hash baru, gunakan misalnya `#apartment-living`.

Untuk target lokal, SG, dan luar negeri, copy sebaiknya fleksibel terhadap beberapa sudut jual:

- Kedekatan ke akses utama, terminal ferry, district bisnis, atau area komersial bila relevan.
- Kemudahan eksplorasi unit secara remote melalui 360 tour atau walk-in demo.
- CTA yang cepat ke WhatsApp sales dan private viewing.

## 19. Open Questions

- Apakah target utamanya lead generation atau direct booking fee?
- Apakah mini e-commerce hanya untuk calon penghuni atau juga existing resident?
- Apakah harga unit ingin ditampilkan terbuka atau hanya `starting from`?
- Apakah perlu integrasi WhatsApp otomatis per CTA?
- Apakah visual akan memakai asset real project atau placeholder editorial?
- Apakah asset photo sphere / virtual walk-in sudah tersedia atau perlu produksi konten baru?
- Apakah versi bahasa Inggris penuh perlu disiapkan sejak MVP untuk target SG dan luar negeri?

## 20. Kesimpulan

Landing page ini harus memadukan dua tujuan: membangun desirability hunian modern dan mempersingkat jalur konversi. Mini e-commerce bukan fokus utama visual, tetapi harus hadir sebagai lapisan komersial yang terasa natural dalam ekosistem apartemen modern.
