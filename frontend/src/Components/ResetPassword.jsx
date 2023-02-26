import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Spinner
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

    const [loading, setLoading] = useState(false)

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()
    let resetToken = localStorage.getItem("resetToken")

    const resetFunc = () => {
        const payload = {
            password,
            confirmPassword
        }
        setLoading(true)
        try {
            fetch(`https://awful-pear-bedclothes.cyclic.app/api/password/reset/${resetToken}`, {
                method: "PUT",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    if (res.success) {
                        setLoading(false)
                        alert("Your Password updated Successfully")
                        navigate('/')
                    }
                    console.log(res)
                    alert(res)
                })
        } catch (err) {
            console.log(err)
            alert("Something Wrong")
        }

    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Enter new password
                </Heading>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" onChange={(e) => setPassword(e.target.value)} />
                </FormControl>

                <FormControl id="confirmpassword" isRequired>
                    <FormLabel>Confirm Password </FormLabel>
                    <Input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={resetFunc}
                    >
                        {loading ? <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        /> : " Submit"}
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}