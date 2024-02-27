import React, { useState } from 'react'
import { Label, Textarea } from 'flowbite-react';
import { Button, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { useForm } from 'react-hook-form';


const UploadBook = () => {
  const { register, handleSubmit } = useForm();
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
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  const onSubmit = async (data) => {

    try {
      const formData = new FormData();

      formData.append("title",data.title)
      formData.append("authorName",data.authorName)
      formData.append("category",data.category)
      formData.append("description",data.description)
      formData.append("bookPdfURL",data.bookPdfURL)
      formData.append("image",data.image[0])

      const response = await axios.post("http://localhost:5000/upload-book",
        formData
      );
      if (response.status === 200) {
        toast.success("Book uploaded successfully!!!");
      } else {
        throw new Error("Failed to upload book");
      }
    } catch (error) {
      console.error("Error uploading book:", error);
      toast.error("Failed to upload book. Please try again later.");
    }
  };


  return (
    <div className='px-4 my-12 min-h-screen w-full'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Your Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" encType="multipart/form-data">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput {...register("title")} id="title" type="text" placeholder="Book Name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput {...register("authorName")} id="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="image" value="Book Image" />
            </div>
            <input {...register("image")} id="image" type="file" placeholder="Book Image" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block mx-2">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <select {...register("category")} id="category" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => <option value={option} key={option}>{option}</option>)}
            </select>
          </div>
        </div>

        <div className='lg:w-1/2'>
          <div className="mb-2 block mx-2">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea {...register("description")} id="description" placeholder="Description of Book..." required rows={4} />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfURL" value="Book PDF URL" />
          </div>
          <TextInput {...register("bookPdfURL")} id="bookPdfURL" type="text" placeholder="Book PDF URL" required />
        </div>
        <Button type="submit">Upload Book</Button>
      </form>
    </div>
  );
}

export default UploadBook;
