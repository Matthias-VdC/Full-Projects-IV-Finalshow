import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Final-Show-Logo.svg";
import "../../styles/components/_header.scss";

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <Link to="admin/info">INFO</Link>
        <Link to="admin/live">LIVE SHOW</Link>
        <Link to="admin/timetable">TIMETABLE</Link>
        <Link to="admin/showroom">SHOWROOM </Link>
      </nav>
    </header>
  );
}
