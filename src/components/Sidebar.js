import React, { useState } from "react";
import Hamburger from "hamburger-react";
// Icons
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import PieChartIcon from "@mui/icons-material/PieChart";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function Sidebar() {
  const [sidbarExpan, setSidebarExpand] = useState(false);
  const [activeTab, setActiveTab] = useState("Inventory");

  const sidebarData = [
    {
      id: 1,
      title: "Dashboard",
      icon: <GridViewIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 2,
      title: "Inventory",
      icon: <LayersIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 3,
      title: "CRM",
      icon: <ManageAccountsIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 4,
      title: "Orders",
      icon: <ShoppingCartIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 5,
      title: "Stocks",
      icon: <WarehouseIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 6,
      title: "Reports",
      icon: <PieChartIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 7,
      title: "InvAutomationentory",
      icon: <AutorenewIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 7,
      title: "My Apps",
      icon: <PhoneAndroidIcon sx={{ fontSize: "35px" }} />,
    },
  ];

  console.log(activeTab);
  return (
    <div
      className={`"  py-[10px] pl-3 transition-all duration-500 h-full bg_2 " ${
        sidbarExpan ? "w-[250px]" : "w-[75px]"
      }`}
    >
      <div className="">
        <Hamburger toggled={sidbarExpan} toggle={setSidebarExpand} />
      </div>

      <div className=" mt-[10px] h-[90%] flex  gap-2 py-5  flex-col ">
        {sidebarData.map((i) => {
          return (
            <div>
              <div
                className={`" rounded_div rounded_NotActive ${
                  activeTab == i.title && "rounded_divActive"
                } "`}
                onClick={() => {
                  setActiveTab(i.title);
                }}
              >
                {i.icon}
                {sidbarExpan ? <p className="">{i.title}</p> : null}
              </div>
            </div>
          );
        })}

        {/* <div className=" rounded_div rounded_divActive  bg_1">
          <GridViewIcon sx={{ fontSize: "35px" }} />
          <p className="">Dashboard</p>
        </div>
        <div className=" rounded_div  rounded_divNotActive ">
          <LayersIcon sx={{ fontSize: "35px" }} />
          <p className="">Inventory</p>
        </div>



        <div className=" rounded_div rounded_divNotActive  ">
          <ManageAccountsIcon sx={{ fontSize: "35px" }} />
          <p className="">CRM</p>
        </div>
        


        <div className=" rounded_div rounded_divNotActive  ">
          <ShoppingCartIcon sx={{ fontSize: "35px" }} />
          <p className="">Orders</p>
        </div>




        <div className=" rounded_div rounded_divNotActive  ">
          <WarehouseIcon sx={{ fontSize: "35px" }} />
          <p className="">Stocks</p>
        </div>



        <div className=" rounded_div rounded_divNotActive  ">
          <PieChartIcon sx={{ fontSize: "35px" }} />
          <p className="">Reports</p>
        </div>

        <div className=" rounded_div rounded_divNotActive  ">
          <AutorenewIcon sx={{ fontSize: "35px" }} />
          <p className="">Automation</p>
        </div>
        <div className=" rounded_div rounded_divNotActive  ">
          <PhoneAndroidIcon sx={{ fontSize: "35px" }} />
          <p className="">My Apps</p>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
