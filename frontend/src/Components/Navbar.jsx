
import React from "react"
import { background, Box,Image ,Text} from "@chakra-ui/react"
import { EmailIcon,SearchIcon,LockIcon } from "@chakra-ui/icons";
import NewArrival from "./SubNavbar/NewArrival";
import Cases from "./SubNavbar/CasesSleeve";
import Acces from "./SubNavbar/Accessories";
import Sale from "./SubNavbar/Sale.jsx";
import Bag from "./SubNavbar/Bag";
import Home from "./SubNavbar/Home";
import Collection from "./SubNavbar/Collection";
import Gift from "./SubNavbar/Gifting";

import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import "./Navbar.css"
import { Link } from "react-router-dom";







const Navbar = () => {


  return (
    <Box display="flex" height="100px" mt="30px" ml="40px">
      <Box width="300px" height="70px"  mt="10px">
        <Image src="https://images.dailyobjects.com/marche/icons/logo_named.png?tr=cm-pad_resize,v-2,w-135,h-27,dpr-1"></Image>
      </Box>
      <Box display={"flex"} justifyContent="space-between" width="750px" height="70px" ml="50px">
		<NewArrival />
        <Cases />
		<Acces />
		<Sale />
        <Bag />
		<Home />
    <Collection />
    <Gift />


      </Box>

      <Box  width="200px" display="flex" gap={"20px"} ml="250px">
        <Box ><EmailIcon /></Box>
        <Box><LockIcon /></Box>
        <Box><SearchIcon /></Box>




      </Box>
    </Box>
   ) }

export default Navbar