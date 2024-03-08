import React, { useState, useEffect, useRef } from 'react';
import ChatHeader from './ChatHeader';
import './ChatScreen.css';
import responses from './Responses';
import { IoMdSend } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FcLock } from "react-icons/fc";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  // Audio notification
  const notificationSound = new Audio('./assets/notification.mp3');
  const msgnotificationSound = new Audio('./assets/send-message-notification.mp3');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Set intial message.
  const initialMessage = {
    sender: 'receiver',
    flag: true,
    message: (
      <div className="inital-msg">
        Hi <span className="wave"> 👋 </span>, <br/>
        I am, <i> Omkar Yewale </i>😎<br/><br/>
        A passionate <a className="link" href='https://www.drupal.org/u/omkar_yewale' target='blank'> Drupal enthusiast </a> 👩🏻‍💻 with over five years of Drupal development expertise.<br /> I've worked on several Drupal projects📁, developed custom modules and themes📝, and had experience with multi-site and multi-lingual applications.😊<br/><br/>
        To continue, simply tap the button below.! 👇 <br/>
      </div>
    ),
    time: new Date().toLocaleTimeString(),
  };

  useEffect(() => {
    // Trigger initial message from receiver end
    setIsTyping(true);
    // Add a delay to the receiver response
    setTimeout(() => {
      setMessages([initialMessage]);
      notificationSound.play();
      // Set typing indicator to false after the message is received
      setTimeout(() => {
        setIsTyping(false);
      }, 500);
    }, 1500); // 1.5 second delay
  }, []);

  // Send message.
  const sendMessage = () => {
    // Check if the input is empty
    if (!input.trim()) {
      return;
    }
    // Send user message
    const newSenderMessage = {
      sender: 'sender',
      flag: false,
      message: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages(prevMessages => [...prevMessages, newSenderMessage]);
    msgnotificationSound.play();
    setInput('');
    
    // Process user message and send appropriate response from receiver end
    processMessage(input);
  };

  // Process reply message
  const processMessage = (message) => {
    const trimmedMessage = message.trim(); // Trim the input
    const response = responses[trimmedMessage.toLowerCase()];
    const newReceiverMessage = {
      sender: 'receiver',
      flag: false,
      message: response ? response : "Oops!😵,That command doesn't ring a bell. Let's navigate to something more familiar. Type 'Contact' to find out how to reach me!",
      time: new Date().toLocaleTimeString(),
    };
    setIsTyping(true);
    // Add a delay to the receiver response
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, newReceiverMessage]);
      notificationSound.play();
      // Set typing indicator to false after the message is received
      setTimeout(() => {
        setIsTyping(false);
      }, 500);
    }, 1500); // 1.5 second delay
  };

  const handleDeleteHistory = () => {
    // Reset messages array to empty to delete chat history
    setTimeout(() => {
      setMessages([]);
      setIsTyping(true);
      // Set typing indicator to false after the message is received
      setTimeout(() => {
        setMessages([initialMessage]);
        notificationSound.play();
        setIsTyping(false);
      }, 1000);
    }, 500);
  };
  
  const handleContinueButtonClick = () => {
    const continueButton = document.querySelector('.chatScreen__message button.continueButton');
    if (continueButton) {
      continueButton.disabled = true;
      continueButton.classList.add('disabled');
    }
    // Set the input field value to "Continue"
    setInput('Continue');
    setTimeout(() => {
      // Tigger the send button
      document.querySelector('.chatScreen__input button').click();
    }, 300);
    
  };

  return (
    <div className="chatScreen" style={{ backgroundImage: `url('./images/chat-screen.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <ChatHeader lastSeen={isTyping ? 'typing...' : 'Online'} />
      <div className="chatScreen__messages">
        <div className='encryption-container'>
          <div className='encryption-text'>
            <span> <FcLock className='encryption-icon'/> Messages are end-to-end encrypted. No one outside of this chat, 
              can read or listen to them.</span>
          </div>
        </div>
        {messages.map((message, index) => (
          <div key={index} className={`chatScreen__message tri-right round btm-left ${message.sender}`}>
            <div className="talktext">
              <p>{message.message}</p>
              {message.flag && message.sender === 'receiver' && (
                <button className="continueButton" onClick={handleContinueButtonClick}> Continue </button>
              )}
            <br />
              <span>{message.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="chatScreen__input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." maxlength={100} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}/>
        <button onClick={sendMessage}><IoMdSend className='icons'/></button>
        <button onClick={handleDeleteHistory}><MdOutlineDeleteOutline className='icons'/></button>
      </div>
    </div>

  );
};

export default ChatScreen;
