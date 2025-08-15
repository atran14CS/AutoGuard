import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import stolenCarsRoutes from './routes/stolenCar.route.js';

dotenv.config({ path: './backend/.env' });

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/stolenCar", stolenCarsRoutes);

// Connect to MongoDB first, then start server
const startServer = async () => {
  try {
    await connectDB(); // wait until DB is connected
    app.listen(5001, () => {
      console.log('Server is running on port 5001');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
