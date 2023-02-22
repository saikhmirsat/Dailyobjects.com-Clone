import React from 'react'
import '../Styles/Cart.css'

export default function Cart() {
    return (
        <div>
            <img src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-2,q-60" alt="" />
            <div className='cart-shopping-bag'>
                <h1>SHOPPING BAG</h1>
            </div>
            <div className='cart-prod-main-div'>
                <div className='cart-prod-child1'>
                    <div className='cart-child1-card-div'>
                        <div>
                            <img src="https://images.dailyobjects.com/marche/product-images/1106/red-blue-zine-airtag-case-square-images/Red-Blue-Zine-AirTag-Key-Ring-Holder-Square.png?tr=cm-pad_resize,v-2,w-134,h-164,dpr-2,q-60" alt="" />
                        </div>
                        <div>
                            <p>title</p>
                            <h4>Rs.499</h4>
                            <div className='cart-quntity-btn-box'>
                                <div className='cart-plus-minus'>
                                    <div>
                                        <button>-</button>
                                    </div>
                                    <div>
                                        <p>1</p>
                                    </div>
                                    <div>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart-prod-child2'></div>
            </div>
        </div>
    )
}
