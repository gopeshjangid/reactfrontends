import React, { useEffect, useState } from "react";
//import { user } from "./Join";

import socketIO from "socket.io-client";
import Message from "./Message";
import ReactScrollToBoottome from "react-scroll-to-bottom";
import axios from "axios";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const Chat = ({ orderId, orderName }) => {
  const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState("");
  const [messageText, setMessageText] = useState("");
  const [selectedChat, setSelectedChat] = useState({});
  const [socketConnected, setSocketConnected] = useState(false);
  const [userData, setUserData] = useState({});

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

  const fetchChats = async () => {
    const token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: "http://localhost:5000/chat",
      headers: {
        authorization: token,
      },
    };

    await axios(config)
      .then(function (response) {
        console.log("***********************", response.data[0]);
        setChatId(response?.data[0]?._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const accessChat = async () => {
    var data = JSON.stringify({
      orderId: orderId,
    });
    const token = localStorage.getItem("token");
    console.log("chat acces function called");

    var config = {
      method: "post",
      url: "http://localhost:5000/chat",
      headers: {
        authorization: token,
      },
      data: { orderId: orderId },
    };

    await axios(config)
      .then(function (response) {
        console.log(
          "**********accessed the chat with admin**********",
          response.data
        );

        setSelectedChat(response.data);
        setChatId(response?.data?._id);
      })
      .catch(function (error) {
        console.log("kjhdkhdkdhkdjdhk", error);
      });
  };

  const fetchMessages = async () => {
    if (!chatId) {
      return;
    }
    const token = localStorage.getItem("token");
    console.log("!!!!!!!!!!!!!", chatId);

    var config = {
      method: "get",
      url: `http://localhost:5000/message/${chatId}`,
      headers: {
        Authorization: token,
      },
    };

    await axios(config)
      .then(function (response) {
        console.log("%%%%%%%%%%%%%%%%%%%%", response.data);
        setMessages(response.data);

        socket.emit("join chat", selectedChat._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getUser = async () => {
    const tokenID = localStorage.getItem("token");
    console.log("hello", tokenID);
    fetch("http://localhost:5000/viewProfile", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => console.log(response))
      .then((json) => {
        setUserData(json);
        setUserName(json.data.username);
        console.log(Users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();

    socket = io(ENDPOINT);
    socket.emit("setup", userData);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(":::::");
    socket.on("emitText", (test) => concole.log(test));

    socket.on("message recieved", (newMessageRecieved) => {
      console.log("NEW MESSAGE", newMessageRecieved);
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        console.log(newMessageRecieved);
      } else {
        console.log(newMessageRecieved);
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  useEffect(() => {
    accessChat();
    // fetchChats();
    socket.on("emitText", (test) => concole.log(test));
  }, [orderId]);

  useEffect(() => {
    fetchMessages();

    selectedChatCompare = selectedChat;
  }, [chatId, selectedChat]);

  const messageSendHandler = () => {
    const token = localStorage.getItem("token");

    var data = JSON.stringify({
      chatId: chatId,
      content: messageText,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/message",
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        socket.emit("new message", response.data);
        setMessages([...messages, response.data]);
        setMessageText("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  return (
    <>
      <div className="card card_box mt-5">
        <p className="chat_idp text-center">
          <b>Order Id:</b> {orderId} | <b>Title:</b> {orderName}
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
                    user={item.sender.username + ": "}
                    message={item.content}
                    classs={
                      item.sender.email === "getproadmin000@gmail.com"
                        ? "left"
                        : "right"
                    }
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
          value={messageText}
          onChange={handleChange}
        ></textarea>
        <button
          onClick={messageSendHandler}
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
