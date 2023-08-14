"use client";
import React from "react";

type Props = {
  logo: string;
  rate: number;
};

const Set = ({ logo, rate }: Props) => {
  return (
    <div className="group w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#cad2e0] md:flex justify-center items-center transition-all cursor-pointer md:object-fill">
      <img
        className="relative md:static left-2 top-2 w-12 h-14 md:w-12 md:h-14 group-hover:opacity-0 transition-all "
        src={logo}
        alt=""
      />
      <div className="md:hidden relative top-4 md:text-[#171321] text-xl opacity-90 group-hover:opacity-100  transition-all">
        {rate}%
      </div>
      <div className="hidden md:flex absolute md:text-[#171321] text-xl opacity-0 group-hover:opacity-100 font-bold transition-all">
        {rate}%
      </div>
    </div>
  );
};

export default Set;
