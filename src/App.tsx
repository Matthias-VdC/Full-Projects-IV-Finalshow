import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Index } from "./pages/Index.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
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
