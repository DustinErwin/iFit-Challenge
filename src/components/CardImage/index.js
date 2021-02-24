import React, { useContext } from "react";
import CardContext from "../../contexts/CardContext";

import "./style.css";

export default function CardImage() {
  const cardContent = useContext(CardContext);
  return <img className="image" src={cardContent.image} alt="Rowing Machine" />;
}
