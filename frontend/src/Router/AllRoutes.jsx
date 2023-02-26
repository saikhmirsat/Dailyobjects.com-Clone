import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ResetPassword from '../Components/ResetPassword'
import Admin from '../Components/Admin/Admin'
import Form from '../Components/Admin/adminComponent/FormForAddProduct/AddProduct'
import Products from '../Components/Admin/adminComponent/ProductRoute/Products'
import Users from '../Components/Admin/adminComponent/Allusers/Users'
import Cart from '../Pages/Cart'
import CheckoutAddress from '../Pages/CheckoutAddress'
import CheckoutPayment from '../Pages/CheckoutPayment'
import Home from '../Pages/Home'
import Loading from '../Pages/Loading'
import Login from '../Pages/Login'
import NewArrivals from '../Pages/NewArrivals'
import ProductPage from '../Pages/ProductPage'
import ProductsDetails from '../Pages/ProductsDetails'
import Register from '../Pages/Register'
import Search from '../Pages/Search'
import UserProfile from '../Pages/UserProfile'
import OrderPage from '../Pages/OrderPage'


export default function AllRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/newarrivals' element={<NewArrivals />}></Route>
            <Route path='/products' element={<ProductPage />}></Route>
            <Route path='/products/:id' element={<ProductsDetails />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout-address' element={<CheckoutAddress />}></Route>
            <Route path='/checkout-payment' element={<CheckoutPayment />}></Route>
            <Route path='/loading' element={<Loading />}></Route>

            <Route path='/admindashboard' element={<Admin />}></Route>
            <Route path='/allproducts' element={<Products />}></Route>
            <Route path='/addproduct' element={<Form />}></Route>

            <Route path='/search' element={<Search />}></Route>
            <Route path='/resetpassword' element={<ResetPassword />}></Route>

            <Route path='/userprofile' element={<UserProfile />}></Route>

            <Route path='/allusers' element={<Users />}></Route>

            <Route path='/orderpage' element={<OrderPage />}></Route>

            {/* <Route path='' element={ }></Route> */}
        </Routes>
    )
}
