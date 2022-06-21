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

function Sidebar({activeTab,setActiveTab}) {
  const [sidbarExpan, setSidebarExpand] = useState(false);
  

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
      title: "Automation",
      icon: <AutorenewIcon sx={{ fontSize: "35px" }} />,
    },
    {
      id: 7,
      title: "My_Apps",
      icon: <PhoneAndroidIcon sx={{ fontSize: "35px" }} />,
    },
  ];

  
  return (
    <div
      className={`"     animation1 h-full bg_2 " ${
        sidbarExpan ? "w-[200px]" : "w-[60px]"
      }`}
    >
      <div className=" flex pl-2">
        <Hamburger toggled={sidbarExpan} toggle={setSidebarExpand} />
      </div>

      <div className="  mt-[10px] h-[90%] flex  gap-2 py-5   flex-col ">
        {sidebarData.map((i) => {
          return (
            <div>
              <div
                className={`"  rounded_div rounded_NotActive ${
                  activeTab == i.title && "rounded_divActive"
                } "`}
                onClick={() => {
                  setActiveTab(i.title);
                }}
              >
                {i.icon}
                <p className="">{i.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
