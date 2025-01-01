import React from "react";
import { PiFlowerLotus } from "react-icons/pi";
import UserIamge from "../assets/images/userIamge.jpg";

const Leaderboard = () => {
  return (
    <div className="content">
      <div className="header">
        <div className="icon">
          <PiFlowerLotus />
        </div>
        <div className="text">
          <p>Leaderboard</p>
        </div>
      </div>
      <div className="navList">
        <ul>
          <li className="active">Prabhari</li>
          <li>My Score</li>
          <li>Task wise</li>
          <li>Anchal</li>
          <li>Zone</li>
          <li>My Zone</li>
        </ul>
      </div>
      <div className="content-body-leaderboard">
        <div className="list topper">
          <div className="rank">
            <img src={`../src/assets/images/medal.png`} alt="" />
          </div>
          <div className="img">
            <img src={UserIamge} alt="user" />
          </div>
          <div className="details">
            <div className="name">Binod bead</div>
            <div className="state">Kolkata</div>
          </div>
          <div className="score">100</div>
        </div>
        <div className="list topper">
          <div className="rank">
            <img src={`../src/assets/images/winner.png`} alt="" />
          </div>
          <div className="img">
            <img src={UserIamge} alt="user" />
          </div>
          <div className="details">
            <div className="name">Binod bead</div>
            <div className="state">Kolkata</div>
          </div>
          <div className="score">100</div>
        </div>
        <div className="list topper">
          <div className="rank">
            <img src={`../src/assets/images/medal (1).png`} alt="" />
          </div>
          <div className="img">
            <img src={UserIamge} alt="user" />
          </div>
          <div className="details">
            <div className="name">Binod bead</div>
            <div className="state">Kolkata</div>
          </div>
          <div className="score">100</div>
        </div>
        <div className="list">
          <div className="rank">
            4
          </div>
          <div className="img">
            <img src={UserIamge} alt="user" />
          </div>
          <div className="details">
            <div className="name">Binod bead</div>
            <div className="state">Kolkata</div>
          </div>
          <div className="score">100</div>
        </div>
        <div className="list">
          <div className="rank">
            5
          </div>
          <div className="img">
            <img src={UserIamge} alt="user" />
          </div>
          <div className="details">
            <div className="name">Binod bead</div>
            <div className="state">Kolkata</div>
          </div>
          <div className="score">100</div>
        </div>
      </div>
      <div className="content-footer-todo">
        <p>Show more</p>
      </div>
    </div>
  );
};

export default Leaderboard;
