 // Menampilkan pilihan metode pembayaran yang relevan berdasarkan pilihan user
 document.getElementById('payment-method').addEventListener('change', function () {
    var selectedMethod = this.value;
    // Menyembunyikan semua pilihan pembayaran terlebih dahulu
    var paymentDetails = document.querySelectorAll('.payment-details');
    paymentDetails.forEach(function (detail) {
        detail.style.display = 'none';
    });
    // Menampilkan pilihan yang sesuai dengan metode pembayaran yang dipilih
    if (selectedMethod === 'bank-transfer') {
        document.getElementById('bank-option').style.display = 'block';
    } else if (selectedMethod === 'dana') {
        document.getElementById('dana-option').style.display = 'block';
    } else if (selectedMethod === 'gopay') {
        document.getElementById('gopay-option').style.display = 'block';
    } else if (selectedMethod === 'cod') {
        document.getElementById('cod-option').style.display = 'block';
    }
});