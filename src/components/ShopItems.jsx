import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import { useDispatch } from 'react-redux';
import Loader from "./ShopItem/Loader";
import PropTypes from 'prop-types';
import { addItemToCart } from "../redux/cartSlice";

const ShopItems = ({items,inCartItems,isLoading}) => {
  const dispatch = useDispatch()
  const onAddItemToCart =(item)=>{
    dispatch(addItemToCart(item))
  }

  return (
    <>
      <div className="content__items">
        {isLoading && Array(10).fill(0).map((_,index)=><Loader key={index} />)}
        {items.map((el, index) => (<ShopItem key={`${el.name}_${index}`} {...el} inCartItem={inCartItems[el.id]} handleAddToCart={onAddItemToCart}/>))}
      </div>
    </>
  );
};

ShopItems.propTypes={
  items:PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading:PropTypes.bool.isRequired,
  // inCartItems:PropTypes.object.isRequired
}
ShopItems.defaultProps={
  items:[],
  isLoading:false,
  inCartItems:{}
}


export default ShopItems;
