import React from "react";
import { TiPin } from "react-icons/ti";
import { RiUnpinFill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import { AiFillMessage } from "react-icons/ai";
import { PiFlowerLotus } from "react-icons/pi";

const Task = () => {
  return (
    <div className="content">
      <div className="header">
        <div className="icon"><PiFlowerLotus/></div>
        <div className="text">
          <p>Tasks</p>
        </div>
      </div>
      <div className="navList">
        <ul>
            <li>All</li>
            <li className="active">To do</li>
            <li>In Progress</li>
            <li>Due</li>
            <li>Completed</li>
            <li>Summary</li>
        </ul>
      </div>
      <div className="content-body-todo">
        <div className="list pin">
            {/* <span></span> */}
            <span><TiPin/></span>
            <div className="top">
                <p className="main">
                Mahabir joynti aojon
                </p>
                <p className="type">
                    Important
                </p>
            </div>
            <div className="bottom">
                <div className="todo">To Do</div>
                <div className="day">25 Days left</div>
                <div className="activity">
                    <div className="acti"><RiUnpinFill/></div>
                    <div className="acti"><MdNotificationsActive/></div>
                    <div className="acti"><PiNotebookFill/></div>
                    <div className="acti"><AiFillMessage/></div>
                </div>
            </div>
        </div>
        <div className="list active">
            <span></span>
            {/* <span>i</span> */}
            <div className="top">
                <p className="main">
                Mahabir joynti aojon
                </p>
                <p className="type">
                    Important
                </p>
            </div>
            <div className="bottom">
                <div className="todo">To Do</div>
                <div className="day">25 Days left</div>
                <div className="activity">
                    <div className="acti"><TiPin/></div>
                    <div className="acti"><MdNotificationsActive/></div>
                    <div className="acti"><PiNotebookFill/></div>
                    <div className="acti"><AiFillMessage/></div>
                </div>
            </div>
        </div>
        <div className="list">
            {/* <span></span> */}
            {/* <span>i</span> */}
            <div className="top">
                <p className="main">
                Mahabir joynti aojon
                </p>
                <p className="type">
                    Important
                </p>
            </div>
            <div className="bottom">
                <div className="todo">To Do</div>
                <div className="day">25 Days left</div>
                <div className="activity">
                    <div className="acti"><TiPin/></div>
                    <div className="acti"><MdNotificationsActive/></div>
                    <div className="acti"><PiNotebookFill/></div>
                    <div className="acti"><AiFillMessage/></div>
                </div>
            </div>
        </div>
        <div className="list">
            {/* <span></span> */}
            {/* <span>i</span> */}
            <div className="top">
                <p className="main">
                Mahabir joynti aojon
                </p>
                <p className="type">
                    Important
                </p>
            </div>
            <div className="bottom">
                <div className="todo">To Do</div>
                <div className="day">25 Days left</div>
                <div className="activity">
                    <div className="acti"><TiPin/></div>
                    <div className="acti"><MdNotificationsActive/></div>
                    <div className="acti"><PiNotebookFill/></div>
                    <div className="acti"><AiFillMessage/></div>
                </div>
            </div>
        </div>
        <div className="list">
            {/* <span></span> */}
            {/* <span>i</span> */}
            <div className="top">
                <p className="main">
                Mahabir joynti aojon
                </p>
                <p className="type">
                    Important
                </p>
            </div>
            <div className="bottom">
                <div className="todo">To Do</div>
                <div className="day">25 Days left</div>
                <div className="activity">
                    <div className="acti"><TiPin/></div>
                    <div className="acti"><MdNotificationsActive/></div>
                    <div className="acti"><PiNotebookFill/></div>
                    <div className="acti"><AiFillMessage/></div>
                </div>
            </div>
        </div>
      </div>
      <div className="content-footer-todo">
        <p>Show more</p>
      </div>
    </div>
  );
};

export default Task;
