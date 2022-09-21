import { createSlice } from '@reduxjs/toolkit';
import { getItemsReq } from '../api/apiRequests';

const initialState = {
    items:[],
    isLoading:true,
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    toggleLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {setItems,toggleLoading,addItem,setFullPrice} = productsSlice.actions

export const productsReducer = productsSlice.reducer


export const getItems = (category,sortType)=>dispatch=>{
    getItemsReq(category,sortType).then(response =>{
        dispatch(toggleLoading(true))
        dispatch(setItems(response.data))
        dispatch(toggleLoading(false))
    }).catch(error=>alert(error))
}