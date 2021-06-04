import './App.css';
import React,{useState,useEffect} from 'react'
import Header from "./componets/Header.js";
import Products from "./componets/Products.js";
import CartList from "./componets/CartList.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const[cart,setCart] = useState([])
    
  
  
 const products = ([
    
    {
      id:1,
      name:'Nike',
      price:1200,
      image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },

    {
      id:2,
      name:"Adidas",
      price:1800,
      image:"data:image/jpeg;base64,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"
    },


    {
      id:3,
      name:"Nike",
      price:1500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMMEVOizegMyr7vbnwT1hXk7ehXUVRSf0RQ&usqp=CAU"
    },

    {
      id:4,
      name:"Nike",
      price:2300,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcduURO8Dj6hquUnJdDul7CWBfgIdyFa3nq2fh6LopJDaFIyhMSqRQx1GQnz96Cqm_d8&usqp=CAU"
    },

    {
      id:5,
      name:"Nike",
      price:2000,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QTYp70Bq1mwkvwvsqdi_NJtzVpkUM3Qbqg&usqp=CAU"
    },

    {
      id:6,
      name:"Nike",
      price:1200,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC9LZ43So1GbPZEyqb3mrXtk2eIhysriZeg&usqp=CAU"
    },

    {
      id:7,
      name:"Reebok",
      price:1600,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOo2T0dWtzpClsZRhdLEKYVAOaa0W9kheTg&usqp=CAU"
    },

    {
      id:8,
      name:"Nike",
      price:1200,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROR7b5-JZhoiTQ52Pbb-p5SS2HRvDyzO8ReQ&usqp=CAU"
    },

    {
      id:9,
      name:"Adidas",
      price:3200,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZnCWT7sfE8TJyI3N0PbQpGxfzaiGH_l-jg&usqp=CAU"
    },

    {
      id:10,
      name:"Nike",
      price:3500,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-txld4851D6A9NEH4ZElcalN-fuPJpajs5w&usqp=CAU"
    },

    {
      id:11,
      name:"Reebok",
      price:2800,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxLmJKuN6UBVUXjDHI_0p2-WEWi7Ur_JcRA&usqp=CAU"
    },

    {
      id:12,
      name:"Nike",
      price:3200,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwjtab9b5cV_hMbiCmNZnQxMpUWkFyhrV4w&usqp=CAU"
    },
]);



const addToCart = (product) => {

let newCart = [...cart];
let itemInCart = newCart.find((item) => product.id === item.id);

if(itemInCart){
  itemInCart.quantity++;
}
else{
    itemInCart = {...product,quantity:1}
    newCart.push(itemInCart)
}
setCart(newCart);


//setCart([...cart,product])
  }

const DeleteFromCart = (product) => {
  
  setCart(cart.filter((e) => {
    return e!==product;
  })) 
}

const clearCart = () => {
  setCart([])
}


const getCartlength = () => {
  return cart.reduce((sum,{quantity}) => sum + quantity,0 )
}


useEffect(() => {
  const retriveItems = JSON.parse(localStorage.getItem("cart"))
   setCart(retriveItems)  
},[])

useEffect(() =>{
  localStorage.setItem("cart",JSON.stringify(cart))
},[cart])











 
  return (
        <>
       <Router>
       
        <Header getCartlength={getCartlength} />
        

        <Switch>
        <Route exact path='/product'>
        <CartList cart={cart} DeleteFromCart={DeleteFromCart} clearCart={clearCart}  />
        </Route>

         <Route exact path="/Add-To-Cart">
        <Products products={products} addToCart={addToCart}/>
        </Route>



        </Switch>
        </Router>
        </>
  );
}

export default App;

