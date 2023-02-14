const content = document.querySelector(".content");

dateInfo.forEach((element) => {
  const contentEl = document.createElement("div");
  contentEl.classList.add("element");

  const nameEl = document.createElement("h1");
  nameEl.textContent = element.name;
  contentEl.appendChild(nameEl);

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = element.description;
  contentEl.appendChild(descriptionEl);

  const imgEl = document.createElement("img");
  imgEl.src = element.image_url;
  contentEl.appendChild(imgEl);

  content.appendChild(contentEl);
});
