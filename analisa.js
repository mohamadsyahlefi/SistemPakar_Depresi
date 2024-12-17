function loadQuestions() {
    console.log("Data gejala:", gejala);
    console.log("Data cf_user:", cf_user);
    const gejala = [
        {
            kode_gejala: "G001",
            gejala: "Sering Merasa Sedih"
        },
        {
            kode_gejala: "G002",
            gejala: "Sering kelelahan melakukan aktifitas ringan"
        },
        {
            kode_gejala: "G003",
            gejala: "Kurang konsentrasi dalam belajar "
        },
        {
            kode_gejala: "G004",
            gejala: "Mudah merasa bosan"
        },
        {
            kode_gejala: "G005",
            gejala: "Sering Melamun"
        },
        {
            kode_gejala: "G006",
            gejala: "Tidak semangat melakukan sesuatu"
        },
        {
            kode_gejala: "G007",
            gejala: "Merasa Risau"
        },
        {
            kode_gejala: "G008",
            gejala: "Pesimis"
        },
        {
            kode_gejala: "G009",
            gejala: "Sering menangis secara tiba-tiba"
        },
        {
            kode_gejala: "G010",
            gejala: "Gangguan susah Tidur"
        },
        {
            kode_gejala: "G011",
            gejala: "Merasa Cemas Berlebihan"
        },
        {
            kode_gejala: "G012",
            gejala: "Kecewa dengan diri sendiri"
        },
        {
            kode_gejala: "G013",
            gejala: "Terganggu dengan banyak hal"
        },
        {
            kode_gejala: "G014",
            gejala: "Sering murung"
        },
        {
            kode_gejala: "G015",
            gejala: "Kehilangan minat terhadap hoby"
        },
        {
            kode_gejala: "G016",
            gejala: "Merasa kesepian"
        },
        {
            kode_gejala: "G017",
            gejala: "Sering merasa bersalah"
        },
        {
            kode_gejala: "G018",
            gejala: "Merasa dihakimi"
        },
        {
            kode_gejala: "G019",
            gejala: "Membenci Diri Sendiri"
        },
        {
            kode_gejala: "G020",
            gejala: "Mudah tersinggung"
        },
        {
            kode_gejala: "G021",
            gejala: "Kehilangan Nafsu makan "
        },
        {
            kode_gejala: "G022",
            gejala: "Khawatir tentang penampilan"
        },
        {
            kode_gejala: "G023",
            gejala: "Mudah Marah"
        },
        {
            kode_gejala: "G024",
            gejala: "Suka menyendiri"
        },
        {
            kode_gejala: "G025",
            gejala: "Pikiran Untuk Bunuh Diri"
        },
        {
            kode_gejala: "G026",
            gejala: "Sulit mengambil keputusan"
        },
        {
            kode_gejala: "G027",
            gejala: "Sulit melakukan kegiatan dengan Baik"
        },
        {
            kode_gejala: "G028",
            gejala: "Ada penambahan dan penurunan berat badan"
        },
        {
            kode_gejala: "G029",
            gejala: "Kurang percaya diri"
        },
        {
            kode_gejala: "G030",
            gejala: "Kurang nyaman dikeramaian"
        },
    ];

    const cf_user = [
        {
            kondisi: 'Tidak',
            nilai: 0.0,
        },
        {
            kondisi: 'Tidak Yakin',
            nilai: 0.2,
        },
        {
            kondisi: 'Mungkin',
            nilai: 0.4,
        },
        {
            kondisi: 'Kemungkinan Besar',
            nilai: 0.6,
        },
        {
            kondisi: 'Hampir Pasti',
            nilai: 0.8,
        },
        {
            kondisi: 'Pasti',
            nilai: 1,
        },
    ];

    const depresi = [
        {
            kode_depresi: "P001",
            depresi: "Gangguan Mood"
        },
        {
            kode_depresi: "P002",
            depresi: "Depresi Ringan"
        },
        {
            kode_depresi: "P003",
            depresi: "Depresi Sedang"
        },
        {
            kode_depresi: "P004",
            depresi: "Depresi Berat"
        },
    ];

    const rule = [
        // P001 => Gangguan Mood
        {
            kode_depresi: 'P001',
            kode_gejala: 'G001',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P001',
            kode_gejala: 'G002',
            mb: 0.4,
            md: 0.2
        },
        {
            kode_depresi: 'P001',
            kode_gejala: 'G003',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P001',
            kode_gejala: 'G004',
            mb: 0.4,
            md: 0.2
        },
        {
            kode_depresi: 'P001',
            kode_gejala: 'G005',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P001',
            kode_gejala: 'G007',
            mb: 0.4,
            md: 0.2
        },
    
        // P002 => Depresi Ringan
        {
            kode_depresi: 'P002',
            kode_gejala: 'G001',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G002',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G006',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G008',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G010',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G011',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G014',
            mb: 0.8,
            md: 0.0
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G015',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G016',
            mb: 0.8,
            md: 0.0
        },
        {
            kode_depresi: 'P002',
            kode_gejala: 'G022',
            mb: 0.6,
            md: 0.0
        },
    
        // Depresi Sedang
        {
            kode_depresi: 'P003',
            kode_gejala: 'G001',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G009',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G010',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G011',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G012',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G013',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G016',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G017',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G020',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G022',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G023',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P003',
            kode_gejala: 'G027',
            mb: 0.6,
            md: 0.2
        },
    
        // Depresi Berat
        {
            kode_depresi: 'P004',
            kode_gejala: 'G001',
            mb: 0.8,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G009',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G010',
            mb: 0.8,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G012',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G013',
            mb: 0.2,
            md: 0.2
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G016',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G018',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G019',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G020',
            mb: 0.8,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G021',
            mb: 0.4,
            md: 0.2
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G024',
            mb: 0.6,
            md: 0.2
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G025',
            mb: 0.8,
            md: 0.2
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G026',
            mb: 0.4,
            md: 0.2
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G027',
            mb: 0.6,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G028',
            mb: 1.0,
            md: 0.0
        },
        {
            kode_depresi: 'P004',
            kode_gejala: 'G029',
            mb: 0.8,
            md: 0.0
        },
    ];
}

export const gejala = [
    {
        kode_gejala: "G001",
        gejala: "Sering Merasa Sedih"
    },
    {
        kode_gejala: "G002",
        gejala: "Sering kelelahan melakukan aktifitas ringan"
    },
    {
        kode_gejala: "G003",
        gejala: "Kurang konsentrasi dalam belajar"
    },
    {
        kode_gejala: "G004",
        gejala: "Mudah merasa bosan"
    },
    {
        kode_gejala: "G005",
        gejala: "Sering Melamun"
    },
    {
        kode_gejala: "G006",
        gejala: "Tidak semangat melakukan sesuatu"
    },
    {
        kode_gejala: "G007",
        gejala: "Merasa Risau"
    },
    {
        kode_gejala: "G008",
        gejala: "Pesimis"
    },
    {
        kode_gejala: "G009",
        gejala: "Sering menangis secara tiba-tiba"
    },
    {
        kode_gejala: "G010",
        gejala: "Gangguan susah Tidur"
    },
    {
        kode_gejala: "G011",
        gejala: "Merasa Cemas Berlebihan"
    },
    {
        kode_gejala: "G012",
        gejala: "Kecewa dengan diri sendiri"
    },
    {
        kode_gejala: "G013",
        gejala: "Terganggu dengan banyak hal"
    },
    {
        kode_gejala: "G014",
        gejala: "Sering murung"
    },
    {
        kode_gejala: "G015",
        gejala: "Kehilangan minat terhadap hoby"
    },
    {
        kode_gejala: "G016",
        gejala: "Merasa kesepian"
    },
    {
        kode_gejala: "G017",
        gejala: "Sering merasa bersalah"
    },
    {
        kode_gejala: "G018",
        gejala: "Merasa dihakimi"
    },
    {
        kode_gejala: "G019",
        gejala: "Membenci Diri Sendiri"
    },
    {
        kode_gejala: "G020",
        gejala: "Mudah tersinggung"
    },
    {
        kode_gejala: "G021",
        gejala: "Kehilangan Nafsu makan"
    },
    {
        kode_gejala: "G022",
        gejala: "Khawatir tentang penampilan"
    },
    {
        kode_gejala: "G023",
        gejala: "Mudah Marah"
    },
    {
        kode_gejala: "G024",
        gejala: "Suka menyendiri"
    },
    {
        kode_gejala: "G025",
        gejala: "Pikiran Untuk Bunuh Diri"
    },
    {
        kode_gejala: "G026",
        gejala: "Sulit mengambil keputusan"
    },
    {
        kode_gejala: "G027",
        gejala: "Sulit melakukan kegiatan dengan Baik"
    },
    {
        kode_gejala: "G028",
        gejala: "Ada penambahan dan penurunan berat badan"
    },
    {
        kode_gejala: "G029",
        gejala: "Kurang percaya diri"
    },
    {
        kode_gejala: "G030",
        gejala: "Kurang nyaman dikeramaian"
    },
];

export const cf_user = [
    {
        kondisi: 'Tidak',
        nilai: 0.0,
    },
    {
        kondisi: 'Tidak Yakin',
        nilai: 0.2,
    },
    {
        kondisi: 'Mungkin',
        nilai: 0.4,
    },
    {
        kondisi: 'Kemungkinan Besar',
        nilai: 0.6,
    },
    {
        kondisi: 'Hampir Pasti',
        nilai: 0.8,
    },
    {
        kondisi: 'Pasti',
        nilai: 1,
    },
];
