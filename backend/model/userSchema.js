import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      Unique: true,
    },
    email: {
      type: String,
      required: true,
      Unique: true,
    },
    contact: {
      type: Number,
      required: true,
      Unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export { User };
