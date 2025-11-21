import mongoose from "mongoose";

export const connectDB = async () => {
  const connectionOptions = {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
  };

  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://foodboyprashon:Admin002@newcluster0.ocg5qag.mongodb.net/food-ordering-project?retryWrites=true&w=majority&appName=NewCluster0';
    await mongoose.connect(mongoURI, connectionOptions);
    console.log("✅ DB Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("❌ MongoDB Atlas connection failed:", error.message);
    console.log("🔄 Trying to connect to local MongoDB...");
    try {
      await mongoose.connect('mongodb://localhost:27017/food-ordering-project', connectionOptions);
      console.log("✅ Connected to local MongoDB!");
    } catch (localError) {
      console.error("❌ Local MongoDB connection also failed:", localError.message);
      console.log("⚠️  Running without database connection. Please fix database connection for full functionality.");
      console.log("💡 Solutions:");
      console.log("   1. Install and start local MongoDB");
      console.log("   2. Check MongoDB Atlas cluster status");
      console.log("   3. Verify network connectivity");
      console.log("   4. Check if your IP is whitelisted in MongoDB Atlas");
      console.log("📡 Server will continue running on http://localhost:" + (process.env.PORT || 4001));
      // Don't exit the process, let the app run without DB for development
    }
  }
};