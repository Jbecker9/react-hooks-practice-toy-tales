import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [toyLikes, setToyLikes] = useState(toys.likes)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function toyState(prop){
    setToys(prop)
  }

  function toyLikeState(prop){
    setToyLikes(prop)
  }

  function toyLikeFilterState(prop){
    const toyLikeFilter = toys.filter((toy) => toy.id !== prop.id)
    const updatedLikeArray = [prop, ...toyLikeFilter]
    setToys(updatedLikeArray)
  } 

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} toyState={(prop)=>toyState(prop)} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyLikeFilterState={(prop)=>toyLikeFilterState(prop)} toyLikes={toyLikes} setToyLikes={(prop)=>toyLikeState(prop)}toys={toys} toyState={(prop)=>toyState(prop)} />
    </>
  );
}

export default App;
