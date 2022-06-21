import React, { useState } from "react";
import CRMpage from "./components/pages/CRMpage";
import Dashboard from "./components/Dashboard";

import Header from "./components/Header";
import Inventory from "./components/pages/Inventory";
import Sidebar from "./components/Sidebar";
import Orders from "./components/pages/Orders";
import Stocks from "./components/pages/Stocks";
import Reports from "./components/pages/Reports";

function App() {
  const [sidbarExpan, setSidebarExpand] = useState(true);
  const [activeTab, setActiveTab] = useState("Dashboard");

  console.log(activeTab);

  const getCorrectPage = (activeTab) => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Inventory":
        return <Inventory />;
      case "CRM":
        return <CRMpage />;
      case "Orders":
        return <Orders />;
      case "Stocks":
        return <Stocks />;
      case "Reports":
        return <Reports />;
    }
  };

  console.log(activeTab);

  return (
    <div className=" w-full h-screen flex bg-slate-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex  flex-col w-full  overflow-hidden">
        <Header />
        <div className=" h-full z-30 bg-slate-300">
          {/* <Dashboard /> */}
          {/* <Inventory /> */}

          {getCorrectPage(activeTab)}
        </div>
      </div>
    </div>
  );
}

export default App;
