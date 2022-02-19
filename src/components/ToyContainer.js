import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyState, toys }) {
  const [toyLikes, setToyLikes] = useState([0])

  function delToy(prop){
    const delToyArr = toys.filter((toy)=> prop !== toy.id)
    toyState(delToyArr)
  }

  useEffect(()=>{
    fetch("http://localhost:3001/toys")
      .then((r)=>r.json())
      .then(toyData => toyState(toyData))
  }, [])

  function newLikes(prop){
    setToyLikes(prop.likes + 1)
    fetch(`http://localhost:3001/toys/${prop.id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <div id="toy-collection">{toys.map((toy)=>
      <ToyCard newLikes={(prop)=>newLikes(prop)} delToy={(prop)=>delToy(prop)}key={toy.id} toy={toy}/>
    )}</div>
  );
}

export default ToyContainer;
