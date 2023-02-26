import React from 'react'
import { Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
import '../Styles/Newarrivals.css'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function NewArrivals() {
    return (
        <div className='new-arrival-main-container'>
            <Navbar />
            <img src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-2,q-60" alt="" />
            <Heading size="md" className='new-arrival-heading'>NEW ARRIVALS</Heading>


            <SimpleGrid className='new-arrival-grid-mainbox' columns={{ lg: 4, md: 3 }} spacing='30px'>
                <Link to='/products'>
                    <Box className='new-arrival-grid-div'>
                        <Box bg="#20A87E" className='new-arrival-grid-circle'>
                            <Heading as='h1' size='xl' color='white'>ALL</Heading>
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">ALL</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/catagory-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">PEDAL BACKPACK</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">DESKS</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">CHARGING SOLUTIONS</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">MACBOOK SLEEVES</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">MESSENGER BAGS</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/icons/filter/eyewear-cases.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">EYEWEAR CASES</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">WATCH BANDS</Heading>
                </Link>

                <Link to='/'>
                    <Box className='new-arrival-grid-div'>
                        <Box className='new-arrival-grid-circle'>
                            <img src="https://images.dailyobjects.com/marche/icons/filter/collection-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-2,q-60" alt="" />
                        </Box>
                    </Box>
                    <Heading as="h1" size="sm">COLLECTIONS</Heading>
                </Link>
            </SimpleGrid>
        </div>
    )
}
