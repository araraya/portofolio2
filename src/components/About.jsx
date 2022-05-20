import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Arya, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I have a passion for solving a problem. One way or approach in solving problems is by building technology or software to be a solution to a problem.
              Although I only have a little experience.
              But I am optimistic that I can provide the best solution or software to solve the problems you are facing.


            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
