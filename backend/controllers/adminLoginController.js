import userModel from "../models/userModel.js";
import generateToken from '../utils/generatetoken.js';
import asyncHandler from 'express-async-handler';



const authAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        if (user.admin === 1) { // Check if user has admin 
            generateToken(res, user._id);
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        } else {
            res.status(401);
            throw new Error('User is not an admin');
        }
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});
const userList=asyncHandler(async(req,res)=>{
    try{
        const userData = await userModel.find({ admin: { $ne: 1 } });
        console.log("********");
console.log(userData);
res.status(200).json(userData)
    }catch(err){
console.log(err)
    }
})


export{
authAdmin,userList
}