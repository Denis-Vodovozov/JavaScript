const container = document.querySelector(".cart_items__container");
const cartItems = document.querySelector(".cart_items__main");

productsWrapper.addEventListener("click", (event) => {
  if (!event.target.closest(".product__cart__btn")) {
    console.log(!event.target.closest(".product__cart__btn"));
    return;
  }
  const productElement = event.target.closest(".product");

  const productInfo = {
    id: productElement.dataset.id,
    image: productElement
      .querySelector(".product__img__main")
      .getAttribute("src"),
    alt: productElement
      .querySelector(".product__img__main")
      .getAttribute("alt"),
    title: productElement.querySelector(".title__and__price__h1").textContent,
    price: productElement.querySelector(".title__and__price__price")
      .textContent,
    color: productElement.dataset.color,
    size: productElement.dataset.size,
    counter: productElement.querySelector("[data-counter]").textContent,
  };

  const itemInCart = container.querySelector(`[data-id="${productInfo.id}"]`);

  if (itemInCart) {
    const counterElement = itemInCart.querySelector("[data-counter]");
    counterElement.textContent =
      parseInt(counterElement.textContent) + parseInt(productInfo.counter);
  } else {
    const cartItemHTML = `<div class="cart__block" data-id="${productInfo.id}">
        <img src="./img/close.png" alt="" class="close" data-action="close"/>
        <div class="cart__block__image">
          <img
            src="${productInfo.image}"
            alt="${productInfo.alt}"
            class="block__image"
          />
        </div>

        <div class="cart__block__text">
          <h1 class="cart__block__text__name">${productInfo.title}</h1>
          <p class="cart__block__text__price">
            Price:
            <span class="cart__block__text__price__color__red">
              ${productInfo.price}
            </span>
          </p>
          <p class="cart__block__text__color">Color: ${productInfo.color}</p>
          <p class="cart__block__text__size">Size: ${productInfo.size}</p>
          <div class="cart__block__quantity">
            <p class="cart__block__text__quantity">Quantity: </p>
            <div class="cart__current" data-counter>${productInfo.counter}</div>
          </div>
        </div>
      </div>`;
    container.insertAdjacentHTML("beforeend", cartItemHTML);
  }
  cartStatus();
});

window.addEventListener("click", (e) => {
  if (e.target.dataset.action === "close") {
    e.target.closest(".cart__block").remove();
    cartStatus();
  }
});
