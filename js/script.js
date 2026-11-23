const rupiah = n => 'Rp' + Math.round(n).toLocaleString('id-ID');
const semuaKartu = document.querySelectorAll('.kartu');

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

  document.getElementById('daftar-belanja').innerHTML =
    html || '<p>Belum ada produk dipilih.</p>';
  document.getElementById('subtotal').textContent = rupiah(subtotal);
  document.getElementById('diskon').textContent = '-' + rupiah(diskon);
  document.getElementById('total').textContent = rupiah(subtotal - diskon);
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