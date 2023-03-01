const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors")
const User=require("../models/userModels");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail")
const crypto=require("crypto")
const cloudinary=require("cloudinary")

//Register a user

exports.registerUser=catchAsyncErrors(async(req,res,next)=>{



    const { firstName, email, password }=req.body



    const user=await User.create({
        firstName,
        email,
        password
    })


    sendToken(user,201,res)
})

//login user
exports.loginUser=catchAsyncErrors(async(req,res,next)=>{

        const {email,password}=req.body

        //chceking if user has given password and email both

        if(!email || !password){
            return next(new ErrorHandler("Please Enter Email & Passowrd",400))
        }


        const user=await User.findOne({email}).select("+password")

        if(!user){
            return next(new ErrorHandler("Invalid Email or Passowrd",401))
        }

        const isPassowordMatched=await user.comparePassword(password)

        if(!isPassowordMatched){
            return next(new ErrorHandler("Invalid Email or Passowrd",401))
        }

       sendToken(user,200,res)
})

//Logout User
exports.logout=catchAsyncErrors(async(req,res,next)=>{
    
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
})

//Forgot Password
exports.forgotPassword=catchAsyncErrors(async(req,res,next)=>{

    const user=await User.findOne({email:req.body.email})

    if(!user){
        return next(new ErrorHandler("User not found",404))
    }

    //Get ResetPassword Token
    const resetToken=user.getResetPasswordToken();

    await user.save({validateBeforeSave:false})

    const resetPasswordurl=`https://showy-animal-7694.vercel.app/resetpassword/${resetToken}`

    // const resetPasswordurl=`${req.protocol}:/${req.get("host")}/api/password/reset/${resetToken}`

    const message=`Your password reset token is :- \n\n${resetPasswordurl}\n\nIf you have not requested this email then, please ignore it`
    
    try {
        await sendEmail({
            email:user.email,
            subject:`Day2Day Password Recovery`,
            message,
        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`,
            resetToken
        })

    } catch (error) {
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false})

        return next(new ErrorHandler(error.message,500))
    }
})

//Reset password

exports.resetPassword=catchAsyncErrors(async(req,res,next)=>{

    //creating token hash
    const resetPasswordToken=crypto.createHash("sha256").update(req.params.token).digest("hex")

    const user=await User.findOne({resetPasswordToken,resetPasswordExpire:{$gt:Date.now()}})

    if(!user){
        return next(new ErrorHandler("Reset Password Token is invalid or has been expired",404))
    }

    if(req.body.password!==req.body.confirmPassword){
        return next(new ErrorHandler("Password doesn't match.Please re-confirm the password",400))
    }

    user.password=req.body.password

    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save()

    sendToken(user,200,res)

})

//Get user details
exports.getUserDetails=catchAsyncErrors(async(req,res,next)=>{

    const user=await User.findById(req.user.id)

    res.status(200).json({
        success:true,
        user,
    })
})


//Update user password
exports.updatePassword=catchAsyncErrors(async(req,res,next)=>{

    const user=await User.findById(req.user.id).select("+password")

    const isPassowordMatched=await user.comparePassword(req.body.oldPassword)

    if(!isPassowordMatched){
        return next(new ErrorHandler("Old Passowrd is incorrect",400))
    }

    if(req.body.newPassword!==req.body.confirmPassword){
        return next(new ErrorHandler("password does not match",400))
    }

    user.password=req.body.newPassword;

    await user.save()

    sendToken(user,200,res)
})

//Update user profile
exports.updateProfile=catchAsyncErrors(async(req,res,next)=>{

   const newUserData={
    firstName:req.body.name,
    email:req.body.email,
}

   //need to add cloudinary

   const user=await User.findByIdAndUpdate(req.user.id,newUserData)

    res.status(200).json({
        success:true
    })
})

//get all users(admin)
exports.getAllUser=catchAsyncErrors(async(req,res,next)=>{
    const users=await User.find()

    res.status(200).json({
        success:true,
        users,
    })

})

//get singleuser users(admin)
exports.getSingleUser=catchAsyncErrors(async(req,res,next)=>{
    const user=await User.findById(req.params.id)

    if(!user){
        return next(new ErrorHandler(`User does not exist with ID:${req.params.id}`))
    }
    res.status(200).json({
        success:true,
        user,
    })

})

//Update user Role--Admin
exports.updateUserRole=catchAsyncErrors(async(req,res,next)=>{

    const newUserData={
        firstName:req.body.name,
        email:req.body.email,
        role:req.body.role,
    }
    const user=await User.findByIdAndUpdate(req.user.id,newUserData)
 
     res.status(200).json({
         success:true
     })
 })

 //Delete user --Admin
exports.deleteUser=catchAsyncErrors(async(req,res,next)=>{

   const user =await User.findById(req.params.id)
 
    //need to remove cloudinary
    

    if(!user){
        return next(new ErrorHandler(`User does not exist with ID:${req.params.id}`))
    }
    
    await user.remove()

    res.status(200).json({
         success:true,
         message:"User deleted successfully"
    })
 })

 



