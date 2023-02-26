import styled from "styled-components"

const ProductCardWrapper = styled.div`

background-color: #fafafa;
max-width: 470px;
.product-card-wishlist{
    cursor: pointer;
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 1000px;
}
.product-card-img{
    cursor: pointer;
    position: relative;
    object-fit: contain;
    :hover {
        .product-card-img-without-hover{
            display: none;
        }
        .product-card-img-with-hover{
            display: block;
        }
    }
    .product-card-img-with-hover{
            display: none;
        }

}
.product-card-bottom{
    margin: 12px 0px 0px;
    text-align: left;
}
.product-card-brand{
    color: rgba(0,0,0,.87);
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 7px 0;
    line-height: 16px;
}
.product-card-price{
    color: rgba(0,0,0,.87);
    font-size: 17px;
}
.product-card-price span{
    color: rgb(144, 144, 144);
    text-decoration: line-through;

}
.product-card-offer{
    color: rgb(194, 17, 34);
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
}
`

export {ProductCardWrapper}