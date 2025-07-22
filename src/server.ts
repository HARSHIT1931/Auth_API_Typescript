import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

dotenv.config(); //  Load .env before accessing any environment variables

const PORT = process.env.PORT || 3000;

connectDB(); //  Connect to MongoDB

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
