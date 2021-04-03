import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";

const Chat = () => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>>>", input);
  };

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
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Yoog</span>
          Hey guys!
          <span className="chat__timestamp">07:00am</span>
        </div>
        {/* <div className="chat__message">
          <span className="chat__name">Yoog</span>
          Hey guys!
          <span className="chat__timestamp">07:00am</span>
        </div>
        <div className="chat__message">
          <span className="chat__name">Yoog</span>
          Hey guys!
          <span className="chat__timestamp">07:00am</span>
        </div> */}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type your message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
