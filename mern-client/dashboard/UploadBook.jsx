import React, { useState } from 'react'
import { Label, Textarea } from 'flowbite-react';
import { Button, TextInput } from 'flowbite-react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadBook = () => {
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
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }


  const handleBookSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(formData)
    try {
      const response = await fetch("http://localhost:5000/upload-book", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to upload book");
      }

      toast.success("Book uploaded successfully!!!");
      form.reset();
    } catch (error) {
      console.error("Error uploading book:", error);
      toast.success("Failed to upload book. Please try again later.");
    }
  };

  return (
    <div className='px-4 my-12 min-h-screen w-full'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Your Book</h2>
      <form onSubmit={handleBookSubmit} className="flex flex-col gap-4" encType="multipart/form-data">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput name="title" id="title" type="text" placeholder="Book Name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput name="authorName" id="authorName" type="text" placeholder="Author Name" required />
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
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select name="category" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option value={option} key={option}>{option}</option>)
              }
            </select>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <div className="mb-2 block mx-2">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea name='description' id="description" placeholder="Description of Book..." required rows={4} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPdfURL" type="text" placeholder="Book PDF URL" name="bookPdfURL" required />
        </div>
        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  )
}

export default UploadBook
