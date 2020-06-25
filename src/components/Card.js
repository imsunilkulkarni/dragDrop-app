import React from "react";
import "../App.css";

function Card(props) {
  const dragStart = (event) => {
    const target = event.target;

    event.dataTransfer.setData("cardId", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
      onMouseDown={() => {
        props.data(props.index);
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
