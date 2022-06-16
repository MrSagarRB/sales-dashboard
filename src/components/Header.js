import React from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import InventoryIcon from "@mui/icons-material/Inventory";
import AppsIcon from "@mui/icons-material/Apps";
import { Progress } from "@nextui-org/react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@nextui-org/react";

function Header() {
  return (
    <div className="  w-full bg_2 flex items-center px-0 justify-evenly ">
      <div className="  gap-2 deskTopScreen-Only">
        <div className="flex items-center item-center gap-0 ">
          {" "}
          <DriveFolderUploadIcon className="text-[#1F4173] " />
          <p className="nav_title text-[#1F4173]">Sales Orders</p>{" "}
        </div>

        <div className="flex items-center item-center gap-2">
          <MoveToInboxIcon className="text-[#1F4173]" />
          <p className="nav_title">Purchase Orders</p>{" "}
        </div>

        <div className="flex items-center item-center gap-2">
          <InventoryIcon className="text-[#1F4173]" />
          <p className="nav_title"> Products</p>{" "}
        </div>
        <div className="flex items-center item-center gap-2">
          {" "}
          <AppsIcon className="text-[#1F4173]" />
          <p className="nav_title">Task list</p>
        </div>
      </div>

      <div className="items-center gap-3 mx-5 deskTopScreen-Only">
        <div className="w-[150px] ">
          {" "}
          <Progress value={40} size="sm" color="primary" status="primary" />
        </div>
        <p className="text-xs">Task has done on 33%</p>
      </div>

      <div className="flex w-[80%] md:w-[20%] h-[30px] items-center bg_1 px-3 deskTopScreen-Only ">
        {" "}
        <input
          type="text"
          placeholder="Search"
          className="h-full w-[100%] outline-none  rounded-[5px] px-2 py-5 bg-transparent"
        />{" "}
        <SearchIcon />{" "}
      </div>
      <div className="flex items-center gap-2">
        <div className="">
          <NotificationsIcon />
        </div>
        <div className=" flex items-center gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="md"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
