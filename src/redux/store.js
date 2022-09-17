import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import thunkMiddleware from 'redux-thunk';
import { filtersReducer } from './filtersSlice';



export const store = configureStore({
    reducer:{
        products:productsReducer,
        filters:filtersReducer    
    },
    middleware:[thunkMiddleware]
})
