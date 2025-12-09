import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects = () => {
    return (
        <div name='projects' className='w-full text-gray-300 bg-[#0a192f] py-32'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda] font-heading'>
                        Projects
                    </p>
                    <p className='py-6 font-mono text-[#64ffda]'>// Check out some of my recent work</p>
                </div>

                {/* Grid Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

                    {/* Project Item 1 */}
                    <div className='group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] relative overflow-hidden bg-[#112240] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'>
                        {/* Card Content (Visible by default in premium design) */}
                        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-center">
                                <FaFolder size={40} className="text-[#64ffda]" />
                                <div className="flex gap-4 text-gray-300">
                                    <a href="#" className="hover:text-[#64ffda] transition"><FaGithub size={20} /></a>
                                    <a href="#" className="hover:text-[#64ffda] transition"><FaExternalLinkAlt size={20} /></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda] transition">Project Name</h3>
                                <p className="text-sm text-[#8892b0]">A brief description of the project and tech stack used. Focus on value delivered.</p>
                            </div>
                            <div className="text-xs font-mono text-[#8892b0] mt-4 flex gap-3">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(100,255,218,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Item 2 */}
                    <div className='group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] relative overflow-hidden bg-[#112240] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'>
                        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-center">
                                <FaFolder size={40} className="text-[#64ffda]" />
                                <div className="flex gap-4 text-gray-300">
                                    <a href="#" className="hover:text-[#64ffda] transition"><FaGithub size={20} /></a>
                                    <a href="#" className="hover:text-[#64ffda] transition"><FaExternalLinkAlt size={20} /></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda] transition">Real-time Chat App</h3>
                                <p className="text-sm text-[#8892b0]">Built with React, Socket.io, and Node.js. Features live messaging and rooms.</p>
                            </div>
                            <div className="text-xs font-mono text-[#8892b0] mt-4 flex gap-3">
                                <span>Socket.io</span>
                                <span>Express</span>
                                <span>React</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(100,255,218,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Project Item 3 */}
                    <div className='group container rounded-md flex justify-center items-center mx-auto content-div h-[250px] relative overflow-hidden bg-[#112240] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'>
                        <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-center">
                                <FaFolder size={40} className="text-[#64ffda]" />
                                <div className="flex gap-4 text-gray-300">
                                    <a href="#" className="hover:text-[#64ffda] transition"><FaGithub size={20} /></a>
                                    <a href="#" className="hover:text-[#64ffda] transition"><FaExternalLinkAlt size={20} /></a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#e6f1ff] mb-2 group-hover:text-[#64ffda] transition">E-commerce Dashboard</h3>
                                <p className="text-sm text-[#8892b0]">Admin dashboard with charts and data visualization using Recharts.</p>
                            </div>
                            <div className="text-xs font-mono text-[#8892b0] mt-4 flex gap-3">
                                <span>Recharts</span>
                                <span>Tailwind</span>
                                <span>React</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(100,255,218,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
