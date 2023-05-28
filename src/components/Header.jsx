import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  return <h1 className={pathname === "/" ? "header-white" : "header-black"}>Oleksii's recipes and more</h1>;
}

export default Header;
