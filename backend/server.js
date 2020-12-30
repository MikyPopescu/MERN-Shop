const express = require('express')
const dotenv = require('dotenv');
const connectDB = require("./config/db")
const notFound = require('./middleware/errorMiddleware')
const errorHandler = require('./middleware/errorMiddleware')
const colors = require('colors');
const productRoutes = require('./routes/productRoutes');
dotenv.config();

connectDB();

const app = express();

app.use((req,res,next)=>{
    console.log("hello")
    next();
})

app.get("/",(req,res) => {
    res.send('API running')
})

app.use("/api/products",productRoutes)

//middleware
app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))