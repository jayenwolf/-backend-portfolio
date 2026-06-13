export const projects = [
  {
    slug: "task-management-api",
    accent: "violet",
    title: {
      id: "Task Management API",
      en: "Task Management API",
    },
    summary: {
      id: "REST API untuk mengelola tugas pengguna dengan autentikasi JWT, validasi, dan filter status.",
      en: "A REST API for managing user tasks with JWT authentication, validation, and status filtering.",
    },
    problem: {
      id: "Pengguna membutuhkan sistem sederhana untuk menyimpan dan mengatur tugas secara aman.",
      en: "Users need a simple and secure system to store and organize their tasks.",
    },
    solution: {
      id: "Membangun API terstruktur dengan autentikasi, kepemilikan data, pagination, dan dokumentasi endpoint.",
      en: "Built a structured API with authentication, data ownership, pagination, and endpoint documentation.",
    },
    features: {
      id: ["Register dan login", "JWT authentication", "CRUD tugas", "Filter dan pagination"],
      en: ["Register and login", "JWT authentication", "Task CRUD", "Filtering and pagination"],
    },
    learnings: {
      id: "Mempelajari pemisahan route, service, schema, model, serta penanganan error yang konsisten.",
      en: "Learned route, service, schema, and model separation, along with consistent error handling.",
    },
    stack: ["Python", "FastAPI", "PostgreSQL", "JWT"],
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    slug: "expense-tracker-api",
    accent: "cyan",
    title: {
      id: "Expense Tracker API",
      en: "Expense Tracker API",
    },
    summary: {
      id: "Backend untuk mencatat transaksi, kategori, ringkasan bulanan, dan anggaran pengguna.",
      en: "A backend for tracking transactions, categories, monthly summaries, and user budgets.",
    },
    problem: {
      id: "Pencatatan keuangan manual sulit dicari dan tidak memberikan ringkasan otomatis.",
      en: "Manual financial records are difficult to search and do not provide automatic summaries.",
    },
    solution: {
      id: "Menyediakan endpoint transaksi dan agregasi data untuk menampilkan laporan pemasukan serta pengeluaran.",
      en: "Provided transaction and aggregation endpoints to generate income and expense reports.",
    },
    features: {
      id: ["CRUD transaksi", "Kategori", "Ringkasan bulanan", "Validasi nominal"],
      en: ["Transaction CRUD", "Categories", "Monthly summary", "Amount validation"],
    },
    learnings: {
      id: "Mempelajari query agregasi SQL, relasi tabel, dan validasi data finansial.",
      en: "Learned SQL aggregation queries, table relationships, and financial data validation.",
    },
    stack: ["Python", "Flask", "SQLite", "SQLAlchemy"],
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    slug: "library-service-api",
    accent: "amber",
    title: {
      id: "Library Service API",
      en: "Library Service API",
    },
    summary: {
      id: "Sistem peminjaman buku dengan data anggota, stok buku, dan riwayat transaksi.",
      en: "A book lending system with members, inventory, and transaction history.",
    },
    problem: {
      id: "Proses peminjaman perlu menjaga ketersediaan buku dan mencegah data transaksi tidak konsisten.",
      en: "The lending process must preserve book availability and prevent inconsistent transaction data.",
    },
    solution: {
      id: "Membuat aturan bisnis untuk peminjaman, pengembalian, stok, dan pencatatan riwayat.",
      en: "Created business rules for lending, returns, stock management, and history tracking.",
    },
    features: {
      id: ["Manajemen buku", "Data anggota", "Peminjaman", "Riwayat transaksi"],
      en: ["Book management", "Member data", "Book lending", "Transaction history"],
    },
    learnings: {
      id: "Mempelajari transaksi database, constraint, dan penerapan aturan bisnis di service layer.",
      en: "Learned database transactions, constraints, and business rules in the service layer.",
    },
    stack: ["Python", "FastAPI", "MySQL", "Pytest"],
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
