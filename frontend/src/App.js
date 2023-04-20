import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import PayForm from './pages/payment/PayForm';

function App() {
  return (
    <div className='app_container'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/pay' element={<PayForm />} />
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
