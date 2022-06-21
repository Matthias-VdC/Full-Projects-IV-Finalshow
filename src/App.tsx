import React, { useEffect, useState } from "react";

import {
  Route,
  Routes,
  BrowserRouter,
  Link,
  useLocation,
} from "react-router-dom";

import Livestream from "./pages/Livestream";
import Info from "./pages/Info.page";
import { Index } from "./pages/Index.page";
import Timetable from "./pages/Timetable.page";
import Timetable2 from "./pages/Timetable2.page";
import Notfound from "./pages/Notfound.page";

import Header from "./components/static/Header";

import logo from "./logo.svg";

import ReactGA from "react-ga";

import "./App.scss";

const TRACKING_ID = "UA-229998340-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const location = useLocation();
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App" id="app-container">
      {location.pathname == "/timetable" && width < 1075 ? <></> : <Header />}
      <div id="page-container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="info" element={<Info />} />
          {/* <Route path="timetable" element={<Timetable />} /> */}
          <Route path="timetable" element={<Timetable2 />} />
          <Route path="admin">
            <Route path="hub" element={<p>hub</p>} />
            <Route path="live" element={<Livestream />} />
            <Route path="showroom" element={<p>showroom</p>} />
          </Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
