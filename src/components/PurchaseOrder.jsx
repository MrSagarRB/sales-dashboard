import React from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const purchaseOrderData = [
  {
    orderNo: "#P00005",
    value: " 12000",
    iconColor: "iconColor1",
  },
  {
    orderNo: "#P00009",
    value: " 9000",
    iconColor: "iconColor2",
  },
  {
    orderNo: "#003AD2",
    value: " 2000",
    iconColor: "iconColor3",
  },
  {
    orderNo: "#P00002",
    value: " 650",
    iconColor: "iconColor4",
  },
  {
    orderNo: "#P00007",
    value: " 1200",
    iconColor: "iconColor5",
  },
];

function PurchaseOrder() {
  return (
    <div className=" md:w-[25%]  h-full px-10 py-5  bg-white rounded-[20px] ">
      <p className="text-[16px] text-[#1F4173] font-bold"> Purchase Order</p>
      <div className="mt-5 flex flex-col gap-2 text-[16px] text-[#1F4173]">
        <div className="flex justify-between ">
          <p> Recived Order</p> <p> $20</p>
        </div>
        <div className="flex justify-between border-b-2 pb-3">
          <p> Total Cost USD</p> <p className="font-semibold"> $4600</p>
        </div>
      </div>
      <div className="mt-3 ">
        <p className="text-[#1F4173] font-bold text-[16px]">
          Incoming purchase orders
        </p>
        <div className="mt-3 flex flex-col gap-3">
          {purchaseOrderData.map((i) => {
            return (
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <CircleOutlinedIcon className={i.iconColor} />{" "}
                  <div>
                    <p className="text-[#003AD2]"> {i.orderNo} </p>{" "}
                    <p className="text-[#1F4173] text-[13px]">
                      {" "}
                      Ernest Gaboyan
                    </p>
                  </div>
                </div>
                <div className="text-[#1F4173] font-semibold">$ {i.value}</div>
              </div>
            );
          })}
        </div>
      </div>
      <a className="text-[#003AD2] font-bold" href="">
        {" "}
        View all
      </a>
    </div>
  );
}

export default PurchaseOrder;
