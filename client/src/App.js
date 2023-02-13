import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Courses from './pages/course/Courses';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Testimonial from './pages/testo/Testimonial';
import Layout from './components/Layout';
import './App.scss';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

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
            <Route path='/testimonial' element={<Testimonial />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={'404'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
