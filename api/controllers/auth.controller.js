import express from 'express';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

const app = express();
app.use(express.json()); // Add this line to parse JSON in the request body

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json('User created successfully!');
    } catch (error) {
      next(error);
    }
  };