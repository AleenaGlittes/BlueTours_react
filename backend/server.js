import express from 'express';
import dotenv from 'dotenv'; 

dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

const port = 5000; 

import userRoutes from './routes/userRouter.js';
import adminRoutes from './routes/adminRouter.js'
import connectDB from './Config/db.js';
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api/users',userRoutes);
app.use('/api/admin',adminRoutes);
app.get('/', (req, res) => {
    const ip=req.ips
    console.log(ip)

    res.send(`Server is ready ${ip}`)});
app.use(notFound);
app.use(errorHandler)


app.listen(port, () => console.log(`Server is starting on port ${port}`));
