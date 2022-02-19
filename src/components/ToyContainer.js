import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyState, toys }) {
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
      .then((r)=>r.json())
      .then(toyData => toyState(toyData))
  }, [])

  return (
    <div id="toy-collection">{toys.map((toy)=>
      <ToyCard key={toy.id} toy={toy}/>
    )}</div>
  );
}

export default ToyContainer;
