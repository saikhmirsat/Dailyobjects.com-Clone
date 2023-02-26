import styled from "styled-components";

const ProductPageWrapper = styled.div`
.productpage-filter{
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    padding-bottom: 20px;
}
.product-category-adjust{
    margin: auto;
    max-width: 970px;
}
.product-category-all{
    background-color: #1fa87e;
    height: 70px;
    width: 70px;
    border-radius: 50px;
    text-align: center;
    padding-top: 20px;
    font-size: 20px;
    color: White;
    font-weight: bold;
    :hover{
    border: 2px solid #1fa87e ;
}
}
.product-category-name{
    font-size: 26px;
    font-weight: bold;
    padding: 2rem 0rem;
}
.product-category-flex{
    gap: 20px;
    flex-flow: row nowrap;
    box-sizing: border-box;
    display: flex;
    margin: 0 auto;
    padding-left: 15px;
    overflow: auto hidden;

}
.product-category-img{
border-radius: 50%;
:hover{
    border: 2px solid #1fa87e ;
}
}
.product-category {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    width: 70px;
}
.product-category-name-bottom{
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    height: auto!important;
    text-underline-position: under;
}
.gridlayout {
        display: grid;
        width: 100%;
        gap: 15px;
        grid-template-columns: repeat(1fr,4);
    }
@media only screen and (min-width: 570px) and (max-width: 990px){
    .product-category-flex{
        ::-webkit-scrollbar {
        width: 3px;
        height: 5px;
      }
::-webkit-scrollbar-track {
        background-color: white;
      }
::-webkit-scrollbar-thumb {
        background-color: rgb(180, 172, 172);
      }

    }
}
@media only screen and (min-width: 320px) and (max-width: 570px){
    .product-category-flex{
    ::-webkit-scrollbar {
        width: 3px;
        height: 5px;
      }
::-webkit-scrollbar-track {
        background-color: white;
      }
::-webkit-scrollbar-thumb {
        background-color: white;
      }
    }
}
`
export {ProductPageWrapper}