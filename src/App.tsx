import React from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Info from "./pages/Info.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="admin">
            <Route path="hub" element={<p>hub</p>} />
            <Route path="info" element={<Info />} />
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
