import React from 'react'
import './style.css'

export default function Products({products,addToCart}) {




    return (
        <>
            <h2>PRODUCTS</h2>

            <div className="productslist">

          
          {products.map((product,idx) => (
            <div className="card"  key={idx}>
                <img src={product.image} class="card-img-top" alt={Image} id="img"/>
                <div className="card-body">
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.price}</p>
                    <button type="button" class="btn btn-primary"
                    onClick = {() => addToCart(product)}
                    >Add To Cart</button>
                </div>
            </div>
          ))}
                
            

                
            </div>

        </>
    )
}
