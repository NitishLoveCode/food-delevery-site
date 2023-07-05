const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


const alluserData= new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    photoUrl:{
        type:String,
    },
    phoneNumber:{
        type:String,
        unique:true
    },
    newDeals:{
        type:Boolean
    },
    newRestorent:{
        type:Boolean
    },
    orderStatus:{
        type:Boolean
    },
    passwordChanged:{
        type:Boolean
    },
    specialOffers:{
        type:Boolean
    },
    newsLatter:{
        type:Boolean
    },
    password:{
        type:String,
    }
})

alluserData.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hash(this.password, 10)
    }
    next()
})
const UserData=new mongoose.model("Alluser",alluserData)

module.exports=UserData