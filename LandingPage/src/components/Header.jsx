import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <div className='bg-[yellow] p-4'>
                <div className='max-w-[1240px] py-[17px] 
            items-center flex justify-between mx-auto'>
                    <div className='text-3xl font-bold'>
                        Vishal Tech

                    </div>
                </div>
                {toggle ? (<AiOutlineClose onClick={()=>setToggle(!toggle)}
                className='text-black text-2xl block md:hidden' />) 
                : (<AiOutlineMenu onClick={()=>setToggle(!toggle)}
                className='text-black text-2xl md:hidden block' />)}
                <ul className='hidden md:flex gap-10 text-black bg-[red]'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul >
                <ul className='flex md:hidden gap-10 w-full h-screen text-black
                fixed bg-[blue] top-[120px] '>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;