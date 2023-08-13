import React from "react";
import Set from "./Set";
import Resume from "./Resume";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div>
      <div className="w-full mx-auto text-[#f7f8fa] flex justify-start items-center">
        <div className="grid md:grid-cols-4 grid-cols-3 text-center items-center gap-10 md:gap-16">
          <Set logo="html5.svg" rate={70} />
          <Set logo="css3-alt.svg" rate={75} />
          <Set logo="js.svg" rate={50} />
          <Set logo="react.svg" rate={50} />
          <Set logo="typescript.svg" rate={30} />
          <Set logo="tailwind.svg" rate={40} />
          <Set logo="sanity.svg" rate={50} />
          <Set logo="next.svg" rate={70} />
          <Set logo="astro.svg" rate={60} />
          <Set logo="firebase.svg" rate={50} />
          <Set logo="python.svg" rate={60} />
        </div>
      </div>
      <Resume />
    </div>
  );
};

export default Skills;
