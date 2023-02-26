import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Spinner
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function ForgotPassword() {
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    // const getCookie = () => {
    //     let cookie = document.cookie
    //     let decoded = decodeURIComponent(cookie)
    //     return decoded.split("=")

    // }

    // let ans = getCookie()
    // console.log(ans[1])

    const forgetBTN = () => {
        const payload = {
            email
        }
        setLoading(true)
        try {
            fetch(`https://awful-pear-bedclothes.cyclic.app/api/password/forgot`, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {
                    if (res.success) {
                        setLoading(false)
                        navigate('/resetpassword')
                    }
                    console.log(res)
                    localStorage.setItem("resetToken", res.resetToken)
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
                    Forgot your password?
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    You&apos;ll get an email with a reset link
                </Text>
                <FormControl id="email">
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={forgetBTN}
                    >
                        {loading ? <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        /> : "Request Reset"}

                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}