import React from "react";
import cardContent from "./assets/cardInfo.json";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      {cardContent.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          thumb={card.thumb}
          title={card.title}
        />
      ))}
    </div>
  );
}

export default App;
