// const express= require('express')

// const cors = require('cors')
// const {connect}=require('mongoose')
// require('dotenv').config()

// const userRouter=require('./routers/userRouter')
// const postRouter=require('./routers/postRouter')

// const { notFound, errorHandler } = require('./middleware/errorMiddleware')

// const app=express();
// app.use(express.json({extended:true}))
// app.use(express.urlencoded({extended:true}))
// app.use(cors({credentials:true, origin: "http://localhost:3000" }))

// app.use('/api/users',userRouter)
// app.use('/api/posts',postRouter)

// app.use(notFound)
// app.use(errorHandler)
// connect(process.env.MONGO_URI).then(app.listen(5000,()=>{
//     console.log(`server is running on port ${process.env.PORT}`);
    
// })).catch(err=>{console.log(err)})



require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connect } = require('mongoose');
const upload=require('express-fileupload');
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3001",
}));
app.use(upload());
app.use('/uploads', express.static(__dirname+'uploads'));
// Routes
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

// Error Handling
app.use(notFound);
app.use(errorHandler);



// MongoDB Connection
connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB successfully.");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });


    

// Unhandled Rejection Handler
process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection:", reason);
});

// Uncaught Exception Handler
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});