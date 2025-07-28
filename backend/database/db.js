import mongoose from 'mongoose';

  
export const Connection = async (username,password) => {const MONGODB_URL = `mongodb+srv://${username}:${password}@web-ecommerce.fn82cfs.mongodb.net/ECOMMERCE?retryWrites=true&w=majority&appName=web-ecommerce`;


  try {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

export default Connection;
