import React from "react";
import {useSelector} from 'react-redux';
import img_avatar from '../../assets/img_avatar.png';
import dummy_map from "../../assets/dummy_map.PNG";
import './index.css';


const Profile = ()=>{
    const userLoggedinID = useSelector((state)=>state.login.userId);
  const fetchedUsers = useSelector((state)=>state.users.users);
  const loggedUserDetails = fetchedUsers.length>0 ?  fetchedUsers.find(user => user.id === userLoggedinID):null;
    

  return(
    loggedUserDetails !== null ? <div className="profile-outer-div">
        <div className="profile-inner-left-div">
            <div className="user-pic-details-div">
            <img
                  className="user-picture"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = img_avatar;
                  }}
                  src={loggedUserDetails?.profilepicture}
                  alt="PP"
                />
                <div className="dark-text-profile">{loggedUserDetails?.name}</div>
                <div className="light-text-profile light-dark-text-grid"><span className="text-align-right">Username :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.username}</span></div>
                <div className="light-text-profile light-dark-text-grid"><span className="text-align-right">e-mail :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.email}</span></div>
                <div className="light-text-profile light-dark-text-grid"><span className="text-align-right">Phone :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.phone}</span></div>
                <div className="light-text-profile light-dark-text-grid"><span className="text-align-right">Website :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.website}</span></div>
            </div>
            <div>
                <div className="light-text-profile text-align-center company-div">Company</div>
                <div className="light-text-profile light-dark-text-grid"><span className="text-align-right">Name :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.company?.name}</span></div>
                <div className="light-text-profile light-dark-text-grid"><span className="text-align-right">catchphrase :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.company?.catchPhrase}</span></div>
                <div className="light-text-profile light-dark-text-grid"><span className="text-align-right">bs :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.company?.bs}</span></div>
            </div>
        </div>
        <div className="profile-inner-right-div">
        <div>
                <div className="light-text-profile text-align-left" style={{marginBottom:'5px',marginLeft:'-20px'}}>Address</div>
                <div className="light-text-profile light-dark-text-grid" style={{marginLeft:'-40px'}}><span className="text-align-right">Street :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.address?.street}</span></div>
                <div className="light-text-profile light-dark-text-grid" style={{marginLeft:'-40px'}}><span className="text-align-right">Suite :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.address?.suite}</span></div>
                <div className="light-text-profile light-dark-text-grid" style={{marginLeft:'-40px'}}><span className="text-align-right">City :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.address?.city}</span></div>
                <div className="light-text-profile light-dark-text-grid" style={{marginLeft:'-40px'}}><span className="text-align-right">Zipcode :</span><span className="dark-text-profile text-align-left">{loggedUserDetails?.address?.zipcode}</span></div>
                <div className="map-details-div">
                    <img className="map-img" src={dummy_map} alt="map"/>
                    <div className="lat-lng-container">
                        <div>Lat :<span className="dark-text-profile">{loggedUserDetails?.address?.geo?.lat}</span></div>&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>Long :<span className="dark-text-profile">{loggedUserDetails?.address?.geo?.lng}</span></div>
                    </div>
                </div>
            </div>

        </div>
    </div>:<div>No data to show</div>
  )

        }



export default Profile;