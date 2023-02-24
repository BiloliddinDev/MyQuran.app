import React from "react";
import { Nav } from "../Nav";
import cl from "./stayle.module.scss";

export const Layout = ({ children }) => {
  return (
    <div className={cl.layout}>
      <Nav />
      <div className={cl.layout__wrapper}>{children}</div>
    </div>
  );
};
