import React from "react";

type Props = {
  lang: string;
};

const Languages = ({ lang }: Props) => {
  return (
    <div className="bg-teal-400 bg-opacity-20 rounded-xl py-1 px-4 flex justify-center items-center">
      <div className="text-teal-300">{lang}</div>
    </div>
  );
};

export default Languages;
