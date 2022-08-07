import { createStore } from "redux";

const add = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  //데이터를 수정하는 함수.
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count; // reducer가 리턴하는 결과는 곧 어플리케이션의 데이터가 된다.
  }
};

const countStore = createStore(countModifier); //상태 및 데이터를 저장하는 곳. 괄호 안에 함수가 있어야 한다.
// console.log(countStore.getState()); //countModifier의 리턴값을 출력한다.

const whatIsChange = () => {
  //이 function은 store에 변화가 있을 때마다 감지해서 불려진다.
  //console.log(`countSotre.getState : ${countStore.getState()}`);
  number.innerText = countStore.getState();
};

countStore.subscribe(whatIsChange); //store에 변화가 있는 것을 알려줌

// countStore.dispatch({ type: "ADD" }); //(메시지를 보내는 것처럼)리듀서 함수로 들어가는 액션을 설정해줌.액션은 type 키를 가진 객체여야 한다.

function handleAdd() {
  countStore.dispatch({ type: "ADD" });
}

add.addEventListener("click", handleAdd);

minus.addEventListener("click", () => {
  //익명함수가 들어가야 작동해요.
  countStore.dispatch({ type: "MINUS" });
});
