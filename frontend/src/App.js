import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/AboutUs/AboutUs';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Layout from './Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Payment from './pages/Payment/Payment';

import PageNotFound from './pages/404_PageNotFound/PageNotFound';
import PageUnderConstruction from './pages/PageUnderConstruction/PageUnderConstruction';

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
            <Route path='/payment' element={<Payment />} />
            <Route path='/puc' element={<PageUnderConstruction/>} />
            <Route path='*' element={<PageNotFound/>} />
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
