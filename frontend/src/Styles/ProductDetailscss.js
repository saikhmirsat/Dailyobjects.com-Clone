import styled from "styled-components"


const ProductsDetailsBottom = styled.div`
.Product-details-right{
    font-size: 24px;
    font-weight: normal;
}
.Product-details-right span{
    font-size: 24px

}
.Product-details-right-exclusive{
    font-size: 14px;
    color: #909090;
    font-weight: normal;
}
.product-details-bottom{
    display: flex;
}
.product-details-bottom-right{
    display: flex;
    flex-direction: row-reverse;
}
.product-details-bottom-adujust-wid{
    width: 50%;
    display: flex;
  align-items: center;
  justify-content: center;
}
.product-details-bottom-banner{
    max-width: 440px;
    margin: 20px;
    text-align: left;
}
.product-details-bottom-banner>h1{
    font-size: 28px;
}
.product-details-bottom-banner>p{
    margin: 18px 0px;
    font-size: 16px;
    font-weight: lighter;
}
.product-details-bottom-img{
    display: flex;

}

`
export {ProductsDetailsBottom}