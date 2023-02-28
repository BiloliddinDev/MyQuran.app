import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import cl from "./stayle.module.scss";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import { LangueContext } from "../context";

export const Nav = () => {
  const { langue, setLangue } = useContext(LangueContext);

  console.log(langue);

  const form = (e) => {
    setLangue(e);
  };
  return (
    <div className={cl.nav}>
      <div className={cl.nav__box}>
        <h1 className={cl.nav__heading}>
          <i className="fa-solid fa-star-and-crescent"></i>
          Islam
        </h1>
        <div className={cl.nav__wrapper}>
          <NavLink className={cl.nav__link} to={"/"}>
            Home
            <i className="fa-solid fa-house"></i>
          </NavLink>
          <NavLink className={cl.nav__link} to={"/single"}>
            AllQuran
            <i className="fa-solid fa-book-quran"></i>
          </NavLink>
          <NavLink className={cl.nav__link} to={"/vaqt"}>
            Nomoz Vaqtlari
            <i className="fa-solid fa-clock"></i>
          </NavLink>
        </div>
        <div>
          <Select
            defaultValue={langue}
            onChange={(e) => form(e)}
            placeholder={"Tilni tanlang"}
          >
            <Option value="uzb">Uz</Option>
            <Option value="ru.kuliev">Ru</Option>
            <Option value="en.ahmedali">Eng</Option>
          </Select>
        </div>
        <div></div>
      </div>
    </div>
  );
};
