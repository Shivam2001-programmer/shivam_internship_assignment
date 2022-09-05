import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'


const Navbar2 = () => {
  const router = useRouter();
  const handleSignIn=()=>{
        router.push('/')
  }
  return (
    <div className="bg-[#1A202C] h-20 w-screen flex justify-between">
      <div className="flex w-36 h-8 mt-6 ml-8">
        <Image width="30px" height="20px" src="/logo.png" />
        <h1 className="text-white h-6 w-24 font-semibold text-xl">Overpay.</h1>
      </div>
      <button onClick={handleSignIn} className="text-white rounded-2xl w-32 h-12 bg-[#194BFB] font-semibold p-2 mt-4 mr-8">
        Sign In
      </button>
    </div>
  );
};

export default Navbar2;
