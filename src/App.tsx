import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="admin">
          <Route path="hub" />
          <Route path="info" />
          <Route path="live" />
          <Route path="timetable" />
          <Route path="showroom" />
          <Route path="admin" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
