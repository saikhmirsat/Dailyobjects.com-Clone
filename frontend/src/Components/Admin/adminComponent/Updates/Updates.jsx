import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../adminData/adminData";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update,index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem',lineHeight:"-10px"}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
