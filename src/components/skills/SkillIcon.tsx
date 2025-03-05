import React from "react";
import { gsap } from "gsap";
import { iconMap } from "~/components/iconMap";

interface SkillProps {
  className?: string;
  alt: string;
  rank?: "rainbow" | "gold" | "silver";
  showText: boolean;
}

const SkillIcon: React.FC<SkillProps> = ({
  className = "",
  alt,
  rank,
  showText,
}) => {
  const image = iconMap[alt] || "";
  const isIconAvailable = !!iconMap[alt];
  const rankClass = rank ? `bg-${rank}` : "bg-gray-300/25";
  const hasBorder = rank
    ? "border-1 border-black/25"
    : "border-1 border-black/25 opacity-50";

  return (
    <li
      className={`${hasBorder} ${rankClass} rounded-2xl w-[50px] h-[50px] flex flex-col items-center gap-1 mb-[1em]`}
    >
      {isIconAvailable ? (
        <img
          className={`block flex-shrink-0 border-5 border-white/0 rounded-2xl align-baseline ${className}`}
          loading="eager"
          alt={`${alt} icon`}
          src={image.src}
          width="50"
          height="50"
        />
      ) : (
        <span
          className={`block flex-shrink-0 w-[50px] h-[50px] bg-gray-500 opacity-50 rounded-xl ${className}`}
        />
      )}
      <span
        className={`break-all text-center w-[50px] h-[50px] text-[0.7rem] leading-none flex justify-center items-center z-2 transition duration-250 ${className} ${
          showText ? "" : "-translate-x-5 opacity-0"
        }`}
      >
        {alt}
      </span>
    </li>
  );
};

export default SkillIcon;
