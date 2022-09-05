import React from 'react'
import Image from "next/image";
const OverpayInfo2 = () => {
  return (
    <>
    <div className="bg-[#194BFB] h-screen w-full lg:w-1/2 flex justify-center items-center">
      <div className="flex-col ">
        <div className="mx-auto w-[477px]">
          <Image src="/modal.png" width="477px" height="389px" />
        </div>

        <div className="mt-8 mx-auto ">
          <h1 className="text-white text-4xl font-semibold text-center ">Get better with money</h1>
          <p className="text-white text-sm font-thin text-center mt-4">
            Overpay help you set saving goals, earn cash back offers, Go to
            disclaimer <br /> for more details and get paychecks up to two days early.
            Get a $20 bonus <br /> when you receive qualifying direct deposits
          </p>
        </div>
      </div>
      <div className="absolute ">
      <Image src="/Vector1.png" width="81px" height="81px" />
      </div>
      
    </div>
    
     </>
  )
}

export default OverpayInfo2