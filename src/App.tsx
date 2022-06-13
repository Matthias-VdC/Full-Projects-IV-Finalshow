import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/static/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="admin">
          <Route path="hub" element={<p>hub</p>} />
          <Route path="info" element={<p>info</p>} />
          <Route path="live" element={<p>live</p>} />
          <Route path="timetable" element={<p>timetable</p>} />
          <Route path="showroom" element={<p>showroom</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
