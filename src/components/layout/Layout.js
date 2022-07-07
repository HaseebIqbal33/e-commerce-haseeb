import React from "react";
import Navbar from "../navbar/Navbar";
import Router from "../router/Router";
import classes from "./layout.module.scss";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className={classes["container"]}>
        <Router />
      </div>
    </div>
  );
}

export default Layout;
