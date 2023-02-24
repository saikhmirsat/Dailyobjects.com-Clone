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

const SpecificationsModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <><Button onClick={onOpen} variant={"ghost"} margin="10px 0px" padding="15px 0px" fontSize={"16px"} fontWeight="normal">Specifications</Button>

    <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={"20px 0px"}>
        <ModalHeader fontSize={"26px"} p={"20px 40px"}>Specifications</ModalHeader>
        <ModalCloseButton size={"lg"}/>
        <ModalBody fontWeight="normal" maxHeight={"55vh"} overflowY={"scroll"} p={"20px 40px"} className="scrollcss">
       <Box fontSize={"16px"} fontWeight="normal"><b style={{fontSize:"16px"}}>COLOUR:</b> Navy, Tan & Yellow</Box>
      <Box fontSize={"16px"} fontWeight="normal" mt={"2%"}> <b style={{fontSize:"16px"}}>MATERIAL:</b> Leatherite, MDF and Felt</Box>
      <Box fontSize={"16px"} fontWeight="normal" mt={"2%"}><b style={{fontSize:"16px"}}>DIMENSIONS:</b> 20.4 (H) x 30.2 (W) x 25.2 (D) cm</Box>
      <Box fontSize={"16px"} fontWeight="normal" mt={"2%"}><b style={{fontSize:"16px"}}>PACKAGE CONTENTS:</b> 1 x Hive Desk Caddy</Box>
      <Box fontSize={"16px"} fontWeight="normal" mt={"2%"}><b style={{fontSize:"16px"}}>CARE:</b> Leatherite can be cleaned using a non-abrasive, dampened cloth. Felt can be cleaned using a soft, dry brush.</Box>
      <Box fontSize={"16px"} fontWeight="normal" mt={"2%"}><b style={{fontSize:"16px"}}>COUNTRY OF ORIGIN:</b>  Designed and Made in India</Box>

        </ModalBody>
      </ModalContent>
    </Modal></>)
}

export default SpecificationsModal