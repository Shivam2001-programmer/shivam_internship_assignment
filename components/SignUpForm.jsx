import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const router = useRouter();
  const handleSignIn = ()=>{
    router.push("/")
  }
  return (
    <div className=" w-full lg:w-1/2 h-screen bg-white p-4">
      
      {/* sign in form  */}
      <div className="w-[427px] mx-auto h-5/6 flex justify-center items-center">
        <div className="mt-20">
          <div>
            <h1 className="text-[#1A202C] font-bold text-4xl text-center">
            Sign up for an account
            </h1>
            <p className="text-[#718096] text-xl mt-2 text-center">
              Send, spend and save smarter
            </p>
          </div>
          <div className="mt-8">
            <button className="border-2 rounded-2xl p-2 flex mt-4 w-[400px] font-semibold h-14 justify-center items-center">
              <FcGoogle className="mr-4 h-6 w-6" />
              Sign Up with Google
            </button>
          </div>
          <div className="mt-8 ">
            <Image src="/or.png " width="400px" height="22px" />
          </div>
          <div className="mt-8">
          <input
              className="border-2 rounded-2xl p-2 w-[180px] h-14 outline-none"
              type="text"
              placeholder="First Name"
              required="true"
            />
            <input
              className="border-2 rounded-2xl p-2 w-[180px] ml-8 h-14 outline-none"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="border-2 rounded-2xl p-2 w-[400px] h-14 outline-none mt-4"
              type="text"
              placeholder="Username or email"
            />
            <div className="flex">
              <input
                className="border-2 rounded-2xl p-2 w-[400px] h-14 outline-none mt-4"
                type="text"
                placeholder="Password"
              />
              <FiEyeOff className="mt-10 text-[#718096] relative right-10" />
            </div>
            <div className="mt-4 flex justify-around">
              <p className="text-[#718096]">By creating an account, you agreeing to our <span className="text-[#1A202C] font-semibold">Privacy Policy</span> , and <span className="text-[#1A202C] font-semibold"> Electronics Communication Policy.</span></p>
            </div>
            <button onClick={handleSignIn} className="rounded-2xl p-2 w-[400px] h-12 mt-8 bg-[#194BFB] text-white font-semibold">Sign Up</button>
          </div>
          <h1 className="mt-8 text-center text-[#1A202C] font-normal ">Already have an account? <span className="text-[#1A202C] font-semibold underline underline-offset-1"><Link href="/">Sign In</Link> </span> </h1>
        </div>
      </div>

      <div className="flex justify-around mt-20">
        <h1 className="text-[#718096]">Privacy Policy</h1>
        <h1 className="text-[#718096]">Copyright {new Date().getFullYear()}</h1>
      </div>
    </div>
  );
};

export default SignUpForm;
