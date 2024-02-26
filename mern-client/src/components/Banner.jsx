import React from 'react'
import Card from '../home/Card'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-yellow-300 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Elevating Library Services <span className='text-yellow-700'>with Advanced Management</span></h2>
            <p >Effortlessly manage your library's entire collection, track patron activity, and streamline administrative tasks with Libro. From cataloging and circulation to resource management, Libro offers a comprehensive solution designed to enhance efficiency and improve library experiences for both staff and patrons.</p>
            <div>
                <input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none bg-yellow-100' />
                <button className='bg-gray-700 px-6 py-2 text-white font-medium transition-all duration-200 ease-in-out hover:bg-black'>Search</button>
            </div>
        </div>

        <div>
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default Banner
