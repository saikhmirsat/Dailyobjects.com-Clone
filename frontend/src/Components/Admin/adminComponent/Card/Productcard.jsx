import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom";
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
  
  const IMAGE =
    'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000';
  
  export default function Productcard({_id,getData,title,category,color,description,discounted_price,images,numofReviews,price,ratings,reviews,stock}) {


    return (
      <Center py={12} >
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
            
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                <Box style={{margin:"auto",padding:"0.2rem 0"}}>
            <Text>{category}</Text>
          </Box >
          <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Image
              rounded={'lg'}
              height={180}
              width={250}
              objectFit={'cover'}
              src={images[0].url}
            />
            </Box>
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
              {`$ ${price}`}
            </Text>
            <Heading fontSize={'0.8rem'} fontFamily={'body'} fontWeight={500}>
            {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xm'}>
              {`$ ${price}`}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
              {discounted_price}
              </Text>
            </Stack>
          </Stack>
          <Box style={{display:"flex", justifyContent:"space-around", marginTop:"20px",marginBottom:"-15px"}}>
          <Text>Total Reviews</Text>
            <Text>Rating</Text>
            <Text>Review</Text>
          </Box>
          <Box style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
          <Text>{numofReviews}</Text>
            <Text>{ratings}</Text>
            <Text>{reviews}</Text>
          </Box>
          
          <Box style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
          <DeleteProduct
          id={_id}
          getData={getData}
          />
          <UpdateProduct
          id={_id}
          getData={getData}
          />
          </Box>
        </Box>
      </Center>
    );
  }