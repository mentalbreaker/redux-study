import { useState, useEffect } from "react";
import { Connect } from "react-redux";

const Home = () => {
  const [text, setText] = useState("");
  const changeText = (e) => {
    let val = e.target.value;
    setText(val);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={changeText} />
        <button>Add</button>
        <ul></ul>
      </form>
    </>
  );
};

function getCurrentState() {}
export default Connect(getCurrentState)(Home);
