import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Home.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Home() {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    }

    return (
        <div>
            <Navbar />
            <Link to='/'>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
            </Link>
            <div className='home-2nd-container'>
                <div className='home-2nd-con-child-1'>
                    <div>
                        <Heading size='lg'>NEW ARRIVALS</Heading>
                        <Text>Check out our newest launches.</Text>
                        <button>Shop New Arrivals</button>
                    </div>
                </div>
                <div className='home-2nd-con-child-2'>
                    <Slider {...settings}>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in Black color</Text>
                            <Text fontSize='16px'>Apple Watch Charger</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in 6 colors</Text>
                            <Text fontSize='16px'>Pedal Backpack</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in 3 colors</Text>
                            <Text fontSize='16px'>Urban Briefcase</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in 4 colors</Text>
                            <Text fontSize='16px'>Align Notebooks</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in Black colors</Text>
                            <Text fontSize='16px'> Surge™ 4-in-1 Cable </Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'> Available in 9 colors </Text>
                            <Text fontSize='16px'> Macbook Cases </Text>
                        </div>

                    </Slider>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <img src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/Desktop-banner_backpacks-updated.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
            </div>
            <div style={{ marginTop: '20px' }}>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
            </div>
            <Heading fontSize={{ base: '20px', md: '30px', lg: '30px' }} textAlign='left' ml={{ base: '10px', md: '20px', lg: '30px' }} m='30px'>STUDIO COLLECTIONS</Heading>
            <div className='home-3rd-container'>
                <div className='home-3rd-con-div'>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                    <Heading as='h2'>DREAMSCAPE</Heading>
                    <p>A vivid dream journal that lets you carry your daydreaming stance into real life.</p>
                    <Link>Shop Now</Link>
                </div>
                <div className='home-3rd-con-div'>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                    <Heading as='h2'>ZODIAC</Heading>
                    <p>Zodiac Collection reflects the unique personality of every individual out there!</p>
                    <Link>Shop Now</Link>
                </div>
                <div className='home-3rd-con-div'>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                    <Heading as='h2'>PIXEL</Heading>
                    <p>A reflection of modern pop-culture with a vintage appeal that evokes nostalgia.</p>
                    <Link>Shop Now</Link>
                </div>
            </div>
            <div>
                <img src="https://images.dailyobjects.com/marche/colllectionPage/zootopia/smartsters-homepages-desktop.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
            </div>
            <div className='home-2nd-container'>
                <div className='home-2nd-con-child-1'>
                    <div>
                        <Heading size='lg'>NEW ARRIVALS</Heading>
                        <Text>Check out our newest launches.</Text>
                        <button>Shop New Arrivals</button>
                    </div>
                </div>
                <div className='home-2nd-con-child-2'>
                    <Slider {...settings}>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in Black color</Text>
                            <Text fontSize='16px'>Apple Watch Charger</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in 6 colors</Text>
                            <Text fontSize='16px'>Pedal Backpack</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in 3 colors</Text>
                            <Text fontSize='16px'>Urban Briefcase</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in 4 colors</Text>
                            <Text fontSize='16px'>Align Notebooks</Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'>Available in Black colors</Text>
                            <Text fontSize='16px'> Surge™ 4-in-1 Cable </Text>
                        </div>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                            <Text fontSize='13px' fontWeight='light' color='grey'> Available in 9 colors </Text>
                            <Text fontSize='16px'> Macbook Cases </Text>
                        </div>

                    </Slider>
                </div>
            </div>
            <div className='home-4th-container'>
                <div>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-665,dpr-2,q-60" alt="" />
                    <Heading mb='15px' size='md' fontWeight='bolder'>CHARGING SOLUTIONS</Heading>
                    <Link>Shop Now</Link>
                </div>
                <div>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-665,dpr-2,q-60" alt="" />
                    <Heading mb='15px' size='md' fontWeight='bolder'>WORK ESSENTIALS</Heading>
                    <Link>Shop Now</Link>
                </div>
            </div>
            <Heading textAlign='left' ml='2.5%' m='30px'>COLLECTIONS</Heading>
            <div className='home-3rd-container'>
                <div className='home-3rd-con-div'>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                    <Heading as='h2'>08:01 COLLECTION</Heading>
                    <p>A collection featured to preserve all brief encounters on your everyday journey.</p>
                    <Link>Shop Now</Link>
                </div>
                <div className='home-3rd-con-div'>
                    <img src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
                    <Heading as='h2'>TARP COLLECTION</Heading>
                    <p>Urban-inspired carriers, made for free-spirited and powerful wearers.</p>
                    <Link>Shop Now</Link>
                </div>
                <div className='home-3rd-con-div'>
                    <img src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,dpr-2,q-60" alt="" />
                    <Heading as='h2'>PLATFORM COLLECTION</Heading>
                    <p>Designed with minimal geometric innovations to add comfort to your workspace.</p>
                    <Link>Shop Now</Link>
                </div>
            </div>
            <div style={{ marginBottom: '30px' }}>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
            </div>
            <div>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,dpr-2,q-60" alt="" />
            </div>
            <Footer />
        </div>
    )
}
