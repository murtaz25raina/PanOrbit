import React from "react";
import { Dropdown } from "antd";
import img_avatar from "../../assets/img_avatar.png";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logout,login } from "../../redux/actions/login";

const ChangeProfile = (props) => {
  const dispatch = useDispatch();
  const fetchedUsers = useSelector((state)=>state.users.users);
  const loginHandler = (userId)=>{
    dispatch(login(userId));
  } 
  let firstTwoUsersInList=[];
  if(fetchedUsers && fetchedUsers.length>0 && props.loggedUserDetails){
    let i = 0;
    firstTwoUsersInList =fetchedUsers.filter((user)=>{
      if(user?.id!==props?.loggedUserDetails?.id && i<2){
        i++
        return user;
      }
      else{
        return false;
      }
    })
  }
  const logoutHandler=()=>{
    dispatch(logout);
  }
  const items = [
    {
      key: "1",
      label: (
        <div>
          <img
            className="contact-pic-change-profile"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = img_avatar;
            }}
            src={props?.loggedUserDetails?.profilepicture}
            alt="PP"
          />
          <div style={{fontSize:'17px'}}>{props?.loggedUserDetails?.name}</div>
          <div style={{color:'#a7a7a7',fontSize:'17px'}}>{props?.loggedUserDetails?.email}</div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={`profile/${firstTwoUsersInList[0]?.id}`} className="contact-name-pic-profile" onClick={()=>loginHandler(firstTwoUsersInList[0]?.id)}>
          <img
            className="contact-pic-small-profile"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = img_avatar;
            }}
            src={firstTwoUsersInList[0]?.profilepicture}
            alt="PP"
          />
          <div style={{fontSize:'17px'}}>{firstTwoUsersInList[0]?.name}</div>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to={`profile/${firstTwoUsersInList[1]?.id}`} className="contact-name-pic-profile"  onClick={()=>loginHandler(firstTwoUsersInList[1]?.id)}>
          <img
            className="contact-pic-small-profile"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = img_avatar;
            }}
            src={firstTwoUsersInList[1]?.profilepicture}
            alt="PP"
          />
          <div style={{fontSize:'17px'}}>{firstTwoUsersInList[1]?.name}</div>
        </Link>
      ),
    },
    {
      key: "4",
      label: (
       <Link className="logout-link" to="/"><button onClick={()=>logoutHandler()} className="signout-button">Signout</button></Link>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      trigger={["click"]}
      autoFocus={false}
      >
      <div className="contact-name-pic-home">
        <img
          className="contact-pic-small-home"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = img_avatar;
          }}
          src={props?.loggedUserDetails?.profilepicture}
          alt="PP"
        />

        {props?.loggedUserDetails?.name}
      </div>
    </Dropdown>
  );
};

export default ChangeProfile;
