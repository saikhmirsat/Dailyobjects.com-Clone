import React, { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/App/action";
import ProductCard from "../Components/ProductCard"
import { useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Box, Button, Image, Img, SimpleGrid } from '@chakra-ui/react';
import { ProductPageWrapper } from '../Styles/ProductPagecss';
import FilterDrawer from '../Components/FilterDrawer';
import Pagination from '../Components/Pagination';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'



const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("100");
  const  [min ,setMin] = useState("5000");
  const [page,setPage] = useState(1);
  // const [isloading,setLoading] = useState(false);
  const location = useLocation();

  const term = location?.search;

  // console.log(term);

  const { isLoading, isError } = useSelector((state)=>state.AppReducer);
  console.log(isLoading ,isError)

    const products = useSelector((state) => state.AppReducer.products)
    let total = Math.ceil(products?.productsCount/15);
console.log(category);
console.log(products.products)
    // console.log(products,"searchsearch paramss")
    const dispatch = useDispatch();
    useEffect(() => {
      let params = {};
      // params.gte = value;
      // params.lte = min;
      params.page = page;

        params.keyword = category;

      // let model = {gte:value,lte:min,term:term}
      setSearchParams(params);
        dispatch(getProduct(term,value,min))
    }, [term,page,value,min,category]);
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
          <Box
          onClick={
        ()=>setCategory("")
          }
           className='product-category-all'>
            ALL
          </Box>
          <Box
           className='product-category-name-bottom'>
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
  onClick={
    ()=>setCategory(item.category)
  }
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
      <Box className='productpage-filter'><FilterDrawer  setValue={setValue} setMin={setMin} value={value} min={min}/></Box>
    </Box>
    <Box padding={"10px"}>
    <SimpleGrid  columns={[2, 3, 4]} spacing="15px">
    {products?.products?.map((item) => {
                    return (
                      <Skeleton isLoaded={!isLoading}>
                      <ProductCard key={item._id} id={item._id} item={item} />
                      </Skeleton>)
                })}
                </SimpleGrid>
    </Box>
    <Box margin={"auto"} m={"20px"}><Button
    onClick={()=>setPage(page=>page-1)}
    disabled={page<=1}
    mr="20px"
    >Prev</Button> <Button
    disabled={total<=page}
    onClick={()=>setPage(page=>page+1)}
    >Next</Button></Box>
    </ProductPageWrapper>
  )
}

export default ProductPage;


let filterdata = [
  {
    name: "Pedal Backpack",
    img: "https://images.dailyobjects.com/marche/assets/images/other/filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "Daypack"
  },
  {
    name: "Desks",
    img: "https://images.dailyobjects.com/marche/icons/category/platrorm-desk-collection.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1",
    category: "Stand"
  },
  {
    name: "Charging Solutions",
    img: "https://images.dailyobjects.com/marche/assets/images/other/charging-solution-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "Charging"
  },
  {
    name: "Macbook Sleeves",
    img: "https://images.dailyobjects.com/marche/icons/new-arrival/pu-snap-sleeves.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "MacBook"
  },
  {
    name: "Messenger Bags",
    img: "https://images.dailyobjects.com/marche/icons/category/laptop-brifcae-new-arrival-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "Messenger"
  },
  {
    name: "Eyewear Cases",
    img: "https://images.dailyobjects.com/marche/icons/filter/eyewear-cases.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1",
    category: "Eyewear"
  },
  {
    name: "Watchbands",
    img: "https://images.dailyobjects.com/marche/icons/category/watchbands-filter-icon-for-new-arrival.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
    category: "Watch"
  }
]