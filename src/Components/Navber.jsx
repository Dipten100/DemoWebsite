import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import reactIcon from "../assets/react.svg";
import { RiUserLine } from "react-icons/ri";
import UserImage from "../assets/images/userIamge.jpg";
import { HiLocationMarker } from "react-icons/hi";
import { FaHandsBound } from "react-icons/fa6";

const Navber = () => {
  return (
    <div className="navbar-section">
      <div className="navbar-top">
        <div className="sidebar">
          <div className="icon">
            <CgMenuLeftAlt />
          </div>
        </div>
        <div className="navbar-body">
          <div className="logo">
            <img src={reactIcon} alt="" />
          </div>
          <div className="text">
            <p>Demo website</p>
          </div>
        </div>
        <div className="navbar-footer">
          <div className="userIcon">
            <RiUserLine />
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="nav-card">
          <div className="nav-card-body">
            <div className="userImage">
              <img src={UserImage} alt="" />
            </div>
            <div className="userDetails">
              {/* name */}
              <div className="name">
                <p>John Doe</p>
              </div>
              {/* address */}
              <div className="address">
                <p className="icon">
                  <HiLocationMarker />
                </p>
                <p>Mumbai</p>
              </div>
              {/* post */}
              <div className="post">
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="userPoint">
              <p className="icon">
                <FaHandsBound />
              </p>
              <p className="text">4000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
