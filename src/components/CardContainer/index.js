import React, { useContext } from "react";
import CardContext from "../../contexts/CardContext";
import "./style.css";

export default function CardContainer() {
  const cardContent = useContext(CardContext);

  return (
    <div className="container">
      <span>{cardContent.title}</span>
      <img className="thumb" src={cardContent.thumb} alt="thumbnail rowing" />
    </div>
  );
}
