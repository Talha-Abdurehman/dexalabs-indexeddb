import React from "react";

const MetaTitle = ({ text }: { text: string }) => {
  return (
    <div className="py-1 flex justify-center items-center px-4 rounded-full border-[1px] border-gray-600 backdrop-blur-xl">
      <h5 className="xl:text-2xl relative xl:-top-[2px]">{text}</h5>
    </div>
  );
};

export default MetaTitle;
