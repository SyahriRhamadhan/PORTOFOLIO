export type ApartmentLanguage = 'en' | 'id'

export type ApartmentNavItem = {
  label: string
  href: string
}

export type QuickStat = {
  label: string
  labelId: string
  value: string
  note: string
  noteId: string
}

export type UnitType = {
  id: string
  name: string
  nameId: string
  size: string
  bedrooms: string
  bedroomsId: string
  bathrooms: string
  bathroomsId: string
  price: string
  priceId?: string
  availability: string
  availabilityId: string
  image: string
  floorPlanImage: string
  floorPlanLabel: string
  floorPlanLabelId: string
  highlights: string[]
  highlightsId: string[]
}

export type FacilityItem = {
  title: string
  titleId: string
  description: string
  descriptionId: string
  image: string
}

export type DemoExperience = {
  id: string
  name: string
  nameId: string
  type: 'Photo Sphere' | 'Walk-In Demo'
  location: string
  locationId: string
  description: string
  descriptionId: string
  image: string
  cta: string
  ctaId: string
  hotspots: string[]
  hotspotsId: string[]
}

export type CommerceCategory = 'Furnishing' | 'Smart Living' | 'Services' | 'Amenity'

export type CommerceProduct = {
  id: string
  category: CommerceCategory
  name: string
  nameId: string
  description: string
  descriptionId: string
  price: string
  image: string
  tag: string
  tagId: string
}

export type Testimonial = {
  quote: string
  quoteId: string
  name: string
  role: string
  roleId: string
}

export type FaqItem = {
  question: string
  questionId: string
  answer: string
  answerId: string
}

export type ApartmentContactConfig = {
  salesWhatsAppUrl: string
  remoteViewingWhatsAppUrl: string
  salesEmail: string
  brochureLabel: string
  salesPhoneLabel: string
  salesLocationLabel: string
}

export type ApartmentChatMessage = {
  id: string
  role: 'assistant' | 'user'
  text: string
}

export const apartmentNavItems: ApartmentNavItem[] = [
  { label: 'Overview', href: '#apartment-living' },
  { label: 'Unit Types', href: '#apartment-unit-types' },
  { label: '360 Demo', href: '#apartment-demo' },
  { label: 'Mini Commerce', href: '#apartment-commerce' },
  { label: 'Contact', href: '#apartment-contact' },
  { label: 'Back Home', href: '#home' },
]

export const apartmentQuickStats: QuickStat[] = [
  { label: 'Starting From', labelId: 'Mulai Dari', value: 'IDR 890M', note: 'studio to two-bedroom selections', noteId: 'pilihan unit studio hingga dua kamar' },
  { label: 'Cross-Border Access', labelId: 'Akses Lintas Batas', value: '35 min', note: 'to ferry terminal and key business routes', noteId: 'ke terminal ferry dan jalur bisnis utama' },
  { label: 'Move-In Ready', labelId: 'Siap Huni', value: 'Limited', note: 'show units available for immediate tour', noteId: 'show unit tersedia untuk kunjungan langsung' },
  { label: 'Rental Potential', labelId: 'Potensi Sewa', value: 'High Demand', note: 'targeted for local and SG-based audience', noteId: 'ditujukan untuk pasar lokal dan Singapura' },
]

export const apartmentUnitTypes: UnitType[] = [
  {
    id: 'urban-studio',
    name: 'Urban Studio',
    nameId: 'Studio Urban',
    size: '29 sqm',
    bedrooms: '1 sleeping zone',
    bedroomsId: '1 zona tidur',
    bathrooms: '1 bathroom',
    bathroomsId: '1 kamar mandi',
    price: 'From IDR 890M',
    priceId: 'Mulai IDR 890Jt',
    availability: 'Ready to show',
    availabilityId: 'Siap ditunjukkan',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Open-plan studio with integrated sleeping zone, linear kitchen wall, and balcony edge.',
    floorPlanLabelId: 'Denah studio terbuka dengan zona tidur terintegrasi, kitchen line linear, dan sisi balkon.',
    highlights: ['Integrated storage wall', 'Balcony city view', 'Efficient kitchen line'],
    highlightsId: ['Dinding storage terintegrasi', 'Pemandangan kota dari balkon', 'Kitchen line yang efisien'],
  },
  {
    id: 'signature-one-bed',
    name: 'Signature One Bedroom',
    nameId: 'Signature Satu Kamar',
    size: '42 sqm',
    bedrooms: '1 bedroom',
    bedroomsId: '1 kamar tidur',
    bathrooms: '1 bathroom',
    bathroomsId: '1 kamar mandi',
    price: 'From IDR 1.24B',
    priceId: 'Mulai IDR 1,24M',
    availability: 'Most requested',
    availabilityId: 'Paling diminati',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Separated bedroom and living area with stronger fit for investor-oriented rental use.',
    floorPlanLabelId: 'Area kamar dan living terpisah dengan kecocokan kuat untuk kebutuhan sewa berorientasi investor.',
    highlights: ['Separate living zone', 'Wide window span', 'Investor-friendly layout'],
    highlightsId: ['Zona living terpisah', 'Bukaan jendela lebar', 'Layout ramah investor'],
  },
  {
    id: 'corner-two-bed',
    name: 'Corner Two Bedroom',
    nameId: 'Sudut Dua Kamar',
    size: '64 sqm',
    bedrooms: '2 bedrooms',
    bedroomsId: '2 kamar tidur',
    bathrooms: '2 bathrooms',
    bathroomsId: '2 kamar mandi',
    price: 'From IDR 1.98B',
    priceId: 'Mulai IDR 1,98M',
    availability: 'Limited release',
    availabilityId: 'Rilis terbatas',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Corner family layout with dual-side light exposure, dining zone, and two-bathroom setup.',
    floorPlanLabelId: 'Layout keluarga di sudut dengan pencahayaan dua sisi, zona makan, dan dua kamar mandi.',
    highlights: ['Corner exposure', 'Family dining layout', 'Premium bath finishes'],
    highlightsId: ['Eksposur sudut', 'Layout dining keluarga', 'Finishing kamar mandi premium'],
  },
]

export const apartmentFacilities: FacilityItem[] = [
  {
    title: 'Wellness Deck',
    titleId: 'Dek Wellness',
    description: 'Infinity-edge pool, gym, and shaded deck arranged for a quieter urban rhythm.',
    descriptionId: 'Kolam tepi infinity, gym, dan dek teduh yang disusun untuk ritme urban yang lebih tenang.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Resident Lounge',
    titleId: 'Lounge Penghuni',
    description: 'A hospitality-led lounge for remote work, informal meetings, and evening downtime.',
    descriptionId: 'Lounge bergaya hospitality untuk kerja remote, pertemuan informal, dan waktu santai malam.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Smart Arrival',
    titleId: 'Kedatangan Cerdas',
    description: 'Secure drop-off, card access, CCTV coverage, and concierge-backed entry support.',
    descriptionId: 'Area drop-off aman, akses kartu, CCTV, dan dukungan masuk berbasis concierge.',
    image: 'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80',
  },
]

export const apartmentDemos: DemoExperience[] = [
  {
    id: 'lobby-sphere',
    name: 'Lobby Arrival Sphere',
    nameId: 'Sphere Area Lobby',
    type: 'Photo Sphere',
    location: 'Grand lobby and concierge axis',
    locationId: 'Lobby utama dan axis concierge',
    description: 'A 360 preview that helps remote buyers understand scale, material finish, and arrival experience before visiting.',
    descriptionId: 'Pratinjau 360 yang membantu pembeli remote memahami skala, finishing material, dan pengalaman kedatangan sebelum berkunjung.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    cta: 'Open 360 View',
    ctaId: 'Buka Tampilan 360',
    hotspots: ['Concierge desk', 'Double-height arrival volume', 'Material finish tone', 'Drop-off and entry path'],
    hotspotsId: ['Meja concierge', 'Volume lobby double-height', 'Tone finishing material', 'Jalur drop-off dan masuk'],
  },
  {
    id: 'show-unit-walk',
    name: 'One Bedroom Walk-In Demo',
    nameId: 'Demo Walk-In Satu Kamar',
    type: 'Walk-In Demo',
    location: 'Show unit with balcony sequence',
    locationId: 'Show unit dengan urutan area balkon',
    description: 'A guided walkthrough with hotspots for kitchen set, bathroom finish, storage, and balcony outlook.',
    descriptionId: 'Tur terpandu dengan hotspot untuk kitchen set, finishing bathroom, storage, dan arah pandang balkon.',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    cta: 'Play Walk-In Demo',
    ctaId: 'Putar Demo Walk-In',
    hotspots: ['Kitchen line', 'Bedroom threshold', 'Bathroom finish', 'Balcony outlook'],
    hotspotsId: ['Kitchen line', 'Ambang kamar tidur', 'Finishing bathroom', 'Arah pandang balkon'],
  },
]

export const apartmentCommerceCategories: CommerceCategory[] = ['Furnishing', 'Smart Living', 'Services', 'Amenity']

export const apartmentCommerceProducts: CommerceProduct[] = [
  {
    id: 'starter-pack',
    category: 'Furnishing',
    name: 'Move-In Starter Pack',
    nameId: 'Paket Starter Pindah Masuk',
    description: 'Bed frame, sofa, dining set, and curtain package curated for studio and one-bedroom layouts.',
    descriptionId: 'Paket bed frame, sofa, dining set, dan curtain yang dikurasi untuk layout studio dan satu kamar.',
    price: 'IDR 18.5M',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Best seller',
    tagId: 'Paling laris',
  },
  {
    id: 'smart-bundle',
    category: 'Smart Living',
    name: 'Smart Home Entry Bundle',
    nameId: 'Bundel Smart Home Dasar',
    description: 'Digital door lock, smart switch, and scene control for a more seamless daily routine.',
    descriptionId: 'Digital door lock, smart switch, dan scene control untuk rutinitas harian yang lebih mulus.',
    price: 'IDR 6.8M',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular with SG buyers',
    tagId: 'Populer untuk pembeli SG',
  },
  {
    id: 'cleaning-package',
    category: 'Services',
    name: 'Deep Cleaning Session',
    nameId: 'Sesi Deep Cleaning',
    description: 'Pre-move and post-handover cleaning package with bathroom detailing and glass treatment.',
    descriptionId: 'Paket cleaning sebelum pindah dan setelah handover dengan detailing bathroom dan treatment kaca.',
    price: 'IDR 950K',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    tag: 'Service add-on',
    tagId: 'Tambahan layanan',
  },
  {
    id: 'pool-lounge-pass',
    category: 'Amenity',
    name: 'Weekend Pool and Lounge Pass',
    nameId: 'Pass Kolam dan Lounge Akhir Pekan',
    description: 'Amenity reservation pass designed for family viewing days or hosted private sessions.',
    descriptionId: 'Pass reservasi amenity untuk hari kunjungan keluarga atau sesi private.',
    price: 'IDR 350K',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    tag: 'Resident perk',
    tagId: 'Benefit penghuni',
  },
]

export const apartmentTestimonials: Testimonial[] = [
  {
    quote: 'The page made the project feel credible before I even arranged a site visit. The 360 flow helped close the distance.',
    quoteId: 'Halaman ini membuat project terasa kredibel bahkan sebelum saya menjadwalkan kunjungan. Flow 360 membantu menutup jarak.',
    name: 'Andre Tan',
    role: 'Buyer based in Singapore',
    roleId: 'Pembeli berbasis di Singapura',
  },
  {
    quote: 'Clear unit breakdown, realistic pricing cues, and fast response CTA. It feels closer to hospitality than a listing page.',
    quoteId: 'Breakdown unit jelas, cue harga realistis, dan CTA respons cepat. Rasanya lebih dekat ke hospitality daripada halaman listing.',
    name: 'Livia Sari',
    role: 'Local end-user prospect',
    roleId: 'Prospek end-user lokal',
  },
]

export const apartmentFaqs: FaqItem[] = [
  {
    question: 'Can overseas buyers explore the unit before flying in?',
    questionId: 'Apakah pembeli luar negeri bisa mengeksplorasi unit sebelum terbang ke lokasi?',
    answer: 'Yes. The page supports photo sphere previews and guided walk-in demos so international prospects can shortlist units remotely.',
    answerId: 'Ya. Halaman ini mendukung preview photo sphere dan demo walk-in terpandu sehingga prospek internasional bisa shortlist unit secara remote.',
  },
  {
    question: 'Is the mini commerce flow a direct payment checkout?',
    questionId: 'Apakah alur mini commerce ini langsung checkout pembayaran?',
    answer: 'For the MVP, it is an assisted checkout. Users submit their order intent and the sales or resident team follows up for confirmation.',
    answerId: 'Untuk MVP, ini adalah assisted checkout. User mengirim intent order lalu tim sales atau resident akan follow-up untuk konfirmasi.',
  },
  {
    question: 'Can I book a physical viewing after exploring the 360 demo?',
    questionId: 'Apakah saya bisa booking kunjungan fisik setelah melihat demo 360?',
    answer: 'Yes. Every demo block should connect to a WhatsApp CTA or booking form for immediate scheduling.',
    answerId: 'Ya. Setiap blok demo bisa terhubung ke CTA WhatsApp atau form booking untuk penjadwalan cepat.',
  },
]

export const apartmentTextCopy = {
  en: {
    nav: {
      overview: 'Overview',
      unitTypes: 'Unit Types',
      demo: '360 Demo',
      commerce: 'Mini Commerce',
      contact: 'Contact',
      backHome: 'Back Home',
      bookTour: 'Book Tour',
      brand: 'NAGOYA LIVING',
      language: 'Language',
    },
    why: {
      eyebrow: 'Why this residence',
      title: 'A residential landing page with hospitality-grade clarity.',
      points: [
        'Built for both local buyers and Singapore-based prospects who need remote-first screening.',
        'Lifestyle framing stays aspirational, while the information architecture stays conversion-oriented.',
        'Photo sphere and walk-in demos reduce friction before an onsite visit.',
        'Mini commerce turns the page into a light commercial layer for move-in services and amenity add-ons.',
      ],
    },
    common: {
      startingFrom: 'Starting from',
      price: 'Price',
      viewDetails: 'View Details',
      reserveInterest: 'Reserve Interest',
      addToCart: 'Add to Cart',
      continueToInquiry: 'Continue to Inquiry',
      bookVisit: 'Book Visit',
      askSales: 'Ask Sales',
      remoteFollowUp: 'Remote Viewing Follow-Up',
      requestBrochure: 'Request Brochure',
      submitInquiry: 'Submit Inquiry',
      continueWhatsapp: 'Continue via WhatsApp',
    },
  },
  id: {
    nav: {
      overview: 'Overview',
      unitTypes: 'Tipe Unit',
      demo: 'Demo 360',
      commerce: 'Mini Commerce',
      contact: 'Kontak',
      backHome: 'Kembali',
      bookTour: 'Jadwalkan Tur',
      brand: 'NAGOYA LIVING',
      language: 'Bahasa',
    },
    why: {
      eyebrow: 'Mengapa hunian ini',
      title: 'Landing page residensial dengan kejelasan setara hospitality.',
      points: [
        'Dibangun untuk pembeli lokal maupun prospek berbasis Singapura yang butuh screening remote lebih dulu.',
        'Framing gaya hidup tetap aspiratif, sementara arsitektur informasinya tetap berorientasi konversi.',
        'Photo sphere dan demo walk-in mengurangi friction sebelum kunjungan onsite.',
        'Mini commerce menjadikan halaman ini lapisan komersial ringan untuk layanan move-in dan add-on amenity.',
      ],
    },
    common: {
      startingFrom: 'Mulai dari',
      price: 'Harga',
      viewDetails: 'Lihat Detail',
      reserveInterest: 'Minat Unit',
      addToCart: 'Tambah ke Keranjang',
      continueToInquiry: 'Lanjut ke Inquiry',
      bookVisit: 'Book Visit',
      askSales: 'Tanya Sales',
      remoteFollowUp: 'Follow-Up Remote Viewing',
      requestBrochure: 'Minta Brosur',
      submitInquiry: 'Kirim Inquiry',
      continueWhatsapp: 'Lanjut via WhatsApp',
    },
  },
} as const

export const apartmentContactConfig: ApartmentContactConfig = {
  salesWhatsAppUrl: 'https://wa.me/',
  remoteViewingWhatsAppUrl: 'https://wa.me/',
  salesEmail: 'sales@example.com',
  brochureLabel: 'Nagoya Living Brochure',
  salesPhoneLabel: 'Sales consultation and private viewing by appointment',
  salesLocationLabel: 'Batam, Indonesia',
}

export const apartmentChatSeeds = {
  en: [
    {
      id: 'welcome-en',
      role: 'assistant' as const,
      text: 'Hello, I am the after-hours AI assistant demo. Ask about unit types, remote viewing, brochure, or move-in services.',
    },
  ],
  id: [
    {
      id: 'welcome-id',
      role: 'assistant' as const,
      text: 'Halo, saya demo asisten AI di luar jam operasional. Tanyakan tentang tipe unit, remote viewing, brosur, atau layanan move-in.',
    },
  ],
}
