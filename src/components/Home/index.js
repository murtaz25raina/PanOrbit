import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ChangeProfile from "../ChangeProfile";
import ChatList from "../ChatList";
import Chat from "../Chat";
import "./index.css";

const Home = () => {
  const [heading, setHeading] = useState("Profile");
  const [showChat, setShowChat] = useState(false);
  const [selectedChatUser, setSelectedChatUser] = useState({});
  const showChatHandler = (flag, selectedUser) => {
    setShowChat(flag);
    setSelectedChatUser(selectedUser);
  };
  const userLoggedinID = useSelector((state) => state.login.userId);
  const fetchedUsers = useSelector((state) => state.users.users);
  const loggedUserDetails =
    fetchedUsers.length > 0
      ? fetchedUsers.find((user) => user.id === userLoggedinID)
      : null;

  return (
    <div className="home-outer-div">
      <div className="side-bar-div">
        <div className="side-bar-text-arrow-div">
          <div className="side-bar-text">
            <Link
              className="link-home-page"
              to={loggedUserDetails ? `profile/${loggedUserDetails.id}` : "/"}
              onClick={() => setHeading("Profile")}
            >
              Profile
            </Link>
          </div>
          {heading === "Profile" ? (
            <div className="arrow-outlet">{">"}</div>
          ) : null}
        </div>

        <div className="side-bar-text-arrow-div">
          <div className="side-bar-text">
            <Link
              className="link-home-page"
              to="posts"
              onClick={() => setHeading("Posts")}
            >
              Posts
            </Link>
          </div>
          {heading === "Posts" ? (
            <div className="arrow-outlet">{">"}</div>
          ) : null}
        </div>

        <div className="side-bar-text-arrow-div">
          <div className="side-bar-text">
            <Link
              className="link-home-page"
              to="gallery"
              onClick={() => setHeading("Gallery")}
            >
              Gallery
            </Link>
          </div>
          {heading === "Gallery" ? (
            <div className="arrow-outlet">{">"}</div>
          ) : null}
        </div>

        <div className="side-bar-text-arrow-div">
          <div className="side-bar-text">
            <Link
              className="link-home-page"
              to="todo"
              onClick={() => setHeading("Todo")}
            >
              Todo
            </Link>
          </div>
          {heading === "Todo" ? (
            <div>
              <div></div>
              <div className="arrow-outlet">{">"}</div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="home-rightside-div">
        <div className="home-right-header">
          <div style={{ fontWeight: 600, fontSize: "23px" }}>{heading}</div>
          <ChangeProfile loggedUserDetails={loggedUserDetails} />
        </div>
        <div className="outlet-home">
          <Outlet />
        </div>
        <div className="chat-outer-div">
          {showChat ? (
            <Chat
              selectedChatUser={selectedChatUser}
              showChatHandler={showChatHandler}
            />
          ) : null}
          <ChatList
            showChatHandler={showChatHandler}
            fetchedUsers={fetchedUsers}
            loggedUserDetails={loggedUserDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
