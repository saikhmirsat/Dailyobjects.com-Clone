const ErrorHandler=require("../utils/errorhandler")

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500;
    err.message=err.message || "Internal Server Error";


    //wrong Mongodb id error
    if(err.name==="CastError"){
        const message=`Resource not found. Invalid: ${err.path}`
        err=new ErrorHandler(message,400)
    }

    //Mongoose duplicate key error
    if(err.code==11000){
        const message=`Duplicate ${Object.keys(err.keyValue)} entered`
        err=new ErrorHandler(message,400)
    }

    //wrong jwt error
     if(err.name==="JsonwebTokenError"){
        const message=`Json web token is invalid,Try again`;
        err=new ErrorHandler(message,400)
    }

    //jwt expire error
    if(err.name==="TokenExpireError"){
        const message=`Json web token is Expired,Try again`;
        err=new ErrorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}