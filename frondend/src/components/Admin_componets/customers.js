import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../Slices/User/authSlice";
import Sidebar from "./sidebar";


const Customers = () => {
  const users = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch users from your API or  dispatch the setUsers action
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/admin/userlist");
        
        const data = await response.json();
        dispatch(setUsers(data)); // Update the payload with your fetched data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="flex">
  < Sidebar/>
      
     
      <table className="w-full border-collapse border border-gray-400">
        
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Id</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b border-gray-300">
              <td className="p-2">{user._id}</td>
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.createdAt}</td>
            </tr>  
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
