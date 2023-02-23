import React from 'react'

import {
  Heading,
  Text, 
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    SimpleGrid,
    Image,
    Box
  } from '@chakra-ui/react'
const Collection = () => {
  return (
    <Popover trigger='hover' isLazy placement='bottom'>
  <PopoverTrigger>
    <Button background={"white"} _focus ={{backgroundColor:"white"}} fontSize="12px" fontWeight="bold">COLLECTION</Button>
  </PopoverTrigger>
  <PopoverContent borderRadius="none"  height={"60vh"} width={"98vw"}>
    <PopoverArrow />
    <PopoverBody padding="20px 50px">
    <SimpleGrid columns={6} spacing='40px' textAlign={"left"} height="350px">
  <Box  height='300px'>
  <Heading size="12px">Watch Accesories</Heading>
 <Text fontWeight={"light"} mt="10px">Apple Watchbands</Text>
 <Text fontWeight={"light"} mt="10px">Apple Watchcharger</Text>
<Text fontWeight={"light"} mt="10px">Universal Watchbands</Text>
 <Text fontWeight={"light"} mt="10px">Apple Watchcases</Text>
<Text fontWeight={"light"} mt="10px">Apple Watchstands</Text>
  </Box>
  <Box  height='300px'>
  <Heading size="12px">SCREEN GUARD</Heading>
  <Text fontWeight={"light"} mt="10px">for Mobile</Text>
 <Text fontWeight={"light"} mt="10px">for Apple Watch</Text>
<Text fontWeight={"light"} mt="10px">for Laptop</Text>
 <Text fontWeight={"light"} mt="10px">for Macbook</Text>

  </Box>
  <Box  height='300px'>
  <Heading size="12px">STANDS</Heading>
 <Text fontWeight={"light"} mt="10px">for Applewatch</Text>
 <Text fontWeight={"light"} mt="10px">for Laptop</Text>
<Text fontWeight={"light"} mt="10px">for Monitor</Text>
 <Text fontWeight={"light"} mt="10px">for Mobile</Text>
<Text fontWeight={"light"} mt="10px">for Ipad</Text>
  </Box>
  <Box  height='300px'>
  <Heading size="12px">CHARGING SOLUTION</Heading>
  <Text fontWeight={"light"} mt="10px">Wireless Charger</Text>
 <Text fontWeight={"light"} mt="10px"> Apple Watch charger</Text>
<Text fontWeight={"light"} mt="10px">Charging Stations</Text>
 <Text fontWeight={"light"} mt="10px">Charger Cable</Text>
  </Box>
  <Box  height='300px'>
  <Heading size="8px" >ORGANISER</Heading>
  <Heading size="8px" mt="25px">PHONE WALLET</Heading>
  <Heading size="8px" mt="25px">KEY CHAIN</Heading>
  <Heading size="8px" mt="25px">MASK</Heading>
  <Heading size="8px" mt="25px">DRINK WEAR</Heading>
  
  </Box>
  <Box  height='300px'>
    <Image height="300px" src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-621,dpr-1"></Image>
  </Box>
</SimpleGrid>
    </PopoverBody>
  </PopoverContent  >
</Popover>
  )
}

export default  Collection