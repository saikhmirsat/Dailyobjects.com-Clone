import { ReactNode, useEffect, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    Image,
    useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import Productcard from '../Card/Productcard';
import CommonSidebar from '../CommonSidebar/CommonSidebar';
import UserCard from './usercard';
import { InfinitySpin } from 'react-loader-spinner'
import { Link as RouterLink } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import Spinners from './Spinner';
import Logo from "../../images/logo.png";


const Links = [''];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Users() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [status, setStatus] = useState(false)
    const [data, setData] = useState([]);
    const [product, setProduct] = useState("");

    //   https://awful-pear-bedclothes.cyclic.app/

    const getData = () => {
        setStatus(false)
        axios.get(`https://awful-pear-bedclothes.cyclic.app/api/admin/users`).then((res) => {
            console.log(res)
            setData(res.data.users)
            setStatus(true);
        }).catch((error) => {
            setStatus(false);
            console.log("error", error)
        });
    }

    useEffect(() => {
        console.log(data)
        getData();
    }, [])

    const handleSearch = () => {

    }

    Links[0] = `Total_${data.length}`

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position="fixed" width={"100%"} zIndex="100">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                    <HStack spacing={8} alignItems={'center'}>
                        <Box width={"10%"}><RouterLink to={"/admindashboard"}><Image width={"100%"} src={Logo} /></RouterLink>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                        <Box width={"50%"}>
                            <Input width={"50%"} value={product} onChange={(e) => setProduct(e.target.value)} placeholder={"Search"} />
                            <Button onClick={() => handleSearch()}><FaSearch width={"20px"} /></Button>
                        </Box>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://avatars.githubusercontent.com/u/112657812?v=4'
                                    }
                                />
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            {/* <h1 style={{fontSize:"30px", textAlign:"left",fontWeight:"bolder",padding:"20px"}}>Products</h1> */}
            <div style={{ display: "flex", flexBasis: "row", width: "100%" }}>
                <CommonSidebar />
                <Box margin={{ base: "0px 0px 0px 30px ", md: "0px 0px 0px 210px", xl: " 0px 0px 0px 180px", "2xl": " 0px 0px 0px 250px" }} style={{ width: "80%" }}>
                    <Box p={4} gap="1rem" display="grid" marginTop={"5rem"} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}>
                        {
                            (!status) ? (
                                <Spinners />
                            ) :
                                data.length > 0 && data.map((el, index) => {
                                    return <UserCard
                                        key={index}
                                        {...el}
                                        getData={getData}
                                    />
                                })
                        }

                    </Box>
                </Box>
            </div>

        </>
    );
}