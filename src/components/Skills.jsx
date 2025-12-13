import React from 'react';
import { FaJava, FaAws, FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiGraphql, SiMongodb, SiPostgresql, SiKubernetes } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { id: 1, name: 'Java', icon: <FaJava size={50} color="#5382a1" /> },
        { id: 2, name: 'Spring Boot', icon: <SiSpringboot size={50} color="#6db33f" /> },
        { id: 3, name: 'AWS', icon: <FaAws size={50} color="#ff9900" /> },
        { id: 4, name: 'React', icon: <FaReact size={50} color="#61dbfb" /> },
        { id: 5, name: 'Node.js', icon: <FaNodeJs size={50} color="#68a063" /> },
        { id: 6, name: 'Docker', icon: <FaDocker size={50} color="#0db7ed" /> },
        { id: 7, name: 'Kubernetes', icon: <SiKubernetes size={50} color="#326ce5" /> },
        { id: 8, name: 'GraphQL', icon: <SiGraphql size={50} color="#e535ab" /> },
    ];

    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#64ffda] '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {skills.map((skill) => (
                        <div key={skill.id} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4'>
                            <div className='w-20 mx-auto'>{skill.icon}</div>
                            <p className='my-4'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
