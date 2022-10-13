import mongoose from 'mongoose';

function dbConnect() {
  mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });
}


export default dbConnect;
