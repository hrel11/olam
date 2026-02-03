import React from 'react';

interface SkillFolderProps {
  title: string;
  children: React.ReactNode;
}

const SkillFolder: React.FC<SkillFolderProps> = ({ title, children }) => {
  return (
    <div className="flex w-fit flex-col gap-2 rounded-2xl bg-gray-400/50 p-4">
      <h2 className="text-md w-fit rounded-full bg-gray-500 px-6 font-bold text-white">{title}</h2>
      <ul className="flex h-full flex-wrap items-center gap-2">{children}</ul>
    </div>
  );
};

export default SkillFolder;
