import {useRouter} from "next/router";
import React from "react";
import Navbar2 from "../components/Navbar2";

const Authentication = () => {
  const router = useRouter();
  const handleSignIn = ()=>{
    router.push("/")
  }
  return (
    <div className="h-screen w-screen">
      <Navbar2 />
      <div className="w-screen h-5/6 flex justify-center items-center">
        <div className="bg-white shadow-2xl shadow-gray-300 p-6 rounded-2xl">
          <h1 className="text-[#1A202C] text-3xl font-bold text-center">
          Verify your email
          </h1>
          <p className="text-xl text-[#718096] mt-4 text-center">
          We have sent code to your email <br /> alesiaka******@mail.com
          </p>
          <div className="ml-8">
          <input
            className="border-2 rounded-xl font-bold text-[#1A202C] text-2xl p-6 w-16 h-14 outline-none mt-8"
            type="text"
            placeholder=""
          />
           <input
            className="border-2 rounded-xl font-bold text-[#1A202C] text-2xl p-6 w-16 h-14 outline-none mt-8 ml-6"
            type="text"
            placeholder=""
          />
           <input
            className="border-2 rounded-xl font-bold text-[#1A202C] text-2xl p-6 w-16 h-14 outline-none mt-8 ml-6"
            type="text"
            placeholder=""
          />
           <input
            className="border-2 rounded-xl font-bold text-[#1A202C] text-2xl p-6 w-16 h-14 outline-none mt-8 ml-6"
            type="text"
            placeholder=""
          />
           <input
            className="border-2 rounded-xl font-bold text-[#1A202C] text-2xl p-6 w-16 h-14 outline-none mt-8 ml-6"
            type="text"
            placeholder=""
          />
          </div>
           <p><button onClick={handleSignIn} className="rounded-2xl p-2 w-[470px] h-12 mt-8 bg-[#194BFB] text-white font-semibold">Verify Account</button></p>
           <p className="text-[#718096] text-center mt-6">Resend code in <span className="font-bold text-[#1A202C]">59:00</span></p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
