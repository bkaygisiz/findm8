import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
export const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Return the database connection instance
    return client.db("find-m8s-db");
  } catch (error) {
    console.log('MongoDB Connection Error:', error);
    throw new Error('Unable to connect to the database.');
  }
};
