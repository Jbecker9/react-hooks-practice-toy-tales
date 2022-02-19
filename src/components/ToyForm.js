import React, { useState } from "react";

function ToyForm({ toys, toyState }) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0
  })
  const [newToyName, setNewToyName] = useState("")
  const [newToyImage, setNewToyImage] = useState("")

  function addNewToy(e){
    e.preventDefault()
    const newToyObj = {
      name: newToyName,
      image: newToyImage,
      likes: 0
    }
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToyObj)
    })
      .then((r)=>r.json())
      .then((newToyData)=> setNewToy(newToyData))
      const newToyArr = [...toys, newToy]
      toyState(newToyArr)
  }

  return (
    <div className="container">
      <form onSubmit={addNewToy} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e)=>setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e)=>setNewToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
