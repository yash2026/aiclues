import React from "react";

const Card = () => {
  return (
    <div className="bg-white w-[640px] whitespace-normal h-[300px] flex items-start justify-center flex-col p-8 rounded-3xl m-4 max-[780px]:w-[450px] max-[780px]:h-[250px] max-[780px]:p-4 max-[480px]:w-[300px] max-[480px]:h-[220px] max-[480px]:p-4 max-[480px]:py-none">
      <div className="flex flex-row mb-4 max-[780px]:mb-1 ">
        <img
          className="h-24 w-auto rounded-full max-[780px]:h-16 self-center max-[480px]:h-12"
          src="https://tse3.mm.bing.net/th?id=OIP.YQGwtpOGecZajkbh2HMMGAHaHa&pid=Api&P=0&h=180"
        />
        <div className="flex flex-col m-4 justify-center self-center ">
          <span className="text-[#EAAD12] text-lg font-semibold max-[780px]:text-base max-[480px]:text-sm">
            Smith Agarwal
          </span>
          <span className="max-[780px]:text-sm max-[480px]:text-xs">
            Industry Principal, ICT
          </span>
          <span className="max-[780px]:text-sm max-[480px]:text-xs">
            Research Frost and Sullivan
          </span>
        </div>
      </div>
      <div className="flex max-[780px]:text-sm max-[480px]:text-xs">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        necessitatibus provident vel excepturi eaque, incidunt id magnam dolor
        qui ipsam alias laudantium omnis in fugit natus cupiditate ullam laborum
        doloremque.{" "}
      </div>
    </div>
  );
};

export default Card;
