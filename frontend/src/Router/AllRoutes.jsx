import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NewArrivals from '../Pages/NewArrivals'
import Register from '../Pages/Register'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/newarrivals' element={<NewArrivals />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            {/* <Route path='' element={ }></Route> */}
        </Routes>
    )
}
