const mongoose=require("mongoose")

mongoose.connect(process.env.DBurl)
    .then(()=>{
        console.log("Database is connected sucessfully")
    })
    .catch((err)=>{
        console.log(err)
    })