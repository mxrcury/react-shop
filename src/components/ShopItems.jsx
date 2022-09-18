import React, { useEffect } from "react";
import ShopItem from "./ShopItem/ShopItem";
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from "../redux/productsSlice";
import Loader from "./ShopItem/Loader";
import PropTypes from 'prop-types';

const ShopItems = ({items,isLoading}) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getItems())
  },[])
  return (
    <>
      <div className="content__items">
        {isLoading && Array(10).fill(0).map((_,index)=><Loader key={index} />)}
        {items.map((el, index) => (<ShopItem key={index} {...el} />))}
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
