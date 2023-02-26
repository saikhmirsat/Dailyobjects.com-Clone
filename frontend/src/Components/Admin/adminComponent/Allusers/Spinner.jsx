import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const Spinners = () => {
    return (
        <Box  margin={{base:"200px 100px 200px 100px",md:"250px 300px 300px 300px",xl:"200px 300px 300px 300px","2xl":"500px 400px 400px 500px"}}>
            <Spinner
                thickness='8px'
                speed='0.85s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl' />
        </Box>
    )
}

export default Spinners