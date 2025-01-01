import React from "react";
import { PiFlowerLotus } from "react-icons/pi";
import { SiBookmeter } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";
import { RiDownload2Fill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidDashboard } from "react-icons/bi";

const QuickLink = () => {
  return (
    <div className="content">
      <div className="header">
        <div className="icon">
          <PiFlowerLotus />
        </div>
        <div className="text">
          <p>Quick Links</p>
        </div>
      </div>
      <div className="content-body-links">
        <div className="links">
          <div className="icon">
            <SiBookmeter/>
          </div>
          <div className="text">Poll</div>
        </div>
        <div className="links">
          <div className="icon">
            <GiOpenBook/>
          </div>
          <div className="text">Knowledge</div>
        </div>
        <div className="links">
          <div className="icon">
            <RiDownload2Fill/>
          </div>
          <div className="text">Downloads</div>
        </div>
        <div className="links">
          <div className="icon">
            <GiReceiveMoney/>
          </div>
          <div className="text">Contribute</div>
        </div>
        <div className="links">
          <div className="icon">
            <BiSolidDashboard/>
          </div>
          <div className="text">More</div>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
