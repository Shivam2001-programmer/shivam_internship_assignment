import Head from "next/head";
import SignInForm from "../components/SignInForm";
import OverpayInfo from "../components/OverpayInfo";

export default function Home() {
  return (
    // main div
    <div className="flex w-screen flex-wrap ">
      {/* sign in div  */}
      <SignInForm />

      {/* info div  */}
     <OverpayInfo />
    </div>
  );
}
