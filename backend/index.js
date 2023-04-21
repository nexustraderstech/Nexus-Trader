import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Razorpay from 'razorpay';
import path from 'path';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import authRoute from './routes/Auth.js';
import userRoute from './routes/userRoutes.js';
import blogRoute from './routes/BlogPostRoute.js';
import PaymentRoute from './routes/PaymentRoutes.js';
dotenv.config();

const app = express();

// MiddleWares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection Function
connectDatabase();

// Razor Pay

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Basic Routing
app.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'index.html');
  res.sendFile(filePath);
});

// Routing
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/blog', blogRoute);
app.use('/api/secure', PaymentRoute);
// app.get('/api/getkey', (req, res) =>
//   res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
// );
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}.`);
});
