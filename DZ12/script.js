"use strict";

const data = JSON.parse(dataProductJson);

const templateEl = document.querySelector(".template");
const productsWrapper = document.querySelector(".products__wrapper");
const button = document.querySelector(".button");

const visible = 3;
let start = 0;
let end = 3;

function showCards(start, end) {
  for (let i = start; i < end; i++) {
    const element = data[i];

    const productEl = templateEl.content
      .querySelector(".product")
      .cloneNode(true);
  
    productEl.dataset.id = element.id;
    productEl.dataset.color = element.color;
    productEl.dataset.size = element.size;
    productEl.dataset.quantity = element.quantity;

    const title = productEl.querySelector(".title__and__price__h1");
    title.textContent = element.title;

    const text = productEl.querySelector(".title__and__price__text");
    text.textContent = element.text;

    const price = productEl.querySelector(".title__and__price__price");
    price.textContent = "$" + element.price;

    const image = productEl.querySelector(".product__img__main");
    image.src = element.image;
    image.alt = element.alt;

    productsWrapper.appendChild(productEl);
  }
}

showCards(start, end);

button.addEventListener("click", (e) => {
  start = end;
  end = end + visible;

  showCards(start, end);

  if (end >= data.length) {
    button.style.visibility = "hidden";
  }
  e.preventDefault();
});









