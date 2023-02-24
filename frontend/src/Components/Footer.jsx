import React from 'react'
import { Box,Heading,SimpleGrid,Text,Image ,Input, Button} from '@chakra-ui/react'

export default function Footer() {
    return (
      
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
  <Box  height='300px'  ml="20px" >
  <Heading fontSize="20px"> KNOW US</Heading>
    <Text mt="10px">About Dailyobject</Text>
    <Text mt="10px">Blog</Text>
   
  </Box>
  <Box  height='300px'>
  <Heading fontSize="20px">HELPDESK</Heading>
    <Text mt="10px">Terms of use</Text>
    <Text mt="10px">Warranty Policy</Text>
    <Text mt="10px">Shipping Policy</Text>
    <Text mt="10px">Cancellation Policy</Text>
    <Text mt="10px">Return and Exchange Policy</Text>
    <Text mt="10px">Privacy and Security Policy</Text>
  </Box>
  <Box  height='300px'>
  <Heading fontSize="20px">NETWORK</Heading>
    <Text mt="10px">contact us</Text>
    <Text mt="10px">Corporate Gifting</Text>
  </Box>
  <Box  height='300px'>
  <Heading fontSize="20px">FOLLOW US ON</Heading>
  <Image mt="20px"src="data:image/png;base64,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"></Image>
    <Image mt="20px" src="data:image/png;base64,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"></Image>
  </Box>
  
</SimpleGrid>
<Box>
  <Heading>HONEST REVIEWS. NOTHING ELSE.</Heading>
  <Image mt="50px" fontSize={"20px"} src="https://images.dailyobjects.com/marche/assets/images/other/reviews-desktop-updated-23.png?tr=cm-pad_resize,v-2,w-1349,h-200,dpr-1" />
</Box>
            
            <Heading  textAlign={"left"} mt="20px" ml="40px"fontSize={"15px"}>MOST SEARCHED ON DAILYOBJECTS</Heading>
            <SimpleGrid columns={[2, null, 6]}  width="90%" ml="40px" textAlign={"left"}  >
  <Box  height='80px'>
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
  <Box  height='80px' mt="33px">
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
        
    )
}
