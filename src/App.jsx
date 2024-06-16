import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Testimonials from "./components/testimonials/Testimonials";

const App = () => {
  return (
    <>
      <div className="min-[720px]:hidden h-[50px] bg-[#1C172C] w-full flex flex-row justify-around items-center text-white">
        <div>Good to see you! Rajesh...!</div>
        <button className="bg-[#6077C9] rounded-3xl px-2 py-1 text-xs">
          Go to Dashboard
        </button>
      </div>
      <div className="h-screen flex items-stretch">
        <Sidebar />
        <Testimonials />
        <div className="w-[20px] bg-[#1C172C] max-[720px]:hidden"></div>
      </div>
    </>
  );
};

export default App;
