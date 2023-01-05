import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/angle-down.svg";
import { ReactComponent as ArrowUp } from "../../assets/angle-up.svg";
import { SendOutlined,CloseOutlined } from "@ant-design/icons";
import "./index.css";

const Chat = (props) => {
  const [showChatBody, setShowChatBody] = useState(true);
  return (
    <div className="individual-chat-div">
      <div className="chat-header-div">
        <div>Murtaz Raina</div>
        <div className="close-down-chat-div">
          {showChatBody?<ArrowDown
            onClick={() => setShowChatBody(false)}
            style={{
              width: "30px",
              marginRight: "5px",
              marginTop: "4px",
              cursor: "pointer",
            }}
          />:
          <ArrowUp
            onClick={() => setShowChatBody(true)}
            style={{
              width: "30px",
              marginRight: "5px",
              marginTop: "4px",
              cursor: "pointer",
            }}
          />
          
          }
          <span
            style={{ cursor: "pointer" }}
            onClick={() => props.showChatHandler(false)}
          >
            <CloseOutlined style={{ fontSize: "15px" }}/>
          </span>
        </div>
      </div>
      {showChatBody ? (
        <>
          <div className="display-chat-div">
            <div className="display-chat-div-inner">
              <p className="message" style={{ marginLeft: "25px" }}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="message" style={{ marginLeft: "25px" }}>
                Lorem ipsum dolor sit
              </p>
              <span
                style={{ margin: "auto", fontSize: "15px", color: "#b9afaf" }}
              >
                9:16 PM
              </span>
              <p className="message" style={{ marginLeft: "80px" }}>
                Lorem ipsum dolor
              </p>
              <p className="message" style={{ marginLeft: "80px" }}>
                Lorem ipsum
              </p>
              <p className="message" style={{ marginLeft: "80px" }}>
                Lorem
              </p>
            </div>
          </div>
          <div className="chat-textare-container">
            <textarea
              style={{ resize: "none" }}
              rows="1"
              className="chat-textarea"
            ></textarea>
            <span className="send-button">
              <SendOutlined style={{ fontSize: "25px" }} />
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Chat;
