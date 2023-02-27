import { Button, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Orderpage.css'


export default function OrderPage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    await fetch(`https://awful-pear-bedclothes.cyclic.app/api/orders/me`, {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("singleres", res)
        setData(res.order)
      })
      .catch((err) => console.log(err))

  }

  useEffect(() => {
    console.log("singledata", data)
    getData()
  }, [])



  return (
    <div className='container'>
      <div style={{ width: "20%", height: "100vh", backgroundColor: "gray",display:"grid",gridAutoColumns:"repeate(1, 1fr)",border:"1px solid black"}}>
        <Heading> My orders</Heading>
        <div style={{display:"grid",gridAutoColumns:"repeate(1, 1fr)",alignItems:"flex-start"}}>
          <div>
            <Button>All Orders</Button>
          </div>
          <div>
          <Button>Recent</Button>
          </div>
          <div>
          <Button>Manage</Button>
          </div>
          <div>
          <Button>Details</Button>
          </div>
          <div>
            <Link to={"/userprofile"}>
          <Button>Go Back</Button>
          </Link>
          </div>
          
        </div>
      </div>
      <div style={{ width: "80%", height: "100vh", backgroundColor: "#e6fffa" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "2rem" }}>
          <Button>Completed</Button>
          <Button>In Progress</Button>
        </div>
        <div>
          <TableContainer className='Table' style={{ marginTop: "10px" }}>
            <h2 style={{ fontSize: "30px", textAlign: "left", fontWeight: "bolder", padding: "20px" }}>All Orders</h2>
            <Table style={{ borderRadius: "10px" }} variant='striped' colorScheme='teal'>
              <TableCaption>Connect with us</TableCaption>
              <Thead>
                <Tr>
                  <Th>Item</Th>
                  <Th>Details</Th>
                  <Th>Status</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>New user</Td>
                  <Td>Watch</Td>
                  <Td>1 minute ago</Td>
                  
                </Tr>
                <Tr>
                  <Td>New user</Td>
                  <Td>Watch</Td>
                  <Td>3 minutes ago</Td>
                  
                </Tr>
                <Tr>
                  <Td>Existing user</Td>
                  <Td>Mobile</Td>
                  <Td>5 minutes ago</Td>
                  
                </Tr>
                <Tr>
                  <Td>Old user</Td>
                  <Td>Bag</Td>
                  <Td>8 minutes ago</Td>
                  
                </Tr>
                <Tr>
                  <Td>Old user</Td>
                  <Td>Table</Td>
                  <Td>10 minutes ago</Td>
                  
                </Tr>
              </Tbody>

            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}
