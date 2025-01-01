import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import reacticon from "../assets/react.svg";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="contents">
        <div className="content">
          <div className="icon">
            <GoHomeFill />
          </div>
          <div className="text">Home</div>
        </div>
        <div className="content">
          <div className="icon">
            <BsFillFileBarGraphFill />
          </div>
          <div className="text">Leaderboad</div>
        </div>
        <div className="content">
          <div className="icon"></div>
          <div className="text">My Area</div>
        </div>
        <div className="content">
          <div className="icon">
            <IoChatbubbleEllipses />
          </div>
          <div className="text">Chats</div>
        </div>
        <div className="content">
          <div className="icon">
            <IoCallSharp />
          </div>
          <div className="text">Contacts</div>
        </div>
        <div className="logo">
          <img src={reacticon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
