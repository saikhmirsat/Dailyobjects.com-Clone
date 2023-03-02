import { Button, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
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
    <div>
      <Navbar/>
    <div className='container'>
      {/* <div style={{ width: "15%", height: "100vh", backgroundColor: "#f3f3f3",display:"grid",gridAutoColumns:"repeate(1, 1fr)",border:"1px solid black"}}>
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
      </div> */}
      <div style={{ width: "100%", height: "100vh", backgroundColor: "#f3f3f3" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "2rem" }}>
          <Button>Completed</Button>
          <Button>In Progress</Button>
        </div>
        <div>
          <TableContainer className='Table' style={{ marginTop: "10px" }}>
            <h2 style={{ fontSize: "30px", textAlign: "left", fontWeight: "bolder", padding: "20px" }}>All Orders</h2>
            <Table style={{ borderRadius: "10px" }} variant='striped' colorScheme='teal'>
              <TableCaption>Connect with us</TableCaption>
              <Thead >
                <Tr >
                  <Th>Item</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Status</Th>
                  <Th>Order</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr style={{height:"200px",border:"1px solid gray"}}>
                  <Td>
                    <Image borderRadius="100px"  width={"150px"} height="150px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwE4N1bx6FwiuVEu4slaTAbEns42WRVz351DnixnoE4A&s'></Image>
                  </Td>
                  <Td>Table</Td>
                  <Td>$1500</Td>
                  <Td>Pending</Td>
                  <Td>1 minute ago</Td>
                  <Td>Details</Td>
                </Tr>
                <Tr style={{height:"200px",border:"1px solid gray"}}>
                  <Td>
                    <Image borderRadius="100px" width={"150px"} height="150px" src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'></Image>
                  </Td>
                  <Td>Watch</Td>
                  <Td>$1200</Td>
                  <Td>Cancelled</Td>
                  <Td>3 minutes ago</Td>
                  <Td>Details</Td>
                </Tr>
              </Tbody>

            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
    </div>
  )
}
