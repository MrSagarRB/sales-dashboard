import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidbarExpan, setSidebarExpand] = useState(true);
  return (
    <div className=" w-full h-screen flex bg-slate-300">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />
        <div className=" h-full z-30 bg-slate-300">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
