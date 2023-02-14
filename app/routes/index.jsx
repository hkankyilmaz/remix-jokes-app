"Hello Index Route";
import React from "react";

import stylesUrl from "../styles/index.css";

export const links = () => [{ rel: "stylesheet", href: stylesUrl }];

function index() {
  return <div> "Hello Index Route" </div>;
}

export default index;
