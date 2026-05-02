import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="glass shadow-premium py-4 px-8 sticky top-0 z-50 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>

        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent font-display tracking-tight">
          Xpensify
        </h2>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-100 rounded-full">
          Dashboard
        </span>
      </div>

      {openSideMenu && (
        <div className="fixed top-[68px] left-0 w-full h-full bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setOpenSideMenu(false)}>
          <div className="w-64 h-full bg-white animate-fade-in" onClick={e => e.stopPropagation()}>
            <SideMenu activeMenu={activeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

