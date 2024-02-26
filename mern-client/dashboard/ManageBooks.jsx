import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])


  const handleDelete = (id) => {
    toast.warning(<div>
      <p>Are you sure you want to delete this item?</p>
      <div>
        <button onClick={() => handleConfirmDelete(id)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Yes</button>
        <button onClick={toast.dismiss} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">No</button>

      </div>
    </div>, {
      position: "top-center",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleConfirmDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/book/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete book");
      }
      toast.dismiss(); // Dismiss the toast once deletion is confirmed
      toast.success("Book is Deleted Successfully");
      // Update state after successful deletion
      setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete book. Please try again later.");
    }
  };

  return (
    <div className='px-4 my-12 w-full'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books </h2>

      <div className='overflow-x-auto w-full'>
        <Table>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {
            allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.title}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                {/* <Table.Cell>$2999</Table.Cell> */}
                <Table.Cell>
                  <Link to={`/admin/dashboard/update-book/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 ">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 mr-5 py-1 font-semibold text-white rounded-sm hover:bg-yellow-600'>Delete</button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>)
          }
        </Table>
      </div>
    </div>
  )
}

export default ManageBooks
