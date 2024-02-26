import React, { useEffect, useState } from 'react'
import Books from '../components/MostReadBooks';
const MoreBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice()))
  }, [])
  return (
    <div>
      <Books books={books} headline="More Books To Read" />
    </div>
  )
}

export default MoreBooks
