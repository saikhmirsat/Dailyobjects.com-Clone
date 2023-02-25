import { Box, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import "../../Styles/Product-details-modal-list.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const ProductDetailsModals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <><Button onClick={onOpen} variant={"ghost"} margin="10px 0px" padding="15px 0px" fontSize={"16px"} fontWeight="normal">Product Details</Button>

    <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={"20px 0px"}>
        <ModalHeader fontSize={"26px"} p={"20px 40px"}>PRODUCT DETAILS</ModalHeader>
        <ModalCloseButton size={"lg"}/>
        <ModalBody fontWeight="normal" maxHeight={"55vh"} overflowY={"scroll"} p={"20px 40px"} className="scrollcss">
        <Box fontSize={"16px"} fontWeight="normal">
        Spacious, sturdy and mobile, Hive Desk Caddy is carefully designed for easy storage and organisation. It offers multiple compartments of optimal sizes to store kids stationery, toys, books, board games, art and craft essentials, etc. Its clever design allows kids to easily organise their everyday stuff and is a perfect enabler to boost their confidence and self-reliance.
        </Box>
       <Box mt={"10%"}>
        <ul className='Product-details-modal-list'>
            <li>Crafted using leatherite on the outside and MDF on the inside, gives it a soft touch alongside optimum sturdiness.</li>
            <li>Caddy is designed to offer spacious storage, better organisation and easy portability.</li>
            <li>Featuring differently sized compartments, this catchall tray can be used to hold stationery, toys, art & craft supplies and more.</li>
            <li>Cut-away handle design makes it easy to lift and move, making it truly portable for kids.</li>
            <li>Felt base makes sure the caddy doesn’t slip and stays in place.</li>
            <li>Soft and curved corners are child friendly, offering additional safety.</li>
            <li>Disclaimer/Caution: Do not allow children to bite or chew the product.</li>
        </ul>
       </Box>
        </ModalBody>
      </ModalContent>
    </Modal></>
  )
}

export default ProductDetailsModals