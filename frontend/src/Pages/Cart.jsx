import React from 'react'
import '../Styles/Cart.css'
import redeem from '../Images/redeem.png'
import coupan from '../Images/coupan.png'
import { Heading, Spinner } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function Cart() {

    const [loading, setLoading] = useState("")

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState([])

    const [fullname, setFullname] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [area, setArea] = useState("")
    const [landmark, setLandmark] = useState("")



    const navigate = useNavigate()

    console.log(data)

    const getData = async () => {
        await fetch(`https://awful-pear-bedclothes.cyclic.app/api/cart/me`, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((res) => res.json())
            .then((res) => setData(res.cart))
            .catch((err) => console.log(err))

    }

    let sum = 0;
    data && data.forEach((item) =>{
        return sum += item.price*item.quantity;
    })

    let dis_sum = 0;
    data && data.forEach((item) =>{
        return dis_sum += item.discounted_price-item.price;
    })
console.log(sum)
    useEffect(() => {
        getData()
    }, [])

    const deleteFunc = async (id) => {
        try {
            await fetch(`https://awful-pear-bedclothes.cyclic.app/api/cart/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                }
            }).then((res) => res.json())
                .then((res) => console.log(res))
                .then(res => getData())
        } catch (err) {
            console.log(err)
        }
    }

    const AddressSubmit = () => {
        // const payload = {
        //     fullname,
        //     phoneNo,
        //     pinCode,
        //     city,
        //     state,
        //     country,
        //     address,
        //     area,
        //     landmark
        // }
        // console.log(payload)

        // try {
        //     console.log(payload)
        //     fetch(`https://awful-pear-bedclothes.cyclic.app/api/orders/me`, {
        //         method: "POST",
        //         body: JSON.stringify(payload),
        //         headers: {
        //             "Content-type": "application/json"
        //         }
        //     }).then(res => res.json())
        //         .then((res) => {
        //             alert("Address added Successful")
        //             console.log(res)
        //         })
        //         .catch((err) => console.log(err))
        // } catch (err) {
        //     console.log(err)
        //     alert("Something Wrong")
        // }
        navigate('/checkout-address')
    }

    return (
        <div className='cart-main-container'>
            <Navbar />
            <img src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-2,q-60" alt="" />
            <div className='cart-shopping-bag'>
                <h1>SHOPPING BAG</h1>
            </div>
            <div className='cart-prod-main-div'>
                <div className='cart-prod-child1'>
                    {
                        loading ? <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        /> :
                            data.length > 0 ? data && data.map((ele) => <div key={ele._id} className='cart-child1-card-div'>
                                <div>
                                    <img src={ele.image_url} alt="" />
                                </div>
                                <div>
                                    <p>{ele.title}</p>
                                    <div style={{ display: "flex", gap: "20px" }}>

                                        <h4>Rs.{ele.price}</h4> <p style={{ color: "gray", textDecoration: "line-through" }}>{ele.discount}</p>
                                    </div>
                                    <div className='cart-quntity-btn-box'>
                                        <div className='cart-plus-minus'>
                                            <div>
                                                <button>-</button>
                                            </div>
                                            <div>
                                                <p>{ele.quantity}</p>
                                            </div>
                                            <div>
                                                <button>+</button>
                                            </div>
                                        </div>
                                        <div></div>
                                        <button className='cart-delete-btn' onClick={() => deleteFunc(ele._id)}>
                                            <img src="https://images.dailyobjects.com/marche/icons/bin.png?tr=cm-pad_resize,v-2,w-20,dpr-2,q-60" alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>)
                                :
                                <Heading>Donts have any products</Heading>
                    }
                </div>
                <div className='cart-prod-child2'>
                    <div>
                        <hr />
                        <details>
                            <summary>
                                <img className='coupan-image' src={coupan} alt="" />
                                <img className='coupan-arrow' src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" />
                            </summary>
                            <div className='coupan-apply-box'>
                                <input type="text" placeholder='Type coupan code here...' />
                                <h2>APPLY</h2>
                            </div>
                            <div className='offert-on-your-cart'>
                                <h3>ADDITIONAL OFFERS ON YOUR CART</h3>
                                <p>◦ Buy Any 3 Apple Watchbands @ Rs.2499 Only</p>
                                <p>◦ Buy Any 3 Universal Watchbands @ Rs.999 Only</p>
                                <p>◦ Buy 1 Get 1 Free On Cases & Sale Category</p>
                                <p>◦ Free Camper Keychain Clip Set of 2 On Orders Above Rs. 1999</p>
                                <p>◦ Free Duffle Bag On Orders Above Rs. 2999</p>
                                <p>◦ Get Assured Cashback Up to Rs. 250 On Orders Above INR 1499 Via MobiKwik</p>
                            </div>
                        </details>
                        <hr />
                        <details>
                            <summary>
                                <img className='coupan-image' src={redeem} alt="" />
                                <img className='coupan-arrow' src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" />
                            </summary>
                            <h1 className='e-gift-heading'>E-GIFT CARD CREDENTIALS</h1>
                            <div className='redeem-input-box'>
                                <input type="text" placeholder='E-Gift Card Number..' />
                                <input type="text" placeholder='Pin' />
                            </div>
                            <button className='redeem-apply-btn'>APPLY</button>
                        </details>
                        <hr />
                    </div>
                    <div className='order-summary-box'>
                        <Heading as='h5'>ORDER SUMMARY</Heading>
                        <div className='order-summary-fle-div'>
                            <p>Item Total ({data?.length} Items)</p>
                            <Heading size="sm" >Rs.{sum}</Heading>
                        </div>
                        <div className='order-summary-fle-div'>
                            <p style={{ color: "#eba194" }}>Discount</p>
                            <Heading color="#eba194" size="sm" >Rs.{dis_sum}</Heading>
                        </div>
                        <div className='order-summary-fle-div'>
                            <p>Shipping</p>
                            <Heading size="sm" color="#eba194" >FREE</Heading>
                        </div>
                        <hr />
                        <div className='order-summary-fle-div'>
                            <p>Grand Total</p>
                            <Heading size="sm"  >Rs.{sum}</Heading>
                        </div>
                        <div className='order-summary-fle-div'>
                            <p>(Inclusive of Taxes)</p>
                            <Heading size="sm" color="#eba194" >You Saved Rs.{dis_sum}</Heading>
                        </div>
                        <button className='redeem-apply-btn' onClick={onOpen}>CHEKOUT</button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>ADD NEW ADDRESS</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <div style={{ display: 'flex', gap: "30px" }}>
                                        <input type="text" placeholder='Full Name*' onChange={(e) => setFullname(e.target.value)} />
                                        <input type="text" placeholder='Mobile Number*' onChange={(e) => setPhoneNo(e.target.value)} />
                                    </div>
                                    <div style={{ display: 'flex', gap: "30px" }}>
                                        <input type="text" placeholder='Pincode*' onChange={(e) => setPinCode(e.target.value)} />
                                        <input type="text" placeholder='City*' onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div style={{ display: 'flex', gap: "30px" }}>
                                        <input type="text" placeholder='State*' onChange={(e) => setState(e.target.value)} />
                                        <input type="text" placeholder='Country*' onChange={(e) => setCountry(e.target.value)} />
                                    </div>
                                    <input type="text" placeholder='Flat No/Building , Street Name*' onChange={(e) => setAddress(e.target.value)} />
                                    <input type="text" placeholder='Area/Locality*' onChange={(e) => setArea(e.target.value)} />
                                    <input type="text" placeholder='Landmark' onChange={(e) => setLandmark(e.target.value)} />
                                    <p>PS. Your information is safe with us, No spam.</p>

                                </ModalBody>

                                <ModalFooter>
                                    <Button className='modal-add-address-btn' bg='#20A87E' onClick={AddressSubmit}>
                                        ADD ADDRESS
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </div>
                </div>
            </div>
            {/* <Heading textAlign="left" ml="10px" mt="20px">RECENTLY VIEWED</Heading> */}
        </div>
    )
}
