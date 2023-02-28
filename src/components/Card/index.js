import React from "react";

import cl from "./stayle.module.scss";

export const Card = (props) => {
  return (
    <div className={cl.card}>
      <h2>{props.num}</h2>
      <h2 className={cl.card__heading}>{props.name}</h2>
      <h1 className={cl.card__heading}>{props.title}</h1>
    </div>
  );
};
