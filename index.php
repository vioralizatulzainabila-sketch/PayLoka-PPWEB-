<?php
include 'includes/header.php';
include 'includes/data.php';
?>

<main class="wadah">
  <h1>PayLoka</h1>
  <p>Kasir digital untuk UMKM</p>

  <div class="kasir">
    <div class="daftar-produk">
      <?php foreach ($produk as $p): ?>
        <div class="kartu" data-nama="<?= $p['nama'] ?>" data-harga="<?= $p['harga'] ?>" data-stok="<?= $p['stok'] ?>">
          <h3 class="nama"><?= $p['nama'] ?></h3>
          <p class="harga">Rp<?= number_format($p['harga'], 0, ',', '.') ?></p>
          <p class="stok">stok <?= $p['stok'] ?></p>
          <div class="qty">
            <button type="button" class="kurang">-</button>
            <span class="jumlah">0</span>
            <button type="button" class="tambah">+</button>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

    <aside class="ringkasan">
      <h2>Ringkasan</h2>
      <div id="daftar-belanja"><p>Belum ada produk dipilih.</p></div>
      <p class="baris"><span>Subtotal</span><span id="subtotal">Rp0</span></p>
      <p class="baris"><span>Diskon 10%</span><span id="diskon">Rp0</span></p>
      <p class="baris total"><span>Total</span><span id="total">Rp0</span></p>
      <label for="bayar">Uang dibayar</label>
      <input type="number" id="bayar" min="0" placeholder="0">
      <p id="pesan"></p>
      <button type="button" id="tombol-bayar" class="tombol-bayar" disabled>Bayar</button>
    </aside>
  </div>
</main>

<?php include 'includes/footer.php'; ?>