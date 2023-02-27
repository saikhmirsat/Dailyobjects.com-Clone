import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../Components/ProductCard'
import '../Styles/Search.css'
import { SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'

export default function Search() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [text, setText] = useState(undefined)
    console.log(data)
    const searchFunc = () => {
        try {
            setLoading(true)
            fetch(`https://awful-pear-bedclothes.cyclic.app/api/products?keyword=${text}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => res.json())
                .then((res) => {

                    setLoading(false)
                    setData(res.products)

                })
        } catch (err) {
            console.log(err)
            alert("Something Wrong")
        }
    }
    useEffect(() => {
        searchFunc()
    }, [text])

    return (
        <div className='searchbox-main-con'>
            <Navbar />
            <motion.input
                whileInView={{ scale: [0, 1.1], top: 3 }}
                transition={{ duration: 1 }}
                type="text" placeholder='search' onChange={(e) => setText(e.target.value)} />
            {/* <button onClick={searchFunc}>Search</button> */}
            <SimpleGrid columns={[2, 3, 4]} spacing="15px">
                {data && data.map((item) => {
                    return (<ProductCard key={item._id} id={item._id} item={item} />)
                })}
            </SimpleGrid>
        </div>


    )
}
