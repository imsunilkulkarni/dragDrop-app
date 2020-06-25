import React from "react";
import "../App.css";

function Home(props) {
  const drop = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData("cardId");

    const card = document.getElementById(cardId);
    card.style.display = "block";

    event.target.appendChild(card);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}
export default Home;
