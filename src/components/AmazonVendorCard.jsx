import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function AmazonVendorCard({ data }) {
  console.log(data);
  return (
    <div className="w-full h-full bg-white rounded-[20px] px-10 py-5 ">
      <div className=" flex justify-between">
        {" "}
        <p className="text-[#1F4173] font-bold"> {data?.title}</p>{" "}
        <div className="border-b-2">
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-2 py-1"
          />{" "}
          <SearchIcon />{" "}
        </div>
      </div>{" "}
      <div className=" mt-5 h-[90%] overflow-y-scroll ">
        <table className="w-full  text-center  overflow-y-scroll  ">
          <tr className="text-[#1F4173] text-[12px]  ">
            <th className="py-2">Order ID</th>
            <th>Status</th>
            <th> SKU Quantity</th>
            <th>Item Quantity</th>
            <th>Order Value</th>
          </tr>

          {data?.tableData?.map((item) => {
            return (
              <tr className="border-t-2 text-[14px] ">
                <td className="py-5 text-[#003AD2]  ">{item.OrderID}</td>
                <td className="text-[#1F4173]"> {item.status}</td>
                <td className="text-[#1F4173]"> {item.skuQty}</td>
                <td className="text-[#1F4173]"> {item.itemQty}</td>
                <td className="text-[#1F4173]">$ {item.orderValue}</td>

                
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default AmazonVendorCard;
