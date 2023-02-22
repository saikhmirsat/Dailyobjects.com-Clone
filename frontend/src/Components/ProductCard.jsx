import { Box, Image } from '@chakra-ui/react';
import React from 'react'
import { ProductCardWrapper } from '../Styles/ProductCardCss';

const ProductCard = () => {
  return (
    <div>
    <ProductCardWrapper>
    <Box className='product-card-img'>
    <Box className='product-card-wishlist'>
    <Image src='https://images.dailyobjects.com/marche/icons/wishlist_1.png?tr=cm-pad_resize,v-2,w-26,h-26,dpr-1' alt="whishlist"/>
    </Box>
        <Box className='product-card-img-without-hover'>
            <Image w={"100%"}  src='https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-vw.png?tr=cm-pad_resize,v-2,w-293,h-361,dpr-1' alt="product 1"/>
        </Box>
        <Box className='product-card-img-with-hover'>
            <Image w={"100%"}  src='https://images.dailyobjects.com/marche/product-images/1703/hive-desk-caddy-images/Hive-Desk-Caddy-5t.jpg?tr=cm-pad_crop,v-2,w-293,h-361,dpr-1' alt='product2'/>
        </Box>
    </Box>
    <Box className='product-card-bottom'>
    <p className='product-card-brand'>Hive Desk Caddy</p>
    <b className='product-card-price'>Rs.3499 <span>4999</span></b>
    <p className='product-card-offer'>FREE DUFFLE BAG / KEYCHAIN SET*</p>
    </Box>

    </ProductCardWrapper>
    </div>
  )
}

export default ProductCard;
