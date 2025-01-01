import React from "react";
import { PiFlowerLotus } from "react-icons/pi";

const News = () => {
  return (
    <div className="content">
      <div className="header">
        <div className="icon">
          <PiFlowerLotus />
        </div>
        <div className="text">
          <p>News</p>
        </div>
      </div>
      <div className="content-body-news">
        <div className="list">
          <div className="img">
            <img src={`../src/assets/images/meeting.jpg`} alt="meeting" />
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis inventore dicta veritatis accusantium rerum
            consequuntur illum sunt ex nemo animi.
          </div>
        </div>
        <div className="list">
          <div className="img">
            <img src={`../src/assets/images/meeting.jpg`} alt="meeting" />
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis inventore dicta veritatis accusantium rerum
            consequuntur illum sunt ex nemo animi.
          </div>
        </div>
      </div>
      <div className="content-footer-todo">
        <p>Show more</p>
      </div>
    </div>
  );
};

export default News;
