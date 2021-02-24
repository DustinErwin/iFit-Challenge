import React from "react";
import CardContainer from "../CardContainer";
import CardImage from "../CardImage";
import "./style.css";

export default function Card() {
  return (
    <div className="card">
      <CardImage />
      <CardContainer />
    </div>
  );
}
