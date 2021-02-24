import React from "react";
import CardContainer from "../CardContainer";
import CardImage from "../CardImage";
import "./style.css";

export default function Card(props) {
  return (
    <div className="card">
      <CardImage image={props.image} />
      <CardContainer thumb={props.thumb} title={props.title} />
    </div>
  );
}
