import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/cardimages/login.png';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit} = useForm();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (data) => {
    const { name, email, password } = data;
    try {
      await login(email, password, name);
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Email or Password is incorrect.");
    }
  };
  const handleRegister = () => {
    loginwithGoogle().then((result) => {
      const user = result.user;
      toast.success("Signed Up successfully!");
      navigate(from, {replace: true})
    }).catch ((error) => {
      // Handle errors
      console.error("Error signing up:", error.message);
      setError(error.message);
    });
  }
  return (
    <div>
      <div className="relative min-h-screen grid bg-black">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
          <div className="relative sm:w-1/2 xl:w-3/5 bg-white h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute bg-black opacity-25 inset-0 z-0"></div>
            <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
              <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center"></div>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center">
                  <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col space-y-8 mt-10">
                    <h1 className='text-white font font-bold text-3xl text-center'>Login</h1>
                      <label className="font-bold text-lg text-white">Full Name</label>
                      <input {...register('name')} type="text" placeholder="Enter Your Name" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                      <label className="font-bold text-lg text-white">Email</label>
                      <input {...register('email')} type="email" placeholder="abc@gmail.com" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                      <label  className="font-bold text-lg text-white">Password</label>
                      <input {...register('password')} type="password" placeholder="***" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                      <p >{error ? "Email or Password is not Correct" : ""}</p>
                      {/* <p className='text-white font-bold'>If you don't have an account. Please <Link to="/sign-up" className='text-blue-600 underline'> Sign Up</Link> Here</p> */}
                      <button type="submit" className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">Login</button>

                    </form>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    
                    <hr className='my-4'/>
                    <div className='flex w-full items-center flex-col mt-5 gap-3'>
                    {/* <button onClick={handleRegister} className='text-white border border-white block rounded-lg px-3'><img src={logo} alt="" className='w-12 h-12 inline-block'/> Login with Google</button> */}
                    </div>
           
                  </div>
                 
                  
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login






