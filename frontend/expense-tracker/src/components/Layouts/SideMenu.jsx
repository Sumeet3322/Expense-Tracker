import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import CharAvatar from "../Cards/CharAvatar";
import { LuLogOut } from "react-icons/lu";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-68px)] bg-white border-r border-slate-100 p-6 sticky top-[68px] z-20 flex flex-col">
      <div className="flex flex-col items-center justify-center gap-4 mt-2 mb-10 p-4 rounded-2xl bg-slate-50 border border-slate-100">
        <div className="relative">
          {user?.profileImageUrl ? (
            <img
              src={user?.profileImageUrl || ""}
              alt="Profile"
              className="w-20 h-20 bg-slate-200 rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : (
            <CharAvatar
              fullName={user?.fullName || ""}
              width="w-20"
              height="h-20"
              style="text-2xl font-bold shadow-md border-4 border-white"
            />
          )}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <div className="text-center">
          <h5 className="text-slate-900 font-bold text-lg leading-tight">
            {user?.fullName || "Guest User"}
          </h5>
          <p className="text-slate-400 text-xs font-medium mt-1 uppercase tracking-tighter">Premium Member</p>
        </div>
      </div>

      <div className="flex-1 space-y-2">
        {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`w-full flex items-center gap-4 text-[15px] font-medium transition-all duration-200 py-3.5 px-6 rounded-xl ${
              activeMenu === item.label 
                ? "sidebar-link-active" 
                : "text-slate-500 hover:bg-slate-50 hover:text-primary"
            }`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className={`text-xl ${activeMenu === item.label ? "text-white" : "text-slate-400 group-hover:text-primary"}`} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100">
        <button
          className="w-full flex items-center gap-4 text-[15px] font-medium text-rose-500 py-3.5 px-6 rounded-xl hover:bg-rose-50 transition-all duration-200"
          onClick={handleLogout}
        >
          <LuLogOut className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideMenu;

