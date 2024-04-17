import  { useContext } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/cardimages/signup.jpeg"// Import your background image
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logOut().then(() => {   
      toast.success("Sign Out successfull");
      navigate(from, { replace: true })     
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-lg mx-auto p-8 bg-black rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Logout</h2>
          <p className="text-white mb-6">Are you sure you want to logout?</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-4" onClick={handleLogout}>
            Logout
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-4" onClick={() => window.history.back()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Logout
