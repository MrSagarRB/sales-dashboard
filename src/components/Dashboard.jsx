import React, { useState } from "react";
import FeedIcon from "@mui/icons-material/Feed";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TaskIcon from "@mui/icons-material/Task";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import BalanceIcon from "@mui/icons-material/Balance";
import SaleOrderTable from "./SaleOrderTable";
import PurchaseOrder from "./PurchaseOrder";
import CountUp from "react-countup";
import TopSellingProduct from "./TopSellingProduct";
import SaleOrderChart from "./SaleOrderChart";
import ItemTable from "./ItemTable";
import AmazonVendorCard from "./AmazonVendorCard";
import { SmoothProvider } from "react-smooth-scrolling";

const colorCardData = [
  {
    id: 1,
    title: "To be Fulfilled",
    value: "56",
    subTitle: "Quality",
    icon: <FeedIcon />,
    bgColor: "lg1",
  },
  {
    id: 2,
    title: "To be Invoiced",
    value: "24",
    subTitle: "Quality",
    icon: <TaskIcon />,
    bgColor: "lg2",
  },
  {
    id: 3,
    title: "Completed",
    value: "12",
    subTitle: "Quality",
    icon: <CheckCircleOutlineIcon />,
    bgColor: "lg3",
  },
  {
    id: 4,
    title: "Assigned to me",
    value: "3",
    subTitle: "Quality",
    icon: <PersonIcon />,
    bgColor: "lg4",
  },
];

const whiteCardData = [
  {
    id: 1,
    icon: <HomeIcon />,
    title: "Out of stock products",
    value: "89.00",
    iconColor: "icon-bg1",
  },
  {
    id: 2,
    icon: <RestoreFromTrashIcon />,
    title: "All products",
    value: "267.00",
    iconColor: "icon-bg2",
  },
  {
    id: 3,
    icon: <DriveFileMoveIcon />,
    title: "Archived products",
    value: "2.00",
    iconColor: "icon-bg3",
  },
  {
    id: 4,
    icon: <BalanceIcon />,
    title: "Quantity On Hand",
    value: "684.00",
    iconColor: "icon-bg4",
  },
];

const itemAtLowQuntity = {
  title: " Items At Low Quantity",
  tableData: [
    {
      sku: "ZG011AQA",
      inventory: "Summer shoe",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "Cap (Green)",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "Jens Pants",
      incomingPo: "2",
    },

    {
      sku: "ZG011AQA",
      inventory: "Shoes",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "T Shirts",
      incomingPo: "2",
    },
    ,
    {
      sku: "ZG011AQA",
      inventory: " Kids Cap",
      incomingPo: "2",
    },

    {
      sku: "ZG011AQA",
      inventory: "Mobile",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "Laptop",
      incomingPo: "2",
    },
  ],
};

const itemOutOfStock = {
  title: "Items Out Of Stock",
  tableData: [
    {
      sku: "ZG011AQA",
      inventory: "Summer shoe",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "Cap (Green)",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "Jens Pants",
      incomingPo: "2",
    },

    {
      sku: "ZG011AQA",
      inventory: "Shoes",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "T Shirts",
      incomingPo: "2",
    },
    ,
    {
      sku: "ZG011AQA",
      inventory: " Kids Cap",
      incomingPo: "2",
    },

    {
      sku: "ZG011AQA",
      inventory: "Mobile",
      incomingPo: "2",
    },
    {
      sku: "ZG011AQA",
      inventory: "Laptop",
      incomingPo: "2",
    },
  ],
};
const amzonCardData = {
  title: "Amazon vendor order processing",
  tableData: [
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
    {
      OrderID: "ZG011AQA",
      status: "Pending",
      skuQty: "2",
      itemQty: "365",
      orderValue: "359579",
    },
  ],
};

function Dashboard() {
  return (
    <div className="py-[10px] px-[20px]  overflow-scroll h-full ">
      <div className="  flex flex-col sm:flex-row justify-between  items-center overflow-hidden">
        <p>Sales Activity for this week</p>{" "}
        <div className=" flex items-center gap-3">
          <div className=" lg2 w-[123px]  h-[43px] rounded-[21px] flex items-center justify-center  cursor-pointer hover:opacity-70 ">
            {" "}
            <p className="text-[#ffff]"> Edit layout</p>{" "}
          </div>{" "}
          <div> Filter by year:</div>
        </div>
      </div>

      <div className="  w-full mt-5  grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {colorCardData.map((i) => {
          return (
            <div
              className={`rounded-[20px]  h-[137px]  ${i.bgColor} px-10 py-5 flex text-[#FFFFFF]`}
            >
              <div className=" h-full w-full leading-tight ">
                <p className="text-[14px]">{i.title}</p>
                <p className="text-[42px]">
                  {" "}
                  <CountUp end={i.value} />
                </p>
                <p className="text-[14px]">{i.subTitle} </p>
              </div>
              <div className=" h-full w-[30%] flex flex-col justify-between items-end">
                {i.icon}
                <ArrowForwardIcon />
              </div>
            </div>
          );
        })}

        {whiteCardData.map((i) => {
          return (
            <div className=" bg-white rounded-[20px] px-10 py-5  h-[177px] flex flex-col justify-around">
              <div className="  flex items-center gap-2">
                {" "}
                <div
                  className={`w-[43px] h-[41px]  rounded-[5px] flex items-center justify-center ${i.iconColor}`}
                >
                  {i.icon}
                </div>{" "}
                <div>
                  <p className="text-[14px] text-[#1F4173] opacity-50">
                    {i.title}
                  </p>{" "}
                </div>
              </div>
              <div className="  flex justify-between items-center ">
                {" "}
                <p className="text-[32px] text-[#1F4173] ">
                  <CountUp end={i.value} delay={3} />
                </p>{" "}
                <div className="h-[43px] w-[41px] bg-[#E6EAF0] flex items-center justify-center ">
                  {" "}
                  <ArrowForwardIosIcon />
                </div>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <section
        id="inventory"
        className="  mt-5 w-[100%] h-[496px] flex flex-col md:flex-row    gap-5"
      >
        <SaleOrderTable />
        <PurchaseOrder />
        <TopSellingProduct />
      </section>

      <div>
        {" "}
        <SaleOrderChart />
      </div>
      <div className="  h-[437px] sm:mt-5 mt-[500px] flex gap-5 ">
        <ItemTable data={itemAtLowQuntity} />
        <ItemTable data={itemOutOfStock} />
      </div>
      <div className=" h-[459px]  sm:mt-5  ">
        <AmazonVendorCard data={amzonCardData} />
      </div>
    </div>
  );
}

export default Dashboard;
