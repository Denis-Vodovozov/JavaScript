const cels = document.querySelector(".celsius");
const btn = document.querySelector(".button");
const val = document.querySelector(".value");

function convert() {
  const celsValue = Number(cels.value);
  if (isNaN(celsValue) || celsValue === '') {
    alert("Введите верное значение!");
    return;
  }
  const fahrenheit = (9/5) * celsValue + 32;
  val.textContent = `${celsValue} ℃ это ${fahrenheit} ℉`;
}

btn.addEventListener("click", convert);


const celsiusValue = 32;
const fahrenheitValue = (9/5) * celsiusValue + 32;
console.log (`${celsiusValue} ℃ это ${fahrenheitValue} ℉`);



const userName = document.querySelector(".user_name");
const btn2 = document.querySelector(".button2");
const admin = document.querySelector(".admin");

function administrator() {
  const userNameValue = String(userName.value);
  if (Number(userNameValue) || userNameValue === '') {
    alert("Введите верное значение!");
    return;
  }
  const adminName = userNameValue;
  admin.textContent = `имя администратора: ${adminName}`;
}

btn2.addEventListener("click", administrator);


const nameUser = "Denis";
const nameAdmin = nameUser;
console.log (`имя администратора: ${nameAdmin}`);