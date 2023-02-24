import React from "react";
import cl from "./stayle.module.scss";

export const Card = (props) => {
  return (
    <div className={cl.cards}>
      <h1>{props.locotion}</h1>
      <h1>{props.name}</h1>
      <h1>{props.title}</h1>
      <p>{props.oyat}</p>
    </div>
  );
};
