import express from 'express';
import cors from 'cors';
import path from 'path';
import connectDatabase from './config/MongoDb.js';
import authRoute from './routes/Auth.js';
import userRoute from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDatabase();

// Basic Routing
app.get('/', (req, res) => {
  const filePath = path.join(process.cwd(), 'index.html');
  res.sendFile(filePath);
});

// Routing
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}.`);
});
