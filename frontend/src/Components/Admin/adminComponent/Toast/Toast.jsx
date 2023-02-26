import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import React from "react";

function Toast() {
    const toast = useToast()
    const positions = [
      'top'
    ]
  
    return (
      <Wrap>
        {positions.map((position, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${position} toast`,
                  position: position,
                  isClosable: true,
                })
              }
            >
              Show {position} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }

  export default Toast;