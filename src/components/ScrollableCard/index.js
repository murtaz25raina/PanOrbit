import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import img_avatar from "../../assets/img_avatar.png";
import { login } from "../../redux/actions/login";
import "./index.css";

const ScrollabeCard = (props) => {
  const dispatch = useDispatch();
  const loginHandler = (userId) => {
    dispatch(login(userId));
  };
  return (
    <div className="srollable-card">
      <div className="contact-list-header">Select an Account</div>
      <div className="contact-list">
        {props.contacts &&
        props.contacts.hasOwnProperty("users") &&
        props.contacts.users.length > 0 ? (
          props.contacts.users.map((contact) => {
            return (
              <Link
                key={contact.id}
                className="link-card"
                to={`home/profile/${contact.id}`}
                onClick={() => loginHandler(contact.id)}
              >
                <div className="contact-name-pic">
                  <img
                    className="contact-pic-small"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = img_avatar;
                    }}
                    src={contact.profilepicture}
                    alt="PP"
                  />
                  {contact.name}
                </div>
              </Link>
            );
          })
        ) : (
          <div className="contacts-not-available">No Contacts available</div>
        )}
      </div>
    </div>
  );
};

export default ScrollabeCard;
