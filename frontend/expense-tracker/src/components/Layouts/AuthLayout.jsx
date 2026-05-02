import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side: Form */}
      <div className="w-full md:w-[55vw] px-8 md:px-16 lg:px-24 py-12 flex flex-col">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent font-display tracking-tight mb-auto">
          Xpensify
        </h2>
        
        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full py-12 animate-fade-in">
          {children}
        </div>

        <div className="mt-auto text-slate-400 text-sm font-medium">
          © 2024 Xpensify. All rights reserved.
        </div>
      </div>

      {/* Right Side: Visuals */}
      <div className="hidden md:flex w-[45vw] bg-gradient-to-br from-primary via-primary-dark to-purple-900 relative overflow-hidden p-12 flex-col justify-between">
        {/* Abstract Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h3 className="text-white text-4xl font-bold font-display leading-tight mb-4">
            Master your money, <br/>
            <span className="text-white/70 font-medium">Shape your future.</span>
          </h3>
          <p className="text-white/60 text-lg max-w-sm font-medium leading-relaxed">
            The most intuitive way to track your expenses and grow your savings in one place.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Average Monthly Savings"
            value="45,000"
          />

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-primary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={CARD_2}
              alt="Dashboard Preview"
              className="relative w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsInfoCard = ({ icon, label, value }) => {
  return (
    <div className="glass p-5 rounded-2xl shadow-2xl flex items-center gap-5 border border-white/20 transform transition-transform duration-300 hover:scale-105">
      <div className="w-12 h-12 flex items-center justify-center text-2xl text-white bg-white/10 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{label}</p>
        <h4 className="text-white text-xl font-bold font-display tracking-tight">₹{value}</h4>
      </div>
    </div>
  );
};

export default AuthLayout;

