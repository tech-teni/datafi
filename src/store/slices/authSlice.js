import { createSlice } from "@reduxjs/toolkit";


let initialState = 'not logged in'

 export let AuthSlice = createSlice({
name: 'auth',
initialState,
    reducers:{
   login: (state, action)=>{
    
    return state='logged in'
    },
    logout: (state, action)=>{
    
        return  state='not logged in'
     },
        

     customize: (state, action)=>{
    
        return  state=action.payload
     },
}


})



export const {login, logout, customize} =AuthSlice.actions
export default AuthSlice.reducer