// end points that work with backend
import { apiSlice } from "../User/apiSlice";

const USERS_URL = '/api/admin';

/* (through dependency injection endpoints  function which takes 
builder. with query function we are passing data such as our email and
password/url is the back end url.in this form we are using to login )
this is builder query and fetching some data the  user login mutation  */


export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        adminlogin: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/admin`,
                method: 'POST',
                body: data
            })
        }),
        adminlogout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),

    })
})




export const {
    useAdminloginMutation
    , useAdminlogoutMutation,

} = adminApiSlice;