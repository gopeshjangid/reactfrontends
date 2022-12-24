import React, { useEffect, useState } from "react";
//import { user } from "./Join";

import socketIO from "socket.io-client";
import Message from "./Message";
import ReactScrollToBoottome from "react-scroll-to-bottom";
const ENDPOINT = "http://localhost:5000/";
let socket;
const Chat = () => {
  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);

  const send = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    console.log("iddd", id);
    const message = document.getElementById("chatInput").value;
    setMessages([...messages, { message: message }]);
    socket.emit("message", { message, id, token });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      setId(socket.id);
    });
    // socket.emit("joined", { user });
    // socket.on("welcome", (data) => {
    //   setMessages([...messages, data]);
    //   console.log(data.user, data.message);
    // });
    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      console.log("data,", data);
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <>
      <div className="card card_box mt-5">
        <p className="chat_idp text-center">
          <b>Order Id:</b> 45578 | <b>Title:</b> Package tutorial one
        </p>

        <div className="card-header text-center h1">
          Discuss About This Assignment Using Below Message Box
        </div>
        <div className="card-body chatbox">
          <div className="box-li-view fl_l">
            <ul>
              <ReactScrollToBoottome className="chatBox">
                {messages.map((item, i) => (
                  <Message
                    user={item.id === id ? "" : item.user}
                    message={item.message}
                    classs={item.id ? "left" : "right"}
                  />
                ))}
              </ReactScrollToBoottome>
            </ul>
          </div>

          {/* <div className="box-li-view fl_r">
            <ul>
              <li className="userm_li1">
                <span className="userm_li_span">ankitpgoyal.115@gmail.com</span>
                <span className="whats_chat_time">
                  <sub>July 27, 2022, 7:25 pm</sub>
                </span>
                <br />
                <span className="user_li_text ">
                  hello, my name is here there lorem spum can see there ot
                  visival can see.
                </span>
              </li>
            </ul>
          </div> */}

          {/* <div className="box-li-view fl_l">
            <ul>
              <li className="userm_li ">
                <span className="userm_li_span2">Mod_Alex</span>
                <span className="whats_chat_time">
                  <sub>July 27, 2022, 7:24 pm</sub>
                </span>
                <br />
                <span className="user_li_text ">Hi</span>
              </li>
            </ul>
          </div> */}
          {/* <div className="box-li-view fl_l">
            <ul>
              <li className="userm_li ">
                <span className="userm_li_span2">Mod_Alex</span>
                <span className="whats_chat_time">
                  <sub>July 27, 2022, 7:24 pm</sub>
                </span>
                <br />
                <span className="user_li_text ">Hi</span>
              </li>
            </ul>
          </div> */}
          {/* <div className="box-li-view fl_r">
            <ul>
              <li className="userm_li1">
                <span className="userm_li_span">ankitpgoyal.115@gmail.com</span>
                <span className="whats_chat_time">
                  <sub>July 27, 2022, 7:25 pm</sub>
                </span>
                <br />
                <span className="user_li_text ">
                  hello, my name is here there lorem spum can see there ot
                  visival can see.
                </span>
              </li>
            </ul>
          </div> */}
          {/* <div className="box-li-view fl_r">
            <ul>
              <li className="userm_li1">
                <span className="userm_li_span">ankitpgoyal.115@gmail.com</span>
                <span className="whats_chat_time">
                  <sub>July 27, 2022, 7:25 pm</sub>
                </span>
                <br />
                <span className="user_li_text ">
                  hello, my name is here there lorem spum can see there ot
                  visival can see.
                </span>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="chat_msg">
        <textarea
          className="form-control chat_cm"
          rows="3"
          id="chatInput"
          placeholder="type here...."
          name="text"
          // value={newMessage}
          // onChange={handleNewMessageChange}
        ></textarea>
        <button
          type="submit"
          onClick={send}
          className="btn btn-primary chat_s_btn"
        >
          Submit
        </button>
        <div className="fileDiv btn btn-info btn-flat" id="upload-btn-chat">
          {" "}
          <i className="fa fa-upload"></i>
          <input type="file" name="file" className="upload_attachmentfile" />
        </div>
      </div>
    </>
  );
};

export default Chat;
