import logo from "./../assets/logo.png";
import icon from "./../assets/icon.png";
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


export default function SignUp() {
    const [formData,setFormData] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
          const res = await fetch("api/auth/signup",
          {
            method:'POST',
            headers:{
              'Content-Type': "application/json"
            },
            body: JSON.stringify(formData)
          })
          navigate('/')
        } catch (error) {
            console.log(error);
        }
      }
  return (
    <div className="flex min-h-screen bg-gray-900">
    {/* Logo */}
    <div className="flex-1 flex items-center justify-center" style={{ background: 'linear-gradient(142.86deg, #1E1E1E 77.77%, #0027FF 78.02%)' }}>
  <img src={logo} alt="TVS Logo" className="h-64" />
</div>
    {/* Form */}
    <div className="flex-1 flex items-center justify-center bg-white">
      <div className="w-80">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={handleChange}/>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign Up</button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Have an account? <a href="/" className="font-medium text-blue-600 hover:text-blue-500">Sign in</a>
            </p>
          </div>
          <div className="flex items-center my-6">
            <hr className="w-full border-gray-300" />
            <span className="mx-2 text-sm text-gray-400">OR</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div>
            <button type="button" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <img src={icon} alt="Google" className="h-5 w-5 mr-2" />
              Login in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
