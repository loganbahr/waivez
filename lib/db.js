import { MongoClient } from "mongodb";

// personal database connection string
export const connectToDatabase = async () => {
  return await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_PERSONAL_USER}:${process.env.MONGO_PERSONAL_PASS}@cluster0.uzbiq.mongodb.net/?retryWrites=true&w=majority`
  );
};

// waivez database connection string
export const connectToWaivezDatabase = async () => {
  return await MongoClient.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@waivez-cluster.3cvs8.mongodb.net/?retryWrites=true&w=majority`
  );
};

// testing amplify environment variables
