import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import stolenCarsRoutes from './routes/stolenCar.route.js';
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/stolenCar", stolenCarsRoutes);

app.listen(5001, () => {
    connectDB();
    console.log('Server is running on port 5001');
});