import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SaleOrderTable() {
  const [tab, setTab] = useState("All");

  const saleOrderData = [
    {
      orderId: 1000083,
      customer: "Ernest Gaboyan",
      fulfillment: "Fulfilled",
      payStatus: "Paid",
      total: "6 000",
      
    },
    {
      orderId: 1000085,
      customer: "Sagar Borude",
      fulfillment: "Open",
      payStatus: "Partially Paid",
      total: "12 000",
    },
    {
      orderId: 1000086,
      customer: "Sonu Shrivastav",
      fulfillment: "Completed",
      payStatus: "Refunded",
      total: "2 000",
    },
    {
      orderId: 1000082,
      customer: "Altaf Ansari",
      fulfillment: "Completed",
      payStatus: "Pending",
      total: "10 000",
    },
    {
      orderId: 1000087,
      customer: "Lokesh Naidu",
      fulfillment: "Completed",
      payStatus: "Partially Refunded",
      total: "3 000",
    },
    {
      orderId: 1000182,
      customer: "Varsha Jadhav",
      fulfillment: "Fulfilled",
      payStatus: "Paid",
      total: "5 000",
    },
    {
      orderId: 1000384,
      customer: "Ajay Neman",
      fulfillment: "Fulfilled",
      payStatus: "Paid",
      total: "6 000",
    },
    {
      orderId: 1000686,
      customer: "Kajal Sharma",
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


  var result= saleOrderData.filter(function(saleOrderData){
     return saleOrderData.fulfillment== tab;
   })

   console.log(result)





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

          {/* <div className="border-2 px-3 py-2 ">
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
          </div> */}
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
          {
          
          
          result?.map((i) => {
            return (
              <>
                <tr className="border-b-2 text-[14px]">
                  <td className="py-4 text-[#003AD2]"> {i.orderId}</td>
                  <td className="text-[#1F4173] ">{i.customer}</td>
                  <td className="">
                    {" "}
                    <div className="icon-bg1 rounded-[5px] py-1">
                      <p> {i.fulfillment} </p>{" "}
                    </div>
                  </td>
                  <td> {i.payStatus}</td>
                  <td>{i.total}</td>
                </tr>
              </>
            );
          })}

          {/* <tr className="border-b-2 text-[14px]">
            <td className="py-4 text-[#003AD2]"> S000083</td>
            <td className="text-[#1F4173] ">Ernest Gaboyan</td>
            <td className="">
              {" "}
              <div className="icon-bg1 rounded-[5px] py-1">
                <p> Fulfilled </p>{" "}
              </div>
            </td>
            <td> Paid</td>
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
          <tr className="border-b-2">
            <td className="py-4"> S000083</td>
            <td>Ernest Gaboyan</td>
            <td>
              {" "}
              <div className="icon-bg4 rounded-[5px] py-1">Fulfilled </div>
            </td>
            <td>Paid</td>
            <td>$6 000</td>
          </tr> */}
        </table>
      </div>
    </div>
  );
}

export default SaleOrderTable;
