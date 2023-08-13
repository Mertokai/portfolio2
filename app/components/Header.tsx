import React from "react";
import Ui from "./Ui";
import Icons from "./Icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-full lg:w-1/2 lg:py-24 md:space-y-4  space-y-9 md:sticky top-0 scroll-smooth items-center ">
      <div className="flex flex-col space-y-5 pt-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-6xl">
          <a href="/">Mert Eyüboğlu</a>
        </h1>
        <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Frontend Developer
        </h2>
        <p className="max-w-xs leading-normal text-[#94a3b8]">
          I build accessible, responsive also creative sites.
        </p>
      </div>
      <div className="hidden md:flex flex-col space-y-5 md:w-1/2 md:py-24 scroll-smooth">
        <Ui section="ABOUT" href="#ABOUT" />
        <Ui section="SKILLS" href="#SKILLS" />
        <Ui section="PROJECTS" href="#PROJECTS" />
      </div>
      <div>
        <Icons />
      </div>
    </header>
  );
};

export default Header;
