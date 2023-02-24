import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/AboutUs/AboutUs';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Blog from './pages/Blog/Blog';
import Testimonial from './pages/Testimonials/Testi';
import Layout from './Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import PageNotFound from './pages/404_PageNotFound/PageNotFound';
import PageUnderConstruction from './pages/PageUnderConstruction/PageUnderContruction';

import './app.scss';

function App() {
  return (
    <div className='app_container'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<Blog />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/puc' element={<PageUnderConstruction/>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
