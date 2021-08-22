import "./styles.css";

import React, { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");

  function handleInput(e) {
    setTexto(e.target.value);
  }

  return (
    <div className="App">
      <h1>useState input </h1>

      <input type="text" value={texto} onChange={handleInput} />

      <p>{texto.length} caracteres</p>
    </div>
  );
}
