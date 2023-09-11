import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../Slices/User/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useUpdateUserMutation } from "../../Slices/User/usersApiSlice";


const Profile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const navigate = useNavigate();
    const dispath = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        setName(userInfo.name);
        setEmail(userInfo.email);
        setEmail()
    }, [userInfo.setName, userInfo.setEmail]);


    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Password do not match')
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    name, email, password
                }).unwrap();
                dispath(setCredentials({ ...res }));
                toast.success('profile Updated')
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    }

    return (


<div
  className="flex justify-center items-center h-screen bg-cover bg-center bg-blue"
  style={{
    backgroundImage: `url("/Assets/profile.jpg")`, 
  }}
>            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="text-3xl block text-center font-semibold">Update Profile</h1>
                <hr className="mt-3" />
                <div className="mt-3">
                    <label for="username" className="block text-base mb-2">UserName</label>
                    <input
                        type="text"
                        id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:outline-none focus:ring-0 focus-gray-600 "
                        placeholder="Enter username"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    ></input>
                </div>
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

                </div>
                <div className="mt-3">
                    <label for="confirmPassword" className="block text-base mb-2">Confirm Password</label>
                    <input type="password"
                        id="confirm Password"
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:outline-none focus:ring-0 focus-gray-600 "
                        placeholder="confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}>

                    </input>

                </div>
                {isLoading && (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                        <h2 className="ml-2">Loading...</h2>
                    </div>
                )}

                <button className="border-2 bg-blue-500 border-blue bg-blue pt-2 mt-2 text-py- 1 text-blue py-5 w-full rounded-md hover:bg-blue-300 hover:text-indigo-700 font-semibold "
                    onClick={submitHandler}>
                    Update
                </button>


            </div>
        </div>
    )
}
export default Profile