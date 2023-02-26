import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/App/action";
import ProductCard from "../Components/ProductCard"
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Box, Button, Image, Img, SimpleGrid } from '@chakra-ui/react';
import { ProductPageWrapper } from '../Styles/ProductPagecss';
import FilterDrawer from '../Components/FilterDrawer';

const ProductPage = () => {
  const location = useLocation();
    const term = location.state?.query;
    const products = useSelector((state) => state.AppReducer.products)
    console.log(products.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct(term))
    }, [dispatch,term]);
  return (
    <ProductPageWrapper>
    <Box><Navbar/></Box>
    <Box><Image w={"100%"} src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="advertise"/></Box>
    <Box className='product-category-name'>
    NEW ARRIVALS
    </Box>
    <Box className='product-category-adjust'>
    <Box className='product-category-flex'>
    <Box className="product-category">
          <Box className='product-category-all'>
            ALL
          </Box>
          <Box className='product-category-name-bottom'>
            All
          </Box>
        </Box>
    {
      filterdata?.map((item, i) =>{
       return  <Box key={i} className="product-category">
          <Box
           as='button'
           borderRadius={"50%"}
            _active={{
    bg: '#1fa87e',
    transform: 'scale(0.98)',
    borderColor: '#1fa87e',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px #1fa87e, 0 1px 1px #1fa87e',
  }} w="70px">
            <Img className='product-category-img' src={item.img} alt={item.name}/>
          </Box>
          <Box className='product-category-name-bottom'>
            {item.name}
          </Box>
        </Box>
      })
      }
    </Box>
    </Box>
    <Box>
      <Box className='productpage-filter'><FilterDrawer/></Box>
    </Box>
    <Box padding={"10px"}>
    <SimpleGrid  columns={[2, 3, 4]} spacing="15px">
    {products.products?.map((item) => {
                    return (<ProductCard key={item._id} id={item._id} item={item} />)
                })}
                </SimpleGrid>
    </Box>
    </ProductPageWrapper>
  )
}

export default ProductPage;


let filterdata = [
  {
    name: "Pedal Backpack",
    img: "https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "pedalbackpack"
  },
  {
    name: "Desks",
    img: "https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1",
    category: "desks"
  },
  {
    name: "Charging Solutions",
    img: "https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "chargingsolutions"
  },
  {
    name: "Macbook Sleeves",
    img: "https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "macbooksleeves"
  },
  {
    name: "Messenger Bags",
    img: "https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "messengerbags"
  },
  {
    name: "Eyewear Cases",
    img: "https://images.dailyobjects.com/marche/icons/filter/eyewear-cases.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1",
    category: "eyewearcases"
  },
  {
    name: "Watchbands",
    img: "https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "watchbands"
  }
]