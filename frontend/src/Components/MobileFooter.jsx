import React from 'react'
import {
  Box, Heading, Image, Input, Button, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Text
} from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import '../Styles/Footer.css'



const MobileFooter = () => {
  return (
    <div className='mobile-Footer'>
      <Box >
        <Box>
          <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }} textAlign={"left"} mt="20px" ml="20px">FEATURED IN</Heading>
        </Box>

        <Box >
          <Image src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1"></Image>
        </Box>


        <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }} textAlign={"left"} mt="20px" ml="20px">GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</Heading>

        <Box display="flex" mt="20px" ml="20px">
          <Input placeholder='Enter your Email' width="15%"></Input>
          <Button >SUBSCRIBE</Button>
        </Box>
        <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }} textAlign={"left"} mt="20px" ml="20px">FOLLOW US ON</Heading>
        <Box display="flex" gap="20px" ml="20px" mt="20px">
          <FaFacebook size="35px" mt="20px" />
          <FaInstagram size="35px" mt="20px" />
          <FaYoutube size="35px" mt="20px" />
          <FaTwitter size="35px" mt="20px" />
        </Box>
        <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }} textAlign={"left"} mt="20px" ml="20px">DOWNLOAD OUR APP</Heading>

        <Box ml="20px" mt="20px" gap="30px" display="flex">
          {/* <FaGooglePlay  size="45px" /> */}
          <Image src="https://images.dailyobjects.com/marche/icons/android.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"></Image>
          <Image src="https://images.dailyobjects.com/marche/icons/IOS.png?tr=cm-pad_resize,v-2,w-118,h-38,dpr-1"></Image>
        </Box>
        <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }} textAlign={"left"} mt="20px" ml="20px">100% SECURE PAYMENT</Heading>
        <Box ml="20px" display="flex" gap="20px" mt="20px">
          <Image height="35px" src="https://images.dailyobjects.com/marche/icons/payments/amex-update.png?tr=cm-pad_resize,v-2,dpr-1"></Image>
          <Image height="35px" src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,dpr-1"></Image>
          <Image height="35px" src="https://images.dailyobjects.com/marche/icons/payments/mastercard-update.png?tr=cm-pad_resize,v-2,dpr-1"></Image>
        </Box>
        <Box ml="20px" display="flex" gap="20px" mt="20px">
          <Image height="35px" src="https://images.dailyobjects.com/marche/icons/payments/mobikwik-update.png?tr=cm-pad_resize,v-2,dpr-1"></Image>
          <Image height="35px" src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,dpr-1"></Image>
          <Image height="35px" src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,dpr-1"></Image>
        </Box>
        <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }} textAlign={"left"} mt="20px" ml="20px">HONEST REVIEWS. NOTHING ELSE.</Heading>
        <Image mt="20px" src="https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1"></Image>


        <Box width="55%" ml="20px">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }}>KNOW US</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box textAlign={"left"}>
                  <Text fontSize={"10px"} mt="10px">Iphone 13 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus nord ce covers</Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>

                    <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }}>HELPDESK</Heading>

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box textAlign={"left"}>
                  <Text fontSize={"10px"} mt="10px">Iphone 13 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus nord ce covers</Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }}>NETWORK</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box textAlign={"left"}>
                  <Text fontSize={"10px"} mt="10px">Iphone 13 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus nord ce covers</Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>

                    <Heading fontSize={{ base: '15px', md: '25px', lg: '30px' }}>MOST SEARCHED</Heading>

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box textAlign={"left"}>
                  <Text fontSize={"10px"} mt="10px">Iphone 13 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus covers</Text>
                  <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
                  <Text fontSize={"10px"} mt="10px">one plus nord ce covers</Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>


      </Box>
    </div>
  )
}


export default MobileFooter
