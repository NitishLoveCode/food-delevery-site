import React, { useEffect, useState } from "react";
import { MdManageAccounts } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { BsShield } from "react-icons/bs";
import "../account/account.css";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const navigate=useNavigate()
    const data = JSON.parse(localStorage.getItem("loginInfo"));
    useEffect(()=>{
        if(data===null){
            navigate("/")
        }
    },[])

    const [userimg, setuserimg] = useState(data? data.photoUrl:"");
    const [fristName, setfristName] = useState(data? data.firstName:"");
    const [lastName, setlastName] = useState(data? data.lastName:"");
    const [phone, setphone] = useState();
    const [email, setemail] = useState(data?data.email:"");
    const[updatedPic,setupdatedPic]=useState()
    const[userid,setuserid]=useState(data? data._id:"")

// ------------------------userProfilePicUpdate--------------------
    const update_img=async(e)=>{
        const img=e.target.files[0]
        const data=new FormData()
        data.append("photo",img)
        data.append("oldImg",userimg)
        data.append("_id",userid)
        const res= await fetch("http://localhost:8000/upload-by-local",{
            method:"POST",
            header:{
                "content-type":'multipart/form-data'
            },
            body:data
        })
        const result=await res.json()
        // updateUserPic()
        const stringifyData=JSON.stringify(result)
        localStorage.setItem("loginInfo",stringifyData)

        setupdatedPic(result)
        
    }
// -----------userProfile changes form server if uploaded priviously local then delete----------------

// async function updateUserPic(){
//     const res=await fetch("http://localhost:8000/update-profile-pic",{
//         method:"POST",
//         credentials:"include",
//         headers:{
//             "content-type":"application/json"
//         },
//         body:JSON.stringify({
//             userimg,
//             updateUserPic,
//             userid
//         })
//     })
//     const result=await res.json()
//     if(result){
//         localStorage.setItem("loginInfo",{photoUrl:result})
//     }
// }

// --------------------------USER LOAAL IMG AND GMAIL IMG MANAGE------------
    // const [user_profile_img,setuser_profile_img]=useState()
    const userProfileImg=()=>{

        if(userimg){
            const chunk=userimg.slice(0,7)
            if(chunk!="https:/"){
                return("http://localhost:8000/userpic/"+userimg)
            }else{
                return userimg

            }
        }
    }


    // ---------------------remove items form localstorage or logout---------------
    const logout=()=>{
      localStorage.removeItem("loginInfo")
      console.log("logout")
      window.location.reload(false);
    }
        
    

  return (
    <>
      <div className="main_account">
        <div className="setting">
          <h4>Setting</h4>

          <div className="setting_name">
            <div className="setting_icon">
              <MdManageAccounts />
            </div>
            <div className="setting_info">
              <h5>Account</h5>
              <p>Personal information</p>
            </div>
          </div>

          <div className="setting_name">
            <div className="setting_icon">
              <HiOutlineLocationMarker />
            </div>
            <div className="setting_info">
              <h5>Address</h5>
              <p>Shipping Address</p>
            </div>
          </div>

          <div className="setting_name">
            <div className="setting_icon">
              <MdPayment />
            </div>
            <div className="setting_info">
              <h5>Payment method</h5>
              <p>Connected credit card</p>
            </div>
          </div>

          <div className="setting_name">
            <div className="setting_icon">
              <BsShield />
            </div>
            <div className="setting_info">
              <h5>Security</h5>
              <p>Password,2FA</p>
            </div>
          </div>
        </div>

        <div className="account">
          <h4>Account</h4>
          <div className="child_account">
            <h3>Personal information</h3>
            <div className="avatar">
              <img src={`${userProfileImg()? userProfileImg(): "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1688089746~exp=1688090346~hmac=b2edf47fdc28b5741e36c37c5db714681a27524c4b724c3760b5d79992da3f23"}`} alt="img"/>
              <input onChange={update_img} type="file" id="profilePictureUpload" 
                multiple
              />
              <label className="button1" htmlFor="profilePictureUpload">Change</label>
              <button className="button1">Remove</button>
            </div>
            <div className="fields_info">
              <div className="name_info">
                <div className="fristname">
                  <label htmlFor="">Frist name</label>
                  <br />
                  <input
                    type="text"
                    name="fristname"
                    id="fristname"
                    value={fristName}
                    onChange={(e) => setfristName(e.target.value)}
                  />
                </div>
                <div className="lastname">
                  <label htmlFor="">Last name</label>
                  <br />
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="name_info">
                <div className="Email_info">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="phone_number">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <h3>Email notification</h3>
              <div className="email_notification">
                <div className="notification">
                  <div className="noti_child">
                    <input type="checkbox" name="new deals" id="newdeals" />
                    <label htmlFor="newdeals">New deals</label>
                  </div>
                  <div className="noti_child">
                    <input
                      type="checkbox"
                      name="newrestorent"
                      id="newrestorent"
                    />
                    <label htmlFor="newrestorent">New Restorent</label>
                  </div>
                  <div className="noti_child">
                    <input
                      type="checkbox"
                      name="order_status"
                      id="order_status"
                    />
                    <label htmlFor="order_status">Order status</label>
                  </div>
                </div>

                <div className="notification">
                  <div className="noti_child">
                    <input
                      type="checkbox"
                      name="password changed"
                      id="passwod_changed"
                    />
                    <label htmlFor="passwod_changed">Password changed</label>
                  </div>
                  <div className="noti_child">
                    <input
                      type="checkbox"
                      name="special_offers"
                      id="special_offers"
                    />
                    <label htmlFor="special_offers">Special offers</label>
                  </div>
                  <div className="noti_child">
                    <input
                      type="checkbox"
                      name="News_latter"
                      id="News_latter"
                    />
                    <label htmlFor="News_latter">Newslatter</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="final_btn">
              <div className="logout_btn">
                <button onClick={logout}>Logout</button>
              </div>
              <div className="save_changes">
                <button>Discard changes</button>
                <button>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
