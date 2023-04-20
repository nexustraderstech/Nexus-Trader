import express from 'express';
const router = express.Router();
import { instance } from '../index.js';
import crypto from 'crypto';
import { Payment } from '../model/paymentSchema.js';

router.post('/pay', async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: 'INR',
  };
  const order = await instance.orders.create(options);
  // console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
});

router.post('/pay', async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest('hex');

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
});

export default router;
