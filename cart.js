function getCart() {
  return JSON.parse(sessionStorage.getItem('mz_cart') || '[]');
}

function saveCart(cart) {
  sessionStorage.setItem('mz_cart', JSON.stringify(cart));
}

function addToCart(name, price) {
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  saveCart(cart);
}
