import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import counterSlice from "./slices/counterSlice";


let combinedReducer=  combineReducers({
    counter: counterSlice,
    auth: authSlice,
})

export default combinedReducer