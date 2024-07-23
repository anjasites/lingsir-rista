function categoryLink() {
  return {
    categories: [
      { name: "Administrasi", icon: "adm.svg" },
      { name: "Teknis & Manajemen Kerja", icon: "tmk.svg" },
      { name: "Sumber Daya Manusia", icon: "sdm.svg" },
      { name: "Kehumasan", icon: "humas.svg" },
      { name: "Pelayanan Statistik", icon: "pst.svg" },
    ],
    links: [
      [
        { icon: "", name: "SIRUP", url: "https://sirup.lkpp.go.id/sirup/loginctr/index", desc: "Sistem Informasi Rencana Umum Pengadaan" },
        { icon: "", name: "SAKTI", url: "https://sakti.kemenkeu.go.id/", desc: "Sistem Aplikasi Keuangan Tingkat Instansi" },
        { icon: "", name: "E-MONEV BPS", url: "", desc: "Aplikasi Pelaporan E-Monev BPS" },
        { icon: "", name: "E-MONEV BAPPENAS", url: "https://e-monev.bappenas.go.id/portal/", desc: "Aplikasi Pelaporan E-Monev Bappenas" },
        { icon: "", name: "SPI", url: "https://sso.bps.go.id/", desc: "Sistem Pengendalian Internal" },
        { icon: "", name: "SMART", url: "https://monev.kemenkeu.go.id/", desc: "Sistem Monitoring dan Evaluasi Kinerja Terpadu" },
        { icon: "", name: "MonSakti", url: "https://monsakti.kemenkeu.go.id/", desc: "Sistem Monitoring Keuangan Tingkat Instansi" },
        { icon: "", name: "CMS BRI", url: "https://ibank.bri.co.id/cms/", desc: "Sistem Pengelolaan Keuangan BRI" },
        { icon: "", name: "KippApp", url: "https://webapps.bps.go.id/kipapp/", desc: "Pengelolaan Kinerja ASN di Lingkungan Badan Pusat Statistik" },
        { icon: "", name: "SIMISTIK", url: "https://sites.google.com/view/simistik/beranda", desc: "Sistem Informasi Mitra Statistik" },
        { icon: "", name: "E-SAKIP REVIU", url: "", desc: "Aplikasi Pelaporan E-Monev Bappenas" },
      ],
      [
        { icon: "", name: "WebMonitoring", url: "https://internal.bps.go.id/", desc: "Sistem Monitoring Sensus dan Survei BPS RI" },
        { icon: "", name: "KSA BPS", url: "https://ksa.bps.go.id/", desc: "Sistem Monitoring Peramalan Luas Panen dengan Menggunakan Metode Kerangka Sampel Area" },
      ],
      [
        { icon: "", name: "e-LHKPN", url: "https://elhkpn.kpk.go.id/portal/", desc: "Laporan Harta Kekayaan Penyelenggara Negara" },
        { icon: "", name: "SPT/DJP-Online", url: "https://djponline.pajak.go.id/", desc: "Layanan Pajak Online yang Disediakan oleh DJP" },
        { icon: "", name: "SOBAT BPS", url: "https://mitra.bps.go.id/", desc: "Aplikasi yang Digunakan untuk Petugas dan Calon Petugas Mitra BPS di Seluruh Indonesia" },
      ],
      [
        { icon: "", name: "Instagram", url: "https://www.instagram.com/bpstulungagung", desc: "Laman Instagram BPS Kabupaten Tulungagung" },
        { icon: "", name: "Facebook", url: "https://www.facebook.com/bps.kabupatentulungagung", desc: "Laman Facebook BPS Kabupaten Tulungagung" },
        { icon: "", name: "Berita Resmi Statistik", url: "https://tulungagungkab.bps.go.id/pressrelease.html", desc: "Berita Resmi Statistik BPS Kabupaten Tulungagung" },
        { icon: "", name: "Publikasi Data", url: "https://tulungagungkab.bps.go.id/publication.html", desc: "Publikasi Data BPS Kabupaten Tulungagung" },
        { icon: "", name: "Dokumentasi", url: "https://drive.google.com/drive/folders/1ZPbNWhXWFquPpc5clQick9UzOsPIdr2k?usp=sharing", desc: "" },
      ],
      [
        { icon: "bps.png", name: "Website Resmi BPS", url: "https://tulungagungkab.bps.go.id/", desc: "Website Resmi BPS Kabupaten Tulungagung" },
        { icon: "", name: "PST", url: "https://pst.bps.go.id/", desc: "Pelayanan Statistik Terpadu BPS RI" },
      ],
    ],
    openCategories: [],
    toggleCategory(index) {
      if (this.openCategories.includes(index)) {
        this.openCategories = this.openCategories.filter((i) => i !== index);
      } else {
        this.openCategories.push(index);
      }
    },
    closeAll() {
      this.openCategories = [];
    },
    query: "",
    get filteredCategories() {
      if (this.query === "") {
        return this.categories;
      }
      return this.categories.filter((category, index) => {
        return this.links[index].some((link) => link.name.toLowerCase().includes(this.query.toLowerCase()) || link.desc.toLowerCase().includes(this.query.toLowerCase()));
      });
    },
    filteredLinks(categoryIndex) {
      if (this.query === "") {
        return this.links[categoryIndex];
      }
      return this.links[categoryIndex].filter((link) => link.name.toLowerCase().includes(this.query.toLowerCase()) || link.desc.toLowerCase().includes(this.query.toLowerCase()));
    },
  };
}
