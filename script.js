// Ambil elemen tombol "Iya"
const tombolYes = document.getElementById('yes');

// Fungsi saat tombol diklik
tombolYes.onclick = () => {
  // 1. Sembunyikan kontainer tombol/halaman pertama
  const container = document.querySelector('.container');
  if (container) {
    container.style.display = 'none';
  }

  // 2. Munculkan bunga (hapus class not-loaded)
  document.body.classList.remove("not-loaded");
  
  // 3. (Opsional) Jalankan musik kalau ada
  // let music = document.getElementById('linkMp3');
  // if(music) music.play();
};