import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import "./App.scss";
import Livestream from "./pages/Livestream";
import Info from "./pages/Info.page";
import { Index } from "./pages/Index.page";
import Timetable from "./pages/Timetable.page";
import Header from "./components/static/Header";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-229998340-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App" id="app-container">
      <Header />
      <div id="page-container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="admin">
            <Route path="hub" element={<p>hub</p>} />
            <Route path="info" element={<Info />} />
            <Route path="live" element={<Livestream />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="showroom" element={<p>showroom</p>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
