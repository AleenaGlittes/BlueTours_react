import React from 'react';
import Header from './Header';
import Profile from '../../User_components/Profile';

const Profilepage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover w-screen"style={{
      backgroundImage: `url("/assets/profile.jpg")`,}}>
      <Header/>
      <Profile/>
    </div>
  )
}

export default Profilepage
