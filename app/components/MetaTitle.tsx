import React, { ReactNode } from "react";

const MetaTitle = ({ text, icon }: { text: string; icon?: ReactNode }) => {
  return (
    <div className="py-1 flex justify-center items-center px-4 rounded-full border-[1px] border-gray-600 backdrop-blur-xl gap-2">
      {icon}
      <h5 className="xl:text-xl relative xl:-top-[2px]">{text}</h5>
    </div>
  );
};

export default MetaTitle;
