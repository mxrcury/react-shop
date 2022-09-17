import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "",
  activeCategorie:0
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortBy(state, action) {},
    setCategorie(state,action){
        state.activeCategorie = action.payload.index
    }
  },
});

export const { sortBy,setCategorie } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
