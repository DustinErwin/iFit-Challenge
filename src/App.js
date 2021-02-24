import React, { useState } from "react";
import image from "./assets/images/slow-pulls-thumb.jpg";
import thumb from "./assets/images/slow-pulls-trainer.jpg";
import "./App.css";
import Card from "./components/Card";
import CardContext from "./contexts/CardContext";

function App() {
  const [cardContent, setCardContent] = useState({
    image: image,
    title: "Title Goes Here! --",
    thumb: thumb,
  });

  return (
    <CardContext.Provider value={cardContent}>
      <div className="App">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </CardContext.Provider>
  );
}

export default App;
