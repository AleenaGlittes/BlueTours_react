import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Slices/User/authSlice';
import { useLogoutMutation } from '../../Slices/User/usersApiSlice';


const NavLinks = () => {

  const { userInfo } = useSelector((state) => state.auth);

  const dispath = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const logOutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispath(logout());
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/new">new</NavLink>
      <NavLink to='/newregister'>newreg</NavLink>

      {/* <NavLink to="/contact">Contact Us</NavLink> */}
      {/* <NavLink to="/login">Login</NavLink> 
      <NavLink to="/register">Signup</NavLink> */}
      {userInfo ? (
        <div className="relative group">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            {userInfo.name}
          </button>
          <ul className="hidden absolute right-0 items-top mt-2 bg-white border border-gray-300 rounded-md shadow-lg space-y-2 group-hover:block">
            <li>
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                onClick={logOutHandler} >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <NavLink
            to="/login"
            className=" text-white py-2 px-4 rounded"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className=" text-white py-2 px-4 rounded"
          >
            Register
          </NavLink>
        </>
      )}




    </>
  );
};


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-1/3 flex justify-end  ">
      <div className="hidden w-full justify-between md:flex ">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <div className='flex flex-col items-center basis-full flex-col '>
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Nav;
