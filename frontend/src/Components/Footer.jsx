import React from 'react'
import { Box, Heading, SimpleGrid, Text, Image, Input, Button } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import '../Styles/Footer.css'
import MobileFooter from './MobileFooter';


export default function Footer() {
  return (
    <div className='footer-main-container'>
      <div className='footer'>
        <Box bg={"ButtonShadow"} height="2200px">
          <Box >
            <Heading justifyContent={"center"} fontSize="25px" >FEATURED IN</Heading>
            <Image src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1"></Image>

          </Box>
          <br></br>
          <Box >
            <Heading justifyContent={"center"} fontSize="25px" >GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</Heading>
            <Input placeholder='Enter your email' width="25%" bg="white" mt="26px" height="40px"></Input>
            <Button bg="grey" mb="4px" color={"black"} >SUBSCRIBE</Button>

          </Box>
          <SimpleGrid columns={[2, null, 4]} spacing='40px' mt="70px" textAlign={"left"} height="400px" width="85%" ml="20px"
          >
            <Box height='300px' ml="20px" >
              <Heading fontSize="20px"> KNOW US</Heading>
              <Text mt="10px">About Dailyobject</Text>
              <Text mt="10px">Blog</Text>

            </Box>
            <Box height='300px'>
              <Heading fontSize="20px">HELPDESK</Heading>
              <Text mt="10px">Terms of use</Text>
              <Text mt="10px">Warranty Policy</Text>
              <Text mt="10px">Shipping Policy</Text>
              <Text mt="10px">Cancellation Policy</Text>
              <Text mt="10px">Return and Exchange Policy</Text>
              <Text mt="10px">Privacy and Security Policy</Text>
            </Box>
            <Box height='300px'>
              <Heading fontSize="20px">NETWORK</Heading>
              <Text mt="10px">contact us</Text>
              <Text mt="10px">Corporate Gifting</Text>
            </Box>
            <Box height='300px'>
              <Heading fontSize={"20px"}>FOLLOW US ON</Heading>
              <SimpleGrid columns={[2, null, 4]} mt="10px">

                <Box size={32}><FaFacebook /></Box>
                <Box ><FaInstagram /></Box>
                <Box><FaYoutube /></Box>
                <Box></Box>

              </SimpleGrid>
            </Box>

          </SimpleGrid>
          <Box mt="50px">
            <Heading>HONEST REVIEWS. NOTHING ELSE.</Heading>
            <Image mt="50px" fontSize={"20px"} src="https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1" />
          </Box>

          <Heading textAlign={"left"} mt="20px" ml="40px" fontSize={"15px"}>MOST SEARCHED ON DAILYOBJECTS</Heading>
          <SimpleGrid columns={[2, null, 6]} width="90%" ml="40px" textAlign={"left"}  >
            <Box height='80px'>
              <Heading fontSize={"12px"} mt="20px">CASES & COVERS</Heading >
              <Text fontSize={"10px"} mt="10px">Iphone 13 covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus nord ce covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone covers</Text>
              <Heading fontSize={"13px"} mt="25px">HOME OFFICE</Heading>
              <Text fontSize={"10px"} mt="10px">Tech Kit Organisers</Text>
              <Heading fontSize={"12px"} mt="25px">STRAPS AND WATCHBANDS</Heading>
              <Text fontSize={"10px"} mt="10px">Apple Watch straps</Text>
              <Text fontSize={"10px"} mt="10px">Amazefit Watch straps</Text>
              <Text fontSize={"10px"} mt="10px">Silicon Watch straps</Text>
              <Heading fontSize={"12px"} mt="25px">BAGS AND SLEEVES</Heading>
              <Text fontSize={"10px"} mt="10px">Tote Bags</Text>
              <Text fontSize={"10px"} mt="10px">Pouches</Text>
              <Heading fontSize={"13px"} mt="25px">Wallet </Heading>
              <Text fontSize={"10px"} mt="10px">Phone Wallet</Text>
              <Heading fontSize={"13px"} mt="25px">OTHERS </Heading>
              <Text fontSize={"10px"} mt="10px">Gifts for All Ocassion</Text>
              <Heading fontSize={"19px"} mt="60px">GIFTS </Heading>
              <Heading fontSize={"13px"} mt="25px">GIFTS BY OCCASIONS </Heading>
              <Text fontSize={"10px"} mt="10px">Propose Day Gifts</Text>
              <Heading fontSize={"13px"} mt="25px">GIFTS BY RELATIONSHIPS </Heading>
              <Text fontSize={"10px"} mt="10px">Propose Day Gifts</Text>
              <Heading fontSize={"13px"} mt="25px">GIFTS BY PERSONA </Heading>
              <Text fontSize={"10px"} mt="10px">Gifts for animal lover</Text>
              <Heading fontSize={"13px"} mt="25px">GIFTS BY BUDGET</Heading>
              <Text fontSize={"10px"} mt="10px">Gifts under 500</Text>
              <Heading fontSize={"18px"} mt="40px">BLOGS</Heading>



            </Box>
            <Box height='80px' mt="33px">
              <Text fontSize={"10px"} mt="10px">Iphone 11 covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">vivo covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus nors ce covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus covers</Text>
              <Text fontSize={"10px"} mt="53px">Desks</Text>
              <Text fontSize={"10px"} mt="53px">Samsung Watch Straps</Text>
              <Text fontSize={"10px"} mt="10px">Noise watch straps</Text>
              <Text fontSize={"10px"} mt="70px">Laptop Covers</Text>
              <Text fontSize={"10px"} mt="73px">Card Holder</Text>
              <Text fontSize={"10px"} mt="53px">Wireless Charger</Text>
              <Text fontSize={"10px"} mt="132px">Vallentine Day Gifts</Text>
              <Text fontSize={"10px"} mt="52px">Gifts fro her</Text>
              <Text fontSize={"10px"} mt="52px">Gifts for  cofee lover</Text>
              <Text fontSize={"10px"} mt="48px">Gifts under 1000</Text>

            </Box>
            <Box height='80px' mt="33px">
              <Text fontSize={"10px"} mt="10px">Iphone 7 covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 6 covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus nors ce covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 13 covers</Text>
              <Text fontSize={"10px"} mt="53px">Organiser</Text>
              <Text fontSize={"10px"} mt="53px">Fossil Watch Straps</Text>
              <Text fontSize={"10px"} mt="10px">Boat watch straps</Text>
              <Text fontSize={"10px"} mt="70px">Cross Body Bag</Text>
              <Text fontSize={"10px"} mt="73px">Men's Wallet</Text>
              <Text fontSize={"10px"} mt="53px">Mobile Laptop Stands</Text>
              <Text fontSize={"10px"} mt="132px">Doctors Day Gifts</Text>
              <Text fontSize={"10px"} mt="52px">Gifts for Boyfriend </Text>
              <Text fontSize={"10px"} mt="52px">Gifts for  cricket lover</Text>
              <Text fontSize={"10px"} mt="48px">Gifts under 2000</Text>
            </Box>
            <Box height='80px' mt="33px">
              <Text fontSize={"10px"} mt="10px">Iphone 11 covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus nors ce covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone xr covers</Text>
              <Text fontSize={"10px"} mt="53px">Mobile Laptop Stands</Text>
              <Text fontSize={"10px"} mt="53px">Samsung Watch Straps</Text>
              <Text fontSize={"10px"} mt="10px">Noise watch straps</Text>
              <Text fontSize={"10px"} mt="70px">Macbook Sleeve</Text>
              <Text fontSize={"10px"} mt="73px">Women's Wallet</Text>
              <Text fontSize={"10px"} mt="53px">Designer Notebook And Planners</Text>
              <Text fontSize={"10px"} mt="132px">Christmas Gifts</Text>
              <Text fontSize={"10px"} mt="52px">Gifts for men</Text>
              <Text fontSize={"10px"} mt="52px">Gifts for  iphone user</Text>
              <Text fontSize={"10px"} mt="48px">Gifts under 3000</Text>
            </Box>
            <Box height='80px' mt="33px">
              <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone xr cxrovers</Text>
              <Text fontSize={"10px"} mt="10px">one plus covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus nors ce covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 12</Text>
              <Text fontSize={"10px"} mt="53px">Stationary</Text>
              <Text fontSize={"10px"} mt="53px">Garmin Watch Straps</Text>
              <Text fontSize={"10px"} mt="10px">Smart watch straps</Text>
              <Text fontSize={"10px"} mt="70px">Passport Cover</Text>
              <Text fontSize={"10px"} mt="285px">New Year Gifts</Text>
              <Text fontSize={"10px"} mt="52px">Gifts to girlfriend</Text>
              <Text fontSize={"10px"} mt="48px">Gifts under 4000</Text>
            </Box>
            <Box height='80px' mt="33px">
              <Text fontSize={"10px"} mt="10px">Iphone 11 covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 14 covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone x5 max covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 11 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 12 pro covers</Text>
              <Text fontSize={"10px"} mt="10px">one plus nors ce covers</Text>
              <Text fontSize={"10px"} mt="10px">Iphone 6</Text>
              <Text fontSize={"10px"} mt="53px">Wireless Charger</Text>
              <Text fontSize={"10px"} mt="53px">One plus Watch Straps</Text>
              <Text fontSize={"10px"} mt="10px">Leather straps</Text>
              <Text fontSize={"10px"} mt="70px">Messenger Bag</Text>
            </Box>

          </SimpleGrid>

        </Box>
      </div>
      <MobileFooter />
    </div>
  )
}
