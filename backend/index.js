import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

import Connection from './database/db.js';
import DefaultData from './default.js';

import Router from './routes/route.js';

import cors from 'cors';
import bodyParser from 'body-parser';

DefaultData

; // ✅ Load environment variables from .env

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json()); // ✅ Needed to parse JSON
app.use('/',Router)
const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

console.log("USERNAME:", process.env.DB_USERNAME);
console.log("PASSWORD:", process.env.DB_PASSWORD);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`); // ✅ Fixed template literal
  console.log("USERNAME:", process.env.DB_USERNAME);
console.log("PASSWORD:", process.env.DB_PASSWORD);
});

DefaultData(); // ✅ Call the function to import default data

// Export the app for testing or other purposes
