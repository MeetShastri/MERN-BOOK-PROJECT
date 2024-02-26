import React from 'react'
import { Link } from 'react-router-dom'
import shortlisted from "../assets/cardimages/shortlisted.jpeg"

const Shortlisted = () => {
    return (
        <div className='mt-16 py-12 bg-yellow-300 px-4 lg:px-24'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 leading-snug'>ReadEasy has earned its place among the top 100 websites for library management solutions!</h2>
                    <Link to="/contactus" className='block'><button className='bg-yellow-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 my-4'>More Details</button></Link>
                </div>
                <div>
                    <img src={shortlisted} alt="" className='w-96 rounded-md' />
                </div>
            </div>
        </div>
    )
}

export default Shortlisted
