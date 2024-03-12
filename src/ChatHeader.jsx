import React from 'react';
import './ChatHeader.css';
import { FaDownload } from "react-icons/fa";
const ChatHeader = ({ lastSeen }) => {

  return (
    <div className="chatHeader">
      <div className="userDetails">
        <img src="./images/profile.jpeg" alt="User" className="userImage" />
        <div className="userInfo">
          <p className="userName">Omkar Yewale</p>
          <p className="lastSeen">{lastSeen}</p>
        </div>
      </div>
      <a href="./files/OmkarYewaleDrupalDeveloper.pdf" download="OmkarYewaleDrupalDeveloper.pdf"><FaDownload className="cv-download"/></a>
    </div>
  );
};

export default ChatHeader;
