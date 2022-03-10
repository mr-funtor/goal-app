const express= require('express');
const app= express();
const dotenv= require('dotenv').config();
const colors=require('colors');
const {errorHandler}=require('./middleware/errorMiddleware');
const connectDB= require('./config/db');

//connects to mongoose
connectDB()

//add middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(errorHandler);

//Routes
const goalRoutes= require('./routes/goalRoutes');

app.use('/api/goals', goalRoutes);




const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`) )