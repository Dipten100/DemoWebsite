import React from "react";
import { PiFlowerLotus } from "react-icons/pi";
import UserIamge from "../assets/images/userIamge.jpg";
import { AiOutlineLike } from "react-icons/ai";

const Community = () => {
  return (
    <div className="content">
      <div className="header">
        <div className="icon">
          <PiFlowerLotus />
        </div>
        <div className="text">
          <p>Mahasabha Community</p>
        </div>
      </div>
      <div className="content-body-community">
        <div className="list">
          <div className="top">
            <div className="img">
              <img src={UserIamge} alt="user" />
            </div>
            <div className="text">
              <span>Lorem ipsum dolor</span> sit amet consectetur adipisicing
              elit. <span>Consequuntur</span> quisquam excepturi, suscipit
              inventore <span>sapiente velit aperiam</span> quia beatae enim
              dicta!
            </div>
          </div>
          <div className="bottom">
            <div className="timing">5 minutes ago</div>
            <div className="likes">
              <span className="icon">
                <AiOutlineLike />
              </span>
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="top">
            <div className="img">
              <img src={UserIamge} alt="user" />
            </div>
            <div className="text">
              <span>Lorem ipsum dolor</span> sit amet consectetur adipisicing
              elit. <span>Consequuntur</span> quisquam excepturi, suscipit
              inventore <span>sapiente velit aperiam</span> quia beatae enim
              dicta!
            </div>
          </div>
          <div className="bottom">
            <div className="timing">5 minutes ago</div>
            <div className="likes">
              <span className="icon">
                <AiOutlineLike />
              </span>
              <span>165</span>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="top">
            <div className="img">
              <img src={UserIamge} alt="user" />
            </div>
            <div className="text">
              <span>Lorem ipsum dolor</span> sit amet consectetur adipisicing
              elit. <span>Consequuntur</span> quisquam excepturi, suscipit
              inventore <span>sapiente velit aperiam</span> quia beatae enim
              dicta!
            </div>
          </div>
          <div className="bottom">
            <div className="timing">5 minutes ago</div>
            <div className="likes">
              <span className="icon">
                <AiOutlineLike />
              </span>
              <span>22</span>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="top">
            <div className="img">
              <img src={UserIamge} alt="user" />
            </div>
            <div className="text">
              <span>Lorem ipsum dolor</span> sit amet consectetur adipisicing
              elit. <span>Consequuntur</span> quisquam excepturi, suscipit
              inventore <span>sapiente velit aperiam</span> quia beatae enim
              dicta!
            </div>
          </div>
          <div className="bottom">
            <div className="timing">5 minutes ago</div>
            <div className="likes">
              <span className="icon">
                <AiOutlineLike />
              </span>
              <span>111</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
