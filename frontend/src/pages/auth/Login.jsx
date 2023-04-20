import React, { useState, useEffect } from 'react';
import './login.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../app/reducers/loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleLogin = () => {
    dispatch(loginUser(inputData));
    setInputData({ email: '', password: '' });
  };
  const HandleOnChange = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className='login_container'>
      <div className='login_div'>
        <div className='logo'>
          <img src='./assets/images/logo_with_signature.png' alt='' />
        </div>
        <div className='login_form'>
          <h1>Log In</h1>
          {/* <h3> {isReallyAdmin && isReallyAdmin}Log In</h3> */}
          {/* <span onClick={() => dispatch(logout)}>logout</span> */}
          <form>
            <div className='txt_field'>
              <input
                name='email'
                type='email'
                required
                value={inputData.email}
                onChange={HandleOnChange}
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='txt_field'>
              <input
                name='password'
                type='text'
                required
                value={inputData.password}
                onChange={HandleOnChange}
              />
              <label htmlFor='password'>Password</label>
            </div>
            <div className='ck_box'>
              <label htmlFor='ck_box'>Keep me Logged in</label>
              <input id='ck_box' type='checkbox' />
            </div>
            <div className='center_div'>
              <button onClick={HandleLogin}>Login</button>
              <div className='signUp_text'>
                Don't have Account - <NavLink to='/signup'>SignUp</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
