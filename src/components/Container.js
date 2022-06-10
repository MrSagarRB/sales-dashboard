import React from "react";
import FeedIcon from "@mui/icons-material/Feed";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Container() {
  return (
    <div className="py-[10px] px-[20px] sm:overflow-hidden overflow-scroll h-full">
      <div className="flex flex-col sm:flex-row justify-between  items-center overflow-hidden">
        <p>Sales Activity for this week</p>{" "}
        <div className="flex items-center gap-3">
          <div className="bg-blue-300 w-[123px]  h-[43px] rounded-[21px] flex items-center justify-center  ">
            {" "}
            <p className="text-[#ffff]"> Edit layout</p>{" "}
          </div>{" "}
          <div> Filter by year:</div>
        </div>
      </div>

      <div className="  w-full h-[138px] mt-5  grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-[20px]  h-[137px]  lg1 px-10 py-5 flex text-[#FFFFFF]">
          <div className=" h-full w-full">
            <p className="text-[14px]">To be Fulfilled</p>
            <p className="text-[42px]"> 56</p>
            <p className="text-[14px]">Quality </p>
          </div>
          <div className=" h-full w-full flex flex-col justify-between items-end">
            <FeedIcon />
            <ArrowForwardIcon />
          </div>
        </div>
        <div className=" rounded-[20px] h-[137px] lg2"> </div>
        <div className=" rounded-[20px] h-[137px]  lg3"> </div>
        <div className="rounded-[20px]  h-[137px] lg4"> </div>
      </div>
    </div>
  );
}

export default Container;
