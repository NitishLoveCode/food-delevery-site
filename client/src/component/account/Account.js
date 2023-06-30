import React from 'react'
import {MdManageAccounts} from "react-icons/md"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {MdPayment} from "react-icons/md"
import {BsShield} from "react-icons/bs"
import "../account/account.css"

export default function Account() {
  return (
    <>
        <div className="main_account">
            <div className="setting">
                <h4>Setting</h4>

                <div className='setting_name'>
                    <div className='setting_icon'>
                        <MdManageAccounts/>
                    </div>
                    <div className='setting_info'>
                        <h5>Account</h5>
                        <p>Personal information</p>

                    </div>
                </div>

                <div className='setting_name'>
                    <div className='setting_icon'>
                        <HiOutlineLocationMarker/>
                    </div>
                    <div className='setting_info'>
                        <h5>Address</h5>
                        <p>Shipping Address</p>

                    </div>
                </div>

                <div className='setting_name'>
                    <div className='setting_icon'>
                        <MdPayment/>
                    </div>
                    <div className='setting_info'>
                        <h5>Payment method</h5>
                        <p>Connected credit card</p>

                    </div>
                </div>

                <div className='setting_name'>
                    <div className='setting_icon'>
                        <BsShield/>
                    </div>
                    <div className='setting_info'>
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
                        <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1688089746~exp=1688090346~hmac=b2edf47fdc28b5741e36c37c5db714681a27524c4b724c3760b5d79992da3f23" alt="img" />
                        <button>Change</button>
                        <button>Remove</button>
                    </div>
                    <div className='fields_info'>
                    <div className='name_info'>
                        <div className='fristname'>
                            <label htmlFor="">Frist name</label><br />
                            <input type="text" name="fristname" id="fristname" />
                        </div>
                        <div className='lastname'>
                            <label htmlFor="">Last name</label><br />
                            <input type="text" name="lastname" id="lastname" />
                        </div>
                    </div>

                    <div className='name_info'>
                        <div className='Email_info'>
                            <label htmlFor="">Email</label><br />
                            <input type="text" name="Email" id="Email" />
                        </div>
                        <div className='phone_number'>
                            <label htmlFor="">Phone Number</label><br />
                            <input type="text" name="phoneNumber" id="phoneNumber" />
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
                                <input type="checkbox" name="newrestorent" id="newrestorent" />
                                <label htmlFor="newrestorent">New Restorent</label>
                            </div>
                            <div className="noti_child">
                                <input type="checkbox" name="order_status" id="order_status" />
                                <label htmlFor="order_status">Order status</label>
                            </div>
                        </div>



                        <div className="notification">
                            <div className="noti_child">
                                <input type="checkbox" name="password changed" id="passwod_changed" />
                                <label htmlFor="passwod_changed">Password changed</label>
                            </div>
                            <div className="noti_child">
                                <input type="checkbox" name="special_offers" id="special_offers" />
                                <label htmlFor="special_offers">Special offers</label>
                            </div>
                            <div className="noti_child">
                                <input type="checkbox" name="News_latter" id="News_latter" />
                                <label htmlFor="News_latter">Newslatter</label>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="final_btn">
                        <div className="logout_btn">
                            <button>Logout</button>
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
  )
}
