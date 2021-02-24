import React from "react";

import "./style.css";

export default function CardContainer({ title, thumb }) {
  return (
    <div className="container">
      <span>{title}</span>
      <img className="thumb" src={thumb} alt="thumbnail rowing" />
    </div>
  );
}
