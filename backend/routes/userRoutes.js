import express from 'express';
const router = express.Router();
import { User } from '../model/userSchema.js';

// To Update user :: status : working

router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params._id) {
    if (req.body.password === req.body.password) {
      try {
        const UpdatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(UpdatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  }
});

// To Delete user :: status : Working

router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params._id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been Deleted');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You can Delete only your Account');
  }
});

// To Get user :: status : working

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
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
