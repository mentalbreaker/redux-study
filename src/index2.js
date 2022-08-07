import { createStore } from "redux";
//refactoring

const add = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const whatIsChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(whatIsChange);

function handleAdd() {
  countStore.dispatch({ type: ADD });
}

add.addEventListener("click", handleAdd);

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
