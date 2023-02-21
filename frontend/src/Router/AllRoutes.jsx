import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import NewArrivals from '../Pages/NewArrivals'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/newarrivals' element={<NewArrivals />}></Route>
            {/* <Route path='' element={ }></Route> */}
        </Routes>
    )
}
