async function loadCart() {
    const res = await fetch('/cart');
    return await res.json();
}

async function addToCart(item) {
    await fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    viewCart(); 
}

async function clearCart() {
    await fetch('/cart/clear', { method: 'POST' });
    viewCart();
}

async function viewCart() {
    const cart = await loadCart();
    const display = document.getElementById('cart-list');
    
    if (display) {
        display.innerHTML = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('');
        if (cart.length === 0) display.innerHTML = "<li>Cart is empty</li>";
    }
    console.log("Cart Data:", cart);
}

window.onload = viewCart;