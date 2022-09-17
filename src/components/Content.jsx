import React from "react";
import ShopItems from './ShopItems';
import Categories from './Categories';
import SortPopUp from './SortPopUp';
import { setCategorie } from "../redux/filtersSlice";
import { useDispatch } from 'react-redux';

const Content = () => {

  // const dispatch = useDispatch()

  // const setActiveCategorie = (index) =>{
  //   dispatch(setCategorie(index))
  // }
  
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <SortPopUp />
        </div>
        <h2 className="content__title">All devices</h2>
        <ShopItems />
      </div>
    </div>
  );
};

export default Content;
