import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState=[
    {id: 1, fullname:"Walter Sckot"},
    {id: 2, fullname:"Walter White"},
    {id: 3, fullname:"Winsten Cherchel"},
];


const usersSlice=createSlice({
    name:"users",
    initialState:[],
    reducers:{
    },
});

export default usersSlice.reducer;