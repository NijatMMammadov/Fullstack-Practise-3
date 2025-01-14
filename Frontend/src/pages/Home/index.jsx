import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Helmet from "react-helmet"

function Home() {

    let [products, setProducts] = useState([])

    function getData() {
        axios.get("http://localhost:3000/items")
            .then(res => setProducts(res.data))
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <main>
                <section id='hero'>
                    <div className='hero'>
                        <div className='hero-content'>
                            <p>
                                Spring / Summer Collection 2017
                            </p>
                            <h3>
                                Get up to 30% Off New Arrivals
                            </h3>
                            <button className='hero-btn'>
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </section>

                <section id='banner'>
                    <div className='banner contain'>
                        <div className='banner-card'>
                            <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
                            <p className='banner-card-content'>
                                WOMEN`S
                            </p>
                        </div>
                        <div className='banner-card'>
                            <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
                            <p className='banner-card-content'>
                                ACCESSORIES`S
                            </p>
                        </div>
                        <div className='banner-card'>
                            <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
                            <p className='banner-card-content'>
                                MEN`S
                            </p>
                        </div>
                    </div>
                </section>

                <section id='products'>
                    <div className='products-title contain'>
                        <h3>
                            New Arrivals
                        </h3>
                        <hr />
                        <div className='type'>
                            <p>
                                All
                            </p>
                            <p>
                                Women`s
                            </p>
                            <p>
                                Accessories
                            </p>
                            <p>
                                Men's
                            </p>
                        </div>
                    </div>
                    <div className="products contain">
                        {
                            products.map(product => (
                                <div className='product' key={product._id}>
                                    <img src={product.image} alt="" />
                                    <p>
                                        {product.name}
                                    </p>
                                    <p style={{ color: "rgb(254, 76, 80)", fontSize: "18px" }}>
                                        <b>
                                            $ {product.price}.00
                                        </b>
                                    </p>
                                    {
                                        product.isSale ? "" : <p className='sale'>
                                            Sale
                                        </p>
                                    }
                                    {
                                        product.new ? "" : <p className='new'>New</p>
                                    }
                                    <div className='delete'>
                                        <IconButton><DeleteOutlineRoundedIcon /></IconButton>
                                        <IconButton><ShoppingCartRoundedIcon/></IconButton>
                                    </div>
                                    <button className='product-btn'>
                                        Add To Cart
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section>
                    
                </section>
            </main>
        </>
    )
}

export default Home
