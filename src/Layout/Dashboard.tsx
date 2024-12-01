import Sidebar from "@/pages/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex border border-gray-500">
      <div className="w-[80px]">
        <Sidebar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
