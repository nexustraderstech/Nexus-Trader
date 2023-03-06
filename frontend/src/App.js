import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/AboutUs/AboutUs";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Layout from "./Layout";

import PageNotFound from "./pages/404_PageNotFound/PageNotFound";

import "./app.scss";

function App() {
  return (
    <div className="app_container">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
