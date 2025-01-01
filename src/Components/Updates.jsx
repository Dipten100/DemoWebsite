import React from "react";
import { PiFlowerLotus } from "react-icons/pi";

const Updates = () => {
  return (
    <div className="content">
      <div className="header">
        <div className="icon"><PiFlowerLotus/></div>
        <div className="text">
          <p>Updates</p>
        </div>
      </div>
      <div className="content-body-updates">
        <div className="updates">
          <div className="heading">Komrmosomiti boythok</div>
          <div className="body">
            17 april 2024 ratri 8 baje sa zoom link karjosomiti group post kar
            dia gaya ha.
          </div>
        </div>
      </div>
      <div className="content-footer-updates">
        <span className="active">.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default Updates;
