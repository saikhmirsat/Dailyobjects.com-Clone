import React from 'react'
import {
    Drawer,
    DrawerBody,
    // DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    // Input
} from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import logo from '../Images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import "../Components/Navbar.css"


export default function Hamburger() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const btnRef = React.useRef()

    const navigate = useNavigate()

    const cartHandle = () => {
        navigate('/cart')
    }

    const profileHandle = () => {
        navigate('/register')
    }
    const handleSearch = () => {
        navigate('/search')
    }
    const homeHandle = () => {
        navigate('/')
    }



    return (
        <div className='Hamburger-box'>
            
        </div>
    )
}
