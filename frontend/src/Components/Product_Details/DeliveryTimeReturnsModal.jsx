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

const DeliveryTimeReturnsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <><Button onClick={onOpen} variant={"ghost"} margin="10px 0px" padding="15px 0px" fontSize={"16px"} fontWeight="normal">Delivery Time & Returns</Button>

    <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={"20px 0px"}>
        <ModalHeader fontSize={"26px"} p={"20px 40px"}>Delivery Time & Returns</ModalHeader>
        <ModalCloseButton size={"lg"}/>
        <ModalBody fontWeight="normal" maxHeight={"55vh"} overflowY={"scroll"} p={"20px 40px"} className="scrollcss">
       <Box>
        <Box fontSize={"18px"} margin="0px 0px 18px">FREE SHIPPING</Box>
      <Box>
      <Box fontSize={"16px"} fontWeight="normal">Shipping is free for all prepaid orders above Rs.749.</Box>
      <Box fontSize={"16px"} fontWeight="normal">A charge of Rs.49 is applied to all Prepaid orders below Rs.749.</Box>
      </Box>
      </Box>
      <Box margin="40px 0px 0px">
        <Box fontSize={"18px"} margin="0px 0px 18px">CASH ON DELIVERY</Box>
        <Box fontSize={"16px"} fontWeight="normal">Rs.99 extra charges for all Cash On Delivery orders.</Box>
      </Box>
      <Box margin="40px 0px 0px">
        <Box fontSize={"18px"} margin="0px 0px 18px">RETURNS</Box>
        <Box>
        <Box fontSize={"16px"}fontWeight="normal">30</Box>
        <Box fontSize={"16px"} fontWeight="normal">
        For more information, check out our
        <span
         style={{color:"#20a87e",
         textDecoration:"underline",
         fontSize:"16px",
          cursor:"pointer",
          fontWeight:"normal"}}> Shipping Policy Page</span> and
          <span style={{color:"#20a87e",
         textDecoration:"underline",
         fontSize:"16px",
          cursor:"pointer",
          fontWeight:"normal"}}> Return </span>and
          <span style={{color:"#20a87e",
         textDecoration:"underline",
         fontSize:"16px",
          cursor:"pointer",
          fontWeight:"normal"}}> Exchange Policy </span>page.
        </Box>
        </Box>

      </Box>





        </ModalBody>
      </ModalContent>
    </Modal></>)
}

export default DeliveryTimeReturnsModal