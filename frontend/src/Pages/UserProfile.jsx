import React, { useState } from 'react'
import { FaHeadset } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { RiBookmark3Line } from 'react-icons/ri';
import { GiThermometerScale } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom'
import '../Styles/UserProfile.css'
import { Button, Heading, Spinner } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';

export default function UserProfile() {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const logoutFunc = () => {
        setLoading(true)
        localStorage.setItem("isAuth", false)
        alert("Logout Success")
        navigate('/login')
        setLoading(false)
    }

    const user = JSON.parse(localStorage.getItem("user"))

    const HandleChange = () => {
        navigate('/orderpage')
    }

    return (
        <div className='profile-main-con'>
            <Navbar />
            <div className='Profile-1st-con'>
                <div>
                    <Heading mb='10px'>D2D</Heading>
                    <Button height='30px' mb='10px' onClick={logoutFunc}>{loading ? <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='md'
                    /> : 'Logout'}</Button>
                    <p>This area of D2D is designed exclusively for you</p>
                </div>
            </div>
            <div className='Profile-2nd-con'>
                <div>
                    <div>
                        <Heading size='40px' color='#20A87E'>HELLO {user.firstName.toUpperCase()}</Heading>
                        <p>{user.email}</p>
                        <p>You've been with us since January 2023</p>
                        <Button mt='10px' onClick={HandleChange}>Your Orders</Button>
                    </div>
                </div>
                <div>
                    <div >
                        <FaHeadset size="35px" />
                        <h4>Can we help you?</h4>
                        <p>Please consult the Customer Care area for quick and easy help</p>
                        <p style={{ fontSize: '14px', fontWeight: 'bold', textDecoration: 'underline', color: '#20A87E' }}>GO TO CUSTOMER CARE</p>
                    </div>
                </div>
            </div>
            <div className='Profile-3rd-con'>
                <div>
                    <a href="">
                        <BiShoppingBag size="50px" color='black' />
                        <h3>MY ORDER</h3>
                        <p>Track your orders and exchange or return items that weren’t right for you.</p>
                    </a>
                    <div className='Profile-3rd-container-child-2'>
                        <p>At the moment there aren’t any orders. Get inspired by our selections!</p>
                        <button>START SHOPING</button>
                    </div>
                </div>
                <div>
                    <a href="">
                        <HiOutlineHeart size="50px" color='black' />
                        <h3>DREAM BOX</h3>
                        <p>Keep an eye on the items that you love the most, and don't miss out on your last chance to buy them</p>
                    </a>
                    <div className='Profile-3rd-container-child-2'>
                        <p>Your Dream Box is empty. Let's change that right away by clicking on the heart icon to save your favorite items!</p>
                        <button>START DREAMING</button>
                    </div>
                </div>
            </div>
            <div className='Profile-4th-con'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div >
                        <BsPerson size="60px" />
                        <h3>MY DETAILS</h3>
                        <p>Edit your registration, shipping and payment details</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div >
                        <RiBookmark3Line size="60px" />
                        <h3>PREMIÈRE</h3>
                        <p>See your saved searches and discover what's new for you</p>
                    </div>
                </div>
                <div>
                    <img src="https://images.dailyobjects.com/marche/product-images/1201/all-red-pedal-daypack-images/All-Red-Pedal-Daypack-vw.png?tr=cm-pad_resize,v-2,w-720,h-707,dpr-2,q-60" alt="" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div >
                        <GiThermometerScale size="60px" />
                        <h3>MY SIZES</h3>
                        <p>Save your size and your friends’ sizes to find the perfect items</p>
                    </div>
                </div>
                <div>
                    <img src="https://images.dailyobjects.com/marche/feature-banner/feature-banner-marshal-tech-case-1.jpg?tr=cm-pad_crop,v-2,w-720,h-576,dpr-2,q-60" alt="" />
                </div>
                <div>
                    <img src="https://images.dailyobjects.com/marche/feature-banner/all-pedal-daypack-6t.jpg?tr=cm-pad_crop,v-2,w-720,h-576,dpr-2,q-60" alt="" />
                </div>
            </div>
        </div>
    )
}
