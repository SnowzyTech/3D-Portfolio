import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, mylogo, menu, close, twitter, linkdin, github, emma } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
        onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
        }}
        >
          <img src={emma} className="w-9 h-9  rounded-[50%]" />
          <p className='text-white xl:text-[19px] lg:text-[18px] md:text-[10px] text-[10px] xs:text-[5px] sm:text-[10px]
          font-bold cursor-pointer'>
            Ihekuna | Emmanuel
          </p>
        </Link>

        <div className="hidden md:flex items-center justify-between gap-9 md:gap-5">
          <a href="https://twitter.com/IhekunaEmmanue2?t=YnQpC1FUxjv03twc18sJ1Q&s=09" target={"_blank"}>
            <img src={twitter} alt="" className='w-7' />
          </a>
          <a href=" https://www.linkedin.com/in/emmanuel-ihekuna-57947a23a" target={"_blank"}>
            <img src={linkdin} alt="" className='w-7' />
          </a>
          <a href="https://github.com/snowzytech" target={"_blank"}>
            <img src={github} alt="" className='w-7' />
          </a>
          
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li 
            key={Link.id}
            className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white
             text-[18px] font-medium cursor-pointer`}
             onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>
                {Link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex' }
           p-6 flex-col black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-999 rounded-xl`}>
            <ul className='list-none flex justify-end gap-4 items-start flex-col'>
             {navLinks.map((Link) => (
               <li 
                key={Link.id}
                className={`${active === Link.title ? "text-white" : "text-secondary"}
                font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() =>  {
                  setToggle(!toggle)
                  setActive(Link.title)}
                }
                >
                   <a href={`#${Link.id}`}>
                     {Link.title}
                  </a>
               </li>
             ))}
           </ul>
           <div className=" mt-[32px] sm:flex-col flex items-center justify-between gap-9">
            <a href="https://twitter.com/IhekunaEmmanue2?t=YnQpC1FUxjv03twc18sJ1Q&s=09" target={"_blank"}>
            <img src={twitter} alt="" className='w-6' />
           </a>
          <a href=" https://www.linkedin.com/in/emmanuel-ihekuna-57947a23a" target={"_blank"}>
            <img src={linkdin} alt="" className='w-6' />
          </a>
          <a href="https://github.com/snowzytech" target={"_blank"}>
            <img src={github} alt="" className='w-6' />
          </a>
          
        </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar