import express from 'express';
const router = express.Router();
import { User } from '../model/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// To Update user :: status : working

router.put('/email/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordCorrect) {
        const updatedUser = await User.findOneAndUpdate(
          { email: req.params.email },
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } else {
        res.status(401).json('Invalid password');
      }
    } else {
      res.status(404).json('User not found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// To Delete user :: status : Working

router.delete('/email/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordCorrect) {
        if (req.body.email === user.email.toString()) {
          await User.findOneAndDelete({ email: req.params.email });
          res.status(200).json('User has been deleted successfully');
        } else {
          res.status(401).json('You can delete only your own account');
        }
      } else {
        res.status(401).json('Invalid password');
      }
    } else {
      res.status(404).json('User not found');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a user  :: status : working

router.get('/email/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
// To Get All User  :: status : working

router.get('/', async (req, res) => {
  try {
    const users = await User.find(req.params.name);
    console.log(users);
    const AllUsers = users.map((user) => {
      const { password, ...other } = user._doc;
      return other;
    });
    res.status(200).json({ users: AllUsers });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
