import mongoose from 'mongoose';

async function dbConnect() {
  const dbUri = process.env.ATLAS_URI

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.error("Could not connect to DB");
    process.exit(1);
  }
}


export default dbConnect;
