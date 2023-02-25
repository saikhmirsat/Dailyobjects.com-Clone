import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/App/action";
import ProductCard from "../Components/ProductCard"
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Box, Image } from '@chakra-ui/react';

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
    <>
    <Box><Navbar/></Box>
    <Box><Image w={"100%"} src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" alt="advertise"/></Box>
    <Box>
    {products.products?.map((item) => {
                    return (<ProductCard key={item._id} id={item._id} item={item} />)
                })}
    </Box>

    </>
  )
}

export default ProductPage