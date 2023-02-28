import React from 'react'
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


function DeleteProduct({id,getData}) {
    
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



//     const deleteFunc = async (id) => {
//         try {
//             await fetch(`https://awful-pear-bedclothes.cyclic.app/api/admin/product/${id}`, {
//                 method: "DELETE",
//                 headers: {
//                     "Content-type": "application/json"
//                 }
//             }).then((res) => res.json())
//                 .then((res) => console.log(res))
//                 // .then(res => getData())
//         } catch (err) {
//             console.log(err)
//         }
//     }


    const Delete=(_id)=>{
        // console.log(_id)
        
        axios.delete(`https://awful-pear-bedclothes.cyclic.app/api/admin/delete/${_id}`).then((res) => {
            // console.log(res)
            if(res.data.success==true){
                getData();
                toast({
                    title: "Data deleted successful",
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
                duration: 5000
              })
            }
            
        });
    }
  
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
              <Text>Are you sure you want to delete this product....</Text>
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


  export default DeleteProduct;