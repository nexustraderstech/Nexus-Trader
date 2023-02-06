import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Courses from './pages/course/Courses';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Testomonial from './pages/testo/Testomonial';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='courses' element={<Courses />} />
            <Route path='blog' element={<Blog />} />
            <Route path='testomonial' element={<Testomonial />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
