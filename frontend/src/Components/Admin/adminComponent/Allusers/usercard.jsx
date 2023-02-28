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
import DeleteUser from '../deleteuser/Deleteuser';

  
  const IMAGE =
    'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000';
  
  export default function UserCard({_id,email,firstName,role,getData}) {


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
            <Text>{"User"}</Text>
          </Box >
          <Box style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Image
              rounded={'lg'}
              height={180}
              width={250}
              objectFit={'cover'}
              src={"https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"}
            />
            </Box>
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
              {`Role:- ${role}`}
            </Text>
            <Heading fontSize={'0.8rem'} fontFamily={'body'} fontWeight={500}>
            {firstName}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text  color={'gray.600'}>
              {` ${email}`}
              </Text>
            </Stack>
          </Stack>
          <Box style={{marginTop:"20px"}}>
          <DeleteUser
          id={_id}
          getData={getData}
          />
          </Box>
        </Box>

      </Center>
    );
  }