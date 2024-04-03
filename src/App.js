import React from "react";

//JSX -> MISTURA JS COM HTML
function App() {
  const hello = "Hello React";

  return (
    //o return serve para retornar só o html
    <div>
      <h1>{hello}</h1>
    </div>
  );
} //consigo colocar js dentro do html, basta colocar {}

export default App;
