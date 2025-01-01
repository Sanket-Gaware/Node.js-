import mongoose from "mongoose";

const ConnectToDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://gawaresanket25:YwQjjMQrK7RgwgvB@cluster0.ksnzu.mongodb.net/Authentication?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`host: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

export default ConnectToDb;
