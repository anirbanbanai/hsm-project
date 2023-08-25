import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FaSearchengin } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { AiTwotoneRocket } from 'react-icons/ai';
const Navbar = () => {
    const ff = <FaSearchengin />
    return (
        <div className='flex justify-between w-full  '>
            <div className='flex items-center'>
                <h1 className='text-3xl absolute ml-5'><CiSearch /></h1>
                <input type="text" placeholder="          Search" className="input input-bordered w-full max-w-xs bg-slate-200" />
            </div>
            <div className='flex items-center'>
                <button className='btn btn-warning'><AiTwotoneRocket className="text-2xl"/> Geeting started-0%</button>

                <button className='text-4xl ml-5'>
                    <IoNotificationsOutline />
                </button>
            </div>
        </div>
    );
};

export default Navbar; Navbar