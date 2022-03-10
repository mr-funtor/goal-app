const express= require('express');
const app= express();
const dotenv= require('dotenv').config();

//add middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Routes
const goalRoutes= require('./routes/goalRoutes');

app.use('/api/goals', goalRoutes);

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`) )