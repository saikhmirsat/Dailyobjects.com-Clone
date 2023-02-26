import React from 'react'
import '../Styles/Register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Spinner
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Navbar from '../Components/Navbar'

export default function Register() {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const [firstName, setFname] = useState("")
    const [lastName, setLname] = useState("")
    // const [dob, setDob] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")




    const navigate = useNavigate()

    const handleRegister = () => {
        const payload = {
            firstName, lastName, password, email, mobile
        }
        console.log(payload)
        try {
            setLoading(true)
            fetch(`https://awful-pear-bedclothes.cyclic.app/api/register`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    setLoading(false)
                    if (res.success) {
                        alert("Register")
                        navigate('/login')
                        console.log(res)
                    } else {
                        alert(res.message)
                    }

                })
        } catch (err) {
            console.log(err)
            alert("Something Wrong")
        }

    }

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div id='register-main-cont'>
            <Navbar />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" onChange={(e) => setFname(e.target.value)} />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" onChange={(e) => setLname(e.target.value)} />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Box>
                                <FormControl id="mobile">
                                    <FormLabel>Mobile Number..</FormLabel>
                                    <Input type="number" onChange={(e) => setMobile(e.target.value)} />
                                </FormControl>
                            </Box>


                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }} onClick={handleRegister}>
                                    {loading ? <Spinner
                                        thickness='4px'
                                        speed='0.65s'
                                        emptyColor='gray.200'
                                        color='blue.500'
                                        size='md'
                                    /> : 'Sign up'}
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user? <Button bg='unset' color='blue.400' onClick={handleLogin}>Login</Button>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </div>
    )
}
