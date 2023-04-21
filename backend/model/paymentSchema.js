import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default: 'NONE',
  },
  email: {
    type: String,
    // required: true,
    default: 'NONE',
  },
  phone: {
    type: String,
    // required: true,
    default: 'NONE',
  },
  price: {
    type: String,
    // required: true,
    default: 'NONE',
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    required: true,
  },
});

export const Payment = mongoose.model('Payment', paymentSchema);
