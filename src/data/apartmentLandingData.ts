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
  embedUrl: string
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
  { label: 'Unit Selection', labelId: 'Pilihan Unit', value: 'Studio to 3 BR', note: 'official public mix spans Studio, 1 BR, 2 BR, and 3 BR types', noteId: 'komposisi publik resmi mencakup Studio, 1 BR, 2 BR, dan 3 BR' },
  { label: 'Strategic Address', labelId: 'Alamat Strategis', value: 'Nagoya Hill', note: 'located in Nagoya Hill Superblock, Lubuk Baja, Batam', noteId: 'berlokasi di Nagoya Hill Superblock, Lubuk Baja, Batam' },
  { label: 'Luxury Facilities', labelId: 'Fasilitas Mewah', value: 'Infinity Pool', note: 'with poolside jacuzzi, sky barbeque, cafe, fitness center, and playground', noteId: 'dengan poolside jacuzzi, sky barbeque, cafe, fitness center, dan playground' },
  { label: 'Contact Ready', labelId: 'Siap Dihubungi', value: '+62 877 7622 7888', note: 'marketing gallery and show unit are located at Nagoya Hill Shopping Mall', noteId: 'marketing gallery dan show unit berada di Nagoya Hill Shopping Mall' },
]

export const apartmentUnitTypes: UnitType[] = [
  {
    id: 'urban-studio',
    name: 'Studio - Type A',
    nameId: 'Studio - Tipe A',
    size: '31.00 sqm',
    bedrooms: '1 sleeping zone',
    bedroomsId: '1 zona tidur',
    bathrooms: '1 bathroom',
    bathroomsId: '1 kamar mandi',
    price: 'Public price on request',
    priceId: 'Harga publik melalui inquiry',
    availability: 'Ready to show',
    availabilityId: 'Siap ditunjukkan',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Open-plan studio with integrated sleeping zone, linear kitchen wall, and balcony edge.',
    floorPlanLabelId: 'Denah studio terbuka dengan zona tidur terintegrasi, kitchen line linear, dan sisi balkon.',
    highlights: ['Studio configuration', 'Type A reference', 'Approx. 333.90 sqft public size reference'],
    highlightsId: ['Konfigurasi studio', 'Referensi Tipe A', 'Referensi ukuran publik sekitar 333,90 sqft'],
  },
  {
    id: 'signature-one-bed',
    name: '1 BR - Type D',
    nameId: '1 BR - Tipe D',
    size: '51.20 sqm',
    bedrooms: '1 bedroom',
    bedroomsId: '1 kamar tidur',
    bathrooms: '1 bathroom',
    bathroomsId: '1 kamar mandi',
    price: 'Public price on request',
    priceId: 'Harga publik melalui inquiry',
    availability: 'Most requested',
    availabilityId: 'Paling diminati',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Separated bedroom and living area with stronger fit for investor-oriented rental use.',
    floorPlanLabelId: 'Area kamar dan living terpisah dengan kecocokan kuat untuk kebutuhan sewa berorientasi investor.',
    highlights: ['1 BR configuration', 'Type D reference', 'Approx. 551.10 sqft public size reference'],
    highlightsId: ['Konfigurasi 1 BR', 'Referensi Tipe D', 'Referensi ukuran publik sekitar 551,10 sqft'],
  },
  {
    id: 'corner-two-bed',
    name: '2 BR - Type H',
    nameId: '2 BR - Tipe H',
    size: '59.40 sqm',
    bedrooms: '2 bedrooms',
    bedroomsId: '2 kamar tidur',
    bathrooms: '2 bathrooms',
    bathroomsId: '2 kamar mandi',
    price: 'Public price on request',
    priceId: 'Harga publik melalui inquiry',
    availability: 'Limited release',
    availabilityId: 'Rilis terbatas',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Corner family layout with dual-side light exposure, dining zone, and two-bathroom setup.',
    floorPlanLabelId: 'Layout keluarga di sudut dengan pencahayaan dua sisi, zona makan, dan dua kamar mandi.',
    highlights: ['2 BR configuration', 'Type H reference', 'Approx. 639.10 sqft public size reference'],
    highlightsId: ['Konfigurasi 2 BR', 'Referensi Tipe H', 'Referensi ukuran publik sekitar 639,10 sqft'],
  },
  {
    id: 'three-bed-k',
    name: '3 BR - Type K',
    nameId: '3 BR - Tipe K',
    size: '90.70 sqm',
    bedrooms: '3 bedrooms',
    bedroomsId: '3 kamar tidur',
    bathrooms: '2 bathrooms',
    bathroomsId: '2 kamar mandi',
    price: 'Public price on request',
    priceId: 'Harga publik melalui inquiry',
    availability: 'Family-size selection',
    availabilityId: 'Pilihan family-size',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Three-bedroom family-oriented plan positioned as the largest public unit type shown on the official page.',
    floorPlanLabelId: 'Denah tiga kamar berorientasi keluarga yang diposisikan sebagai tipe unit publik terbesar pada halaman resmi.',
    highlights: ['3 BR configuration', 'Type K reference', 'Approx. 976.10 sqft public size reference'],
    highlightsId: ['Konfigurasi 3 BR', 'Referensi Tipe K', 'Referensi ukuran publik sekitar 976,10 sqft'],
  },
]

export const apartmentFacilities: FacilityItem[] = [
  {
    title: 'Infinity Pool & Jacuzzi',
    titleId: 'Infinity Pool & Jacuzzi',
    description: 'Publicly highlighted facilities include infinity pool and poolside jacuzzi for a more elevated leisure experience.',
    descriptionId: 'Fasilitas yang disorot secara publik mencakup infinity pool dan poolside jacuzzi untuk pengalaman leisure yang lebih elevated.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sky Barbeque & Cafe',
    titleId: 'Sky Barbeque & Cafe',
    description: 'The official facility list mentions sky barbeque and cafe as part of the lifestyle offering in the superblock environment.',
    descriptionId: 'Daftar fasilitas resmi menyebut sky barbeque dan cafe sebagai bagian dari penawaran lifestyle di lingkungan superblock.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Fitness & Family Facilities',
    titleId: 'Fitness & Fasilitas Keluarga',
    description: 'Fitness center plus indoor and outdoor children playground are part of the public-facing amenity promise.',
    descriptionId: 'Fitness center serta playground anak indoor dan outdoor termasuk dalam amenity yang ditampilkan secara publik.',
    image: 'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80',
  },
]

export const apartmentDemos: DemoExperience[] = [
  {
    id: 'lobby-sphere',
    name: 'Living Room Photo Sphere',
    nameId: 'Photo Sphere Ruang Tamu',
    type: 'Photo Sphere',
    location: 'Open-plan living room and dining transition',
    locationId: 'Transisi ruang tamu open-plan dan area makan',
    description: 'A 360 interior preview that helps remote buyers read room scale, furniture flow, and finish character before visiting.',
    descriptionId: 'Pratinjau interior 360 yang membantu pembeli remote memahami skala ruang, alur furnitur, dan karakter finishing sebelum berkunjung.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    cta: 'Open 360 View',
    ctaId: 'Buka Tampilan 360',
    embedUrl: 'https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://renderstuff.com/assets/133/equirectangular-360-panorama-interior-rendering-by-3ds-max-and-v-ray.jpg',
    hotspots: ['Sofa and TV wall proportion', 'Dining corner transition', 'Natural light spread', 'Warm material palette'],
    hotspotsId: ['Proporsi sofa dan dinding TV', 'Transisi sudut makan', 'Sebaran cahaya alami', 'Palet material hangat'],
  },
  {
    id: 'show-unit-walk',
    name: 'One Bedroom Walk-In Demo',
    nameId: 'Demo Walk-In Satu Kamar',
    type: 'Walk-In Demo',
    location: 'Show unit sequence from kitchen to bedroom',
    locationId: 'Urutan show unit dari dapur ke kamar tidur',
    description: 'A guided interior walkthrough with hotspots for kitchen set, wardrobe fit, bathroom finish, and bedroom circulation.',
    descriptionId: 'Tur interior terpandu dengan hotspot untuk kitchen set, kesesuaian wardrobe, finishing bathroom, dan sirkulasi kamar tidur.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    cta: 'Play Walk-In Demo',
    ctaId: 'Putar Demo Walk-In',
    embedUrl: 'https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://renderstuff.com/assets/133/equirectangular-360-panorama-interior-rendering-by-3ds-max-and-v-ray.jpg',
    hotspots: ['Kitchen line', 'Wardrobe wall', 'Bathroom finish', 'Bedroom movement space'],
    hotspotsId: ['Kitchen line', 'Dinding wardrobe', 'Finishing bathroom', 'Ruang gerak kamar tidur'],
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
        'The best choice for buyers who want entertainment, shopping, and city access around Nagoya Hill.',
        'Strategic location in the center of Nagoya within the Nagoya Hill Superblock area.',
        'Best security system positioning to support daily activity in a strategic urban environment.',
        'Complete facilities ranging from infinity pool and jacuzzi to fitness center and family amenities.',
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
        'Pilihan terbaik untuk pembeli yang menginginkan akses hiburan, belanja, dan pusat aktivitas di sekitar Nagoya Hill.',
        'Berlokasi strategis di pusat Nagoya dalam kawasan Nagoya Hill Superblock.',
        'Diposisikan dengan sistem keamanan terbaik untuk mendukung aktivitas harian di lingkungan urban yang strategis.',
        'Fasilitas lengkap mulai dari infinity pool dan jacuzzi hingga fitness center dan amenitas keluarga.',
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
  salesWhatsAppUrl: 'https://wa.me/6287776227888',
  remoteViewingWhatsAppUrl: 'https://wa.me/6281270895558',
  salesEmail: 'info@nagoyahillcondominium.com',
  brochureLabel: 'Nagoya Hill Condominium Brochure',
  salesPhoneLabel: '(+62) 877 7622 7888 / (+62) 812 7089 5558',
  salesLocationLabel: 'Nagoya Hill Superblock, Lubuk Baja, Batam',
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
