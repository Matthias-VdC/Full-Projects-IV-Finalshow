/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import logo from "../../assets/img/Final-Show-Logo.svg";

export default function Header() {
  const location = useLocation();
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
        <header id="mainHeader">
          <Menu
            customBurgerIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 50 50"
                width="250px"
                height="250px"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
              </svg>
            }
            customCrossIcon={
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="250px"
                height="250px"
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
              </svg>
            }
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              onClick={closeSideBar}
              to="hub"
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              onClick={closeSideBar}
              to="info"
            >
              INFO
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              onClick={closeSideBar}
              to="timetable"
            >
              TIMETABLE
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              onClick={closeSideBar}
              to="live"
            >
              LIVE SHOW
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              onClick={closeSideBar}
              to="showroom"
            >
              SHOWROOM
            </NavLink>
          </Menu>
          <div className="logo-container">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <nav className="desktop-nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              to="hub"
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              to="info"
            >
              INFO
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              to="timetable"
            >
              TIMETABLE
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              to="live"
            >
              LIVE SHOW
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "lactive-class" : "not-active-class"
              }
              to="showroom"
            >
              SHOWROOM
            </NavLink>
          </nav>
        </header>
      </>
    );
  } else {
    return <></>;
  }
}
