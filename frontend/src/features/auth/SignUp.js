import React from 'react';
import './signup.scss';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='signup-form'>
        <div className='box'>
          <form>
            <p>Login</p>
            <div className='name'>
              <label htmlFor='name'>Name</label>
              <input name='name' type='text' />
            </div>
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
              Don't have Account <NavLink to='/login'>SignUp</NavLink>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
