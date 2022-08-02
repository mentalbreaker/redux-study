const add = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};
const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
