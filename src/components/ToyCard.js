import React, { useState } from "react";

function ToyCard({ toy, delToy, newLikes }) {

  function donateToy(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "DELETE"
    })
    delToy(toy.id)
  }

  function renderLikes(){
    newLikes(toy)
    
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={renderLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={donateToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
