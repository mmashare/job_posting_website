import { configureStore } from '@reduxjs/toolkit'
import FilterReducer from "../redux/filterValue.js"
import UserSlice from "./userSlice.js";
import AuthReducer from "./authToggle.js"
export const store = configureStore({
    reducer:{
        Filter:FilterReducer,
        user:UserSlice,
        authToggle:AuthReducer
    }
})