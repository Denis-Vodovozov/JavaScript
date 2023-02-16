const data = JSON.parse(dataProductJson);

const templateEl = document.querySelector(".template");
const productsWrapper = document.querySelector(".products__wrapper");

const visible = 3;
let from = 0;
let to = visible;

function showCards(from, to) {
  for (let i = from; i < to; i++) {
    const element = data[i];

    const productEl = templateEl.content
      .querySelector(".product")
      .cloneNode(true);

    const title = productEl.querySelector(".title__and__price__h1");
    title.textContent = element.title;

    const text = productEl.querySelector(".title__and__price__text");
    text.textContent = element.text;

    const price = productEl.querySelector(".title__and__price__price");
    price.textContent = element.price;

    const image = productEl.querySelector(".product__img__main");
    image.src = element.image;
    image.alt = element.alt;

    productsWrapper.appendChild(productEl);
  }
}

const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  from = to;
  to = to + visible;

  showCards(from, to);

  if (to >= data.length) {
    button.remove();
  }

  e.preventDefault();
});

showCards(from, to);
