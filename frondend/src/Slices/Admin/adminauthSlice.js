import { createSlice } from "@reduxjs/toolkit";

// intial state is to check localstorage
const initialState ={
    userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo'))
    :null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        // setcredentials is to store data to the local storage
        setCredentials:(state,action)=>{
            state.userInfo=action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        // it is used to kill the credentials from the local storage
        logout:(state,action)=>{
            state.userInfo=null;
            localStorage.removeItem('userInfo');
        }
    }
})

export const {setCredentials,logout} = authSlice.actions;

export default authSlice.reducer;