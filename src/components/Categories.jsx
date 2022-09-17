import React from 'react'
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategorie } from '../redux/filtersSlice';

const Categories = React.memo(() => {
  const categories = [
    'All',
    'Iphone',
    'iMac',
    'MacBook',
    'AppleWatch',
    'AirPods'
  ]
  const [active, setActive] = useState(0)

  const dispatch = useDispatch()
  const setActiveCategorie = useCallback((index) => {
    setActive(index)
    dispatch(setCategorie({ index }))
  },[])

  return (
    <div className="categories">
      <ul>
        {/* <li className={active === null && 'active'} onClick={() => setActive(null)}>All</li> */}
        {categories.map((el, index) => 
        <li 
        className={active === index ? 'active' : null} 
        onClick={() => setActiveCategorie(index)} 
        key={`${el.title}_${index}`} >{el}</li>)}
      </ul>
    </div>
  )
})

export default Categories
