import React, { useEffect, useState } from 'react'
import Books from '../components/MostReadBooks';
import axios from "axios";
const MoreBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:5000/all-books")
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  }, []);
  return (
    <div>
      <Books books={books} headline="More Books To Read" />
    </div>
  )
}

export default MoreBooks
