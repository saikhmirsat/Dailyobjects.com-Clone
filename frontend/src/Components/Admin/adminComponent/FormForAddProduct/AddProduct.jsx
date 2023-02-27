// import { CheckIcon } from '@chakra-ui/icons';
// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     Checkbox,
//     Stack,
//     Link,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
//     Grid,
//     TagLabel,
//     InputLeftElement,
//     InputGroup,
//     InputRightElement,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { json, Link as RouterLink } from "react-router-dom";

// export default function SimpleCard() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [category, setCategory] = useState("");
//     const [model, setModel] = useState("");
//     const [url1, setUrl1] = useState("");
//     const [url2, setUrl2] = useState("");
//     const [url3, setUrl3] = useState("");
//     const [url4, setUrl4] = useState("");
//     const [url5, setUrl5] = useState("");
//     const [price, setPrice] = useState(0)
//     const [stock, setStock] = useState(0)
//     // const token=localStorage.getItem("token")
//     const getCookie=()=>{
//         let cookie=document.cookie;
//         let decoded=decodeURIComponent(cookie);
//         return decoded.split("=");
//     }
//     let cookie=getCookie();
//     console.log("cookie",cookie);


//     const products =
//     {
//         title: title,
//         description: description,
//         category: category,
//         images: [
//             {
//                 url: url1
//             }
//         ],
//         price:+price,
//         stock:+stock
//     }

//     const postData=async()=>{
//         await fetch('https://awful-pear-bedclothes.cyclic.app/api/admin/product/new',{
//             node:'no-cors',
//             method:"POST",
//             credentials:'include',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(products)
//         }).then(res=>{
//             if(res.message){
//                 return res.json()
//             }
//             throw new Error('Network response error')
//         }).then(data=>{
//             return data
//         }).catch(err=>{
//             console.log(err)
//         })
//     }


//     const submitData = async() => {
//         postData();
//     }



//     return (
//         <>
//             <Stack display={"block"} align={'center'}>
//                 <Heading fontSize={'4xl'}>Add New Product</Heading>
//                 <Text fontSize={'lg'} color={'gray.600'}>
//                     If don't want to add something <RouterLink to={"/allproducts"} color={'blue.400'}>Click here</RouterLink> ✌️
//                 </Text>
//             </Stack>
//             <div
//                 display={{ base: "grid", md: "grid", xl: "flex", "2xl": "flex" }}
//                 justifycontent={{ xl: "space-around", "2xl": "space-around" }}
//                 alignitems={{ xl: "center", "2xl": "center" }}
//             >
//                 <div display="grid" style={{margin:"50px",gap:"2rem"}}>
//                     <Grid
//                     templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(2, 1fr)", "2xl": "repeat(2, 1fr)" }} gap={"2rem"}
//                     align={'center'}
//                     justify={'center'}
//                     >
//                         <Stack >

//                             <Input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
//                             <Input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} />
//                             <Input type="text" placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
//                             <Input type="text" placeholder='Url1' onChange={(e) => setUrl1(e.target.value)} />

//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents='none'
//                                     color='gray.300'
//                                     fontSize='1.2em'
//                                     children='$'
//                                 />
//                                 <Input type={"number"} placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
//                                 <InputRightElement children={<CheckIcon color='green.500' />} />
//                             </InputGroup>
//                             <Input type="number" placeholder='Url1' onChange={(e) => setStock(e.target.value)} />
//                         </Stack>

//                         <Stack >

//                             <Input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
//                             <Input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} />
//                             <Input type="text" placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
//                             <Input type="text" placeholder='Url1' onChange={(e) => setUrl1(e.target.value)} />
//                             <Input type="text" placeholder='Url2' onChange={(e) => setUrl2(e.target.value)} />
//                             <Input type="text" placeholder='Url3' onChange={(e) => setUrl3(e.target.value)} />
//                             <Input type="text" placeholder='Url4' onChange={(e) => setUrl4(e.target.value)} />
//                             <Input type="text" placeholder='Url5' onChange={(e) => setUrl5(e.target.value)} />
//                             <InputGroup>
//                                 <InputLeftElement
//                                     pointerEvents='none'
//                                     color='gray.300'
//                                     fontSize='1.2em'
//                                     children='$'
//                                 />
//                                 <Input placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
//                                 <InputRightElement children={<CheckIcon color='green.500' />} />
//                             </InputGroup>
//                         </Stack>
//                     </Grid>
//                     <Button style={{width:"70%",margin:"20px"}} onClick={submitData} >Submit</Button>
//                 </div>
//             </div>
//         </>
//     );
// }
















import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Grid,
    TagLabel,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    useToast,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import axios from 'axios';
import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import Toast from '../Toast/Toast';

const getCookie = () => {
    let cookie = document.cookie
    let decode = decodeURIComponent(cookie)
    return decode.split("=")
}
let cookie = getCookie()
console.log(cookie[1])

export default function SimpleCard() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [model, setModel] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [url3, setUrl3] = useState("");
    const [url4, setUrl4] = useState("");
    const [url5, setUrl5] = useState("");
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()
    const [Heading1, setHeading1] = useState("")
    const [Heading2, setHeading2] = useState("")
    const [Heading3, setHeading3] = useState("")
    const [Heading4, setHeading4] = useState("")
    const [Heading5, setHeading5] = useState("")
    const [Content1, setContent1] = useState("")
    const [Content2, setContent2] = useState("")
    const [Content3, setContent3] = useState("")
    const [Content4, setContent4] = useState("")
    const [Content5, setContent5] = useState("")
    const [dis_Price, setDisPrice] = useState()
    const [discount, setDiscount] = useState()
    const [status, setStatus] = useState("")
    const toast = useToast()

    const products =
    {
        title: title,
        description: description,
        category: category,
        images: [
            {
                url: url1
            },
            {
                url: url2
            },
            {
                url: url3
            },
            {
                url: url4
            },
            {
                url: url5
            }
        ],
        details: [
            {
                heading: Heading1,
                content: Content1
            },
            {
                heading: Heading2,
                content: Content2
            },
            {
                heading: Heading3,
                content: Content3
            },
            {
                heading: Heading4,
                content: Content4
            },
            {
                heading: Heading5,
                content: Content5
            }
        ],
        price: +price,
        stock: +stock,
        discounted_price: +dis_Price,
        discount: +discount,
        model:model,
        status: status
    }

    const submitData = () => {
        fetch(`https://awful-pear-bedclothes.cyclic.app/api/admin/product/new`, {
            method: "POST",
            body: JSON.stringify(products),
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                if(res.success==true){
                    toast({
                        title: "Data Added successful",
                        position: "top",
                        isClosable: true,
                        duration: 5000
                      })
                }else{
                    toast({
                        title: "error",
                        position: "top",
                        isClosable: true,
                        duration: 5000
                      })
                }
            })
            .catch((err) => console.log(err))
    }


    const refresh=()=>{
        window.location.reload();
    }
    return (
        <>
            <Stack display={"block"} align={'center'}>
                <Heading fontSize={'4xl'}>Add New Product</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    If don't want to add something <RouterLink to={"/allproducts"} color={'blue.400'}>
                       <span style={{color:"#0a9286",fontWeight:"bold"}}> Click here</span></RouterLink> ✌
                </Text>
            </Stack>
            <Button onClick={refresh}>Refresh</Button>
            <div
                display={{ base: "grid", md: "grid", xl: "flex", "2xl": "flex" }}
                justifycontent={{ xl: "space-around", "2xl": "space-around" }}
                alignitems={{ xl: "center", "2xl": "center" }}
            >

                <div display="grid" style={{ margin: "50px", gap: "2rem" }}>
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(3, 1fr)", "2xl": "repeat(3, 1fr)" }} gap={"2rem"}
                        align={'center'}
                        justify={'center'}
                    >
                        <Stack >
                            <Heading>Basic</Heading>
                            <Input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                            <Input type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
                            <Input type="text" placeholder='Category' onChange={(e) => setCategory(e.target.value)} />
                            <Input type="text" placeholder='Image Url1' onChange={(e) => setUrl1(e.target.value)} />
                            <Input type="text" placeholder='Image Url2' onChange={(e) => setUrl2(e.target.value)} />
                            <Input type="text" placeholder='Image Url3' onChange={(e) => setUrl3(e.target.value)} />
                            <Input type="text" placeholder='Image Url4' onChange={(e) => setUrl4(e.target.value)} />
                            <Input type="text" placeholder='Image Url5' onChange={(e) => setUrl5(e.target.value)} />
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                <Input type={"number"} placeholder='Price' onChange={(e) => setPrice(e.target.value)} />
                                <InputRightElement children={<CheckIcon color='green.500' />} />
                            </InputGroup>
                            <Input type="number" placeholder='Stock' onChange={(e) => setStock(e.target.value)} />
                        </Stack>
                        <Stack >
                            <Heading>Details</Heading>
                            <Input type="text" placeholder='Heading1' onChange={(e) => setHeading1(e.target.value)} />
                            <Input type="text" placeholder='Content1' onChange={(e) => setContent1(e.target.value)} />
                            <Input type="text" placeholder='Heading2' onChange={(e) => setHeading2(e.target.value)} />
                            <Input type="text" placeholder='Content2' onChange={(e) => setContent2(e.target.value)} />
                            <Input type="text" placeholder='Heading3' onChange={(e) => setHeading3(e.target.value)} />
                            <Input type="text" placeholder='Content3' onChange={(e) => setContent3(e.target.value)} />
                            <Input type="text" placeholder='Heading4' onChange={(e) => setHeading4(e.target.value)} />
                            <Input type="text" placeholder='Content4' onChange={(e) => setContent4(e.target.value)} />
                            <Input type={"text"} placeholder='Heading5' onChange={(e) => setHeading5(e.target.value)} />
                            <Input type="text" placeholder='Content5' onChange={(e) => setContent5(e.target.value)} />
                        </Stack>
                        <Stack >
                            <Heading>Price & Status</Heading>
                            <Input type="text" placeholder='Model' onChange={(e) => setModel(e.target.value)} />
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                <Input type={"number"} placeholder='Discounted Price' onChange={(e) => setDisPrice(e.target.value)} />
                                <InputRightElement children={<CheckIcon color='green.500' />} />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                <Input type={"number"} placeholder='Discount' onChange={(e) => setDiscount(e.target.value)} />
                                <InputRightElement children={<CheckIcon color='green.500' />} />
                            </InputGroup>
                            <Input type="text" placeholder='Status' onChange={(e) => setStatus(e.target.value)} />
                            <Input type="text" placeholder='' onChange={(e) => setUrl1(e.target.value)} />
                            <Input type="text" placeholder='' onChange={(e) => setUrl2(e.target.value)} />
                            <Input type="text" placeholder='' onChange={(e) => setUrl3(e.target.value)} />
                            <Input type="text" placeholder='' onChange={(e) => setUrl4(e.target.value)} />
                            <Input type="text" placeholder='' onChange={(e) => setUrl5(e.target.value)} />
                            <Input type="number" placeholder='' onChange={(e) => setStock(e.target.value)} />
                        </Stack>
                    </Grid>
                    <Button style={{ width: "70%", margin: "20px" }} onClick={submitData} >Submit</Button>
                </div>

            </div>
        </>
    );
}
