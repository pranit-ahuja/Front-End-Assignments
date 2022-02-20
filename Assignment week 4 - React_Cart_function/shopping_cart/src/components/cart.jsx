import React, { useState } from 'react'
import './cart.css';

const Cart = (props) => {
    var CurrencyFormat = require('react-currency-format');

  return (
    <>
    <h2>Your Cart   Total Price: <CurrencyFormat value={props.total} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></h2>
    <div className="catalog">
    {props.cartItems.map(item=>{
        return(
            <>
                 <div className='item' key={item.key}>
                    <h4>{item.brand.toUpperCase()}<br/></h4><p>{item.model}<br/><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></p>
                    <br/><button onClick={()=>props.deleteFromCart(item.key)}>DELETE</button>
                    </div>
            </>
        )
    })}
    </div>
    </>
  )
}

export default Cart