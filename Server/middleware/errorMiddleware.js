// // Unsupported (404) routes
// const notFound =(req,res,next)=>{
//     const error=new Error(`Not found- ${req.originalUrl}`)
//     res.status(404);
//     next(error);
// }

// // Middleware to handle Errors
// const errorHandler = (error, req, res, next) => {
//     console.error("Error Handler C aught:", error); // Log detailed error
//     if (res.headerSent) {
//         return next(error);
//     }
//     res.status(error.code || 500).json({
//         message: error.message || "An unknown error occurred",
//     });
// };

// module.exports={
//     notFound,errorHandler
// }
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

module.exports = { notFound, errorHandler };
