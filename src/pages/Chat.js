import React, { useEffect, useRef, useState } from "react";
//import { user } from "./Join";

import socketIO from "socket.io-client";
import Message from "./Message";
import ReactScrollToBoottome from "react-scroll-to-bottom";
import axios from "axios";

const ENDPOINT = `${process.env.REACT_APP_APIURL}`;
var socket, selectedChatCompare;

const Chat = ({ orderId, orderName }) => {
  console.log("orderid", orderId);
  // const [id, setId] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState("");
  const [messageText, setMessageText] = useState("");
  const [selectedChat, setSelectedChat] = useState({});
  // const [socketConnected, setSocketConnected] = useState(false);
  const [userData, setUserData] = useState({});
  // const [file, setFile] = useState({});
  const [selectedImage, setSelectedImage] = useState(false);
  const [pdfselected, setPdfselected] = useState(false);
  const [docsSelected, setDocsSelected] = useState(false);

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
      url: `${process.env.REACT_APP_APIURL}/chat`,
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
        // console.log(response?.)
        socket.current.emit("chatId", response?.data?._id);
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
      url: `${process.env.REACT_APP_APIURL}/message/${chatId}`,
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
    fetch(`${process.env.REACT_APP_APIURL}/viewProfile`, {
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
        console.log(userData);
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
  }, [messages]);

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

    // if (!file) {
    //   return;
    // }

    // console.log("qwertyujhedefghjiuytrdsdfghutrd", file);

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
        ? "docx"
        : "message",
      name: selectedImage
        ? null
        : pdfselected
        ? pdfselected
        : docsSelected
        ? docsSelected
        : null,
    });
    console.log(pdfselected);

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_APIURL}/message`,
      headers: {
        authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log("name", data);
    console.log("pdf", pdfselected);

    console.log("doc", docsSelected);

    axios(config)
      .then(function (response) {
        console.log(response.data);
        socket.current.emit("new message", response.data);
        setMessages([...messages, response.data]);
        setSelectedImage(false);
        setPdfselected(false);
        setMessageText("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  const selectImage = (e) => {
    // if (e.target.files) {
    //   setFile(e.target.files[0]);
    // }
    // console.log("12345678i90", file);
    console.log(e.target?.files[0]);

    if (e?.target?.files[0].type.includes("image")) {
      console.log(e?.target?.files[0].type.includes("image"));
      setPdfselected(false);
      setSelectedImage(true);
    } else if (e?.target?.files[0].type.includes("pdf")) {
      console.log(e?.target?.files[0].type.includes("pdf"));

      selectImage(false);
      setPdfselected(e.target.files[0].name);
    } else if (
      e?.target?.files[0].type.includes("doc") ||
      e?.target?.files[0].type.includes("docx") ||
      e?.target?.files[0].type.includes("msword") ||
      e?.target?.files[0].type.includes("txt")
    ) {
      console.log(e?.target?.files[0].type.includes("msword"));

      selectImage(false);
      setPdfselected(false);
      setDocsSelected(e.target.files[0].name);
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
                    key={i}
                    id={item._id}
                    datetime={item.datetime}
                    user={item.sender.username + ": "}
                    message={item.content}
                    orderId={item.chat.orderId}
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
        <div className="d-flex">
          <button
            onClick={messageSendHandler}
            className=" border-0 text-white chat_s_btn"
          >
            SEND
          </button>
          <div className="fileDiv border-0 ms-2" id="upload-btn-chat">
            <input
              onChange={(e) => selectImage(e)}
              type="file"
              style={{ cursor: "pointer" }}
              name="file"
              className="choose-file"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
