import {useRouter} from "next/router";
import React from "react";
import Navbar2 from "../components/Navbar2";

const ForgetPassword = () => {
 const router = useRouter()
  const handleLink = ()=>{
       router.push("/authentication")
  }

  return (
    <div className="h-screen w-screen">
      <Navbar2 />
      <div className="w-screen h-5/6 flex justify-center items-center">
        <div className="bg-white shadow-2xl shadow-gray-300 p-6 rounded-2xl">
          <h1 className="text-[#1A202C] text-3xl font-bold text-center">
            Need help with your <br />
            account?
          </h1>
          <p className="text-xl text-[#718096] mt-4 text-center">
            Enter the email address associated with your account <br /> and we
            will send you a link to reset your password.
          </p>
          <input
            className="border-2 rounded-2xl p-2 w-[470px] h-14 outline-none mt-8"
            type="text"
            placeholder="Enter your email"
          />
           <p><button onClick={handleLink} className="rounded-2xl p-2 w-[470px] h-12 mt-8 bg-[#194BFB] text-white font-semibold">Send Link</button></p>
           <p className="font-bold text-[#1A202C] text-center mt-6">Forgot your email?</p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
