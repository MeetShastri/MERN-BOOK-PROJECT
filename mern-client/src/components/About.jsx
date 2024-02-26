import React from 'react'
import aboutus from '../assets/cardimages/aboutus.png';
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div className='px-4 lg:px-24 my-20 bg-yellow-300 flex flex-col md:flex-row justify-between items-center gap-12'>
   
      <div className='md:w-1/2'>
          <img src={aboutus} alt="" />
      </div>
      <div className='md:w-1/2 space-y-6'>
          <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your required and <span className='text-yellow-700'>Lovely Books Here..</span></h2>
          <p className='mb-10 text-lg md:w-5/6'>At this Amazing Website, our mission is to foster a love for reading, learning, and discovery within our community. We strive to:
Provide access to a diverse collection of resources that cater to the interests and needs of our users.
Create a welcoming and inclusive environment where individuals of all backgrounds feel empowered to explore and engage with knowledge.
Support lifelong learning and personal growth by offering educational programs, workshops, and events.
Embrace technology and innovation to enhance the efficiency and effectiveness of library services.
</p>

      <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
        <div>
          <h3 className='text-3xl font-bold'>1000+</h3>
          <p className='text-base'>Books Available</p>
        </div>
        <div>
          <h3 className='text-3xl font-bold'>200+</h3>
          <p className='text-base'>Registrations</p>
        </div>
        <div>
          <h3 className='text-3xl font-bold'>2000+</h3>
          <p className='text-base'>Daily Users</p>
        </div>
      </div>
      <Link to="/contactus" className='mt-12 block'><button className='bg-yellow-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 my-4'>More Details</button></Link>
      </div>
    </div>
  )
}

export default About
