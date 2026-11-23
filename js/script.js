const rupiah = n => 'Rp' + Math.round(n).toLocaleString('id-ID');
const semuaKartu = document.querySelectorAll('.kartu');
const inputBayar = document.getElementById('bayar');
const pesan = document.getElementById('pesan');
const tombolBayar = document.getElementById('tombol-bayar');
let totalSekarang = 0;

function cekBayar() {
  const bayar = parseInt(inputBayar.value) || 0;
  tombolBayar.disabled = true;
  pesan.className = '';

  if (totalSekarang === 0) {
    pesan.textContent = '';
  } else if (bayar === 0) {
    pesan.textContent = 'Masukkan uang yang dibayar.';
  } else if (bayar < totalSekarang) {
    pesan.textContent = 'Uang kurang ' + rupiah(totalSekarang - bayar);
    pesan.className = 'kurang';
  } else {
    pesan.textContent = 'Kembalian: ' + rupiah(bayar - totalSekarang);
    pesan.className = 'cukup';
    tombolBayar.disabled = false;
  }
}

function hitung() {
  let subtotal = 0;
  let html = '';

  semuaKartu.forEach(k => {
    const jumlah = parseInt(k.querySelector('.jumlah').textContent);
    if (jumlah > 0) {
      const harga = parseInt(k.dataset.harga);
      subtotal += harga * jumlah;
      html += `<p class="baris"><span>${k.dataset.nama} x${jumlah}</span><span>${rupiah(harga * jumlah)}</span></p>`;
    }
  });

  const diskon = subtotal >= 100000 ? subtotal * 0.1 : 0;
  totalSekarang = subtotal - diskon;

  document.getElementById('daftar-belanja').innerHTML =
    html || '<p>Belum ada produk dipilih.</p>';
  document.getElementById('subtotal').textContent = rupiah(subtotal);
  document.getElementById('diskon').textContent = '-' + rupiah(diskon);
  document.getElementById('total').textContent = rupiah(totalSekarang);
  cekBayar();
}

semuaKartu.forEach(k => {
  const teksJumlah = k.querySelector('.jumlah');
  const stok = parseInt(k.dataset.stok);

  k.querySelector('.tambah').addEventListener('click', () => {
    const sekarang = parseInt(teksJumlah.textContent);
    if (sekarang < stok) {
      teksJumlah.textContent = sekarang + 1;
      hitung();
    }
  });

  k.querySelector('.kurang').addEventListener('click', () => {
    const sekarang = parseInt(teksJumlah.textContent);
    if (sekarang > 0) {
      teksJumlah.textContent = sekarang - 1;
      hitung();
    }
  });
});

inputBayar.addEventListener('input', cekBayar);

tombolBayar.addEventListener('click', () => {
  alert('Pembayaran berhasil! Struk dibuat di langkah berikutnya.');
});