import React from 'react';
import Sidebar from './sidebar'; 

const Admin_home = () => {
  return (
    <div className='flex '>
      <div className='basis-[12%] h-[100vh] border '>
      <Sidebar/>
      <div   className='flex h-screen'style={{
        backgroundImage: `url("/assets/graph.jpg")
  `,
      }} >

      </div>
      </div>
      
    </div>
  )
}

export default Admin_home
