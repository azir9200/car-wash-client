import {
  BookOpenIcon,
  UserIcon,
  HomeModernIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      to: "/dashboard",
      icon: <UserIcon className="h-7 w-7" />,
      label: "Profile",
    },
    {
      to: "/dashboard/create",
      icon: <BookOpenIcon className="h-7 w-7" />,
      label: "Create Service",
    },
    {
      to: "/dashboard/serviceList",
      icon: <ListBulletIcon className="h-7 w-7" />,
      label: "Service List",
    },
    {
      to: "/",
      icon: <HomeModernIcon className="h-7 w-7" />,
      label: "Home",
    },
  ];

  return (
    <div className="h-screen sticky top-0 bg-gray-900 border-r border-gray-800 shadow-lg">
      <div className="flex flex-col items-center gap-8 h-full py-10">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "relative group p-3 rounded-xl bg-indigo-600 text-white shadow-lg"
                : "relative group p-3 rounded-xl text-gray-400 hover:bg-indigo-500 hover:text-white transition-all"
            }
          >
            {item.icon}
            <span className="absolute left-16 opacity-0 group-hover:opacity-100 group-hover:left-12 bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg transition-all">
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
