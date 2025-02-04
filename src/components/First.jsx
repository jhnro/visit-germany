import React from "react";
// import { Routes, Route, Link } from "react-router-dom";

import Politics from "../components/Politics";
import Sandbox from "../components/Sandbox";
import Icons from "../components/Icons";
import Football from "../components/Football";
import Caruselos from "../components/Caruselos";
import Weather from "../components/Weather";

import { Outlet } from "react-router-dom";

const First = () => {
  return (
    <React.Fragment>
      <section id="first">
        <Sandbox />
        <Icons />
        <Politics />
        <Football />
        <Caruselos />
        <Weather />
        <Outlet />
      </section>
    </React.Fragment>
  );
};

export default First;
