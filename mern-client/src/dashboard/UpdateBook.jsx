import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Label, Textarea } from 'flowbite-react';
import { Button, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

const UpdateBook = () => {
  const { id } = useParams();
  const { title, authorName, description, bookPdfURL } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non Fiction",
    "Science Fiction",
    "Programming",
    "Autobiography",
    "History",
    "Horror",
    "Religion",
    "Travel"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const title = formData.get('title');
    const authorName = formData.get('authorName');
    const description = formData.get('description');
    const category = formData.get('category');
    const bookPdfURL = formData.get('bookPdfURL');
    const image = formData.get('image');

    const updateBookObj = {
      title,
      authorName,
      description,
      category,
      bookPdfURL,
    };

    if (image) {
      formData.delete('image');
      formData.append('image', image);
    }

    try {
      const response = await axios.patch(`http://localhost:5000/book/${id}`, formData);

      if (!response.data) {
        throw new Error("Failed to update book");
      }
      toast.success("Book updated successfully!!!");
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("Failed to update book. Please try again later.");
    }
  };

  const confirmToast = () => {
    toast.info(
      <div>
        <p>Are you sure you want to update this book?</p>
        <div>
          <button onClick={handleUpdate} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">
            Yes
          </button>
          <button onClick={() => toast.dismiss()} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            No
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
    );
  };

  return (
    <div className='px-4 my-12 min-h-screen w-full'>
      <h2 className='mb-8 text-3xl font-bold'>Update Your Book</h2>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4" encType="multipart/form-data">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput name='title' id="title" type="text" placeholder="Book Name" defaultValue={title} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput name='authorName' id="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="image" value="Book Image" />
            </div>
            <input name="image" id="image" type="file" placeholder="Book Image" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <select name="category" id="category" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option value={option} key={option} >{option}</option>)
              }
            </select>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <div className="mb-2 block mx-2">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea name='description' id="description" placeholder="Description of Book..." defaultValue={description} required rows={4} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPdfURL" type="text" placeholder="Book PDF URL" name="bookPdfURL" defaultValue={bookPdfURL} required />
        </div>
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  )
}

export default UpdateBook;

