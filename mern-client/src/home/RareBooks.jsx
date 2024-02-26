import React, { useEffect, useState } from 'react'
import Books from '../components/MostReadBooks';
const RareBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
  }, [])
  return (
    <div>
      <Books books={books} headline="Available Books" />
    </div>
  )
}

export default RareBooks
