import express from 'express';
const adminRouter=express.Router();

import { authAdmin,userList } from '../controllers/adminLoginController.js';

adminRouter.post('/admin',authAdmin);
adminRouter.get('/adminhome');
adminRouter.get('/customers');
adminRouter.get('/userlist',userList)


export default adminRouter;