import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAdminloginMutation } from "../../Slices/Admin/adminapiSlice";
import { setCredentials } from "../../Slices/User/authSlice";
import { toast } from 'react-toastify';



const Admin_Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispath = useDispatch();

    const [login, { isLoading }] = useAdminloginMutation();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/adminhome');
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap();
            dispath(setCredentials({ ...res }));
            navigate('/adminhome');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }

    return (

        <div className="flex justify-center items-center h-screen bg-indigo-400 w-screen h-screen bg-cover" 
        style={{
            backgroundImage: `url("/assets/background_login.jpg")`,
          }}>
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="text-3xl block text-center font-semibold">Admin Login</h1>
                <hr className="mt-3" />
                <div className="mt-3">
                    <label for="email" className="block text-base mb-2">Email</label>
                    <input
                        type="email"
                        id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:outline-none focus:ring-0 focus-gray-600 "
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    ></input>
                </div>
                <div className="mt-3">
                    <label for="Password" className="block text-base mb-2">Password</label>
                    <input type="password"
                        id="username"
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:outline-none focus:ring-0 focus-gray-600 "
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>

                    </input>
                    {isLoading && (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                            <h2 className="ml-2">Loading...</h2>
                        </div>
                    )}

                    <button className="border-2 border-blue bg-blue pt-2 mt-2 text-py- 1 text-blue py-5 w-full rounded-md hover:bg-blue-300 hover:text-indigo-700 font-semibold "
                        onClick={submitHandler}>
                        Login
                    </button>


                </div>

            </div>
        </div>
    )
}
export default Admin_Login