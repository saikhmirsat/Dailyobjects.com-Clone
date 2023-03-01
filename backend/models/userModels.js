const mongoose=require("mongoose")
const validator=require("validator")
const bycrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const crypto=require("crypto")

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please Enter Your First Name"],
        maxLength:[30,"First Name cannot exceed 30 characters"],
        minLength:[2,"First Name should have more than 2 characters"]
    },
    lastName:{
        type:String,
        maxLength:[30,"Last Name cannot exceed 30 characters"],
        minLength:[2,"Last Name should have more than 2 characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid Email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false,
    },
    avatar:{type:String},
    country:{
        type:String,
    },
    street:{
        type:Number
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    role:{
        type:String,
        default:"user",
    },  
    resetPasswordToken:String,
    resetPasswordExpire:Date,

})

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        next()
    }

    this.password=await bycrypt.hash(this.password,10)
})

//jsw token

userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

//compare password
userSchema.methods.comparePassword=async function(enteredPassword){
    return await  bycrypt.compare(enteredPassword,this.password)

}

//Generating password Reset Token
userSchema.methods.getResetPasswordToken=function(){
    //Generating Token
    const resetToken=crypto.randomBytes(20).toString("hex");

    //Hasing and adding to resetPasswordToken to userSchema

    this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpire=Date.now()+15*60*1000;

    return resetToken;

}

module.exports=mongoose.model("User",userSchema)