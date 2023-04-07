import React from 'react'
import "./signUp.scss";
import { NavLink } from 'react-router-dom';

const bimg = "./assets/images/home_sample_img_2.png';"

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_div">
        <div className="logo" >
          <img src="./assets/images/logo_with_signature.png" alt="" />
        </div>
        <div className="login_form">
          <h1>Snign Up</h1>
          <form>
              <div className='txt_field'>
                <input name='name' type='text'  required/>
                <label htmlFor='name'>Full Name</label>
              </div>
              <div className='txt_field'>
                <input name='user_name' type='text'  required/>
                <label htmlFor='user_name'>Username</label>
              </div>
              <div className='txt_field'>
                <input name='p_num' type='tel'  required/>
                <label htmlFor='p_num'>Contact Number</label>
              </div>
              <div className='txt_field'>
                <input name='email' type='email'  required/>
                <label htmlFor='email'>Email</label>
              </div>
                <div className='txt_field'>
                <input name='passwd' type='password' required/>
                <label htmlFor='passwd'>Password</label>
              </div>
              <div className='ck_box'>
                <label htmlFor='ck_box'>Keep me Logged in</label>
                <input id='ck_box' type='checkbox' />
              </div>
              <div className='ck_box'>
                <label htmlFor='ck_box'>Terms and Condition</label>
                <input id='ck_box' type='checkbox' />
              </div>
              <div className="center_div">
                <button>Sign Up</button>
                <div className='signUp_text'>
                 Have an Account - <NavLink to='/signup'>Login</NavLink>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login