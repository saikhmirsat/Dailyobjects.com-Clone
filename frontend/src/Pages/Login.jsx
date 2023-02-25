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

export default function Login() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const navigate = useNavigate()

    let token;
    const LoginFunc = () => {
        const payload = {
            email, password
        }
        console.log(payload)
        try {
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
                        let date = new Date()
                        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000))
                        const expires = date.toUTCString()
                        document.cookie = `${encodeURIComponent("token")}=${encodeURIComponent(res.token)};expires=${expires};path=/`
                        alert("User Successfully logedin")
                        localStorage.setItem("isAuth", true)
                        localStorage.setItem("role", JSON.stringify(res.user.role))
                        let user = res.user.role
                        if (user == "admin") {
                            navigate('/admindashboard')
                        }
                        if (user == 'user') {
                            navigate('/')
                        }
                    } else {
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
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </div>
    )
}
