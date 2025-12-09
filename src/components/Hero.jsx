import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="text-[#64ffda]"
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
                >
                    Rohith Anil Kumar
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
                >
                    Software Development Engineer I.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-[#8892b0] py-4 max-w-[700px]"
                >
                    Specializing in building exceptional digital experiences. Currently, I’m focused on building scalable backend systems and accessible, human-centered products at Amazon.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link to="projects" smooth duration={500} className="group w-fit text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-[#0a192f] duration-300 cursor-pointer">
                        View Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 " />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
