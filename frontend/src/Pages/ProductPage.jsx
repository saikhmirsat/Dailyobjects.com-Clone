import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/App/action";
import ProductCard from "../Components/ProductCard"
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
    const term = location.state?.query;
    const products = useSelector((state) => state.AppReducer.products)
    console.log(products.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduct(term))
    }, [dispatch,term]);
  return (
    <div>ProductPage
    {products.products?.map((item) => {
                    return (<ProductCard key={item._id} id={item._id} item={item} />)
                })}
    </div>
  )
}

export default ProductPage