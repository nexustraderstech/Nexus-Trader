import React from 'react'
import "./login.scss";
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
          <h1>Log In</h1>
          <form>
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
              <div className="center_div">
                <button>Login</button>
                <div className='signUp_text'>
                  Don't have Account <NavLink to='/signup'>SignUp</NavLink>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login