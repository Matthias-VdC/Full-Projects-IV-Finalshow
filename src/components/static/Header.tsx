import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/Final-Show-Logo.svg";
import "../../styles/components/_header.scss";

export default function Header() {
  const location = useLocation();
  console.log(location);

  if (location.pathname != "/") {
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
  } else {
    return <></>;
  }
}
