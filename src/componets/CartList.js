import React from 'react'


export default function CartList({ cart, DeleteFromCart,clearCart}) {



  const totalsum = () => {
         return cart.reduce((sum,{price,quantity}) => sum + price * quantity,0);
  }

 




  return (
    <>
      <h2>Cart List</h2>
      

      
         {cart.length > 0 ?   
      <div class="d-grid gap-2 col-2" id="btn33">
        <button class="btn btn-danger" type="button" 
        onClick={clearCart}>Clear Cart</button>
        </div>
        :<p id="p11">List Is Empty</p>
}
        <div className="productslist">
        {cart.map((product, idx) => (
          <div class="card" key={idx}>
            <img src={product.image} class="card-img-top" alt={Image} />
            <div class="card-body">
              <p class="card-text">{product.name}</p>
              <p class="card-text">&#8377;{product.price}</p>
              <button type="button" class="btn btn-danger" id="btn44"
                onClick={() => DeleteFromCart(product)}
              >Delete from Cart</button>
              <span class="badge bg-secondary" id="badge">{product.quantity}</span>
              


            </div>
          </div>

          

          
        ))}
</div>
      {cart.length > 0 ?
      <div className="total">
          <h3>SUBTOTAL : &#8377;{totalsum()}</h3>
        </div>
        : ""
      }


    </>
  )
}


//increment(product)
//decrement(product)
