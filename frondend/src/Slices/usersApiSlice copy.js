// end points that work with backend
import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users';

/* (through dependency injection endpoints  function which takes 
builder. with query function we are passing data such as our email and
password/url is the back end url.in this form we are using to login )
this is builder query and fetching some data the  user login mutation  */


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout:builder.mutation({
            query:()=>({
                url:`${USERS_URL}/logout`,
                method:'POST'
            })
        })
    })
})




export const { useLoginMutation,useLogoutMutation } = userApiSlice;