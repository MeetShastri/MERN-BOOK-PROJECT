import React, { useContext } from 'react'
import { Sidebar } from 'flowbite-react';
// import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import avatar3 from "../assets/cardimages/avatar3.avif";
import { FaBookOpen} from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";


const SideBar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="photo">
        <p> {user?.displayName || "Demo User" }</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Your Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>  
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={FaBookOpen}>
            Books
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
       </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar
