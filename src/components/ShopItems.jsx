import React, { useEffect } from "react";
import ShopItem from "./ShopItem/ShopItem";
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from "../redux/productsSlice";
import Loader from "./ShopItem/Loader";

const ShopItems = (props) => {
  const { items,isLoading } = useSelector(({products}) => products)
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
export default ShopItems;
