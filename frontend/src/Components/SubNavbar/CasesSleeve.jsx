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
const Cases = () => {
  return (
    <Popover trigger='hover' isLazy placement='bottom'>
  <PopoverTrigger>
    <Button fontSize={"12px"}  background={"white"} fontWeight="bold" >CASES&SLEEVES</Button>
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
    <Image height="300px" src="https://images.dailyobjects.com/marche/assets/images/other/airpods-cases-sleeves-page-dropdown-image.jpg?tr=cm-pad_crop,v-2,w-1000,w-207,h-653,dpr-1"></Image>
  </Box>
</SimpleGrid>
    </PopoverBody>
  </PopoverContent  >
</Popover>
  )
}

export default Cases