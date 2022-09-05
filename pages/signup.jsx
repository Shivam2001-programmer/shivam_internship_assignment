import React from "react";
import OverpayInfo2 from "../components/OverpayInfo2";
import SignUpForm from "../components/SignUpForm";

const Signup = () => {
  return (
    <div className="flex w-screen flex-wrap">
      {/* info div  */}
      <OverpayInfo2 />
      <SignUpForm />

    </div>
  );
};

export default Signup;
