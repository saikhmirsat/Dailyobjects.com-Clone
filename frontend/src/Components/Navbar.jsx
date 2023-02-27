
import React from "react"
import { background, Box, Heading, Image, Text } from "@chakra-ui/react"
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
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";







const Navbar = () => {

  const [cart, setCart] = useState("")


  const navigate = useNavigate()
  const checkIsAuth = JSON.parse(localStorage.getItem("isAuth"))
  const checkAdmin = JSON.parse(localStorage.getItem("role"))


  const gotoHome = () => {
    navigate('/')
  }

  const getData = async () => {
    await fetch(`https://awful-pear-bedclothes.cyclic.app/api/cart/me`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then((res) => res.json())
      .then((res) => setCart(res.cart.length))
      .catch((err) => console.log(err))

  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="navbar">
      <div className="normal-navbar">
        <Box display="flex" justifyContent='space-between' alignItems='center' height="50px">
          <Box onClick={gotoHome}>
            <Image width='80px' src={logo}></Image>
          </Box>
          <Box display="flex" justifyContent="space-between" >
            <Link to='/newarrivals'><NewArrival /></Link>
            <Cases />
            <Acces />
            <Sale />
            <Bag />
            <Home />
            <Collection />
            <Gift />
          </Box>

          <Box display="flex" alignItems='center' gap="30px" >
            <Link className="nav-car-div" to='/cart' ><BsHandbag size='20' />{cart > 0 ? <Heading as='p' size="sm">{cart}</Heading> : ""}</Link>
            <Link to={checkIsAuth ? checkAdmin == "admin" ? '/admindashboard' : '/userprofile' : '/register'}><BsPerson size='23' /></Link>
            <Link to='/search'><TfiSearch size='20' /></Link>
          </Box>
        </Box>
      </div>
      <Hamburger />
    </div >
  )
}

export default Navbar