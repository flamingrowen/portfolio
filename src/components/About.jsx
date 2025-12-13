import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-auto bg-[#0a192f] text-gray-300 py-20'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Rohith, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am a Software Development Engineer at Amazon with 3 years of experience building scalable backend systems and high-performance web applications. My expertise lies in designing robust architectures, optimizing legacy code, and delivering customer-centric solutions in agile environments. I am passionate about engineering excellence, code quality, and solving complex technical challenges.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
