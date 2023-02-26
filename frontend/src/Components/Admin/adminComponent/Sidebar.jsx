import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../images/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../adminData/adminData";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {Link as RouterLink} from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Day<span>2</span>Day
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <div>
              <span>{item.heading}</span>
              </div>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <RouterLink to={"/register"}><UilSignOutAlt /></RouterLink>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
