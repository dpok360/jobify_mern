import mongoose from 'mongoose';

async function DBconnect() {
  try {
    const encodedPassword = encodeURIComponent(process.env.PASSWORD);
    const DB = process.env.MONGO_URL.replace('<password>', encodedPassword);
    await mongoose.connect(DB);
    console.log('DATABASE connection sucessfull...');
  } catch (err) {
    console.error('error connecting MongoDB...', err);
    process.exit(1);
  }
}
export default DBconnect;
