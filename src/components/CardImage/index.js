import React from "react";

import "./style.css";

export default function CardImage({ image }) {
  return <img className="image" src={image} alt="Rowing Machine" />;
}
