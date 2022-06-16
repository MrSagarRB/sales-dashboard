import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SaleOrderTable() {
  return (
    <div className="sm:w-[52%] h-full px-10 py-5  bg-white rounded-[20px] ">
      <div className=" flex justify-between ">
        <p className="text-[#1F4173] text-[16px]">
          Latest sales orders - By sales channels
        </p>{" "}
        <div>Ecwid</div>
      </div>
      <div className=" flex justify-between mt-5">
        <div className=" flex h-[43px]  justify-between items-center border-b">
          <input
            type="text"
            placeholder="Search"
            className=" w-full outline-none"
          />{" "}
          <SearchIcon />
        </div>
        <div className=" flex  items-center text-[14px] ">
          <div className="border-2 px-3 py-2 bg-[]">
            {" "}
            <p className=" ">All</p>
          </div>
          <div className=" px-3 py-2">
            {" "}
            <p className=" ">Open</p>
          </div>
          <div className=" px-3 py-2">
            {" "}
            <p className=" ">Completed</p>
          </div>
          <div className=" px-3 py-2">
            {" "}
            <p className=" ">Fulfilled</p>
          </div>
        </div>
      </div>

      <div className="mt-5  w-full">
        <table className="w-full h-full text-center">
          <tr className="text-[#1F4173] text-[12px] border-b-2 ">
            <th className="py-4"> Order ID</th>
            <th> Customer</th>
            <th> Fulfillment status</th>
            <th> Payment status</th>
            <th> Total</th>
          </tr>
          <tr className="border-b-2">
            <td className="py-4"> S000083</td>
            <td>Ernest Gaboyan</td>
            <td className="">
              {" "}
              <div className="icon-bg1 rounded-[5px] py-1">
                <p> Fulfilled </p>{" "}
              </div>
            </td>
            <td>Paid</td>
            <td>$6 000</td>
          </tr>
          <tr className="border-b-2">
            <td className="py-4"> S000083</td>
            <td>Ernest Gaboyan</td>
            <td>
              {" "}
              <div className="icon-bg2 rounded-[5px] py-1">Fulfilled </div>
            </td>
            <td>Paid</td>
            <td>$6 000</td>
          </tr>
          <tr className="border-b-2">
            <td className="py-4"> S000083</td>
            <td>Ernest Gaboyan</td>
            <td>
              {" "}
              <div className="icon-bg3 rounded-[5px] py-1">Fulfilled </div>
            </td>
            <td>Paid</td>
            <td>$6 000</td>
          </tr>
          <tr className="border-b-2">
            <td className="py-4"> S000083</td>
            <td>Ernest Gaboyan</td>
            <td>
              {" "}
              <div className="icon-bg4 rounded-[5px] py-1">Fulfilled </div>
            </td>
            <td>Paid</td>
            <td>$6 000</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SaleOrderTable;
