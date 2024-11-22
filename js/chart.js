// script.js

let cart = []; // Menyimpan daftar produk di keranjang

// Fungsi untuk menambah item ke keranjang
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    updateCartDisplay();
}

// Fungsi untuk mengupdate tampilan keranjang
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Bersihkan keranjang yang lama
    cartItemsContainer.innerHTML = '';

    // Menambahkan item ke keranjang di UI
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - Rp ${item.price.toLocaleString()} 
                        <button class="remove-item" data-index="${index}">Hapus</button>`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });

    // Update total harga
    totalPriceElement.textContent = totalPrice.toLocaleString();

    // Tambahkan event listener untuk tombol hapus
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(button.getAttribute('data-index'));
            removeItemFromCart(index); // Panggil fungsi hapus item
        });
    });
}

// Fungsi untuk menghapus item dari keranjang berdasarkan index
function removeItemFromCart(index) {
    cart.splice(index, 1); // Hapus item berdasarkan index
    updateCartDisplay();    // Perbarui tampilan keranjang
}

// Fungsi untuk menghapus semua item di keranjang
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// Menambahkan event listeners untuk tombol "Tambah ke Keranjang"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = button.parentElement;
        const name = productElement.getAttribute('data-name');
        const price = parseInt(productElement.getAttribute('data-price'));

        addToCart(name, price); // Menambah produk ke keranjang
    });
});

// Event listener untuk tombol "Kosongkan Keranjang"
document.getElementById('clear-cart').addEventListener('click', clearCart);
