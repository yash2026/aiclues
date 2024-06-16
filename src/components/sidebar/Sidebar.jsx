import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="w-[480px] max-[1030px]:w-[350px] max-[820px]:w-[300px] max-[720px]:hidden  h-full bg-[#1C172C] flex items-center justify-center ">
        <div className="text-[#FCFCFD]">
          <div>
            <h1 className="text-5xl font-semibold my-3 max-[1030px]:text-3xl max-[1030px]:my-1 ">
              Good to see you!
            </h1>
            <span className="text-4xl font-medium max-[1030px]:text-lg ">
              Rajesh...!
            </span>
          </div>
          <button className="bg-[#6077C9] px-4 py-2 rounded-3xl my-7 max-[1030px]:px-2 max-[1030px]:py-1 max-[1030px]:text-xs max-[1030px]:my-3">
            Go to Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
