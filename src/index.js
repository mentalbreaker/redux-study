import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//NEVER use MUTATE STATE
//mutation이란 원본을 변형하는 것. 상태를 수정하는게 아니라 새로운 것을 리턴해야 한다.

//아래의 두 함수는 액션만 리턴합니다.
const addToDo = (text) => {
  return { type: ADD_TODO, text };
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case ADD_TODO:
      const newToDoObject = { text: action.text, id: Date.now() };
      return [newToDoObject, ...state];
    // return [{ text: action.text, id: Date.now() }, ...state];
    //기존 array를 나열한뒤, 새로운 text object를 추가했습니다.
    //새로운 text object는 action으로 들어온 text와 현재 시각으로 부여된 id를 가지고 있습니다.
    case DELETE_TODO:
      //filter 메소드를 이용해 결과값이 반영된 새 배열을 반환합니다.
      return state.filter((todo) => todo.id !== action.id);
    //filter 메소드의 컨디션(조건). 각 배열의 todo 객체의 id를 선회합니다. todo의 id와 action의 id가 다른 것들만 골라서 새 배열에 넣습니다.
    default:
      return state;
  }
};

const store = createStore(reducer);

//아래 두 함수는 dispatch만 담당합니다.
const dispatchAddTodo = (text) => {
  store.dispatch(addToDo(text));
};
const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const submitTodo = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = ""; //리페인팅 할때마다 ul 리스트를 지워주는 역할을 한다.
  toDos.forEach((toDo) => {
    //ul에 새로운 li를 그려주는 역할을 한다.
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "del";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos); //store가 바뀔 때마다 모든 것들을 리페인팅한다.

form.addEventListener("submit", submitTodo);
