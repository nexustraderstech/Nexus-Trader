import React from 'react';
import './Footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='top'>
        <div className='col_1'>
          <h1>CONTACT</h1>
          <h1>US</h1>
          <div className='underline'></div>

          <p>Call or Whatsapp</p>

          <p className='item'>
            8451997063 <br />
            7021286780 <br />
            8169158580 <br />
          </p>

          <p>Email</p>

          <p className='item'>nexustraders.in@gmail.com</p>
        </div>

        <div className='col_2'>
          <h1>TELL US</h1>
          <div className='underline'></div>

          <form>
            <div className='col_1'>
              <input type='text' id='name' placeholder='Name' />
              <input type='email' id='email' placeholder='Email' />
              <input type='text' id='subject' placeholder='Subject' />
              <input type='tel' id='contact' placeholder='Contact Number' />
            </div>

            <div className='col_2'>
              <textarea
                placeholder='Enter your message'
                name='message'
                rows='8'
                cols='30'
              ></textarea>
            </div>

            <div className='sub_button'>
              <input type='submit' />
            </div>
          </form>
        </div>

        <div className='col_3'>
          <h1>KNOW</h1>
          <h1>US</h1>
          <div className='underline'></div>
          <div className='content'>
            <p>
              Home <br />
              Terms & Conditions <br />
              Refund Policy <br />
            </p>
            <InstagramIcon style={{ fontSize: 20, marginTop: '25px' }} />
          </div>
        </div>
      </div>

      <div className='bottom'>
        © 2021 Nexus Traders. All rights Reserved | Developed by HAMTech
      </div>
    </div>
  );
};

export default Footer;
