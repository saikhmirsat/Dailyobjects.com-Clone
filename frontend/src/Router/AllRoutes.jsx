import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from '../Components/Admin/Admin'
import Form from '../Components/Admin/adminComponent/FormForAddProduct/AddProduct'
import Products from '../Components/Admin/adminComponent/ProductRoute/Products'
import Cart from '../Pages/Cart'
import CheckoutAddress from '../Pages/CheckoutAddress'
import CheckoutPayment from '../Pages/CheckoutPayment'
import Home from '../Pages/Home'
import Loading from '../Pages/Loading'
import Login from '../Pages/Login'
import NewArrivals from '../Pages/NewArrivals'
import ProductsDetails from '../Pages/ProductsDetails'
import Register from '../Pages/Register'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/newarrivals' element={<NewArrivals />}></Route>
            <Route path= '/productdetails' element={<ProductsDetails />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout-address' element={<CheckoutAddress />}></Route>
            <Route path='/checkout-payment' element={<CheckoutPayment />}></Route>
            <Route path='/loading' element={<Loading />}></Route>
            <Route path='/admindashboard' element={<Admin/>}></Route>
            <Route path='/allproducts' element={<Products/>}></Route>
            <Route path='/addproduct' element={<Form/>}></Route>
            {/* <Route path='' element={ }></Route> */}
        </Routes>
    )
}
