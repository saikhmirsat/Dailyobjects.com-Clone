
import React from "react"
import { background, Box, Image, Text } from "@chakra-ui/react"
import { EmailIcon, SearchIcon, LockIcon } from "@chakra-ui/icons";
import NewArrival from "./SubNavbar/NewArrival";
import Cases from "./SubNavbar/CasesSleeve";
import Acces from "./SubNavbar/Accessories";
import Sale from "./SubNavbar/Sale.jsx";
import Bag from "./SubNavbar/Bag";
import Home from "./SubNavbar/Home";
import Collection from "./SubNavbar/Collection";
import Gift from "./SubNavbar/Gifting";
import logo from '../Images/logo.png'
import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { BsHandbag, BsPerson } from 'react-icons/bs'
import { TfiSearch } from 'react-icons/tfi';
import { FaShoppingBag } from 'react-icons/fa';
import "./Navbar.css"
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";







const Navbar = () => {


  return (
    <div className="navbar">
      <div className="normal-navbar">
        <Box display="flex" justifyContent='space-between' alignItems='center' height="50px">
          <Box>
            <Image width='80px' src={logo}></Image>
          </Box>
          <Box display="flex" justifyContent="space-between" >
            <NewArrival />
            <Cases />
            <Acces />
            <Sale />
            <Bag />
            <Home />
            <Collection />
            <Gift />
          </Box>

          <Box display="flex" alignItems='center' gap="30px" >
            <Link to='/cart' ><BsHandbag size='20' /></Link>
            <Link to='/register'><BsPerson size='23' /></Link>
            <Link to='/search'><TfiSearch size='20' /></Link>
          </Box>
        </Box>
      </div>
      <Hamburger />
    </div>
  )
}

export default Navbar