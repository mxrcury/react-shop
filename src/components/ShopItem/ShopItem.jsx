import React, { useState } from 'react'
import classNames from 'classnames'
import { PropTypes } from 'prop-types';

const ShopItem = ({ imageUrl, name, types, sizes, price, handleAddToCart,id,inCartItem }) => {
  const availableTypes = ['Classic', 'Pro']
  const availableSizes = [64, 128, 256]
  const [activeType, setActiveType] = useState(types[0])
  const [activeSize, setActiveSize] = useState(0)
  // const dispatch = useDispatch()

  const onSelectType = (index) => {
    setActiveType(index)
  }
  const onSelectSize = (index) => {
    setActiveSize(index)
  }

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Phone"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((el, index) => <li onClick={() => onSelectType(index)} className={classNames({
            active: activeType === index,
            disabled: !types.includes(index)
          })}>{el}</li>)}
        </ul>
        <ul>
          {sizes.map((size, index) => <li onClick={() => onSelectSize(index)} className={classNames({
            active: activeSize === index,
            disabled: !availableSizes.includes(size)
          })} >{size}gb</li>)}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from {price}$</div>
        <div className="button button--outline button--add" 
          onClick={() => {
            handleAddToCart({ id, imageUrl, price, name, type: availableTypes[activeType], size: availableSizes[activeSize] })
          }} 
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          {inCartItem && inCartItem.length >= 1 && <i>{inCartItem.length}</i>}
        </div>
      </div>
    </div>
  )
}

ShopItem.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  prices: PropTypes.number,
  inCartItem:PropTypes.arrayOf(PropTypes.object)
}

ShopItem.defaultProps = {
  types: [],
  sizes: [],
  name: 'No device',
  price: 0
}



export default ShopItem