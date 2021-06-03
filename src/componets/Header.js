import React from 'react'
import './style.css'
import {Link} from "react-router-dom"


export default function Header({getCartlength}) {



    return (
        <>
            <h1>Welcome To Shopping Cart</h1>

            <Link to="/product">
            <button type="button" class="btn btn-primary btn-lg" id="btn11">GO To Cart  ({getCartlength()}) </button>
            </Link>

                <Link to='/'>
                <button type="button" class="btn btn-primary btn-lg" id="btn22">View Product</button>
                </Link>
            


        </>




    )
    
}




