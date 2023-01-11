import React, { useEffect, useRef, useState } from "react";
//import { user } from "./Join";

import socketIO from "socket.io-client";
import Message from "./Message";
import ReactScrollToBoottome from "react-scroll-to-bottom";
import axios from "axios";

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
  const [selectedImage, setSelectedImage] = useState(false);
  const [pdfselected, setPdfselected] = useState(false);
  const [docsSelected, setdocsSelected] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = socketIO(ENDPOINT, { transports: ["websocket"] });

    socket.current.on("receive-user", (data) => {
      console.log("data", data);
    });
    socket.current.on("message2", (newMessage) => {
      console.log("NEW MESSAGE ----------", newMessage);
      setMessages([...messages, newMessage]);
    });
    socket.current.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    socket.current.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });
    return () => {
      socket.current.disconnect();
      socket.current.off();
    };
  });

  const accessChat = async () => {
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

        socket.current.emit("message", response?.data?._id);
        setSelectedChat(response.data);
        setChatId(response?.data?._id);
        // socket.current.emit("chatId", response?.data?._id);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();

    // socket = io(ENDPOINT);
    // socket.current.emit("setup", userData);
    // socket.on("connected", () => setSocketConnected(true));
    // socket.on("typing", () => setIsTyping(true));
    // socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (chatId) socket.current.emit("room", chatId);
  }, [chatId]);

  useEffect(() => {
    console.log(":::::");

    socket.current.on("message2", (newMessage) => {
      console.log("NEW MESSAGE ----------", newMessage);
      setMessages([...messages, newMessage]);
    });

    // socket.current.on("message2", (newMessageRecieved) => {
    //   console.log("NEW MESSAGE", newMessageRecieved);
    //   if (
    //     !selectedChatCompare ||
    //     selectedChatCompare._id !== newMessageRecieved.chat._id
    //   ) {
    //     console.log(newMessageRecieved);
    //   } else {
    //     console.log(newMessageRecieved);
    //     setMessages([...messages, newMessageRecieved]);
    //   }
    // });
  }, []);

  useEffect(() => {
    accessChat();
    socket.current.emit("messgae-recieved", orderId);

    // fetchChats();
    // socket.current.on("emitText", (test) => concole.log(test));
  }, [orderId]);

  useEffect(() => {
    fetchMessages();

    selectedChatCompare = selectedChat;
  }, [chatId, selectedChat]);

  const messageSendHandler = () => {
    const token = localStorage.getItem("token");

    var data = JSON.stringify({
      chatId: chatId,
      content: selectedImage
        ? "https://res.cloudinary.com/practicaldev/image/fetch/s--sQ19Mqmd--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/928773/24ac3701-8eee-48c5-99fb-2efcf5f88bc9.png"
        : pdfselected
        ? "https://www.africau.edu/images/default/sample.pdf"
        : docsSelected
        ? "https://docs.google.com/document/d/14DO6AtLYLtvvwh3gjkJ8Xb6ESs0YDdQpjRvq_XvoZdM/edit#heading=h.x8fm1uorkbaw"
        : messageText,
      type: selectedImage
        ? "image"
        : pdfselected
        ? "pdf"
        : docsSelected
        ? "docx" || "doc" || "docs"
        : "message",
      name: selectedImage
        ? null
        : pdfselected
        ? "resume.pdf"
        : docsSelected
        ? "abc.docs"
        : null,
    });
    console.log("wewdf", data);
    console.log("wewddfgsdf", docsSelected);
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
        console.log("qwertyuiopoiuytr", response.data);
        socket.current.emit("new message", response.data);
        setMessages([...messages, response.data]);
        setSelectedImage(false);
        setPdfselected(false);
        setdocsSelected(false);
        setMessageText("");
        console.log(messages);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  const selectImage = (e) => {
    console.log(e?.target?.files[0].type.includes("pdf"));
    console.log(e?.target?.files[0].type.includes("docs"));

    if (e?.target?.files[0].type.includes("image")) {
      console.log("imageeee", e?.target?.files[0].type.includes("image"));

      setPdfselected(false);
      setSelectedImage(true);
    } else if (e?.target?.files[0].type.includes("pdf")) {
      console.log("====pdfff", e?.target?.files[0].type.includes("pdf"));

      setdocsSelected(false);
      selectImage(false);
      setPdfselected(true);
    } else if (
      e?.target?.files[0].type.includes("docx") ||
      e?.target?.files[0].type.includes("doc")
    ) {
      console.log("-----dpoccc", e?.target?.files[0].type.includes("docx"));

      selectImage(false);
      setPdfselected(false);
      setdocsSelected(true);
      console.log("qwertyuiopoiuytr", docsSelected);
    }
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
                    type={item.type}
                    name={item.name}
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
          <input
            onChange={(e) => selectImage(e)}
            type="file"
            name="file"
            className="upload_attachmentfile"
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
