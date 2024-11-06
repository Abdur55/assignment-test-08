import React from 'react';
import banner from '../assets/banner.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='relative'>
            <div className='max-w-7xl mx-auto -mt-10 mb-96 bg-[#9538E2] pt-32 pb-32 '>
                <div className='text-center  text-white'>
                    <h2 className='text-6xl font-bold mb-5'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                    <p className='mb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <Link to='/dashboard' className='border rounded-full p-2 text-[#9538E2] bg-white'>Shop Now</Link>

                </div>
            </div>
            <div className='absolute top-96  mb-48 w-[696px] h-[222]  border rounded-lg p-5 ml-96 '>
            <div className=' text-center '>
                <img src={banner} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;