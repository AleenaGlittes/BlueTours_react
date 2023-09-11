import express from 'express';
const router=express.Router(); 
import {protect} from '../middleware/authMiddleware.js'
import {
     authUser , 
     registerUser,
     logoutUser,
     getUserProfile,
     updateUser
    } from '../controllers/userController.js';

router.post('/',registerUser);
router.post('/auth',authUser);
router.post('/logout',logoutUser);
router.post('/new'),
router.post('/newregister')
router.route('/profile')
.get(protect, getUserProfile)
.put(protect,updateUser)
export default router;