import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import { useDispatch } from 'react-redux';
import Loader from "./ShopItem/Loader";
import PropTypes from 'prop-types';
import { addItem } from "../redux/productsSlice";

const ShopItems = ({items,isLoading}) => {
  const dispatch = useDispatch()
  const onAddItem =(item)=>{
    dispatch(addItem(item))
  }

  return (
    <>
      <div className="content__items">
        {isLoading && Array(10).fill(0).map((_,index)=><Loader key={index} />)}
        {items.map((el, index) => (<ShopItem key={`${el.name}_${index}`} {...el} handleAdd={onAddItem}/>))}
      </div>
    </>
  );
};

ShopItems.propTypes={
  items:PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading:PropTypes.bool.isRequired
}
ShopItems.defaultProps={
  items:[],
  isLoading:false
}


export default ShopItems;
