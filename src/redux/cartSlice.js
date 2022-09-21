import { createSlice,current } from "@reduxjs/toolkit";

const initialState = {
  items:{},
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTotalCount(state, action) {
      state.totalCount = action.payload;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    addItemToCart(state, action) {
      const {id} = action.payload
      const isArray = state.items[id] instanceof Array
      if(!isArray){state.items[id] = [action.payload]
      }else{
        state.items[id].push(action.payload)
        state.totalCount = state.totalCount + 2
      }
      const allItems = [].concat.apply([],Object.values(current(state.items)))
      state.totalCount = allItems.length
      state.totalPrice = allItems.reduce((sum,item)=>item.price+sum,0)
    },
    plusItem(state,action){
      const newItem = action.payload.item
      state.items[newItem.id].push(newItem)
      const allItems = [].concat.apply([],Object.values(current(state.items)))
      state.totalCount = allItems.length
      state.totalPrice = allItems.reduce((sum,item)=>item.price+sum,0)
    },
    minusItem(state,action){
      state.items[action.payload].pop()
      const allItems = [].concat.apply([],Object.values(current(state.items)))
      state.totalCount = allItems.length
      state.totalPrice = allItems.reduce((sum,item)=>item.price+sum,0)
    },
    removeItemFromCart(state,action){
      state.totalCount = state.totalCount - state.items[action.payload].length
      const currentItemsPrice = state.items[action.payload].reduce((sum,item)=>sum+item.price,0)
      state.totalPrice = state.totalPrice - currentItemsPrice
      state.items[action.payload].length = 0
    },
    cleanCart(state){
      state.items = {}
      state.totalCount = 0
      state.totalPrice = 0
    }
  }
});

export const { addItemToCart,plusItem,minusItem,removeItemFromCart,cleanCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
