import React, { useState } from "react";
import "./CommonSidebar.css";
import Logo from "../../images/logo.png";
import { motion } from "framer-motion";
import {Link as RouterLink, Navigate, useNavigate} from "react-router-dom";
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    UilSignOutAlt,
    UilBars,
  } from "@iconscout/react-unicons";
  import {GrAdd} from "react-icons/gr"
import { useToast } from "@chakra-ui/toast";

const CommonSidebar = () => {

  const toast=useToast();
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);
  const nevigate=useNavigate();
  const logout=()=>{
      localStorage.setItem("isAuth", false)
      toast({
        title: "Logout successful",
        status: "success",
        position: "top",
      })
      nevigate('/register')
  }

 const SidebarData = [
    {
      icon: UilEstate ,
      heading: <RouterLink to={"/admindashboard"}>Dashboard</RouterLink>,
    },
    {
      icon: UilClipboardAlt,
      heading: "Orders",
    },
    {
      icon: UilUsersAlt,
      heading: <RouterLink to={"/allusers"}> users</RouterLink>,
    },
    {
      icon: UilPackage,
      heading: <RouterLink to={"/allproducts"}> Products</RouterLink>
    },
    {
      icon: GrAdd,
      heading: <RouterLink to={"/addproduct"}> Add</RouterLink>
    },
    {
        icon: UilChart,
        heading: 'Analytics'
      },
    {
        icon: UilSignOutAlt,
        heading:<RouterLink onClick={logout} to="/register">Signout</RouterLink> 
      }

  ];


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
    <div style={{position:"fixed",zIndex:"100"}}>
      <div className="barse" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        {/* <span>
          Day<span>2</span>Day
        </span> */}
      </div>

      <div className="menus">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItems active" : "menuItems"}
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
      </div>
    </motion.div>
    </div>
  );
};

export default CommonSidebar;
