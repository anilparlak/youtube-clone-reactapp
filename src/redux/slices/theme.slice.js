import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: true
  };

export const themaSlice = createSlice({
    name:"theme",
    initialState,
    reducers: {
        setTheme: (state,action) => {
            state.isDark = action.payload
        }
    }
})

export const {setTheme} = themaSlice.actions;

export default themaSlice.reducer;