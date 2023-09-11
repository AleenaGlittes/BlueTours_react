import React from 'react';
import Header from './Header';
import Home from '../../User_components/home';
const HomePage = () => {
  return (
    <div className='flex  items-top h-screen bg-indigo-400 w-screen h-screen bg-cover'
      style={{
        backgroundImage: `url("/assets/banner.jpg")
  `,
      }}>
      <Header />
      <Home />
    </div>
  )
}

export default HomePage
