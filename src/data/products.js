// ============================================================
// VISCO® Industrial Chemicals — Category & Product Data
// ============================================================

export const categoryInfo = {
  boiler: {
    title: 'Boiler Water Treatment',
    slug: 'boiler',
    description: 'Produk kimia VISCO® untuk perawatan sistem boiler. Menjaga efisiensi perpindahan panas, mencegah kerak, korosi, endapan, serta mengontrol pH dan alkalinity air boiler.',
    color: '#E85D26',
    bg: '#FFF3ED',
    heroImage: '/images/products/hero-boiler.jpg',
  },
  cooling: {
    title: 'Cooling Water Treatment',
    slug: 'cooling',
    description: 'Produk kimia VISCO® untuk perawatan cooling tower, chiller, radiator, dan sistem sirkulasi tertutup. Mencegah kerak, karat, pertumbuhan lumut, micro-organisme, dan slime.',
    color: '#0891B2',
    bg: '#ECFEFF',
    heroImage: '/images/products/hero-cooling.jpg',
  },
  cleaning: {
    title: 'Cleaning Chemicals',
    slug: 'cleaning',
    description: 'Produk kimia VISCO® untuk pembersihan kerak, karat, silica, minyak, dan deposit pada boiler, heat exchanger, AC/AHU, serta berbagai peralatan industri.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    heroImage: '/images/products/hero-cleaning.jpg',
  },
  'ro-membrane': {
    title: 'R/O Membrane Solutions',
    slug: 'ro-membrane',
    description: 'Produk kimia VISCO® untuk perawatan dan pembersihan membran Reverse Osmosis (R/O) dan Ultra Filtration (UF). Mencegah deposit, fouling, dan memperpanjang umur membran.',
    color: '#059669',
    bg: '#ECFDF5',
    heroImage: '/images/products/hero-ro-membrane.jpg',
  },
  'wtp-wwtp': {
    title: 'WTP & WWTP Chemicals',
    slug: 'wtp-wwtp',
    description: 'Produk kimia VISCO® untuk proses pengolahan air bersih (WTP) dan air limbah (WWTP). Coagulant, flocculant, pH adjuster, penghilang warna, dan antifoam.',
    color: '#2563EB',
    bg: '#EFF6FF',
    heroImage: '/images/products/hero-wtp-wwtp.jpg',
  },
}

export const products = [
  // ═══════════════════════════════════════════════════════════
  // a. BOILER WATER TREATMENT
  // ═══════════════════════════════════════════════════════════

  // 1. Scale Inhibitors
  { id: 'vb-700', category: 'boiler', subcategory: 'Scale Inhibitors', code: 'VISCO® VB-700', name: 'Scale Inhibitor', fungsi: 'Pencegah kerak', description: 'Mencegah terbentuknya kerak mineral (CaCO₃, CaSO₄, MgSiO₃) pada permukaan perpindahan panas boiler. Menjaga efisiensi termal dan mengurangi konsumsi bahan bakar.' },
  { id: 'vb-730', category: 'boiler', subcategory: 'Scale Inhibitors', code: 'VISCO® VB-730', name: 'Advanced Scale Inhibitor', fungsi: 'Pencegah kerak (formula lanjutan)', description: 'Formula lanjutan pencegah kerak untuk boiler dengan kondisi air keras dan kandungan mineral tinggi. Efektif pada tekanan dan suhu operasi tinggi.' },

  // 2. Corrosion Inhibitors
  { id: 'vb-712', category: 'boiler', subcategory: 'Corrosion Inhibitors', code: 'VISCO® VB-712', name: 'Corrosion Inhibitor', fungsi: 'Pencegah korosi', description: 'Membentuk lapisan pelindung (protective film) pada permukaan logam internal boiler untuk mencegah korosi oksigen dan korosi asam karbonat.' },
  { id: 'vb-715', category: 'boiler', subcategory: 'Corrosion Inhibitors', code: 'VISCO® VB-715', name: 'Advanced Corrosion Inhibitor', fungsi: 'Pencegah korosi (formula lanjutan)', description: 'Formula pencegah korosi tingkat lanjut untuk perlindungan optimal pada boiler bertekanan tinggi dan sistem steam bertekanan tinggi.' },

  // 3. Combined Scale & Corrosion
  { id: 'vb-720', category: 'boiler', subcategory: 'Combined Scale & Corrosion', code: 'VISCO® VB-720', name: 'Scale & Corrosion Inhibitor', fungsi: 'Pencegah kerak dan korosi', description: 'Formula all-in-one untuk pencegahan kerak sekaligus korosi pada boiler. Solusi praktis dan ekonomis untuk proteksi menyeluruh.' },
  { id: 'vb-725', category: 'boiler', subcategory: 'Combined Scale & Corrosion', code: 'VISCO® VB-725', name: 'Premium Scale & Corrosion Inhibitor', fungsi: 'Pencegah kerak dan korosi (premium)', description: 'Formula premium dengan daya pencegahan kerak dan korosi yang lebih kuat untuk boiler dengan kondisi operasi berat dan siklus konsentrasi tinggi.' },

  // 4. Condensate/Steam Pipe Protection
  { id: 'vb-738', category: 'boiler', subcategory: 'Condensate / Steam Pipe Protection', code: 'VISCO® VB-738', name: 'Condensate Line Protector', fungsi: 'Pencegah korosi pipa kondensat dan uap', description: 'Melindungi pipa kondensat dan jalur distribusi steam dari korosi yang disebabkan oleh CO₂ dan O₂ terlarut dalam kondensat.' },

  // 5. Deposit Control
  { id: 'vb-732', category: 'boiler', subcategory: 'Deposit Control', code: 'VISCO® VB-732', name: 'Deposit Controller', fungsi: 'Pencegah endapan / deposit', description: 'Mendispersikan padatan tersuspensi dan mencegah pengendapan lumpur (sludge) pada area perpindahan panas boiler.' },

  // 6. pH & Alkalinity Control
  { id: 'vb-745', category: 'boiler', subcategory: 'pH & Alkalinity Control', code: 'VISCO® VB-745', name: 'pH & Alkalinity Controller', fungsi: 'Pengontrol pH dan alkalinity', description: 'Menjaga pH dan alkalinity air boiler pada rentang optimal (pH 10.5–11.5) untuk meminimalkan korosi dan pembentukan kerak.' },

  // 7. Fuel Additives
  { id: 'ct-200', category: 'boiler', subcategory: 'Fuel Additives', code: 'VISCO® CT-200', name: 'Coal Additive', fungsi: 'Additif bahan bakar batubara', description: 'Meningkatkan efisiensi pembakaran batubara, mengurangi slagging dan fouling pada ruang bakar, serta menurunkan emisi partikulat.' },
  { id: 'fot-100', category: 'boiler', subcategory: 'Fuel Additives', code: 'VISCO® FOT-100', name: 'Fuel Oil Treatment', fungsi: 'Additif bahan bakar solar, residu, MDF', description: 'Meningkatkan kualitas pembakaran bahan bakar cair (solar, residu, MDF), mengurangi deposit pada nozzle dan ruang bakar.' },

  // ═══════════════════════════════════════════════════════════
  // b. COOLING WATER TREATMENT
  // ═══════════════════════════════════════════════════════════

  // 1. Scale & Rust Prevention
  { id: 'vc-150', category: 'cooling', subcategory: 'Scale & Rust Prevention', code: 'VISCO® VC-150', name: 'Scale & Rust Inhibitor', fungsi: 'Pencegah kerak dan karat', description: 'Mencegah pembentukan kerak mineral dan korosi pada pipa, basin, dan fill cooling tower. Menjaga efisiensi perpindahan panas.' },

  // 2. Algae & Slime Prevention
  { id: 'vc-155', category: 'cooling', subcategory: 'Algae & Slime Prevention', code: 'VISCO® VC-155', name: 'Algae Control', fungsi: 'Pencegah lumut (algae)', description: 'Menghambat pertumbuhan algae (lumut hijau) pada cooling tower yang dapat menyumbat nozzle dan mengurangi aliran udara.' },
  { id: 'vc-165', category: 'cooling', subcategory: 'Algae & Slime Prevention', code: 'VISCO® VC-165', name: 'Biocide', fungsi: 'Pencegah micro-organisme', description: 'Membunuh dan mencegah pertumbuhan bakteri, jamur, dan micro-organisme lain yang menyebabkan biofouling pada sistem pendingin.' },
  { id: 'vc-167', category: 'cooling', subcategory: 'Algae & Slime Prevention', code: 'VISCO® VC-167', name: 'Slime Control', fungsi: 'Pencegah slime (biofilm)', description: 'Mencegah pembentukan slime (lapisan lendir biologis) pada permukaan heat exchanger dan pipa sirkulasi cooling water.' },

  // 3. Alkalinity & pH Control
  { id: 'vc-158', category: 'cooling', subcategory: 'Alkalinity & pH Control', code: 'VISCO® VC-158', name: 'Alkalinity Reducer', fungsi: 'Pengontrol / penurun alkalinity', description: 'Menurunkan alkalinity air sirkulasi cooling tower untuk mencegah pembentukan kerak CaCO₃ pada siklus konsentrasi tinggi.' },
  { id: 'vc-157', category: 'cooling', subcategory: 'Alkalinity & pH Control', code: 'VISCO® VC-157', name: 'pH Controller', fungsi: 'Pengontrol pH', description: 'Menjaga tingkat pH air cooling tower pada rentang optimal (6.5–8.5) untuk meminimalkan korosi dan pembentukan kerak.' },

  // 4. Closed System Corrosion Inhibitor
  { id: 'vc-170', category: 'cooling', subcategory: 'Closed System Corrosion Inhibitor', code: 'VISCO® VC-170', name: 'Closed System Inhibitor', fungsi: 'Pencegah korosi sistem tertutup (Chiller & Radiator)', description: 'Perlindungan korosi jangka panjang untuk sistem sirkulasi tertutup seperti chiller, radiator genset, dan hot water system.' },

  // ═══════════════════════════════════════════════════════════
  // c. CLEANING CHEMICALS
  // ═══════════════════════════════════════════════════════════

  // 1. Scale & Rust Removal
  { id: 'vl-275', category: 'cleaning', subcategory: 'Scale & Rust Removal', code: 'VISCO® VL-275', name: 'Boiler & Heat Exchanger Descaler', fungsi: 'Pembersih kerak dan karat pada boiler dan heat exchanger', description: 'Formula asam yang diinhibisi untuk menghilangkan kerak CaCO₃, karat (Fe₂O₃), dan deposit keras pada boiler dan heat exchanger tanpa merusak logam dasar.' },

  // 2. Silica/Hard Scale Removal
  { id: 'vl-279', category: 'cleaning', subcategory: 'Silica / Hard Scale Removal', code: 'VISCO® VL-279', name: 'Silica Remover', fungsi: 'Pembersih kerak silica / karang', description: 'Formula khusus untuk menghilangkan deposit silica dan karang yang sangat keras dan sulit dihilangkan dengan pembersih asam biasa.' },

  // 3. Boil-out (New Boilers)
  { id: 'vl-280', category: 'cleaning', subcategory: 'Boil-out (New Boilers)', code: 'VISCO® VL-280', name: 'Boil-Out Compound', fungsi: 'Pembersih boiler baru (boil-out)', description: 'Menghilangkan minyak pelindung, karat, dan kontaminan dari boiler baru sebelum commissioning. Proses wajib untuk performa optimal boiler baru.' },

  // 4. Aluminum/Fin Coil Cleaner
  { id: 'vl-265', category: 'cleaning', subcategory: 'Aluminum / Fin Coil Cleaner', code: 'VISCO® VL-265', name: 'Coil Cleaner', fungsi: 'Pembersih aluminium / fin coil (AC, AHU)', description: 'Membersihkan debu, kotoran, dan oksida dari fin coil aluminium pada AC dan AHU. Mengembalikan efisiensi pendinginan dan aliran udara.' },

  // 5. Multi-Surface Cleaning
  { id: 'vl-295', category: 'cleaning', subcategory: 'Multi-Surface Cleaning', code: 'VISCO® VL-295', name: 'Non-Ferrous Metal Cleaner', fungsi: 'Pembersih kerak pada tembaga, stainless steel, dll', description: 'Formula khusus untuk membersihkan kerak dan oksida pada logam non-ferrous (tembaga, kuningan, stainless steel) tanpa merusak permukaan.' },
  { id: 'vl-283', category: 'cleaning', subcategory: 'Multi-Surface Cleaning', code: 'VISCO® VL-283', name: 'Industrial Degreaser', fungsi: 'Pembersih organic / oil pada lantai dan mesin', description: 'Pembersih serbaguna berbasis surfaktan untuk menghilangkan minyak, grease, dan kotoran organik dari lantai pabrik, mesin, dan peralatan industri.' },

  // ═══════════════════════════════════════════════════════════
  // d. R/O MEMBRANE SOLUTIONS
  // ═══════════════════════════════════════════════════════════

  // 1. Treatment
  { id: 'vro-500', category: 'ro-membrane', subcategory: 'Treatment', code: 'VISCO® VRO-500', name: 'pH Booster', fungsi: 'Pengontrol pH (pH booster)', description: 'Menaikkan pH air umpan R/O ke level optimal untuk meningkatkan rejection rate membran dan kualitas air produk.' },
  { id: 'vro-501', category: 'ro-membrane', subcategory: 'Treatment', code: 'VISCO® VRO-501', name: 'Chlorine Removal', fungsi: 'Penghilang sisa chlorine dan pencegah deposit', description: 'Menghilangkan sisa chlorine bebas yang dapat merusak membran polyamide, sekaligus mencegah pembentukan deposit pada permukaan membran.' },
  { id: 'vro-502', category: 'ro-membrane', subcategory: 'Treatment', code: 'VISCO® VRO-502', name: 'Antiscalant', fungsi: 'Pencegah deposit inorganic (antiscalant)', description: 'Mencegah pembentukan kerak mineral (CaCO₃, CaSO₄, BaSO₄, SrSO₄, silica) pada permukaan membran R/O. Memperpanjang umur membran.' },
  { id: 'vro-503', category: 'ro-membrane', subcategory: 'Treatment', code: 'VISCO® VRO-503', name: 'Biocide Control', fungsi: 'Pengontrol endapan organic (biocide)', description: 'Mencegah pertumbuhan bakteri dan pembentukan biofilm pada membran R/O yang dapat menurunkan flux dan kualitas air produk.' },

  // 2. Cleaners
  { id: 'vro-1', category: 'ro-membrane', subcategory: 'Cleaners', code: 'VISCO® VRO-1', name: 'Metal Oxide Cleaner', fungsi: 'Pembersih metal oxide (Fe, Mn)', description: 'Menghilangkan fouling besi (Fe) dan mangan (Mn) oxide dari permukaan membran R/O dan UF. Mengembalikan flux membran.' },
  { id: 'vro-2', category: 'ro-membrane', subcategory: 'Cleaners', code: 'VISCO® VRO-2', name: 'Biofilm Cleaner', fungsi: 'Pembersih biofilm', description: 'Menghilangkan lapisan biofilm (koloni bakteri) yang menempel pada permukaan membran R/O dan UF.' },
  { id: 'vro-3', category: 'ro-membrane', subcategory: 'Cleaners', code: 'VISCO® VRO-3', name: 'Inorganic Cleaner', fungsi: 'Pembersih inorganic / zat kapur', description: 'Menghilangkan deposit inorganic seperti kerak kapur (CaCO₃), silica, dan mineral lain dari permukaan membran.' },
  { id: 'vro-4', category: 'ro-membrane', subcategory: 'Cleaners', code: 'VISCO® VRO-4', name: 'Organic Cleaner', fungsi: 'Pembersih organic', description: 'Menghilangkan fouling organik (humic acid, fulvic acid, minyak) dari permukaan membran R/O dan UF.' },
  { id: 'vro-5', category: 'ro-membrane', subcategory: 'Cleaners', code: 'VISCO® VRO-5', name: 'Colloidal Cleaner', fungsi: 'Pembersih colloidal', description: 'Menghilangkan partikel koloid (silt, clay, suspensi halus) yang menyumbat pori-pori membran dan menurunkan performa.' },

  // ═══════════════════════════════════════════════════════════
  // e. WTP & WWTP CHEMICALS
  // ═══════════════════════════════════════════════════════════

  // 1. Coagulants
  { id: 'v-602', category: 'wtp-wwtp', subcategory: 'Coagulants', code: 'VISCO® - 602 & 603', name: 'Coagulant (Liquid)', fungsi: 'Koagulan cair', description: 'Menggumpalkan partikel koloid dan padatan tersuspensi dalam air baku atau limbah menjadi flok-flok kecil yang lebih mudah diendapkan.' },
  { id: 'v-602p', category: 'wtp-wwtp', subcategory: 'Coagulants', code: 'VISCO® - 602P & 603P', name: 'Coagulant (Powder)', fungsi: 'Koagulan serbuk', description: 'Koagulan dalam bentuk powder untuk kemudahan penyimpanan dan distribusi. Fungsi sama dengan koagulan cair.' },

  // 2. Flocculants
  { id: 'v-632', category: 'wtp-wwtp', subcategory: 'Flocculants', code: 'VISCO® - 632 & 632J', name: 'Anionic Flocculant (Liquid)', fungsi: 'Flokulan anionik cair', description: 'Memperbesar ukuran flok hasil koagulasi sehingga lebih cepat mengendap. Cocok untuk air baku dengan turbidity tinggi.' },
  { id: 'v-632p', category: 'wtp-wwtp', subcategory: 'Flocculants', code: 'VISCO® - 632P & 632JP', name: 'Anionic Flocculant (Powder)', fungsi: 'Flokulan anionik serbuk', description: 'Flokulan anionik dalam bentuk serbuk untuk aplikasi WTP dan WWTP. Mudah disimpan dan didistribusikan.' },
  { id: 'v-633', category: 'wtp-wwtp', subcategory: 'Flocculants', code: 'VISCO® - 633', name: 'Cationic Flocculant (Liquid)', fungsi: 'Flokulan kationik cair', description: 'Flokulan kationik untuk pengolahan air limbah dengan kandungan organik dan padatan tersuspensi yang tinggi.' },
  { id: 'v-633p', category: 'wtp-wwtp', subcategory: 'Flocculants', code: 'VISCO® - 633P', name: 'Cationic Flocculant (Powder)', fungsi: 'Flokulan kationik serbuk', description: 'Flokulan kationik dalam bentuk powder. Sangat efektif untuk dewatering lumpur dan pengolahan sludge.' },

  // 3. Other
  { id: 'v-611', category: 'wtp-wwtp', subcategory: 'Other', code: 'VISCO® - 611', name: 'pH Adjuster (Liquid)', fungsi: 'Pengatur pH (cair)', description: 'Mengatur pH air baku atau air limbah ke tingkat optimal untuk proses koagulasi-flokulasi dan pengendapan yang efektif.' },
  { id: 'v-620', category: 'wtp-wwtp', subcategory: 'Other', code: 'VISCO® - 620', name: 'Decolorant', fungsi: 'Penghilang warna organik limbah cair', description: 'Menghilangkan warna organik pada limbah cair industri tekstil, kertas, makanan, dan industri lain yang menghasilkan limbah berwarna.' },
  { id: 'v-613', category: 'wtp-wwtp', subcategory: 'Other', code: 'VISCO® - 613', name: 'Antifoam', fungsi: 'Anti busa', description: 'Mengendalikan dan menghilangkan busa pada proses aerasi WWTP dan proses pengolahan limbah lainnya.' },
]
