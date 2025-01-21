import Sidebar from "@/pages/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`w-[250px] p-5 bg-${
          darkMode ? "gray-800" : "white"
        } shadow-lg`}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
