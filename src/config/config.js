import dotenv from 'dotenv'

dotenv.config();

export default {
  port:process.env.PORT,
  mongoUrl:process.env.MONGO_URL,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackUrl: process.env.CALLBACK_URL,
  secretOrKey: process.env.SECRET_KEY,
  keyToken: process.env.KEY_TOKEN
};
