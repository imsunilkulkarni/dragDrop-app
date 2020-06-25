import React from "react";
import Home from "./components/Home";
import Card from "./components/Card";
import "./App.css";
import diagram from "../src/Assets/images/diagram.svg";
import flow from "../src/Assets/images/flow.svg";
import writing from "../src/Assets/images/writing.svg";

function App() {
  const images = [{ url: diagram }, { url: flow }, { url: writing }];

  const printData = (event) => {
    console.log("index", images[event]);
  };
  return (
    <div className="App">
      <Home id="board-1" className="board"></Home>
      <Home id="board-2" className="board">
        {images.map((data, index) => {
          return (
            <Card
              id={`card${index}`}
              className="card"
              draggable="true"
              index={index}
              data={printData}
            >
              <img src={data.url} alt="" />
              <div className="check" id={`check${index}`}></div>
            </Card>
          );
        })}
      </Home>
    </div>
  );
}

export default App;
