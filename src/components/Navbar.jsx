import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setNav(!nav);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'about' },
        { id: 2, link: 'experience' },
        { id: 3, link: 'projects' },
        { id: 4, link: 'contact' },
    ];

    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.nav
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : ''
                }`}
            style={{
                backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
            }}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <div className="z-10 cursor-pointer">
                    <h1 className="text-3xl font-bold text-[#64ffda]">Portfolio.</h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-lg hover:text-[#64ffda] duration-200"
                        >
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                    <li className="px-4">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[rgba(100,255,218,0.1)] transition duration-300">
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Hamburger */}
                <div
                    onClick={handleClick}
                    className="md:hidden z-10 cursor-pointer text-2xl"
                >
                    {nav ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`${nav
                            ? 'flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-gray-300 transform translate-x-0'
                            : 'hidden transform translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-[#64ffda]"
                        >
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
