// 1. Mengambil elemen tombol berdasarkan ID 'sapaButton' dari file HTML
const tombolSapa = document.getElementById('sapaButton');

// 2. Menambahkan fungsi 'klik' pada tombol tersebut
tombolSapa.addEventListener('click', function() {
  // Menampilkan kotak dialog (alert) ketika tombol diklik oleh pengguna
  alert('Halo! Terima kasih sudah berkunjung!');
});
