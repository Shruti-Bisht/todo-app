import dotenv from "dotenv";
dotenv.config({ path: './.env' });

import express from 'express';
import cors from 'cors';

import { userRoute } from './routes/user.route.js';
import { taskRoute } from './routes/task.route.js';

const app = express();


app.get('/',(req,res)=>{
  res.send("Api is working well");
})


// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173'], // Ensure CORS_ORIGIN is correctly set in your .env file
  methods: ['POST', 'GET','PUT'],
  credentials: true, // Enable credentials (cookies, authorization headers) to be included in CORS requests
}));

// JSON parsing middleware
app.use(express.json());
// Routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/task", taskRoute);

export default app;
