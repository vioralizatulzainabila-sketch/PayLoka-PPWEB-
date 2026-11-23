<?php
include 'includes/header.php';
include 'includes/data.php';
?>

<main class="wadah">
  <h1>PayLoka</h1>
  <p>Kasir digital untuk UMKM</p>

  <div class="daftar-produk">
    <?php foreach ($produk as $p): ?>
      <div class="kartu">
        <h3 class="nama"><?= $p['nama'] ?></h3>
        <p class="harga">Rp<?= number_format($p['harga'], 0, ',', '.') ?></p>
        <p class="stok">stok <?= $p['stok'] ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</main>

<?php include 'includes/footer.php'; ?>