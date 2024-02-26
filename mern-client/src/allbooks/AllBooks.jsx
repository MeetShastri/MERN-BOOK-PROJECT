import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
const AllBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect( () => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
    },[])
  return (
    <div className='mt-28 px-4 lg:px24'>
        <h2 className='text-5xl font-bold text-center'>All Books Are Available Here!!</h2>
        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
            
                {books.map(book => (<Card key={book._id} book ={book} className="max-w-sm">
                {console.log(book)}
                <img src={`http://localhost:5000/${book?.imagePath}`} alt="Book Cover" className='h-90'/>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {book.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {book.description.slice(0,101)}...
      </p>
      <button className='bg-yellow-700 font font-semibold text-white py-2'>Read More</button>
    </Card>
  ))}
     </div>
    </div> 
    
  )
}

export default AllBooks






