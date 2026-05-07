export type ApartmentNavItem = {
  label: string
  href: string
}

export type QuickStat = {
  label: string
  value: string
  note: string
}

export type UnitType = {
  id: string
  name: string
  size: string
  bedrooms: string
  bathrooms: string
  price: string
  availability: string
  image: string
  floorPlanImage: string
  floorPlanLabel: string
  highlights: string[]
}

export type FacilityItem = {
  title: string
  description: string
  image: string
}

export type DemoExperience = {
  id: string
  name: string
  type: 'Photo Sphere' | 'Walk-In Demo'
  location: string
  description: string
  image: string
  cta: string
  hotspots: string[]
}

export type CommerceCategory = 'Furnishing' | 'Smart Living' | 'Services' | 'Amenity'

export type CommerceProduct = {
  id: string
  category: CommerceCategory
  name: string
  description: string
  price: string
  image: string
  tag: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ApartmentContactConfig = {
  salesWhatsAppUrl: string
  remoteViewingWhatsAppUrl: string
  salesEmail: string
  brochureLabel: string
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
  { label: 'Starting From', value: 'IDR 890M', note: 'studio to two-bedroom selections' },
  { label: 'Cross-Border Access', value: '35 min', note: 'to ferry terminal and key business routes' },
  { label: 'Move-In Ready', value: 'Limited', note: 'show units available for immediate tour' },
  { label: 'Rental Potential', value: 'High Demand', note: 'targeted for local and SG-based audience' },
]

export const apartmentUnitTypes: UnitType[] = [
  {
    id: 'urban-studio',
    name: 'Urban Studio',
    size: '29 sqm',
    bedrooms: '1 sleeping zone',
    bathrooms: '1 bathroom',
    price: 'From IDR 890M',
    availability: 'Ready to show',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Open-plan studio with integrated sleeping zone, linear kitchen wall, and balcony edge.',
    highlights: ['Integrated storage wall', 'Balcony city view', 'Efficient kitchen line'],
  },
  {
    id: 'signature-one-bed',
    name: 'Signature One Bedroom',
    size: '42 sqm',
    bedrooms: '1 bedroom',
    bathrooms: '1 bathroom',
    price: 'From IDR 1.24B',
    availability: 'Most requested',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Separated bedroom and living area with stronger fit for investor-oriented rental use.',
    highlights: ['Separate living zone', 'Wide window span', 'Investor-friendly layout'],
  },
  {
    id: 'corner-two-bed',
    name: 'Corner Two Bedroom',
    size: '64 sqm',
    bedrooms: '2 bedrooms',
    bathrooms: '2 bathrooms',
    price: 'From IDR 1.98B',
    availability: 'Limited release',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    floorPlanLabel: 'Corner family layout with dual-side light exposure, dining zone, and two-bathroom setup.',
    highlights: ['Corner exposure', 'Family dining layout', 'Premium bath finishes'],
  },
]

export const apartmentFacilities: FacilityItem[] = [
  {
    title: 'Wellness Deck',
    description: 'Infinity-edge pool, gym, and shaded deck arranged for a quieter urban rhythm.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Resident Lounge',
    description: 'A hospitality-led lounge for remote work, informal meetings, and evening downtime.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Smart Arrival',
    description: 'Secure drop-off, card access, CCTV coverage, and concierge-backed entry support.',
    image: 'https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80',
  },
]

export const apartmentDemos: DemoExperience[] = [
  {
    id: 'lobby-sphere',
    name: 'Lobby Arrival Sphere',
    type: 'Photo Sphere',
    location: 'Grand lobby and concierge axis',
    description: 'A 360 preview that helps remote buyers understand scale, material finish, and arrival experience before visiting.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    cta: 'Open 360 View',
    hotspots: ['Concierge desk', 'Double-height arrival volume', 'Material finish tone', 'Drop-off and entry path'],
  },
  {
    id: 'show-unit-walk',
    name: 'One Bedroom Walk-In Demo',
    type: 'Walk-In Demo',
    location: 'Show unit with balcony sequence',
    description: 'A guided walkthrough with hotspots for kitchen set, bathroom finish, storage, and balcony outlook.',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80',
    cta: 'Play Walk-In Demo',
    hotspots: ['Kitchen line', 'Bedroom threshold', 'Bathroom finish', 'Balcony outlook'],
  },
]

export const apartmentCommerceCategories: CommerceCategory[] = ['Furnishing', 'Smart Living', 'Services', 'Amenity']

export const apartmentCommerceProducts: CommerceProduct[] = [
  {
    id: 'starter-pack',
    category: 'Furnishing',
    name: 'Move-In Starter Pack',
    description: 'Bed frame, sofa, dining set, and curtain package curated for studio and one-bedroom layouts.',
    price: 'IDR 18.5M',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tag: 'Best seller',
  },
  {
    id: 'smart-bundle',
    category: 'Smart Living',
    name: 'Smart Home Entry Bundle',
    description: 'Digital door lock, smart switch, and scene control for a more seamless daily routine.',
    price: 'IDR 6.8M',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80',
    tag: 'Popular with SG buyers',
  },
  {
    id: 'cleaning-package',
    category: 'Services',
    name: 'Deep Cleaning Session',
    description: 'Pre-move and post-handover cleaning package with bathroom detailing and glass treatment.',
    price: 'IDR 950K',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    tag: 'Service add-on',
  },
  {
    id: 'pool-lounge-pass',
    category: 'Amenity',
    name: 'Weekend Pool and Lounge Pass',
    description: 'Amenity reservation pass designed for family viewing days or hosted private sessions.',
    price: 'IDR 350K',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    tag: 'Resident perk',
  },
]

export const apartmentTestimonials: Testimonial[] = [
  {
    quote: 'The page made the project feel credible before I even arranged a site visit. The 360 flow helped close the distance.',
    name: 'Andre Tan',
    role: 'Buyer based in Singapore',
  },
  {
    quote: 'Clear unit breakdown, realistic pricing cues, and fast response CTA. It feels closer to hospitality than a listing page.',
    name: 'Livia Sari',
    role: 'Local end-user prospect',
  },
]

export const apartmentFaqs: FaqItem[] = [
  {
    question: 'Can overseas buyers explore the unit before flying in?',
    answer: 'Yes. The page supports photo sphere previews and guided walk-in demos so international prospects can shortlist units remotely.',
  },
  {
    question: 'Is the mini commerce flow a direct payment checkout?',
    answer: 'For the MVP, it is an assisted checkout. Users submit their order intent and the sales or resident team follows up for confirmation.',
  },
  {
    question: 'Can I book a physical viewing after exploring the 360 demo?',
    answer: 'Yes. Every demo block should connect to a WhatsApp CTA or booking form for immediate scheduling.',
  },
]

export const apartmentContactConfig: ApartmentContactConfig = {
  salesWhatsAppUrl: 'https://wa.me/',
  remoteViewingWhatsAppUrl: 'https://wa.me/',
  salesEmail: 'sales@example.com',
  brochureLabel: 'Nagoya Living Brochure',
}
