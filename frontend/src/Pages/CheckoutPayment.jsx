
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Checkout.css'
import { MdArrowRight } from 'react-icons/md'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading
} from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'

export default function CheckoutPayment() {
    const { isOpen, onOpen, onClose } = useDisclosure()


    const [cardNo, setCardNo] = useState('')
    const [validMonthYear, setValidMonthYear] = useState('')
    const [cvv, setCvv] = useState("")
    const [cardHolderName, setCardHolderName] = useState('')

    const navigate = useNavigate()

    const HandleContinue = () => {
        const payload = {
            cardNo, validMonthYear, cvv, cardHolderName
        }
        localStorage.setItem("card", JSON.stringify(payload))
        navigate('/loading')

    }

    return (
        <div>
            <Navbar />
            <div >
                <hr />
                <Heading mt='60px'>CHECKOUT</Heading>

                <div className='checkout-main-container'>
                    <div>
                        <Heading size='lg' >PAYMENT METHOD</Heading>
                        <div className='payment-method-div'>
                            <button className='payment-card-flex-btn' onClick={onOpen}>
                                <p>Debit/Credit Card</p>
                                <MdArrowRight size='30' />
                            </button>
                            <Modal isOpen={isOpen} onClose={onClose} >
                                <ModalOverlay />
                                <ModalContent >
                                    <ModalHeader>ADD CARD DETAILS</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody className='cart-detail-box'>
                                        <Heading size="20" mt="10px">DEBIT/CREDIT CARD</Heading>
                                        <input type="text" placeholder='Card Number*' onChange={(e) => setCardNo(e.target.value)} />
                                        <div style={{ display: 'flex', gap: '10%' }}>
                                            <input type="text" placeholder='Valid (MM/YY)*' onChange={(e) => setValidMonthYear(e.target.value)} />
                                            <input type="password" placeholder='CVV*' onChange={(e) => setCvv(e.target.value)} />
                                        </div>

                                        <input type="text" placeholder='Name on Card*' onChange={(e) => setCardHolderName(e.target.value)} />

                                        <p style={{ margin: '20px 0px' }}>We do not store your card details with us</p>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button className='modal-add-address-btn' bg='#20A87E' onClick={HandleContinue}>
                                            CONTINUE
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>

                            <div className='payment-card-option'>
                                <img src="https://images.dailyobjects.com/marche/icons/payments/amex-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-2,q-60" alt="" />
                                <img src="https://images.dailyobjects.com/marche/icons/payments/maestro-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-2,q-60" alt="" />
                                <img src="https://images.dailyobjects.com/marche/icons/payments/Mastercard-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-2,q-60" alt="" />
                                <img src="https://images.dailyobjects.com/marche/icons/payments/visa-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-2,q-60" alt="" />
                                <img src="https://images.dailyobjects.com/marche/icons/payments/rupay-1.png?tr=cm-pad_resize,v-2,w-27,h-27,dpr-2,q-60" alt="" />
                            </div>
                            <hr style={{ margin: "10px" }} />
                            <button className='payment-card-flex-btn'>
                                <p>UPI</p>
                                <MdArrowRight size='30' />
                            </button>
                            <hr style={{ margin: "10px" }} />
                            <button className='payment-card-flex-btn'>
                                <p>PhonePe</p>
                                <MdArrowRight size='30' />
                            </button>
                            <hr style={{ margin: "10px" }} />
                            <button className='payment-card-flex-btn'>
                                <p>Paytm</p>
                                <MdArrowRight size='30' />
                            </button>
                            <hr style={{ margin: "10px" }} />
                            <button className='payment-card-flex-btn'>
                                <p>Net Banking</p>
                                <MdArrowRight size='30' />
                            </button>
                            <hr style={{ margin: "10px" }} />
                            <button className='payment-card-flex-btn'>
                                <p>COD</p>
                                <MdArrowRight size='30' />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Heading as='h5'>ORDER SUMMARY</Heading>
                        <div className='order-summary-fle-div'>
                            <p>Item Total (1 Items)</p>
                            <Heading size="sm" >Rs.234</Heading>
                        </div>
                        <div className='order-summary-fle-div'>
                            <p style={{ color: "#eba194" }}>Discount</p>
                            <Heading color="#eba194" size="sm" >Rs.1999</Heading>
                        </div>
                        <div className='order-summary-fle-div'>
                            <p>Shipping</p>
                            <Heading size="sm" color="#eba194" >FREE</Heading>
                        </div>
                        <hr />
                        <div className='order-summary-fle-div'>
                            <p>Grand Total</p>
                            <Heading size="sm"  >Rs.2198</Heading>
                        </div>
                        <div className='order-summary-fle-div'>
                            <p>(Inclusive of Taxes)</p>
                            <Heading size="sm" color="#eba194" >You Saved Rs.1999</Heading>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
