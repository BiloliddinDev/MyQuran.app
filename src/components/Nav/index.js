import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./stayle.module.scss";

export const Nav = () => {
  return (
    <div className={cl.nav}>
      <div className={cl.nav__box}>
        <h1 className={cl.nav__heading}>
          <i class="fa-solid fa-star-and-crescent"></i>
          Islam
        </h1>
        <div className={cl.nav__wrapper}>
          <NavLink className={cl.nav__link} to={"/"}>
            Home
            <i class="fa-solid fa-house"></i>
          </NavLink>
          <NavLink className={cl.nav__link} to={"/single"}>
            AllQuran
            <i class="fa-solid fa-book-quran"></i>
          </NavLink>
          <NavLink className={cl.nav__link} to={"/vaqt"}>
            Nomoz Vaqtlari
            <i class="fa-solid fa-clock"></i>
          </NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};
