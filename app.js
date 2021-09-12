// library
const express = require('express');
const app = express(); // new instance of express
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

// importing routes

// passport

// middleware
app.use(express.json());
app.use(cors());

// route middleware
app.get('/', (req, res) => {
  res.json({ message: 'This is the home page' });
});

// Error Handling
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message || 'Internal Server Error' });
});

// Path Not Found
app.use((req, res, next) => {
  res.status(404).json({ message: 'Path Not Found' });
});

// running the app and connecting to Database
const run = () => {
  try {
    // connect to db
    mongoose.connect(process.env.DATABASE_URI);
    console.log('Connected to Database Successfully');
    // Runnig The App
    app.listen(process.env.PORT || 8000, () =>
      console.log('Server is Running on Port 8000')
    );
  } catch (error) {
    console.error(error);
  }
};
run();
