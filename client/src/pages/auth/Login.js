import React from 'react';
import './login.scss';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='login-form'>
        <div className='box'>
          <img src='assets/images/login.jpeg' alt='' />
          <form>
            <p>Login</p>
            <div className='email'>
              <label htmlFor='email'>Email</label>
              <input name='email' type='email' />
            </div>
            <div className='passwd'>
              <label htmlFor='passwd'>Password</label>
              <input name='passwd' type='password' />
            </div>
            <div className='checkbox'>
              <label htmlFor='ck-box'>Keep me Logged in</label>
              <input id='ck-box' type='checkbox' />
            </div>
            <button>Login</button>
            <span className='signUp-text'>
              Don't have Account <NavLink to='/signup'>SignUp</NavLink>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
