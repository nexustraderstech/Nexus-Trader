import React, { useState, useEffect } from 'react';
import './PayForm.css';
import axios from 'axios';

const PayForm = () => {
  const [userData, setuserData] = useState(
    JSON.parse(localStorage.getItem('user'))
  );
  const [formData, setFormData] = useState({
    name: userData.fullname,
    email: userData.email,
    phone: userData.contact,
    price: '6599',
  });
  //   console.log(userData);

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    CheckOutHandler();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const CheckOutHandler = async () => {
    const { data } = await axios.post('http://localhost:8080/api/secure/pay', {
      amount: formData.price,
    });
    console.log(data);
  };
  return (
    <div>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>
            Name:
            <input
              className='form-input'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div className='form-group'>
          <label className='form-label'>
            Email:
            <input
              className='form-input'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div className='form-group'>
          <label className='form-label'>
            Phone:
            <input
              className='form-input'
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div className='form-group'>
          <label className='form-label'>
            Option:
            <select
              className='form-select'
              name='option'
              value={formData.price}
              onChange={handleOnChange}
            >
              <option value='6599'>The Platinum course ₹ 9,599/- </option>
              <option value='6999'>The Advanced course ₹ 6,999/- </option>
              <option value='11800'>The Forex campaign : ₹ 11,800/- </option>
            </select>
          </label>
        </div>
        <button className='form-submit' type='submit' onClick={handleSubmit}>
          Pay with{' '}
          <img src='assets/images/razorpay.png' alt='razor pay ' width='80px' />
        </button>
      </form>
    </div>
  );
};

export default PayForm;
