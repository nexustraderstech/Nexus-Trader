import express from 'express';
const router = express.Router();
import { User } from '../model/userSchema.js';

router.post('/register', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('Wrong Credentialsg');

    const validate = await User.findOne({ password: req.body.password });
    !validate && res.status(400).json('Wrong Credentialsg');
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
