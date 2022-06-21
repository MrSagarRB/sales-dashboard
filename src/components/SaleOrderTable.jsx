import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SaleOrderTable() {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");

  const saleOrderData = [
    {
      orderId: 1000083,
      customer: "ernest gaboyan",
      fulfillment: "Fulfilled",
      payStatus: "Paid",
      total: "6 000",
    },
    {
      orderId: 1000085,
      customer: "sagar borude",
      fulfillment: "Open",
      payStatus: "Partially Paid",
      total: "12 000",
    },
    {
      orderId: 1000086,
      customer: "sonu shrivastav",
      fulfillment: "Completed",
      payStatus: "Refunded",
      total: "2 000",
    },
    {
      orderId: 1000082,
      customer: "altaf ansari",
      fulfillment: "Completed",
      payStatus: "Pending",
      total: "10 000",
    },
    {
      orderId: 1000087,
      customer: "lokesh naidu",
      fulfillment: "Completed",
      payStatus: "Partially Refunded",
      total: "3 000",
    },
    {
      orderId: 1000182,
      customer: "varsha jadhav",
      fulfillment: "Fulfilled",
      payStatus: "Paid",
      total: "5 000",
    },
    {
      orderId: 1000384,
      customer: "ajay neman",
      fulfillment: "Fulfilled",
      payStatus: "Paid",
      total: "6 000",
    },
    {
      orderId: 1000686,
      customer: "kajal sharma",
      fulfillment: "Completed",
      payStatus: "Paid",
      total: "3 000",
    },
  ];
  const saleOrderFilter = [
    {
      id: 1,
      tabName: "All",
    },
    {
      id: 2,
      tabName: "Open",
    },
    {
      id: 3,
      tabName: "Completed",
    },
    {
      id: 3,
      tabName: "Fulfilled",
    },
  ];

  var result = saleOrderData.filter(function (saleOrderData) {
    if (tab == "All") {
      return saleOrderData.customer.includes(search);
    } else {
      return saleOrderData.fulfillment == tab;
    }
  });

  console.log(search);

  return (
    <div className="md:w-[52%] h-full px-10 py-5  bg-white rounded-[20px] ">
      <div className=" flex justify-between ">
        <p className="text-[#1F4173] font-bold text-[16px]">
          Latest sales orders - By sales channels
        </p>{" "}
        <div>
          {" "}
          <select className="outline-none">
            <option value="" className="">
              Option 1
            </option>
            <option value="" className="">
              Option 1
            </option>
            <option value="" className="">
              Option 1
            </option>
            <option value="" className="">
              Option 1
            </option>
          </select>{" "}
        </div>
      </div>
      <div className=" flex justify-between mt-5">
        <div className=" flex h-[43px]  justify-between items-center border-b">
          <input
            type="text"
            placeholder="Search"
            className=" w-full outline-none"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />{" "}
          <SearchIcon />
        </div>
        <div className=" flex  items-center text-[14px] gap-3 ">
          {saleOrderFilter.map((i) => {
            return (
              <div
                className={`  px-3 py-[5px] cursor-pointer text-[#1F4173]  ${
                  tab == i.tabName && "activeFilterTab"
                }`}
                onClick={() => {
                  setTab(i.tabName);
                }}
              >
                {" "}
                {i.tabName}{" "}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5  w-full h-[70%] overflow-y-scroll     ">
        <table className="w-full  text-center   ">
          <tr className="text-[#1F4173] text-[12px] border-b-2 ">
            <th className="py-4"> Order ID</th>
            <th> Customer</th>
            <th> Fulfillment status</th>
            <th> Payment status</th>
            <th> Total</th>
          </tr>
          {result?.map((i) => {
            return (
              <>
                <tr className="border-b-2 text-[14px]">
                  <td className="py-4 text-[#003AD2]"> {i.orderId}</td>
                  <td className="text-[#1F4173] ">
                    {i.customer.toUpperCase()}
                  </td>
                  <td className="">
                    {" "}
                    <div className="icon-bg1 rounded-[5px] py-1">
                      <p> {i.fulfillment} </p>{" "}
                    </div>
                  </td>
                  <td> {i.payStatus}</td>
                  <td>$ {i.total}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default SaleOrderTable;
