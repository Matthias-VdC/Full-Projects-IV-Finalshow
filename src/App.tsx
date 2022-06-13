import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Livestream from "./pages/Livestream";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="admin">
          <Route path="hub" element={<p>hub</p>} />
          <Route path="info" element={<p>info</p>} />
          <Route path="live" element={<Livestream />} />
          <Route path="timetable" element={<p>timetable</p>} />
          <Route path="showroom" element={<p>showroom</p>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
