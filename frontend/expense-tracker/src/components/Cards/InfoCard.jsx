import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="card-premium flex items-center gap-6 group">
      <div
        className={`w-16 h-16 flex items-center justify-center text-3xl text-white ${color} rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-400 mb-1 uppercase tracking-wider">{label}</p>
        <h3 className="text-2xl font-bold text-slate-800 leading-none">₹{value}</h3>
      </div>
    </div>
  );
};

export default InfoCard;

