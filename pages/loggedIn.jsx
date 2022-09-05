import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
  const router = useRouter();
  const handleLogout=()=>{
        router.push('/')
  }
  return (

    

    <div className='h-screen w-screen'>
        <Navbar />
         <div className='w-screen h-5/6 flex justify-center items-center'>
          <div className='flex-col w-98 h-56 bg-white shadow-2xl shadow-gray-400 rounded-2xl pt-6'>
                <h1 className='text-center text-[#1A202C] text-3xl font-bold'>Hi, Johne Doe!</h1>
                <p className='text-center text-[#718096] mt-4'>You’re logged in. Well done!</p>
            <button onClick={handleLogout} className="rounded-2xl p-2 mr-4 ml-4 w-[380px] h-12 mt-8 bg-[#194BFB] text-white font-semibold">Log out</button>
            </div>

         </div>
    </div>
  )
}

export default Login