
const stories = [
  {
    id: 1,
    title: "Surat untuk Masa Depan",
    category: "Inspirasi",
    body: `Dika menemukan sebuah amplop cokelat di dalam laci meja belajarnya.

Di bagian depan tertulis: Untuk Dika di masa depan.

Dengan penasaran, ia membuka amplop itu. Isinya adalah surat yang pernah ia tulis sendiri saat masih kecil. Dalam surat itu, Dika bercerita tentang cita-citanya dan janji untuk terus belajar.

Dika tersenyum. Ia sadar bahwa meskipun belum semua mimpinya tercapai, dirinya sudah berjalan cukup jauh.

Sejak hari itu, Dika belajar bahwa mimpi tidak harus diraih sekaligus. Satu langkah kecil setiap hari juga berarti kemajuan.`
  },
  {
    id: 2,
    title: "Teman di Bangku Belakang",
    category: "Persahabatan",
    body: `Hari pertama di sekolah baru membuat Nara merasa canggung.

Saat istirahat, ia melihat seorang anak bernama Bima sedang kesulitan memahami tugas matematika. Nara menawarkan bantuan.

Awalnya mereka hanya membahas soal, tetapi obrolan berlanjut tentang buku dan hobi.

Hari-hari berikutnya, mereka mulai belajar bersama. Bima membantu Nara mengenal sekolah, sedangkan Nara membantu Bima lebih percaya diri.

Nara akhirnya mengerti bahwa teman baik bisa ditemukan dari percakapan sederhana.`
  },
  {
    id: 3,
    title: "Cahaya di Ujung Jalan",
    category: "Kehidupan",
    body: `Setiap sore, Rani melewati jalan kecil yang dipenuhi pepohonan.

Suatu hari, hujan turun ketika Rani pulang. Ia berteduh di sebuah warung kecil.

Rani memperhatikan jalan yang basah dan cahaya matahari yang perlahan muncul dari balik awan. Pemandangan sederhana itu membuat pikirannya terasa lebih tenang.

Ia pulang dengan semangat baru. Masalah memang tidak langsung hilang, tetapi Rani tahu ia bisa menghadapinya satu per satu.`
  },
  {
    id: 4,
    title: "Perpustakaan Saat Hujan",
    category: "Petualangan",
    body: `Ketika hujan deras turun, Arga berlari ke perpustakaan sekolah.

Di rak paling pojok, ia menemukan buku tua tanpa judul. Halaman pertamanya berisi peta sederhana menuju taman kota.

Keesokan harinya, Arga mengunjungi taman itu bersama kakaknya. Mereka menemukan pesan tentang menjaga kebersihan dan merawat tanaman.

Arga tersenyum. Buku itu ternyata bukan peta harta karun, melainkan ajakan untuk menemukan keindahan di sekitar mereka.`
  },
  {
    id: 5,
    title: "Pohon Mangga di Halaman",
    category: "Keluarga",
    body: `Di halaman rumah Sinta tumbuh pohon mangga yang ditanam oleh kakeknya.

Setiap hari Sinta menyiramnya, meskipun pohon itu belum juga berbuah.

Kakek berkata bahwa tanaman membutuhkan waktu. Sinta pun terus merawatnya.

Beberapa bulan kemudian, bunga-bunga kecil mulai bermunculan.

Sinta belajar bahwa hal baik membutuhkan kesabaran, perhatian, dan usaha yang dilakukan terus-menerus.`
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("bookContainer");
  const search = document.getElementById("searchInput");
  const reader = document.getElementById("reader");
  const title = document.getElementById("readerTitle");
  const category = document.getElementById("readerCategory");
  const body = document.getElementById("readerBody");
  const close = document.getElementById("closeReader");

  if (!container || !reader || !title || !category || !body) {
    console.error("Elemen pembaca tidak ditemukan. Periksa ID di index.html.");
    return;
  }

  function showStories(list) {
    container.innerHTML = "";

    list.forEach(function (story) {
      const card = document.createElement("article");
      card.className = "book-card";

      const cover = document.createElement("div");
      cover.className = "cover";
      cover.textContent = story.title;

      const info = document.createElement("div");
      info.className = "book-info";

      const categoryText = document.createElement("span");
      categoryText.className = "category";
      categoryText.textContent = story.category;

      const heading = document.createElement("h3");
      heading.textContent = story.title;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "read-button";
      button.textContent = "Baca Cerita →";

      button.addEventListener("click", function () {
        title.textContent = story.title;
        category.textContent = story.category;
        body.textContent = story.body;
        reader.hidden = false;
        reader.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });

      info.appendChild(categoryText);
      info.appendChild(heading);
      info.appendChild(button);

      card.appendChild(cover);
      card.appendChild(info);
      container.appendChild(card);
    });
  }

  if (search) {
    search.addEventListener("input", function () {
      const keyword = search.value.toLowerCase();

      const filtered = stories.filter(function (story) {
        return (
          story.title.toLowerCase().includes(keyword) ||
          story.category.toLowerCase().includes(keyword)
        );
      });

      showStories(filtered);
    });
  }

  if (close) {
    close.addEventListener("click", function () {
      reader.hidden = true;
    });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  showStories(stories);
});
