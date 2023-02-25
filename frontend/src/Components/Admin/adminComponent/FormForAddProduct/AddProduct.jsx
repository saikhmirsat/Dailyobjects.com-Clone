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
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

export default function SimpleCard() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [model, setModel] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [price, setPrice] = useState(0)


    const products =
    {
        title: title,
        description: description,
        category: category,
        images: [
            {
                url: url1
            }
        ],
        price: price
    }

    const submitData=(event)=>{
        event.preventDefault();
        console.log(products)
        axios.post('https://awful-pear-bedclothes.cyclic.app/api/admin/product/new',{products})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <>
            <Stack display={"block"} align={'center'}>
                <Heading fontSize={'4xl'}>Add New Product</Heading>
                <Text fontSize={'lg'} color={'gray.600'}>
                    If don't want to add something <RouterLink to={"/allproducts"} color={'blue.400'}>Click here</RouterLink> ✌️
                </Text>
            </Stack>
            <div
                display={{ base: "grid", md: "grid", xl: "flex", "2xl": "flex" }}
                justifyContent={{ xl: "space-around", "2xl": "space-around" }}
                alignItems={{ xl: "center", "2xl": "center" }}
            >
                <form onSubmit={submitData}>
                <Grid
                    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)", "2xl": "repeat(4, 1fr)" }} gap={10}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.50', 'gray.800')}>

                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="title" >
                                    <FormLabel>Title</FormLabel>
                                    <Input type="text"  
                                    onChange={(e)=>{setTitle(e.target.value)}}
                                    value={title}
                                    />
                                    <FormLabel>Description</FormLabel>
                                    <Input type="text" 
                                    onChange={(e)=>{setDescription(e.target.value)}}
                                    value={description}
                                    />
                                    <FormLabel>category</FormLabel>
                                    <Input type="text" 
                                    onChange={(e)=>{setCategory(e.target.value)}}
                                    value={category}
                                    />
                                    <FormLabel>URL</FormLabel>
                                    <Input type="text" />
                                    {/* <FormControl id="url2">
                                        <FormLabel>URL-2</FormLabel>
                                        <Input type="text" />
                                        </FormControl> */}
                                    <FormLabel>Price</FormLabel>
                                    <Input type="number" 
                                    onChange={(e)=>{setUrl1(e.target.value)}}
                                    value={url1}
                                    />
                                    <FormLabel>Stock</FormLabel>
                                    <Input type="number" 
                                    onChange={(e)=>{setPrice(e.target.value)}}
                                    value={price}
                                    />
                                </FormControl>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                            </Stack>
                        </Box>
                    </Stack>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" />
                                </FormControl>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
                <Stack spacing={10} style={{ width: "20%", margin: "auto" }}>
                    <Button
                        type='submit'
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Add
                    </Button>
                </Stack>
                </form>
            </div>
        </>
    );
}