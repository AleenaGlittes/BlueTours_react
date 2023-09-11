import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => { // <-- Swap req and res here
    let token;
    token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized user, invalid token' }); // <-- Added .json()
        }

    } else {
        res.status(401).json({ message: 'Not authorized user, no token' }); // <-- Added .json()
    }
});

export { protect };
