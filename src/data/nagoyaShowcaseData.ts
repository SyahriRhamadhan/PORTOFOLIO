export type NagoyaLanguage = "en" | "id";

export type ScopeItem = {
  title: string;
  assumption: string;
};

export type NagoyaProject = {
  name: string;
  domain: string;
  domainId?: string;
  previewImage: string;
  roleCount: number;
  roles: string[];
  modules: string[];
  modulesId?: string[];
  mainFeatures: string[];
  mainFeaturesId?: string[];
  stack: string;
  relevance: string;
  relevanceId?: string;
};

export const relevantProjects: NagoyaProject[] = [
  {
    name: "SIPPRA (Dishub)",
    domain: "Service Billing & Multi-Role Workflow",
    domainId: "Billing Layanan & Workflow Multi-Role",
    previewImage: "/project/sipra.png",
    roleCount: 7,
    roles: [
      "UPPD",
      "DISHUB",
      "DISHUB_KEUANGAN",
      "TERMINAL_PELRA",
      "AGEN_PELRA",
      "AGEN_PELAYARAN",
      "KOPERASI",
    ],
    modules: [
      "Tariff and service master data",
      "Submission flow with approval per role",
      "Document generation (SKRD: invoicing, STRD: late-payment invoice) and settlement tracking",
      "Operational reporting for management monitoring",
    ],
    modulesId: [
      "Master data tarif dan layanan",
      "Alur pengajuan dengan approval per role",
      "Penerbitan dokumen (SKRD: invoice, STRD: invoice keterlambatan) dan tracking settlement",
      "Pelaporan operasional untuk monitoring manajemen",
    ],
    mainFeatures: [
      "Master data governance for region, port, vessel, and tariff setup.",
      "End-to-end service submission flow (PKK, PKB, RKBM, Bunker) with staged processing.",
      "SKRD/STRD issuance and multi-role billing verification workflow.",
      "Cross-UPPD operational dashboard and reporting for management visibility.",
      "Internal announcements, notifications, and messaging features.",
    ],
    mainFeaturesId: [
      "Tata kelola master data wilayah, pelabuhan, kapal, dan konfigurasi tarif.",
      "Alur pengajuan layanan end-to-end (PKK, PKB, RKBM, Bunker) dengan tahapan proses.",
      "Penerbitan SKRD/STRD dan workflow verifikasi billing multi-role.",
      "Dashboard operasional lintas UPPD dan pelaporan untuk visibilitas manajemen.",
      "Fitur pengumuman internal, notifikasi, dan pesan.",
    ],
    stack: "Next.js, Express, TypeScript, Prisma, PostgreSQL",
    relevance:
      "Mirrors ERP transaction flow for tenant or commercial unit operations: request -> validation -> billing -> status tracking. SKRD works as primary invoicing and STRD handles late-payment invoicing, directly supporting receivable control and overdue follow-up.",
    relevanceId:
      "Mencerminkan alur transaksi ERP untuk operasional tenant atau unit komersial: request -> validasi -> billing -> tracking status. SKRD berfungsi sebagai invoice utama dan STRD menangani invoice keterlambatan, relevan untuk kontrol piutang dan tindak lanjut overdue.",
  },
  {
    name: "EWIL Training Platform",
    domain: "Enrollment, Payment, and Approval Process",
    domainId: "Proses Pendaftaran, Billing, dan Approval",
    previewImage: "/project/ewil.png",
    roleCount: 4,
    roles: ["Super Admin", "Admin", "Trainer", "Participant"],
    modules: [
      "Class/service registration and scheduling",
      "Billing and payment status tracking",
      "Role-based dashboard for admin and management",
      "Report approval pipeline and progress monitoring",
      "Chatbot integration for out-of-hours inquiry and lead capture",
    ],
    modulesId: [
      "Registrasi kelas/layanan dan penjadwalan",
      "Tracking status billing dan pembayaran",
      "Dashboard berbasis role untuk admin dan manajemen",
      "Pipeline approval laporan dan monitoring progres",
      "Integrasi chatbot untuk inquiry di luar jam operasional dan lead capture",
    ],
    mainFeatures: [
      "Role-based operations for super admin, admin, trainer, and participant users.",
      "Class lifecycle management with quota, approval flow, and scheduling control.",
      "Registration control with duplicate prevention and status lifecycle tracking.",
      "Trainer reporting workflow with approve/reject and recap outputs.",
      "Gemini-based chatbot endpoint for after-hours inquiry handling.",
    ],
    mainFeaturesId: [
      "Operasional berbasis role untuk super admin, admin, trainer, dan peserta.",
      "Manajemen siklus kelas dengan kuota, alur approval, dan kontrol jadwal.",
      "Kontrol registrasi dengan pencegahan duplikasi dan tracking lifecycle status.",
      "Workflow laporan trainer dengan approve/reject dan output rekap.",
      "Endpoint chatbot berbasis Gemini untuk penanganan inquiry di luar jam operasional.",
    ],
    stack: "Laravel 12, React, Inertia.js, MySQL, Docker",
    relevance:
      "Directly relevant for booking/lease lifecycle with billing coordination, approval checkpoints, and chatbot-assisted follow-up.",
    relevanceId:
      "Sangat relevan untuk lifecycle booking/sewa dengan koordinasi billing, checkpoint approval, dan follow-up berbantuan chatbot.",
  },
  {
    name: "UMRAH Document Reporting System",
    domain: "Institutional Document Reporting",
    domainId: "Pelaporan Dokumen Institusi",
    previewImage: "/project/document.png",
    roleCount: 7,
    roles: [
      "admin_lpmmp",
      "rektor",
      "dekan",
      "kaprodi",
      "admin_unit",
      "dosen_tenaga_pendidik",
      "tendik",
    ],
    modules: [
      "Document submission and reporting workflow",
      "Verification and status tracking per unit",
      "Reporting recap for leadership monitoring",
      "Structured document archive and follow-up notes",
    ],
    modulesId: [
      "Workflow submit dokumen dan pelaporan",
      "Verifikasi dan tracking status per unit",
      "Rekap laporan untuk monitoring pimpinan",
      "Arsip dokumen terstruktur dan catatan tindak lanjut",
    ],
    mainFeatures: [
      "Mandatory document assignment by unit and period.",
      "Upload -> submit -> verify/reject workflow with accountability trails.",
      "Compliance monitoring dashboard across organization hierarchy.",
      "Audit logging and export-ready reporting process.",
      "Role-governed access control for institutional document operations.",
    ],
    mainFeaturesId: [
      "Assignment dokumen wajib berdasarkan unit dan periode.",
      "Workflow upload -> submit -> verify/reject dengan jejak akuntabilitas.",
      "Dashboard monitoring compliance lintas hierarki organisasi.",
      "Audit logging dan proses pelaporan siap ekspor.",
      "Kontrol akses berbasis role untuk operasional dokumen institusi.",
    ],
    stack: "Laravel 12, React, Inertia.js, MySQL",
    relevance:
      "Relevant to Nagoya Hill as a foundation for tenant operational document reporting, follow-up workflows, and management status monitoring.",
    relevanceId:
      "Relevan untuk Nagoya Hill sebagai fondasi pelaporan dokumen operasional tenant, workflow tindak lanjut, dan monitoring status oleh manajemen.",
  },
  {
    name: "Multi-Tenant Bimbel Platform",
    domain: "Multi-Tenant Access and Branch Operations",
    domainId: "Akses Multi-Tenant dan Operasional Cabang",
    previewImage: "/project/bimbel.png",
    roleCount: 5,
    roles: ["Super Admin", "Admin Cabang", "Guru", "Siswa", "Orang Tua"],
    modules: [
      "Tenant-aware architecture and role-based access",
      "Centralized monitoring dashboard",
      "Data isolation per organization/unit",
      "Operational controls for multi-site deployment",
    ],
    modulesId: [
      "Arsitektur tenant-aware dan akses berbasis role",
      "Dashboard monitoring terpusat",
      "Isolasi data per organisasi/unit",
      "Kontrol operasional untuk deployment multi-site",
    ],
    mainFeatures: [
      "Multi-tenant isolation with role-based operational boundaries.",
      "Online exam lifecycle with token/session/attempt/grading analytics.",
      "QR attendance with validation and parent notification support.",
      "Exam anti-cheat monitoring with lock/unlock control mechanisms.",
      "Redis-based distributed locking for safe concurrent bulk student creation.",
    ],
    mainFeaturesId: [
      "Isolasi multi-tenant dengan batas operasional berbasis role.",
      "Lifecycle ujian online dengan token/session/attempt/grading analytics.",
      "QR attendance dengan validasi dan notifikasi untuk orang tua.",
      "Monitoring anti-cheat ujian dengan mekanisme lock/unlock.",
      "Distributed locking berbasis Redis untuk bulk create siswa yang aman saat concurrent.",
    ],
    stack: "Remix, Express, Prisma, MySQL, Redis, Socket.IO",
    relevance:
      "Strong foundation for superblock or area-based management where each business unit needs scoped access and shared control.",
    relevanceId:
      "Fondasi kuat untuk pengelolaan superblock atau kawasan, saat tiap unit bisnis membutuhkan akses tersegmentasi dan kontrol bersama.",
  },
  {
    name: "GIS Report Management System",
    domain: "Spatial Dashboard and Data Governance",
    domainId: "Dashboard Spasial dan Tata Kelola Data",
    previewImage: "/project/gispuprp.png",
    roleCount: 3,
    roles: ["Superadmin", "Admin", "Public Visitor"],
    modules: [
      "Interactive map and area-based data visualization",
      "GeoJSON CRUD with category and region filters",
      "PDF report generation and dataset governance",
      "Role-based access for private/public data",
    ],
    modulesId: [
      "Peta interaktif dan visualisasi data berbasis area",
      "GeoJSON CRUD dengan filter kategori dan wilayah",
      "Generate report PDF dan tata kelola dataset",
      "Akses berbasis role untuk data private/public",
    ],
    mainFeatures: [
      "Public/private map layer with controlled visibility settings.",
      "GeoJSON CRUD, bulk upload, and metadata-first lazy loading.",
      "Report PDF management linked to spatial objects.",
      "Master data management for region, category hierarchy, and RDTR coloring.",
      "User management with soft delete, restore, and role protection safeguards.",
    ],
    mainFeaturesId: [
      "Layer peta public/private dengan kontrol visibilitas.",
      "GeoJSON CRUD, bulk upload, dan lazy loading berbasis metadata.",
      "Manajemen report PDF yang terhubung ke objek spasial.",
      "Manajemen master data wilayah, hierarki kategori, dan pewarnaan RDTR.",
      "Manajemen user dengan soft delete, restore, dan proteksi role.",
    ],
    stack: "Laravel 12, React 19, TypeScript, Leaflet, PostgreSQL",
    relevance:
      "Useful for zone-level monitoring in commercial area operations (occupancy, utility, maintenance coverage).",
    relevanceId:
      "Berguna untuk monitoring level-zona pada operasional kawasan komersial (okupansi, utilitas, cakupan maintenance).",
  },
  {
    name: "Sisusan (UMRAH Survey)",
    domain: "Feedback and Service Quality Analytics",
    domainId: "Analitik Feedback dan Kualitas Layanan",
    previewImage: "/project/sisusan.png",
    roleCount: 4,
    roles: ["Admin", "Unit", "Pimpinan", "Public Respondent"],
    modules: [
      "Token-based respondent flow",
      "Survey-question mapping and response controls",
      "IKM analytics dashboard",
      "Role-based reporting for leaders and operators",
    ],
    modulesId: [
      "Alur responden berbasis token",
      "Mapping pertanyaan survei dan kontrol respons",
      "Dashboard analitik IKM",
      "Pelaporan berbasis role untuk pimpinan dan operator",
    ],
    mainFeatures: [
      "Survey setup with question bank mapping by service context.",
      "One-time token submission flow for controlled respondent input.",
      "Respondent profile capture with scored answers (1-4 scale).",
      "Automatic IKM recalculation and dashboard filtering by scope/time.",
      "Role-based access control for admin, unit, and leadership views.",
    ],
    mainFeaturesId: [
      "Setup survei dengan mapping bank pertanyaan per konteks layanan.",
      "Alur submit token sekali pakai untuk kontrol input responden.",
      "Pencatatan profil responden dengan jawaban berskala (1-4).",
      "Perhitungan ulang IKM otomatis dan filter dashboard berdasarkan scope/waktu.",
      "Kontrol akses berbasis role untuk tampilan admin, unit, dan pimpinan.",
    ],
    stack: "CodeIgniter 4, PHP, MySQL, Chart.js, DataTables",
    relevance:
      "Can be adapted for tenant and visitor satisfaction measurements with periodic KPI tracking.",
    relevanceId:
      "Dapat diadaptasi untuk pengukuran kepuasan tenant dan pengunjung dengan tracking KPI berkala.",
  },
];

export const erpScope: ScopeItem[] = [
  {
    title:
      "Lead and unit inquiry management for tenants, shophouses, and commercial zones",
    assumption:
      "Initial assumption: inquiries are currently fragmented across channels. ERP should centralize every lead so leasing can track source, status, and assignment clearly.",
  },
  {
    title: "Booking, contract, lease period, and renewal workflow",
    assumption:
      "Initial assumption: contract lifecycle still requires heavy manual follow-up. ERP should enforce a clear flow from booking to renewal with reminders and approval checkpoints.",
  },
  {
    title: "Billing, payment confirmation, and receivable status",
    assumption:
      "Initial assumption: finance and operations need one shared receivable view. ERP should provide invoice status visibility, payment confirmation logs, and aging monitoring.",
  },
  {
    title: "Document and approval flow (legal, finance, operations)",
    assumption:
      "Initial assumption: cross-team approvals are not yet standardized. ERP should provide role-based approval routing with timestamped audit records.",
  },
  {
    title: "Tenant portal for service request and complaint tracking",
    assumption:
      "Initial assumption: tenant complaints are hard to monitor end-to-end. ERP should provide ticketing, SLA tracking, and transparent status updates for tenants.",
  },
  {
    title: "Management dashboard for occupancy, revenue, and aging",
    assumption:
      "Initial assumption: management decisions need faster operational insight. ERP should present KPI dashboards for occupancy trends, revenue, and receivable risk.",
  },
];

export const aiScope: string[] = [
  "After-hours assistant via Web Chatbot",
  "FAQ and policy answer based on approved knowledge base",
  "Intent routing: sales inquiry, leasing status, complaint, handover request",
  "Ticket auto-creation when user needs human follow-up",
  "Morning handover summary for operational team",
];

export const erpScopeId: ScopeItem[] = [
  {
    title:
      "Manajemen lead dan inquiry unit untuk tenant, ruko, dan kawasan komersial",
    assumption:
      "Asumsi awal: inquiry masih tersebar di banyak channel. ERP perlu memusatkan semua lead agar tim leasing dapat melacak sumber, status, dan penanggung jawab dengan jelas.",
  },
  {
    title: "Alur booking, kontrak, masa sewa, dan perpanjangan",
    assumption:
      "Asumsi awal: siklus kontrak masih membutuhkan follow-up manual yang tinggi. ERP perlu menegakkan alur jelas dari booking sampai renewal dengan reminder dan checkpoint approval.",
  },
  {
    title: "Billing, konfirmasi pembayaran, dan status piutang",
    assumption:
      "Asumsi awal: tim finance dan operasional membutuhkan satu tampilan piutang terpadu. ERP perlu menyediakan visibilitas status invoice, log konfirmasi pembayaran, dan monitoring aging.",
  },
  {
    title: "Alur dokumen dan approval (legal, finance, operasional)",
    assumption:
      "Asumsi awal: approval lintas tim belum terstandarisasi. ERP perlu menyediakan routing approval berbasis role dengan catatan audit bertimestamp.",
  },
  {
    title: "Portal tenant untuk service request dan tracking komplain",
    assumption:
      "Asumsi awal: komplain tenant sulit dipantau secara end-to-end. ERP perlu menyediakan ticketing, tracking SLA, dan update status yang transparan untuk tenant.",
  },
  {
    title: "Dashboard manajemen untuk okupansi, revenue, dan aging",
    assumption:
      "Asumsi awal: keputusan manajemen membutuhkan insight operasional yang lebih cepat. ERP perlu menyajikan dashboard KPI untuk tren okupansi, revenue, dan risiko piutang.",
  },
];

export const aiScopeId: string[] = [
  "Asisten di luar jam operasional melalui Web Chatbot",
  "Jawaban FAQ dan kebijakan berbasis knowledge base yang sudah disetujui",
  "Routing intent: inquiry sales, status leasing, komplain, permintaan handover",
  "Pembuatan tiket otomatis saat user butuh follow-up tim manusia",
  "Ringkasan handover untuk tim operasional",
];

export const textCopy = {
  en: {
    langLabel: "Language",
    highlight: "Portfolio Highlight - Nagoya Hill Assessment",
    title: "Relevant Project Experience for ERP Leasing/Sales and AI Assistant",
    summary:
      "This page summarizes relevant modules from past projects and is tailored to the operational management needs of Nagoya Hill Condominium.",
    share: "Share URL: /#nagoya-hill",
    erpTitle: "Target ERP Scope",
    erpDisclaimer:
      "The points below are based on initial assumptions after the interview and will be validated again during detailed requirement workshops.",
    aiTitle: "After-Hours AI Scope (OpenAI/Gemini)",
    projectTitle: "Project Evidence by Module Section",
    totalRoles: "Total Roles",
    mainFeatures: "Main Features",
    relevance: "Relevance to Nagoya Hill",
    modalTitle: "Main Features",
    featureHighlights: "Feature Highlights",
    roles: "Roles",
    closeModal: "Close modal",
  },
  id: {
    langLabel: "Bahasa",
    highlight: "Sorotan Portfolio - Assessment Nagoya Hill",
    title:
      "Pengalaman Project yang Relevan untuk ERP Leasing/Sales dan Asisten AI",
    summary:
      "Halaman ini merangkum modul-modul relevan dari project sebelumnya dan disusun untuk kebutuhan operasional pengelolaan Nagoya Hill Condominium.",
    share: "URL Share: /#nagoya-hill",
    erpTitle: "Cakupan ERP Target",
    erpDisclaimer:
      "Poin di bawah ini berbasis asumsi awal setelah interview dan akan divalidasi kembali pada workshop requirement detail.",
    aiTitle: "Cakupan AI di Luar Jam Operasional (OpenAI/Gemini)",
    projectTitle: "Bukti Project per Section Modul",
    totalRoles: "Total Role",
    mainFeatures: "Fitur Utama",
    relevance: "Relevansi untuk Nagoya Hill",
    modalTitle: "Fitur Utama",
    featureHighlights: "Ringkasan Fitur",
    roles: "Role",
    closeModal: "Tutup modal",
  },
} as const;
