import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Checkout.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Navbar from '../Components/Navbar'


export default function CheckoutAddress() {
    const navigate = useNavigate()

    const handleContinue = () => {
        navigate('/checkout-payment')
    }

    // let orderItems = localStorage.getItem(JSON.parse('orderItems'))
    // let shippingInfo = localStorage.getItem(JSON.parse())
    let shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'))
    let orderItems = JSON.parse(localStorage.getItem('orderItems'))



    console.log(orderItems)
    console.log(shippingInfo)

    return (
        <div>
            <Navbar />
            <hr />
            <Heading mt='60px'>CHECKOUT</Heading>

            <div className='checkout-main-container'>
                <div>
                    <div className='checkout-address-box'>
                        <Heading size='md' mb="20px">SHIPPING ADDRESS</Heading>
                        <p>{shippingInfo.fullname}</p>
                        <p>{shippingInfo.address}</p>
                        <p>{shippingInfo.city},{shippingInfo.state}</p>
                        <p>{shippingInfo.phoneNo}</p>
                        {/* <p>{shippingInfo.email}</p> */}
                    </div>
                    <Link to='/cart' className='checkout-goback-btn'>
                        <AiOutlineArrowLeft size="30px" />
                        <Link >Go Back</Link>
                    </Link>
                </div>
                <div>
                    <Heading as='h5'>ORDER SUMMARY</Heading>
                    <div className='order-summary-fle-div'>
                        <p>Item Total (1 Items)</p>
                        <Heading size="sm" >Rs.{orderItems.price}</Heading>
                    </div>
                    <div className='order-summary-fle-div'>
                        <p style={{ color: "#eba194" }}>Discount</p>
                        <Heading color="#eba194" size="sm" >Rs.{orderItems.discounted_price}</Heading>
                    </div>
                    <div className='order-summary-fle-div'>
                        <p>Shipping</p>
                        <Heading size="sm" color="#eba194" >FREE</Heading>
                    </div>
                    <hr />
                    <div className='order-summary-fle-div'>
                        <p>Grand Total</p>
                        <Heading size="sm"  >Rs.{orderItems.price}</Heading>
                    </div>
                    <div className='order-summary-fle-div'>
                        <p>(Inclusive of Taxes)</p>
                        <Heading size="sm" color="#eba194" >You Saved Rs.{orderItems.discounted_price}</Heading>
                    </div>
                    <button onClick={handleContinue} className='redeem-apply-btn' >Continue</button>


                </div>
            </div>
        </div>
    )
}
