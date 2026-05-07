# Progress Implementasi Landing Page Apartemen Modern

## Status

Progress sudah masuk fase implementasi lanjutan. Halaman React untuk `#apartment-living` sekarang tidak lagi hanya mock visual, tetapi sudah memiliki beberapa interaksi inti sesuai PRD.

## Yang Sudah Dibuat

- Data source baru di `src/data/apartmentLandingData.ts`
- Page baru di `src/components/ApartmentLandingPage.tsx`
- Route hash baru di `src/App.tsx`
- Navbar dan footer terpisah khusus apartemen
- Floor plan / unit detail modal
- Lead capture form dengan success state
- Sticky mobile CTA bar
- Product detail modal untuk mini commerce
- WhatsApp continuation link dengan auto-filled inquiry message
- Brochure request flow dengan success state
- Demo viewer modal yang lebih realistis untuk placeholder 360/walk-in
- Refactor bertahap: section besar mulai dipisah dari file page utama
- Commerce, inquiry CTA, dan demo viewer juga mulai dipisah ke komponen sendiri
- Facilities, location, testimonials, FAQ, dan brochure flow juga sudah dipisah
- Contact/CTA config mulai dipindah ke data source
- Product modal dan sticky mobile bar sudah dipisah
- CTA contact utama mulai baca dari config terpusat
- Dummy AI chatbot widget untuk after-hours assistant demo

## Scope yang Sudah Ter-cover

### 1. Hero premium

- Headline editorial untuk apartemen modern
- CTA utama dan sekunder
- Quick stats untuk market lokal, SG, dan luar negeri

### 2. Unit types

- Tiga tipe unit contoh
- Info size, bedroom, bathroom, starting price, dan availability cue
- Alignment card sudah dirapikan
- CTA unit sekarang membuka detail modal
- Preview floor plan ditambahkan sebagai placeholder data

### 3. Demo experience

- Section khusus `photo sphere` dan `walk-in demo`
- State untuk memilih demo aktif
- Placeholder viewer yang bisa nanti diganti embed real 360 viewer
- Modal viewer dengan hotspot list dan CTA follow-up
- Modal viewer sudah memakai embed public Pannellum sebagai dummy photo sphere

### 4. Facilities

- Tiga blok fasilitas dengan visual besar
- Copy diarahkan ke tone premium dan calm

### 5. Mini e-commerce

- Filter kategori
- Product cards
- Add to cart sederhana
- Assisted checkout summary
- Product detail modal / drawer substitute via modal

### 6. FAQ dan CTA akhir

- Accordion FAQ sederhana
- Final CTA untuk local visit, remote viewing, dan assisted checkout
- Form inquiry dengan field dasar:
  - nama
  - WhatsApp
  - email
  - interest type
  - preferred date
  - message
- Success state submit dasar
- Tombol lanjutan ke WhatsApp dengan pesan inquiry otomatis

### 9. Dummy AI assistant

- Floating chat widget khusus halaman apartemen
- Response dummy berbasis keyword untuk:
  - unit inquiry
  - remote viewing / 360 demo
  - brochure
  - visit booking
  - mini-commerce / move-in service
- Sudah support `EN/ID` untuk seed prompt dan balasan dasar
- Quick action chips untuk intent utama
- Auto-scroll ke section relevan berdasarkan intent chatbot

### 8. Brochure flow

- Form brochure request dengan lead capture
- Success state placeholder untuk distribusi PDF/link di integrasi berikutnya

### 7. Sticky CTA mobile

- Tombol bawah khusus mobile untuk `Book Visit` dan `360 Demo`

## Catatan Teknis

- Halaman baru tidak menimpa `NagoyaShowcasePage`
- Akses halaman melalui `#apartment-living`
- Tema dark dimatikan untuk halaman ini agar visual premium tetap konsisten
- Data masih placeholder dan siap diganti ke asset project real
- Navbar/footer halaman apartemen dipisah dari komponen utama portfolio

## File Terkait

- `src/components/ApartmentLandingPage.tsx`
- `src/components/apartment/ApartmentHeroSection.tsx`
- `src/components/apartment/ApartmentUnitTypesSection.tsx`
- `src/components/apartment/ApartmentDemoSection.tsx`
- `src/components/apartment/ApartmentCommerceSection.tsx`
- `src/components/apartment/ApartmentFacilitiesSection.tsx`
- `src/components/apartment/ApartmentLocationSection.tsx`
- `src/components/apartment/ApartmentTestimonialsSection.tsx`
- `src/components/apartment/ApartmentFaqSection.tsx`
- `src/components/apartment/ApartmentBrochureSection.tsx`
- `src/components/apartment/ApartmentInquirySection.tsx`
- `src/components/apartment/ApartmentDemoViewerModal.tsx`
- `src/components/apartment/ApartmentProductModal.tsx`
- `src/components/apartment/ApartmentStickyMobileBar.tsx`
- `src/components/apartment/ApartmentUnitModal.tsx`
- `src/components/apartment/apartmentMotion.ts`
- `src/components/ApartmentLandingNavbar.tsx`
- `src/components/ApartmentLandingFooter.tsx`
- `src/data/apartmentLandingData.ts`
- `src/App.tsx`

## Next Step yang Disarankan

- Ganti image placeholder Unsplash dengan asset real project
- Hubungkan CTA ke WhatsApp number yang benar
- Integrasikan viewer 360 asli bila asset photo sphere sudah tersedia
- Ganti embed public Pannellum dengan asset 360 resmi Nagoya Hill saat sudah tersedia
- Tambahkan endpoint atau integrasi WhatsApp/form backend untuk submit inquiry
- Ganti WhatsApp placeholder ke nomor sales yang benar
- Tambahkan distribusi file brochure yang sebenarnya setelah submit
- Pindahkan block `Why this residence` terakhir agar page container makin tipis
- Lengkapi semua CTA dengan nomor sales final dan channel produksi nyata
- Jika diperlukan, lanjutkan dummy chatbot ke skenario intent routing yang lebih kaya atau integrasi AI sungguhan
