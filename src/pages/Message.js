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
import { VscFilePdf } from "react-icons/vsc";
import { Router, useNavigate } from "react-router-dom";

const Message = ({ user, message, classs, type }) => {
  const navigate = useNavigate();
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch(message).then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = message;
  //       alink.click();
  //     });
  //   });
  // };

  if (user && type == "image") {
    return (
      <div className={`messageBox ${classs}`}>
        {`${user}:`} <img src={`${message}`} />
      </div>
    );
  } else if (
    (user && type == "pdf") ||
    (user && type == "docx") ||
    (user && type == "msword") ||
    (user && type == "docs") ||
    (user && type == "txt")
  ) {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        {`${user}:`}{" "}
        <button onClick={() => navigate(`//${message}`)}>
          <VscFilePdf />
        </button>
      </div>
    );
  } else {
    return <div className={`messageBox ${classs}`}>{`${user}:${message}`}</div>;
  }
};

export default Message;
