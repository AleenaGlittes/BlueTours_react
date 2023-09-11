
import userModel from '../models/userModel.js';


const registerUserHelper = async (name, email, password) => {


    const userExists = await userModel.findOne({ email });

    if (userExists) {
        // res.status(400);
        throw new Error("user already exists")
    }
    const user = await userModel.create({
        name,
        email,
        password
    });

    if (!user) {
        throw new Error("Invalid user data")
    }
    return user;
}
export default
    registerUserHelper
