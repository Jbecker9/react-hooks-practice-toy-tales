import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function toyState(prop){
    setToys(prop)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} toyState={(prop)=>toyState(prop)} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} toyState={(prop)=>toyState(prop)} />
    </>
  );
}

export default App;
