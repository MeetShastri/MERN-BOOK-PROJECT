import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBookOpen, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "All Books", path: "/allbooks" },
        { link: "Contact Us", path: "/contactus" },
    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-yellow-300" : " "}`}>
                <div className="flex justify-between items-center">
                    <Link to='/' className='text-2xl font-bold flex items-center gap-2 text-yellow-700'><FaBookOpen className='inline-block' />ReadEasy</Link>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBars className='h-5 w-5 text-black' />}
                        </button>
                    </div>
                    <ul className='md:flex space-x-16 hidden items-center justify-center  flex-grow'>
                        {navItems.map(({ link, path }) => (
                            <li key={path}>
                                <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-yellow-700'>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`space-y-4 px-4 mt-16 py-7 bg-yellow-700 md:hidden ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>{link}</Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
