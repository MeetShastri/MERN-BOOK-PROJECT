import React, { useEffect, useState } from 'react'
import Books from '../components/MostReadBooks';

const MostReadBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(1, 6)))
  }, [])
  return (
    <div>
      <Books books={books} headline="Most Read Books" />
    </div>
  )
}

export default MostReadBooks
