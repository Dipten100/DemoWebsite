import React from "react";
import { PiFlowerLotus } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const Events = () => {
  return (
    <div className="content">
      <div className="header">
        <div className="icon">
          <PiFlowerLotus />
        </div>
        <div className="text">
          <p>Events</p>
        </div>
      </div>
      <div className="navList">
        <ul>
          <li className="active">All</li>
          <li>Terapanth</li>
          <li>Mahasabha</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="content-body-events">
        <div className="list">
          <div className="top">
            <img src={`../src/assets/images/meeting.jpg`} alt="meeting" />
          </div>
          <div className="middle">
            <p>Terapanth sthapona dibos</p>
          </div>
          <div className="bottom">
            <div className="icon">
              <SlCalender />
            </div>
            <div className="text">17 July 2024</div>
          </div>
        </div>
      </div>
      <div className="content-footer-events">
        <div className="dotted">
          <span className="active">.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
        <div className="show">Show more</div>
      </div>
    </div>
  );
};

export default Events;
