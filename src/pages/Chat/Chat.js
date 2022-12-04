import React, { useEffect, useState } from 'react'
import {user} from "../Join/Join";
import socketIO from "socket.io-client";
import "./Chat.css";
import sendLogo from "../images/send.png";
import closeIcon from "../images/closeIcon.png";
import Message from '../Message/Message';
import ReactScrollToBoottome from "react-scroll-to-bottom";

const ENDPOINT = "http://localhost:5000/";
let socket;
const Chat = () => {

    const [id, setId] = useState("");
    const [messages, setMessages] = useState([])

    const send = ()=>{
      const message = document.getElementById('chatInput').value;
      socket.emit('message',{message,id});
      document.getElementById('chatInput').value = "";
    }
   
    useEffect(() => {
        socket = socketIO(ENDPOINT, {transports:['websocket']});

        socket.on("connect",()=>{
          alert("sss");
          setId(socket.id);
        })
        socket.emit('joined',{user});
        socket.on('welcome',(data)=>{
          setMessages([...messages, data]);
          console.log(data.user,data.message);
        });
        socket.on("userJoined",(data)=>{
          setMessages([...messages, data]);
          console.log(data.user, data.message);
        });
        socket.on('leave', (data)=>{
          setMessages([...messages, data]);
          console.log(data.user, data.message);
        })
        return () => {
          socket.disconnect();
          socket.off();
        }
    }, []);

    useEffect(() => {
      
      socket.on('sendMessage',(data)=>{
        setMessages([...messages, data]);
        console.log(data.user,data.message,data.id);
      })
    
      return () => {
        socket.off();
      }
    }, [messages])
    
    

  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'>
              <h2>C CHAT</h2>
              <a href='/'><img src={closeIcon} alt="close"/></a>
            </div>
            <ReactScrollToBoottome className='chatBox'>
              {messages.map((item, i)=> <Message user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'}/>)}
            </ReactScrollToBoottome>
            <div className='inputBox'>
              <input type="text" name="name" id="chatInput" />
              <button onClick={send} className='sendBtn'><img src={sendLogo} alt="Send" /></button>    
            </div>
        </div>
    </div>
  )
}

export default Chat;