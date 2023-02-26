import styled from "styled-components"


const ProductsDetailsBottom = styled.div`
.product-detalis-flex{
    display: flex;
}
.product-detalis-sliderbox{
    width: 50%;
    padding: 10px;
}
.Product-details-right{
    max-width: 470px;
    margin: auto;
    text-align: left;
}
.Product-details-right-heading{
    font-size: 24px;
    margin: 0px 0px 12px;
    font-weight: normal;
}
.Product-details-right-heading>b{
    font-size: 24px;
}
.Product-details-right-total-price{
    font-size: 24px;
    margin: 0px 10px;
    color: rgb(144, 144, 144);
    text-decoration: line-through;
}
.Product-details-right-addtocart-button{
    border-radius: 0px;
    font-size: 14px;
    padding:25px 16px;
    width: 100%;
    margin: 0px 5px;
    background-color: #20a87e;
    color: white;
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    :hover{
        text-decoration: underline;
        background-color: #20a87e;
    }
}
.Product-details-right-offer{
    color: #E66B55;
    font-size: 14px;
    margin:16px 0px;
}
.Product-details-right-exclusive{
    font-size: 14px;
    color: #909090;
    font-weight: normal;
}
.Product-details-right-free{
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 10px;
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

@media only screen and (min-width: 770px) and (max-width: 1200px){


}

@media only screen and (min-width: 320px) and (max-width: 770px){
    .product-detalis-sliderbox{
    width: 100%;
}
    .product-details-bottom-img{
        display: block;
}
.product-detalis-flex{
    display: flex;
    flex-direction: column;
}
.product-details-bottom{
    display: flex;
    flex-direction: column;
}
.product-details-bottom-right{
    display: flex;
    flex-direction: column;
}
.product-details-bottom-adujust-wid{
    width: 100%;
    display: flex;
  align-items: center;
  justify-content: center;
}

margin: 1rem;
}
`
export {ProductsDetailsBottom}