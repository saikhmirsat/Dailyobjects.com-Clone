import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Divider,
    Box,
  } from '@chakra-ui/react';

const FilterDrawer = ({setValue,setMin,min,value}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

    return (
        <>
          <Button variant={"ghost"} ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Filter
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Filter</DrawerHeader>

              <DrawerBody>
              <Box p={"10px 0px"}>
                Shopping Above the Price
              </Box>
              <Box m={"0px 0px 10px 0px"}>
              <RadioGroup onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value="100">More than Rs 100 </Radio>
        <Radio value="500">More than Rs 500 </Radio>
        <Radio value="1000">More than Rs 1000 </Radio>
        <Radio value="1500">More than Rs 1500 </Radio>
        <Radio value="2000">More than Rs 2000 </Radio>
      </Stack>
    </RadioGroup>
              </Box>

    <Divider/>
    <Box p={"10px 0px"}>Shopping below the price</Box>
    <Box>
    <RadioGroup onChange={setMin} value={min}>
      <Stack direction='column-reverse'>
         <Radio value= "1000">Less than Rs 1000 </Radio>
        <Radio value= "2000">Less than Rs 2000 </Radio>
        <Radio value="3000">Less than Rs 3000 </Radio>
        <Radio value="4000">Less than Rs 4000 </Radio>
        <Radio value="5000">Less than Rs 5000 </Radio>
      </Stack>
    </RadioGroup>
    </Box>
              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      )
}

export default FilterDrawer