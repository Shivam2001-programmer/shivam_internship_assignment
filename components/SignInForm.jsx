import React,{useState} from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";
import {useRouter} from "next/router";
import Link from "next/link";


const SignInForm = () => {


  

  const router = useRouter();

  const handleSubmit = (e)=>{
       e.preventDefault();
         router.push("loggedIn")
  }

  return (
    <div className="w-full lg:w-1/2 h-screen bg-white p-4">
      <div className="flex ">
        <Image width="20px" height="20px" src="/logo.png" />
        <h1 className="text-[#1A202C] h-6 w-24 font-semibold ">Overpay</h1>
      </div>
      {/* sign in form  */}
      <div className="w-[427px] mx-auto h-5/6 flex justify-center items-center">
        <div className="">
          <div>
            <h1 className="text-[#1A202C] font-bold text-4xl text-center">
              Sign in to Overpay
            </h1>
            <p className="text-[#718096] text-xl mt-2 text-center">
              Send, spend and save smarter
            </p>
          </div>
          <div className="mt-8">
            <button className="border-2 rounded-2xl p-2 flex mt-4 w-[400px] font-semibold h-14 justify-center items-center">
              <FcGoogle className="mr-4 h-6 w-6" />
              Sign In with Google
            </button>
          </div>
          <div className="mt-8 ">
            <Image src="/or.png " width="400px" height="22px" />
          </div>
          <div className="mt-8">
            <form >
            <input
           
              className="border-2 rounded-2xl p-2 w-[400px] h-14 outline-none " 
              type="email"
              placeholder="Username or email"
                 required
                 name="email"
                
            />
           
            <div className="flex">
              <input
                className="border-2 rounded-2xl p-2 w-[400px] h-14 outline-none mt-4"
                type="password"
                placeholder="Password"
                required
                name="password"
               
              />
              <FiEyeOff className="mt-10 text-[#718096] relative right-10" />
            </div>
            <div className="mt-4 flex justify-around">
              <p className="text-[#1A202C] font-semibold ">Remember me</p>
              <p className="text-[#194BFB] font-semibold underline underline-offset-1"><Link href="/forgetPassword">Forgot Password?</Link></p>
            </div>
            <button type="submit" onClick={handleSubmit} className="rounded-2xl p-2 w-[400px] h-12 mt-8 bg-[#194BFB] text-white font-semibold">Sign In</button>
            </form>
          </div>
          <h1 className="mt-8 text-center text-[#1A202C] font-normal ">Don’t have an account? <span className="text-[#1A202C] font-semibold underline underline-offset-1"><Link href="/signup">Sign Up</Link></span> </h1>
        </div>
      </div>

      <div className="flex justify-around">
        <h1 className="text-[#718096]">Privacy Policy</h1>
        <h1 className="text-[#718096]">Copyright {new Date().getFullYear()}</h1>
      </div>
    </div>
  );
};

export default SignInForm;
