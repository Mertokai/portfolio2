"use client";
import React, { useState } from "react";
import Languages from "./Languages";

type Props = {
  content: string;
  header: string;
  image: string;
  lang1: string;
  lang: string;
  lang2: string;
  link?: string;
};

const Cards = ({ content, header, image, lang, lang1, lang2, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [classn, setClassn] = useState(
    "w-full h-full hover:opacity-100 md:group-hover:opacity-10 cursor-pointer"
  );

  const handleMouseOver = () => {
    setIsHovered(true);
    setClassn("w-full h-full opacity-100 cursor-pointer");
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setClassn(
      "w-full h-full hover:opacity-100 md:group-hover:opacity-50 cursor-pointer"
    );
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={classn}
    >
      <a
        href={link}
        className="group transition-all flex px-3 py-5  flex-col lg:flex-row w-full space-y-5 md:space-y-0 md:space-x-5 bg-opacity-0 hover:bg-opacity-50 bg-slate-800 rounded-lg border-t border-opacity-0 hover:border-opacity-100 border-slate-700"
      >
        <div className="md:w-[100.3px] md:h-[63.8875px] w-[200px] h-[113.9px] flex">
          <img
            className="rounded border-2 object-cover border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            src={image}
            alt={image}
          />
        </div>
        <div id="PROJECTS" className="flex-1 space-y-3">
          <div className="pr-2 font-medium text-slate-200 group-hover:text-teal-300 text-xl flex items-center">
            <div>{header}</div>
            <div className="flex-col relative  pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className=" h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-[#94a3b8]">{content}</div>
          <div className="flex space-x-2">
            <Languages lang={lang} />
            <Languages lang={lang1} />
            <Languages lang={lang2} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Cards;
