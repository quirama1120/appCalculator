const inputNumber = document.querySelector("#input-1");
const inputNumber2 = document.querySelector("#input-2");
const sum = document.querySelector(".add");
const substract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const split = document.querySelector(".split");

sum.addEventListener("click", () => {
  const inputValue1 = Number(inputNumber.value);
  const inputValue2 = Number(inputNumber2.value);
  if (inputValue1 && inputValue2) {
    document.querySelector("p").innerHTML = inputValue1 + inputValue2;
  }
});
substract.addEventListener("click", () => {
  const inputValue1 = Number(inputNumber.value);
  const inputValue2 = Number(inputNumber2.value);
  if (inputValue1 && inputValue2) {
    document.querySelector("p").innerHTML = inputValue1 > inputValue2 ?  inputValue1 - inputValue2 : inputValue2 - inputValue1;
  }
});
multiply.addEventListener("click", () => {
  const inputValue1 = Number(inputNumber.value);
  const inputValue2 = Number(inputNumber2.value);
  if (inputValue1 && inputValue2) {
    document.querySelector("p").innerHTML = inputValue1 * inputValue2;
  }
});
split.addEventListener("click", () => {
  const inputValue1 = Number(inputNumber.value);
  const inputValue2 = Number(inputNumber2.value);
  if (inputValue1 && inputValue2) {
    document.querySelector("p").innerHTML = inputValue1 > inputValue2 ? inputValue1 / inputValue2 : inputValue2 / inputValue1;
  }
});
