import {
  createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import AllBooks from "../allbooks/AllBooks";
import DashboardLayout from "../../dashboard/DashboardLayout";
import Dashboard from "../../dashboard/Dashboard";
import UploadBook from "../../dashboard/UploadBook";
import ManageBooks from "../../dashboard/ManageBooks";
import UpdateBook from "../../dashboard/UpdateBook";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PrivateRoute from "../privateroute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },
      {
        path: "/admin/dashboard/update-book/:id",
        element: <UpdateBook />,
        loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  },
  // {
  //   path: "sign-up",
  //   element: <SignUp/>
  // },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "logout",
    element: <Logout />
  }
]);
export default router; 