import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert } from "@material-ui/icons";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://avatars.dicebear.com/api/human/51534.svg" />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ... </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">Hello ChatBody</div>
      <div className="chat__footer">I am Chatfooter</div>
    </div>
  );
};

export default Chat;
