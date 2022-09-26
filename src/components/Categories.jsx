import React from 'react'
import PropTypes from 'prop-types';

const Categories = React.memo(({active,handleClick}) => {
  const categories = [
    'All',
    'Iphone',
    'iMac',
    'MacBook',
    'AppleTV',
    'AirPods'
  ]

  return (
    <div className="categories">
      <ul>
        {/* <li className={active === null && 'active'} onClick={() => setActive(null)}>All</li> */}
        {categories.map((el, index) => 
        <li 
        className={active === index ? 'active' : null} 
        onClick={() => handleClick(index)} 
        key={`${el.title}_${index}`} >{el}</li>)}
      </ul>
    </div>
  )
})

Categories.propTypes={
  active:PropTypes.number.isRequired,
  handleClick:PropTypes.func
}

Categories.defaultProps ={
  active:0
}

export default Categories
