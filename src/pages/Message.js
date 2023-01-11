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
// import { VscFilePdf } from "react-icons/vsc";
import { Router, useNavigate } from "react-router-dom";

const Message = ({ user, message, classs, type, name }) => {
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

  if (user && type === "image") {
    return (
      <div className={`messageBox ${classs}`}>
        <p className="fw-bold mb-2">{`${user}`}</p>
        <img src={`${message}`} />
      </div>
    );
  } else if (user && type === "pdf") {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <button
          onClick={() => window.open(`${message}`)}
          className="border-0 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {/* <VscFilePdf /> */}

          {user && type === "pdf" ? (
            <i className="fa-solid fa-file-pdf fs-3 text-white"></i>
          ) : (
            ""
          )}
        </button>
        <span className="ms-3"> {`${name}`}</span>
      </div>
    );
  } else if ((user && type === "docx") || (user && type === "doc")) {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <button
          onClick={() => navigate(`//${message}`)}
          className="border-0 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {/* <VscFilePdf /> */}

          {(user && type === "docx") || (user && type === "doc") ? (
            // <i class="fa-solid fa-file-pdf "></i>
            <i className="fa-solid fa-file fs-3 text-white"></i>
          ) : (
            ""
          )}
        </button>
        <span className="ms-3"> {`${name}`}</span>
      </div>
    );
  } else {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        {`${message}`}
      </div>
    );
  }
};

export default Message;
