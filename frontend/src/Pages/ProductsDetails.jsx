import { Box, Button, Divider, Heading, Image, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import DeliveryTimeReturnsModal from '../Components/Product_Details/DeliveryTimeReturnsModal'
import ImgSlider from '../Components/Product_Details/ImgSlider'
import ProductDetailsModals from '../Components/Product_Details/ProductDetailsModal'
import SpecificationsModal from '../Components/Product_Details/SpecificationsModal'
import { getSingleProduct, postCart } from '../Redux/App/action'
import { ProductsDetailsBottom } from '../Styles/ProductDetailscss'

const ProductsDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();
    // console.log(id);
    const { single } = useSelector((store) => store.AppReducer);
    // console.log(single)
    const toast = useToast();
    const postData = async (payload) => {
        console.log(payload)
        await fetch(`https://awful-pear-bedclothes.cyclic.app/api/cart/create`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json",
                "Authorization": localStorage.getItem('token')
            }
        })
            .then((res) => res.json())
            .then((res) => res.success?toast({
                title: res.message,
                description: "Product is added successfully",
                status: 'success',
                duration: 9000,
                isClosable: true,
              }):toast({
                title: res.message,
                description: "Something is wrong",
                status: 'error',
                duration: 9000,
                isClosable: true,
              }))
            .catch((err) => console.log(err))

    }
    const handleAddCart=()=>{
        const {title,price,discounted_price,images} = single.product;
        const payload = {
            title: title,
            price: price,
            discounted_price: discounted_price,
            image_url  : images[0].url,
            quantity : 1
        }
        postData(payload)
    }

    useEffect(() => {
        if (id) {
          let payload = id;
          dispatch(getSingleProduct(payload));
        }
      }, [id, dispatch]);
  return (<Box>
    <Navbar/>
    <ProductsDetailsBottom>
    <Box className='product-detalis-flex'>
    {/* top left side */}
    <Box className='product-detalis-sliderbox'><ImgSlider data={single.product?.images} /></Box>
    {/* top right side */}
    <Box className='Product-details-right'>
        <Box className='Product-details-right-heading'>
            <h1>{single.product?.title}</h1>
            <b>
            Rs.{single.product?.price}
            <span className='Product-details-right-total-price'>{single.product?.discounted_price}</span>
            <span className='Product-details-right-exclusive'>Inclusive of all taxes</span>
            </b>
        </Box>
        <Box>
            <Button className='Product-details-right-addtocart-button' onClick={handleAddCart}>
                ADD TO CART
            </Button>
        </Box>
        <Box className='Product-details-right-offer'>EXCITING OFFERS</Box>
        <Box display={"flex"}>
            <Box>
            <Image w="20px" m="0px 11px 0px 0px"src="https://images.dailyobjects.com/marche/assets/images/other/offers-icon-324-280px.png?tr=cm-pad_resize,v-2,dpr-1" alt="tag"/>
            </Box>
            <Box className='Product-details-right-free'>*FREE DUFFLE BAG ON ORDERS ABOVE Rs.2999 / FREE KEYCHAIN SET ON ORDERS ABOVE Rs.1999</Box>
        </Box>
        <Box mb={"10px"}>
        <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type="text"
        p={"25px 20px"}
        placeholder='Enter Pincode To Check Delivery'
      />
      <InputRightElement width='4.5rem'>
        <Button p="0px 25px" fontSize={"14px"} color="rgba(0,0,0,.26)" borderRadius={"0px"} size='md' h={"3.8rem"} marginTop="18px" >
          CHECK
        </Button>
      </InputRightElement>
    </InputGroup>
        </Box>
        <Box>
            {/* <Box>delivery.png
Dispatch to Courier in 3-4 Days.
cod.png
COD Available</Box> */}
<Box></Box>
        </Box>
        <Box>
        <Divider/>
            <Box>
            <ProductDetailsModals data={single.product?.description}/>
            </Box>
            <Divider/>
            <Box><SpecificationsModal/></Box>
            <Divider/>
            <Box><DeliveryTimeReturnsModal/></Box>
            <Divider/>
        </Box>
    </Box>
    </Box>

    {/* Bottom Side  */}
    <Box>
        {single.product?.details?.map((item,i)=>{
            let last = dummy.length-1;
            if(i%2===0){
                return (
                    <Box className='product-details-bottom' key={i}>
                        <Box className='product-details-bottom-adujust-wid'>
                        <Box className='product-details-bottom-banner'>
                        <h1>{item.heading}</h1>
                            <p>{item.content}</p>

                        </Box>
                        </Box>
                        <Box className='product-details-bottom-adujust-wid'>
                            <Image src ={item.img_url} alt="img"/>
                        </Box>
                    </Box>
                )
            }else if(i%2===1){
               return <Box className='product-details-bottom-right' key={i}>
                        <Box className='product-details-bottom-adujust-wid'>
                        <Box className='product-details-bottom-banner'>
                        <h1>{item.heading}</h1>
                         <p>{item.content}</p>

                        </Box>
                        </Box>
                        <Box className='product-details-bottom-adujust-wid'>
                            <Image src ={item.img_url} alt="img"/>
                        </Box>
                    </Box>
            }
            {/* else if(last === i){
                    return(
                        <Box className='product-details-bottom-img' key={i}>
                            <Image minWidth={"120px"} src ={item.imga} alt ="image a"/>
                            <Image minWidth={"120px"} src ={item.imgb} alt ="image b"/>
                        </Box>
                    )
            } */}
        })}
        </Box>
    </ProductsDetailsBottom>
    <Footer/>
    </Box>
  )
}

export default ProductsDetails;

const dummy = [
    {
        heading: "HIVE DESK CADDY",
        details: "A multi-utilitarian design that saves you from the hassle of organising your kid’s stationery, art supplies and more. Easy to organise, Hive is the perfect way to encourage them to be more self-reliant.",
        img:"https://images.dailyobjects.com/marche/feature-banner/hive-desk-caddys.jpg?tr=cm-pad_crop,v-2,w-768,h-614,dpr-1"
    },
    {
        heading: "CONVENIENT CARRY WITH CUTAWAY HANDLES",
        details: "Offering ultimate carry convenience, Caddy comes with cutaway handles making it truly portable. Thoughtfully structured, it is easy to lift and move from one place to another, even for the kids.",
        img:"https://images.dailyobjects.com/marche/feature-banner/hive-desk-caddys-1.jpg?tr=cm-pad_crop,v-2,w-768,h-614,dpr-1"
    },{
        heading: "INGENIOUS DESIGN AND CRAFTSMANSHIP",
        details: "Inspired to add colour, imaginative patterns and consequently wonder to your child’s indoor environment, this collection is handcrafted by experienced Indian artisans to deliver a pioneering kids indoor range. The collection features use of child-friendly and ergonomic shapes, cushioned and soft touch material, easy use and portability by kids to encourage independence and self-reliance among the little ones.",
        img:"https://images.dailyobjects.com/marche/feature-banner/hive-desk-caddys-2.jpg?tr=cm-pad_crop,v-2,w-768,h-614,dpr-1"
    },{
        heading: "GENEROUSLY SPACIOUS",
        details: "A smart catchall tray to keep hold of pens, pencils, highlighters, toys, crayons and what not! For the kids who are inundated with clutter all around, Hive is the ideal organising solution",
        img:"https://images.dailyobjects.com/marche/feature-banner/hive-desk-caddys-3.jpg?tr=cm-pad_crop,v-2,w-768,h-614,dpr-1"
    },{
        heading: "CAREFUL DIMENSIONS",
        details: "Ideal in terms of design and material, Hive’s standard dimensions allow you to place it on almost every place, be it a study desk or a shelf. Designed for children, it comes with soft, round corners offering additional safety.",
        img:"https://images.dailyobjects.com/marche/feature-banner/hive-desk-caddys-4.jpg?tr=cm-pad_crop,v-2,w-768,h-614,dpr-1"
    },{
        imga: "https://images.dailyobjects.com/marche/feature-banner/hive-desk-caddys-5.jpg?tr=cm-pad_crop,v-2,w-768,h-614,dpr-1",
        imgb:"https://images.dailyobjects.com/marche/feature-banner/hive-desk-caddys-6.jpg?tr=cm-pad_crop,v-2,w-768,h-614,dpr-1"
    }
]
