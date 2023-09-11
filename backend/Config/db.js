import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoDBConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch(() => {
      console.log("Failed to connect DB!!!");
    });
};

export default mongoDBConnect