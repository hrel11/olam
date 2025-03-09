import React from 'react';
import { iconMap } from '~/components/iconMap';

interface SkillProps {
  className?: string;
  alt: string;
  rank?: 'rainbow' | 'gold' | 'silver';
  showText: boolean;
}

const SkillIcon: React.FC<SkillProps> = ({ className = '', alt, rank, showText }) => {
  const image = iconMap[alt] || '';
  const isIconAvailable = !!iconMap[alt];
  const rankClass = rank ? `bg-${rank}` : 'bg-gray-300/25';
  const hasBorder = rank ? 'border-1 border-black/25' : 'border-1 border-black/25 opacity-50';

  return (
    <li
      className={`${hasBorder} ${rankClass} mb-[1em] flex h-[50px] w-[50px] flex-col items-center gap-1 rounded-2xl`}
    >
      {isIconAvailable ? (
        <img
          className={`block flex-shrink-0 rounded-2xl border-5 border-white/0 align-baseline ${className}`}
          loading="eager"
          alt={`${alt} icon`}
          src={image.src}
          width="50"
          height="50"
        />
      ) : (
        <span
          className={`block h-[50px] w-[50px] flex-shrink-0 rounded-xl bg-gray-500 opacity-50 ${className}`}
        />
      )}
      <span
        className={`z-2 flex h-[50px] w-[50px] items-center justify-center text-center text-[0.7rem] leading-none break-all transition duration-250 ${className} ${
          showText ? '' : '-translate-x-5 opacity-0'
        }`}
      >
        {alt}
      </span>
    </li>
  );
};

export default SkillIcon;
