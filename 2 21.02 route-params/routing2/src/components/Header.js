import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/login"> Login </NavLink>
      <NavLink to="/about"> About </NavLink>
    </div>
  );
}
