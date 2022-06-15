import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index.page";
import Header from "./components/static/Header";
import Timetable from "./pages/Timetable.page";
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
            <Route path="info" element={<p>info</p>} />
            <Route path="live" element={<p>live</p>} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="showroom" element={<p>showroom</p>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
