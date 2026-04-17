import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { House, Clock3, ChartLine } from 'lucide-react';

const Navbar = () => {

    const links = <>
  <li>
    <NavLink 
    to={'/'} 
    className={({isActive}) => 
    `font-semibold mr-1 ${isActive ? "text-white bg-[#244d3f] border rounded-[5px]" : "" }`
    }>
    <House size={16} />
      Home
      </NavLink>
  </li>
  <li>
    <NavLink 
    to={'/timeline'} 
    className={({isActive}) => 
    `font-semibold mr-1 ${isActive ? "text-white bg-[#244d3f] border rounded-[5px]" : "" }`
    }>
    <Clock3 size={16} />
      Timeline
      </NavLink>
  </li>
  <li>
    <NavLink 
    to={'/stats'} 
    className={({isActive}) => 
    `font-semibold mr-1 ${isActive ? "text-white bg-[#244d3f] border rounded-[5px]" : "" }`
    }>
    <ChartLine size={16} />
      Stats
      </NavLink>
  </li>
  </>

    return (
        <div>
            <nav>
                <div className="bg-base-100 shadow-sm">
                    <div className="navbar container mx-auto justify-between">
                        {/* Left side - Logo + Mobile menu */}
                        <div className="navbar-start flex items-center">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={-1}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52 p-2 shadow bg-base-200"
                                >
                                    {links}
                                </ul>
                            </div>
                            
                            <Link to={'/'} className="text-2xl font-bold ml-4 lg:ml-0">
                                Keen<span className='text-[#244d3f]'>Keeper</span>
                            </Link>
                        </div>

                        {/* Center - Desktop menu - FIXED SPACING */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal gap-0">
                                {links}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;