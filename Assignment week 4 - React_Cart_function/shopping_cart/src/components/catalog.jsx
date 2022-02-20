import React, { useState } from 'react'
import './catalog.css';
import Cart from './cart';

const Catalog = () => {
var CurrencyFormat = require('react-currency-format');
const addToCart = (key)=>{
    const newCart = [...cartItems];
    const newItem= items.filter(nc=>nc.key===key);
    const newItem2 = newItem[0];
    const price = newItem2.price;
    setTotal(total+price);
    newCart.push(newItem2);
    setCart(newCart);
    
} 

const deleteFromCart=(key)=>{
    const oldCart = [...cartItems];
    const newCart = oldCart.filter(cart=>cart.key!==key);
    setCart(newCart);
    const deletedItem = oldCart.filter(cart=>cart.key===key);
    const price= deletedItem[0].price * deletedItem.length;
    setTotal(total- price);
}
const[cartItems, setCart] = useState([]);

const[total, setTotal] =useState(0);

const items = [{key:1, brand:"Victorinox", model: "Maverick", price: 39700}, {key:2, brand:"Victorinox", model: "Field Force", price: 29900}, {key:3, brand:"Victorinox", model: "Night Vision", price: 54400}, {key:4,brand:"Victorinox", model: "Alliance", price: 36400}, {key:5,brand:"Breitling", model: "Avenger", price: 308800},{key:6,brand:"Breitling", model: "Chronomat", price: 621520}, {key:7,brand:"Breitling", model: "Endurance Pro", price: 249380}, {key:8,brand:"Hublot", model: "Big Bang", price: 1730100}, {key:9,brand:"Hublot", model: "Classic Fusion", price: 861100}, {key:10,brand:"Audemars Piguet", model: "Code 11.59", price: 3297000},{key:11,brand:"Audemars Piguet", model: "Royal Oak", price: 4095000}, {key:12,brand:"Panerai", model: "Luminor", price: 1071000}, {key:13,brand:"Panerai", model: "Submersible", price: 1066000}];
  return (
    <>
    <h2>Catalog</h2>
    <div className="catalog">
        {items.map(item=>{return(
            <>
                <div className='item' key={item.key}>
                    <h4>{item.brand.toUpperCase()}<br/></h4><p>{item.model}<br/><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></p>
                    <button onClick={()=>addToCart(item.key)}>ADD TO CART</button>
                </div>
            </>
        )})}
    </div>
    <Cart cartItems={cartItems} total={total} deleteFromCart={deleteFromCart}/>
    </>
  )
}

export default Catalog