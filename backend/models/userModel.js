import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },admin: {
        type: Number,
        default: 0,
      
      }

},
{
    timestamps:true
})
userSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next();
    }
    const salt =await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
})
userSchema.methods.matchPassword=async function(enteredpassword){
    return await bcrypt.compare(enteredpassword,this.password)
}
const user=mongoose.model('User',userSchema);
export default user;