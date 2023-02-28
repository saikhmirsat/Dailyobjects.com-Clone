import React, { useEffect } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    useToast,
  } from '@chakra-ui/react'
import axios from 'axios'


function DeleteUser({id,getData}) {
    
    let _id=id;
    //  console.log(_id)
    const toast = useToast()
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )

    // api/admin/product/
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    const Delete=(_id)=>{
        // console.log(_id)
        // window.location.reload();
        axios.delete(`https://awful-pear-bedclothes.cyclic.app/api/admin/users/${_id}`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then((res) => {
             console.log(res)
            if(res.data.success==true){
                // window.location.reload();
                getData();
                toast({
                    title: "User deleted successful",
                    position: "top",
                    status: "success",
                    isClosable: true,
                    duration: 5000
                  })
            }else{
                toast({
                    title: "Error",
                    position: "top",
                    status: "error",
                    isClosable: true,
                    duration: 5000
                  })
            }
        }).catch((error) => {
            console.log("error", error)
            if(error){
                toast({
                title: "Something went wrong",
                status: "error",
                position: "top",
                isClosable: true,
              })
            }
            
        });
    }

    // useEffect(()=>{
    //   getData();
    // });
  
    return (
      <>
        <Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Delete
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Delete Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure you want to delete this user....</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={()=>{
                Delete(_id)
                // deleteFunc()
                onClose()  
              } }>Confirm</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


  export default DeleteUser;