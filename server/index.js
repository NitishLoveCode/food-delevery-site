const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const fs=require("fs")
const multer=require("multer")
const path=require("path")

dotenv.config({ path: "./.env" });
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
require("./db/conn");
const UserData = require("./schema/alluser");

app.get("/", (req, res) => {
  res.status(200).json("home");
});

app.post("/register", async (req, res) => {
  if (req.body.googledata) {
    const data = req.body.googledata;

    console.log(data);
    if ((data.firstName, data.lastName, data.email)) {
      try {
        const postToLogin = await new UserData({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          photoUrl: data.photoUrl,
        });
        const saveit = await postToLogin.save();
        console.log(saveit);
        if (saveit) {
          res.status(200).json(saveit);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }else{
    const data = req.body

    console.log(data);
    if ((data.name, data.phone, data.email,data.password)) {
      try {
        const postToLogin = await new UserData({
          firstName: data.name,
          phoneNumber:data.phone,
          email: data.email,
          password:data.password
        });
        const saveit = await postToLogin.save();
        console.log(saveit);
        if (saveit) {
          res.status(200).json(saveit);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
});

// ----------------profile picture download while trying to upload new new------------------
app.use("/userpic",express.static(__dirname+"/userPic"))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname,"userPic"))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() + '_' + file.originalname)
  }
})
const upload = multer({ storage: storage })
app.post('/upload-by-local', upload.single('photo'),async(req, res)=> {


  try{
  const userPic=req.file
  // res.json(userPic.filename).status(200)
  // // -------------delete privious one if found of if thats one is not from google gmail pic --------------
  const {oldImg,_id}=(req.body)
  console.log(oldImg)
  if(oldImg && _id){
    console.log("pass oldimg && _id")
    const imgScan=oldImg.slice(0,7)
    if(imgScan!="https:/"){
        console.log("old image is deleted.")
        const userProfile=(path.join(__dirname,"userPic"))
        fs.unlinkSync(path.join(userProfile,"/"+oldImg))
      }
  }
  // -----------now find user by id and update profile pic----------------
    const userPicUpdate=await UserData.findByIdAndUpdate(_id,{$set:{photoUrl:userPic.filename}},{new:true})
    console.log(userPicUpdate)
    res.status(200).json(userPicUpdate)


  }catch(err){
    console.log(err)
  }

})




// ---------------------login details check--------------------------

app.post("/login",async(req,res)=>{
  console.log(req.body)
})





app.listen(process.env.PORT, () => {
  console.log(`server is started at ${process.env.PORT}`);
});
