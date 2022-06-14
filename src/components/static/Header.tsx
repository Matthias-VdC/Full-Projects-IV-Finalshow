import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useSwipeable } from "react-swipeable";
import logo from "../../assets/img/Final-Show-Logo.svg";
import hamburgerIcon from "../../assets/img/menu-icon.svg";

export default function Header() {
  const location = useLocation();
  console.log(location);

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  if (location.pathname != "/") {
    return (
      <>
        <header>
          <Menu
            customBurgerIcon={
              <img src="https://static.thenounproject.com/png/696519-200.png" />
            }
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            <Link onClick={closeSideBar} to="admin/info">
              INFO
            </Link>
            <Link onClick={closeSideBar} to="admin/live">
              LIVE SHOW
            </Link>
            <Link onClick={closeSideBar} to="admin/timetable">
              TIMETABLE
            </Link>
            <Link onClick={closeSideBar} to="admin/showroom">
              SHOWROOM{" "}
            </Link>
          </Menu>
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <nav className="desktop-nav">
            <Link to="admin/info">INFO</Link>
            <Link to="admin/live">LIVE SHOW</Link>
            <Link to="admin/timetable">TIMETABLE</Link>
            <Link to="admin/showroom">SHOWROOM </Link>
          </nav>
        </header>
      </>
    );
  } else {
    return <></>;
  }
}
