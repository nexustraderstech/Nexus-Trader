import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Blog from './pages/Blog/Blog';
import Testimonial from './pages/Testimonials/Testimonial';
import Layout from './components/Layout';
import './App.scss';
import Login from './features/auth/Login';
import SignUp from './features/auth/SignUp';

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
            <Route path='/testimonials' element={<Testimonial />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={'404'} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
