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
import {Link as RouterLink} from "react-router-dom"
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import Productcard from '../Card/Productcard';

const Links = [<RouterLink to="#">Dashboard</RouterLink>, '', 'Team'];

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

export default function Products() {

    const all=[
        {
            id:1,
            img:"https://avatars.githubusercontent.com/u/112657812?v=4"
        },
        {
            id:2,
            img:"https://avatars.githubusercontent.com/u/112657812?v=4"
        }
    ]
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [data, setData] = useState([]);
  const [product, setProduct] = useState("");

//   const getData=()=>{
//     axios.get(``).then((res)=>{
//         setData(res.data);
//     }).catch((error)=>{
//         console.log("error", error)
//     });
//   }

//   useEffect(()=>{
//     // console.log("render")
//     getData();
//   },[])

  const handleSearch=()=>{
    
  }

  Links[1]=`Total_${all.length}`

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box width={"10%"}><RouterLink to={"#"}><Image width={"100%"} src=''/></RouterLink></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            <Box width={"50%"}>
            <Input width={"50%"} value={product} onChange={(e)=>setProduct(e.target.value)} placeholder={"Search"}/>
            <Button onClick={()=>handleSearch()}><FaSearch width={"20px"}/></Button>
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
              <MenuList zIndex={999}>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
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
        
      <Box p={4} display="grid" gridTemplateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}}>
        {
            all.length>0 && all.map((el, index)=>{
                return <Productcard
                key={index}
                {...el}
                />
            })
        }
        
      </Box>
    </>
  );
}