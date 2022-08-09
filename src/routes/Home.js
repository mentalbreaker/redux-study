import React, { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Home</h1>
      <form>
        <input type="text" vaule={text} />
        <button>send</button>
        <ul></ul>
      </form>
    </>
  );
}
