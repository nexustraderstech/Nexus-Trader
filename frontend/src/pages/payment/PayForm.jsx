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
    price: '9599',
  });
  //   console.log(userData);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === 'option') {
      setFormData((prevState) => ({
        ...prevState,
        price: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      data: { key },
    } = await axios.get('http://localhost:8080/api/secure/getkey');
    const {
      data: { order },
    } = await axios.post('http://localhost:8080/api/secure/pay', {
      // amount: formData.price,
      // formData,
      amount: 1,
    });

    const options = {
      key,
      amount: order.amount,
      currency: 'INR',
      name: 'NexusTrader',
      description: 'Learn Stock Maket with Us',
      image: 'https://nexustraders.in/assets/images/logo.png',
      order_id: order.id,
      callback_url: 'http://localhost:8080/api/secure/paymentverification',
      prefill: {
        name: 'sameer',
        contact: '9999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#202020',
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
    const response = await axios.post(
      'http://localhost:8080/api/secure/paymentverification',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        price: formData.price,
        razorpay_order_id: '',
        razorpay_payment_id: '',
        razorpay_signature: '',
      }
    );
    response();
    console.log(response);
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
              <option value='9599'>The Platinum course ₹ 9,599/- </option>
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
