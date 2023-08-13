"use client";
import React from "react";

type Props = {
  section: string;
  href: string;
};

const Ui = ({ section, href }: Props) => {
  return (
    <a
      href={href}
      className="group items-center flex space-x-5 cursor-pointer scroll-smooth"
    >
      <div className="items-center">
        <div className="bg-[#94a3b8] w-10 h-[2px] group-hover:w-20  group-hover:bg-slate-200 transition-all "></div>
      </div>
      <div className="text-[#94a3b8] text-lg group-hover:font-bold group-hover:text-slate-200">
        {section}
      </div>
    </a>
  );
};

export default Ui;
