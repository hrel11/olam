import React from "react";

interface SkillFolderProps {
  title: string;
  children: React.ReactNode;
}

const SkillFolder: React.FC<SkillFolderProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-gray-300/80 rounded-2xl w-fit">
      <h2 className="text-md font-bold px-6 rounded-full bg-gray-500 text-white w-fit">
        {title}
      </h2>
      <ul className="flex gap-2 flex-wrap h-full items-center">{children}</ul>
    </div>
  );
};

export default SkillFolder;
