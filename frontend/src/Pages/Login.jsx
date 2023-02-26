import React from 'react'
import '../Styles/Login.css'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import logo from '../Images/logo.png'
import ForgotPassword from "../Components/ForgetPass"
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
    useDisclosure,
    Spinner
} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'

export default function Login() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    let token;
    const LoginFunc = () => {
        const payload = {
            email, password
        }
        console.log(payload)
        try {
            setLoading(true)
            console.log(payload)
            fetch(`https://awful-pear-bedclothes.cyclic.app/api/login`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    if (res.success) {
                        console.log(res.user._id)
                        let date = new Date()
                        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))
                        const expires = date.toUTCString()
                        document.cookie = `${encodeURIComponent("token")}=${encodeURIComponent(res.token)};expires=${expires};path=/`
                        alert("User Successfully logedin")
                        localStorage.setItem("userId", JSON.stringify(res.user._id))
                        localStorage.setItem("isAuth", true)
                        localStorage.setItem("token", res.token)
                        localStorage.setItem("role", JSON.stringify(res.user.role))
                        localStorage.setItem("user", JSON.stringify(res.user))
                        let user = res.user.role
                        setLoading(false)
                        if (user == "admin") {
                            navigate('/admindashboard')
                        }
                        if (user == 'user') {
                            navigate('/')
                        }
                    } else {
                        setLoading(false)
                        alert(res.message)
                    }

                })
                .catch((err) => console.log(err))

        } catch (err) {
            console.log(err)
        }
    }

    const handleRegister = () => {
        navigate('/register')
    }
    return (

        <div className='login-div'>
            <Navbar />
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'} onClick={onOpen}>Forgot password?</Link>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <ForgotPassword />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                    Close
                                                </Button>
                                                <Button variant='ghost'>Secondary Action</Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Stack>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }} onClick={LoginFunc}>
                                    {loading ? <Spinner
                                        thickness='4px'
                                        speed='0.65s'
                                        emptyColor='gray.200'
                                        color='blue.500'
                                        size='md'
                                    /> : 'Sign in'}
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </div>
    )
}
