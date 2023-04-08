import React, { useState } from 'react';
import './signup.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../app/reducers/signUpSlice';

const SignUp = () => {
  const [inputData, setInputData] = useState({
    fullname: '',
    username: '',
    email: '',
    contact: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const handleSignUp = () => {
    const { fullname, username, email, contact, password } = inputData;
    if (fullname || username || email || contact || password !== '' || 0) {
      if (10 >= contact.length >= 10 && password >= 6) {
        setError(true);
      } else {
        dispatch(signUpUser(inputData));
        setError(false);
      }
    } else {
      alert('Please Enter the Valid Input');
      setError(true);
    }
  };

  const HandleOnChange = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    setError(false);
  };
  return (
    <div className='signup_container'>
      <div className='signup_div'>
        <div className='logo'>
          <img src='./assets/images/logo_with_signature.png' alt='' />
        </div>
        <div className='signup_form'>
          <h1>Sign Up</h1>
          <form>
            <div className={error ? 'txt_field error' : 'txt_field success'}>
              <input
                name='fullname'
                type='text'
                required
                value={inputData.fullname}
                onChange={HandleOnChange}
              />
              <label htmlFor='fullname'>Full Name</label>
            </div>
            <div className={error ? 'txt_field error' : 'txt_field success'}>
              <input
                name='username'
                type='text'
                required
                value={inputData.username}
                onChange={HandleOnChange}
              />
              <label htmlFor='username'>Username</label>
            </div>
            <div className={error ? 'txt_field error' : 'txt_field success'}>
              <input
                name='contact'
                type='tel'
                required
                value={inputData.contact}
                onChange={HandleOnChange}
                min='10'
                max='10'
              />
              <label htmlFor='contact'>Contact Number</label>
            </div>
            <div className={error ? 'txt_field error' : 'txt_field success'}>
              <input
                name='email'
                type='email'
                required
                value={inputData.email}
                onChange={HandleOnChange}
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className={error ? 'txt_field error' : 'txt_field success'}>
              <input
                name='password'
                type='password'
                required
                value={inputData.password}
                onChange={HandleOnChange}
                min={6}
              />
              <label htmlFor='password'>Password</label>
            </div>
            <div className='ck_box'>
              <label htmlFor='ck_box'>Keep me Logged in</label>
              <input id='ck_box' type='checkbox' />
            </div>
            <div className='ck_box'>
              <label htmlFor='ck_box'>Terms and Condition</label>
              <input id='ck_box' type='checkbox' />
            </div>
            <div className='center_div'>
              <button onClick={handleSignUp}>Sign Up</button>
              <div className='signUp_text'>
                Have an Account - <NavLink to='/signup'>Login</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
