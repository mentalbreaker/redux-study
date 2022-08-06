import { createStore } from "redux";

const add = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(action);
  return count; // 리턴하는 결과는 곧 어플리케이션의 데이터가 된다.
}; //데이터를 수정하는 함수.

const countStore = createStore(countModifier); //상태 및 데이터를 저장하는 곳. 괄호 안에 함수가 있어야 한다.

console.log(countStore.getState()); //countModifier의 리턴값을 출력한다.

countStore.dispatch({ type: "hello" }); //액션 설정.액션은 객체여야 한다.
