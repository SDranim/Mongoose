const express = require('express');
const connectDB = require('./config/connectDB');
const userRouter = require('./routes/userRoutes');
const app = express()
port = process.env.PORT || 5000;


//middleware
app.use(express.json())
// DB connection
connectDB(); 
//API
app.use('/api',userRouter)


app.listen(port,console.log(`server is up and running on http://localhost:${port}`))