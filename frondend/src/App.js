import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import Home from './components/pages/User_Pages/HomePage';
import LoginPage from './components/pages/User_Pages/LoginPage';
import SignupPage from './components/pages/User_Pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/User_components/Profile';
import PrivateRoute from './components/PrivateRoute';
import Admin_home from './components/Admin_componets/Admin_home';
import Admin_Login from './components/Admin_componets/Admin_Login';
import Admin_customers from './components/Admin_componets/customers';
import LoginNEW from './components/User_components/newLogin';
import Register from './components/User_components/newRegister';




function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/admin" element={<Admin_Login/>} />
        <Route path="/adminhome" element={<Admin_home />} />
        <Route path="/customers" element={<Admin_customers />} /> 
        <Route path="/new" element={<LoginNEW/>}/>
        <Route path="/newregister" element={<Register/>}></Route>
        {/* <Route path="/new" element={}></Route> */}
        {/* private routes */}
        <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        

        </Route>
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
