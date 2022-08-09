import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//NEVER use MUTATE STATE
//mutation이란 원본을 변형하는 것. 상태를 수정하는게 아니라 새로운 것을 리턴해야 한다.

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }]; //기존 array를 나열한뒤, 새로운 text object를 추가했습니다~
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  store.dispatch({ type: ADD_TODO, text: toDo });
};

const submitTodo = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
};

form.addEventListener("submit", submitTodo);
