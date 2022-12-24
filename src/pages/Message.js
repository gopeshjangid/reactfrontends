// import { useState } from "react";
// import UseChat from "./UseChatRoom";

// const ChatRoom = (props) => {
//   const { name } = props;
//   const { messages, sendMessage } = UseChat(name);
//   const [newMessage, setNewMessage] = useState("");

//   const handleNewMessageChange = (event) => {
//     console.log("change inpul value====", event.target.value);
//     setNewMessage(event.target.value);
//   };

//   const handleSendMessage = () => {
//     sendMessage(newMessage);

//     console.log("llll", messages);
//   };
//   console.log("==qw=rty=ui=====", messages);
//   return (
//     <>

//     </>
//   );
// };

// export default ChatRoom;

import React from "react";

const Message = ({ user, message, classs }) => {
  if (user) {
    return <div className={`messageBox ${classs}`}>{`${user}:${message}`}</div>;
  } else {
    return <div className={`messageBox ${classs}`}>{`You : ${message}`}</div>;
  }
};

export default Message;
