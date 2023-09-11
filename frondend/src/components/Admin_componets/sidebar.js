import React from 'react';
import {Link} from 'react-router-dom'
import { FaTachometerAlt,
    FaChevronRight,
    FaRegSun } from 'react-icons/fa';
    import { AiOutlineBold} from "react-icons/ai";
    import { ImUsers} from "react-icons/im";
    import { BiLogOutCircle} from "react-icons/bi";



const sidebar = () => {
  return (
    <div className='bg-blue-300 h-screen px-[20p] w-[250px]'>
        <div className='px-[15px] py-[30px] flex item-center justify-center border-b-[1px] border-[#EDEDED]/[0.3] '>
            <h1 className='text-white text-[20px] font-bold cursor-pointer'>Admin Panel</h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]  ml-5'>
            <FaTachometerAlt color='white'/>
            <p className='text-[14px] leading-[20px] font-bold '>Dashboard</p>
 
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] ml-5'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Packages</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <AiOutlineBold color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Bookings</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <Link to='/customers'>
                    <div className='flex items-center gap-[10px]'>
                        <ImUsers color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Customers</p>
                    </div>
                    </Link>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <ImUsers color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Policy</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <BiLogOutCircle color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Logout</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>

            </div>
      
    </div>
  )
}

export default sidebar
