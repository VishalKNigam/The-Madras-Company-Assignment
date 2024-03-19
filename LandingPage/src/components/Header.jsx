import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] py-[17px] 
            items-center flex justify-between mx-auto'>
                <div className='text-3xl font-bold'>
                    Vishal Tech
                </div>
                {toggle ? (<AiOutlineClose onClick={() => setToggle(!toggle)}
                    className='text-white text-2xl block md:hidden' />)
                    : (<AiOutlineMenu onClick={() => setToggle(!toggle)}
                        className='text-black text-2xl md:hidden block' />)}
                <ul className='hidden md:flex gap-10 text-white'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul >
                <ul className={`flex md:hidden gap-10 w-[100%] flex-col
                 h-screen text-white duration-300
                fixed bg-[black] top-[102px] 
                ${toggle ? `left-[0%]` : `left-[-100%]`}`}>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>Company</li>
                    <li className='p-2'>Resources</li>
                    <li className='p-2'>About</li>
                    <li className='p-2'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;