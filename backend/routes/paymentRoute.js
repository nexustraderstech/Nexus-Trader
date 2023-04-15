import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
import https from 'https';
// import PaytmChecksum from '../config/PaytmChecksum';
dotenv.config();

router.post('/', (req, res) => {
  var PaytmChecksum = require('./PaytmChecksum');
  const totalAmount = JSON.stringify(amount);
  const { amount, email } = req.body;
  var params = {};

  (params['MID'] = process.env.PAYTM_MID),
    (params['WEBSITE'] = process.env.PAYTM_WEBSITE),
    (params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID),
    (params['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID),
    (params['ORDER_ID'] = uuidv4()),
    (params['CUST_ID'] = process.env.PAYTM_CUST_ID),
    (params['TXN_AMOUNT'] = totalAmount),
    (params['CALLBACK_URL'] = 'http://localhost:5000/api/callback'),
    (params['EMAIL'] = email),
    (params['MOBILE_NO'] = '9876543210');

  body = '{/*YOUR_COMPLETE_REQUEST_BODY_HERE*/}';

  var paytmChecksum = PaytmChecksum.generateSignature(
    body,
    'YOUR_MERCHANT_KEY'
  );
  paytmChecksum
    .then(function (result) {
      console.log('generateSignature Returns: ' + result);
    })
    .catch(function (error) {
      console.log(error);
    });
});

export default router;
