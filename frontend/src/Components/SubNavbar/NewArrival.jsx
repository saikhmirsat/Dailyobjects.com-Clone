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
const NewArrival = () => {
  return (
    <Popover trigger='hover' isLazy placement='bottom'>
      <PopoverTrigger>
        <Button background={"white"} fontSize="12px" fontWeight="bold" >NEW ARRIVALS</Button>
      </PopoverTrigger>
      <PopoverContent borderRadius="none" height={"60vh"} width={"98vw"}>
        <PopoverArrow />
        <PopoverBody padding="20px 50px">

          <Box spacing={10} display="flex" justifyContent={"space-evenly"} height="300px">
            <Box height='200px' textAlign={"left"} width="20%" >
              <Heading as="h1" size="15px" >NEW ARRIVAL</Heading>
              <Text fontWeight={"light"} mt="10px">Desks</Text>
              <Text fontWeight={"light"} mt="10px">Charging Solutions</Text>
              <Text fontWeight={"light"} mt="10px">Collection</Text>
              <Text fontWeight={"light"} mt="10px">Macbook Sleeve</Text>
              <Text fontWeight={"light"} mt="10px">Messenger Bags</Text>
              <Text fontWeight={"light"} mt="10px">Eye WearCases</Text>
              <Text fontWeight={"light"} mt="10px">Watch Bends</Text>

            </Box>
            <Box width="80%" display="flex" gap="20px" mt="20px">
              <Box height='200px'>
                <Image src="https://images.dailyobjects.com/marche/assets/images/other/recess-collection-dropdown-image-for-new-arrival.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"></Image>
              </Box>
              <Box bg='tomato' height='200px'>
                <Image src="https://images.dailyobjects.com/marche/assets/images/other/planner-dropdown-image-for-new-arrival-2-new.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"></Image>
              </Box>
              <Box height='200px'>
                <Image src="https://images.dailyobjects.com/marche/assets/images/other/new-watch-chargers-dropdown-image-for-new-arrival-update.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"></Image>
              </Box>
            </Box>


          </Box>



        </PopoverBody>
      </PopoverContent  >
    </Popover>
  )
}

export default NewArrival
