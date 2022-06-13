import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index.page";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-229998340-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="admin">
            <Route path="hub" element={<p>hub</p>} />
            <Route path="info" element={<p>info</p>} />
            <Route path="live" element={<p>live</p>} />
            <Route path="timetable" element={<p>timetable</p>} />
            <Route path="showroom" element={<p>showroom</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
