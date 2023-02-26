import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import "./Tables.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Tables = () => {
  const [data, setData] = useState([]);

  let length;
  const getData = () => {
    axios.get(`https://awful-pear-bedclothes.cyclic.app/api/admin/users`).then((res) => {
        // console.log(res)
        setData(res.data.users) 
        length=res.length;
    }).catch((error) => {
        
        console.log("error", error)
    });
}

useEffect(() => {
    // console.log("table",data)
    getData();
}, [])

  return (
    <TableContainer className='Table' style={{marginTop:"10px"}}>
        <h2 style={{fontSize:"30px", textAlign:"left",fontWeight:"bolder",padding:"20px"}}>Recent Orders</h2>
  <Table style={{borderRadius:"10px"}}  variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Order</Th>
        <Th>Category</Th>
        <Th>Time</Th>
        <Th isNumeric>User</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>New user</Td>
        <Td>Watch</Td>
        <Td>1 minute ago</Td>
        <Td >{data.length>0 && data[data.length-1].firstName}</Td>
      </Tr>
      <Tr>
        <Td>New user</Td>
        <Td>Watch</Td>
        <Td>3 minutes ago</Td>
        <Td >{data.length>0 && data[data.length-2].firstName}</Td>
      </Tr>
      <Tr>
        <Td>Existing user</Td>
        <Td>Mobile</Td>
        <Td>5 minutes ago</Td>
        <Td >{data.length>0 && data[data.length-3].firstName}</Td>
      </Tr>
      <Tr>
        <Td>Old user</Td>
        <Td>Bag</Td>
        <Td>8 minutes ago</Td>
        <Td >{data.length>0 && data[data.length-4].firstName}</Td>
      </Tr>
      <Tr>
        <Td>Old user</Td>
        <Td>Table</Td>
        <Td>10 minutes ago</Td>
        <Td >{data.length>0 && data[data.length-5].firstName}</Td>
      </Tr>
    </Tbody>
    
  </Table>
</TableContainer>
  )
}

export default Tables