const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');



//Import routes
const authRoute = require('./routes/auth');

dotenv.config();


//connect to db
mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true,useNewUrlParser: true},() => console.log('Connected to DB'))
    

// Route Middleware
app.use(express.json())
app.use('/api/user', authRoute);



app.listen(5000, () => {
    console.log('Server is now listening on port 5000')
});