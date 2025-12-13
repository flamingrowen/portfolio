import React from 'react';

const Experience = () => {
    return (
        <div name='experience' className='w-full h-auto bg-[#0a192f] text-gray-300 py-20'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#64ffda]'>
                            Experience
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* Timeline Item 1 */}
                        <div className='bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300'>
                            <h3 className='text-2xl font-bold text-[#ccd6f6]'>Software Development Engineer</h3>
                            <p className='text-[#64ffda]'>Amazon</p>
                            <p className='text-sm text-[#8892b0] mb-4'>[Start Date] - Present</p>
                            <ul className='list-disc list-outside ml-5 space-y-2 text-[#8892b0]'>
                                <li>Designed and implemented scalable backend services using Java and AWS technologies (Lambda, DynamoDB, API Gateway).</li>
                                <li>Optimized legacy code performance, reducing latency by 20% and improving overall system reliability.</li>
                                <li>Collaborated with cross-functional teams to deliver customer-facing features in an Agile environment.</li>
                                <li>Participated in code reviews and mentored junior engineers to maintain code quality standards.</li>
                            </ul>
                        </div>

                        {/* Timeline Item 2 (Placeholder for Internship or Previous Role) */}
                        <div className='bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300 opacity-70'>
                            <h3 className='text-2xl font-bold text-[#ccd6f6]'>SDE Intern</h3>
                            <p className='text-[#64ffda]'>[Previous Company / Amazon]</p>
                            <p className='text-sm text-[#8892b0] mb-4'>[Start Date] - [End Date]</p>
                            <ul className='list-disc list-outside ml-5 space-y-2 text-[#8892b0]'>
                                <li>Developed full-stack web applications using React and Node.js.</li>
                                <li>Assisted in migrating on-premise infrastructure to the cloud.</li>
                                <li>Wrote unit and integration tests to ensure code robustness.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
