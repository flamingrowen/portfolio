import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]'>
                        Projects
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* Grid Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Project Item 1 */}
                    <div
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9)), url('https://via.placeholder.com/500')` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] bg-cover bg-center'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center duration-300'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project Name
                            </span>
                            <p className='text-center py-2 px-4 text-gray-300 text-sm'>A brief description of the project and tech stack used.</p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 2 */}
                    <div
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9)), url('https://via.placeholder.com/500')` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] bg-cover bg-center'
                    >
                        <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center duration-300'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Real-time Chat App
                            </span>
                            <p className='text-center py-2 px-4 text-gray-300 text-sm'>Built with React, Socket.io, and Node.js.</p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 3 */}
                    <div
                        style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9)), url('https://via.placeholder.com/500')` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] bg-cover bg-center'
                    >
                        <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center duration-300'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                E-commerce Dashboard
                            </span>
                            <p className='text-center py-2 px-4 text-gray-300 text-sm'>Admin dashboard with charts and data visualization.</p>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
