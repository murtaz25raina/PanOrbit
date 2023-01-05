import React, { useState } from "react";
import { Collapse } from "antd";
import { ReactComponent as ChatIcon } from "../../assets/comment-alt.svg";
import { ReactComponent as ArrowUp } from "../../assets/angle-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/angle-down.svg";
import img_avatar from "../../assets/img_avatar.png";
import "./index.css";
const { Panel } = Collapse;

const Chat = (props) => {
  const [arrowUpFlag, setArrowUpFlag] = useState(true);
  const onChange = (key) => {
    if (key.length > 0) {
      setArrowUpFlag(false);
    } else {
      setArrowUpFlag(true);
    }
  };
  return (
    <Collapse onChange={onChange}>
      <Panel
        showArrow={false}
        header={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="chat-header-text-icon">
              <ChatIcon style={{ width: "30px" }} />
              &nbsp;&nbsp;&nbsp;Chat
            </div>
            {arrowUpFlag ? (
              <ArrowUp style={{ width: "30px" }} />
            ) : (
              <ArrowDown style={{ width: "30px" }} />
            )}
          </div>
        }
      >
        {props.fetchedUsers && props.fetchedUsers.length > 0
          ? props.fetchedUsers.map((user) => {
              if (user.id !== props.loggedUserDetails.id) {
                return (
                  <div className="chat-user-div">
                  <div className="contact-name-pic-name-chat">
                    <img
                      className="contact-pic-small-chat"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = img_avatar;
                      }}
                      src={user.profilepicture}
                      alt="PP"
                    />
                    <div style={{ fontSize: "17px" }}>{user.name}</div>
                  </div>
                  <div className="online-status"></div>
                  </div>
                );
              }
              else{
                return false;
              }
            })
          : null}
      </Panel>
    </Collapse>
  );
};

export default Chat;
