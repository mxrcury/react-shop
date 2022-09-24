import React from 'react'
import emptyCart from '../../assets/img/empty-cart.png'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div class="content">
        <div class="container container--cart">
          <div class="cart cart--empty">
            <h2>Cart is empty <icon>😕</icon></h2>
            <p>
            You probably haven't ordered device yet.<br />
               To order device, go to the main page.
            </p>
            <img src={emptyCart} alt="Empty cart" />
            <Link to="/" class="button button--black">
              <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default EmptyCart
