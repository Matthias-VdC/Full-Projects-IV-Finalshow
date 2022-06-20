import React, { useEffect } from "react";

import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import Livestream from "./pages/Livestream.page";
import Info from "./pages/Info.page";
import { Index } from "./pages/Index.page";
import Timetable from "./pages/Timetable.page";
import Notfound from "./pages/Notfound.page";
import Home from "./components/Home/Home";

import Header from "./components/static/Header";

import ReactGA from "react-ga";

import "./App.scss";
import Results from "./components/Resultaten/Results";
import DetailMob from "./components/Home/details/DetailMob";
import Genomineerd from "./components/Resultaten/Genomineerd";
import Winnaar from "./components/Resultaten/Winnaar";

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
          <Route path="info" element={<Info />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="live" element={<Livestream />} />
          <Route path="admin">
            <Route path="hub" element={<p>hub</p>} />
            <Route path="showroom">
              <Route index element={<Home />} />
              <Route path="results" element={<Results />} />
              <Route path="detail" element={<DetailMob />} />
              <Route path="genomineerden" element={<Genomineerd />} />
              <Route path="winnaars" element={<Winnaar />} />
            </Route>
          </Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
