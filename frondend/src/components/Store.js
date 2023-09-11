import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slices/User/authSlice';
import { apiSlice } from '../Slices/User/apiSlice';
const Store =configureStore({
    reducer:{
        auth:authReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(apiSlice.middleware),
    devTools:true
});
export default Store