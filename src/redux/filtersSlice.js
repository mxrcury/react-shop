import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "",
  activeCategorie:0,
  activeSortType:{type:'rating',order:'desc'}
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategorie(state,action){
        state.activeCategorie = action.payload
    },
    setSortType(state,action){
      state.activeSortType=action.payload
    }
  },
});

export const { sortBy,setCategorie,setSortType } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
