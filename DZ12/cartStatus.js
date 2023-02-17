function cartStatus() {
  const container = document.querySelector(".cart_items__container");
  const cartItems = document.querySelector(".cart_items__main");
  if (container.children.length > 0) {
    cartItems.classList.remove("hidden");
  } else {
    cartItems.classList.add("hidden");
  }
}
