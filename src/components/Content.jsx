import React,{useCallback} from "react";
import ShopItems from './ShopItems';
import Categories from './Categories';
import SortPopUp from './SortPopUp';
import { setCategorie,setSortType } from "../redux/filtersSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Content = () => {

  const sortList = [{name:'Popular',type:'popular'},{name:"Price",type:'price'},{name:"from A-Z",type:'alphabet'}]
  
  const dispatch = useDispatch()
  const {activeCategorie,activeSortType,items,isLoading} = useSelector(({filters,products})=>{
    return{
      activeCategorie:filters.activeCategorie,
      activeSortType:filters.activeSortType,
      items:products.items,
      isLoading:products.isLoading,
    }
  })

  
  const onSelectCategorie = useCallback((index) => {
    dispatch(setCategorie(index))
  },[])

  const onSelectSortType = useCallback(type=>{
    dispatch(setSortType(type))
  },[])
  
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories active={activeCategorie} handleClick={onSelectCategorie} />
          <SortPopUp sortList={sortList} onSelectSortType={onSelectSortType} activeSortType={activeSortType} />
        </div>
        <h2 className="content__title">All devices</h2>
        <ShopItems items={items} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Content;
