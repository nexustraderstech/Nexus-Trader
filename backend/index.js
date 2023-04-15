import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDb.js';
import authRoute from './routes/Auth.js';
import userRoute from './routes/userRoutes.js';
import blogRoute from './routes/BlogPostRoute.js';
import paymentRoute from './routes/paymentRoute.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
connectDatabase();

// Basic Routing
app.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'index.html');
  res.sendFile(filePath);
});

// Routing
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/blog', blogRoute);
app.use('/api/v1/pay', paymentRoute);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}.`);
});
