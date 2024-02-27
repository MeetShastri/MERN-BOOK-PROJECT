import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DashboardLayout = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
    <SideBar/>
     <Outlet/>
     <ToastContainer />
    </div>
  )
}

export default DashboardLayout
