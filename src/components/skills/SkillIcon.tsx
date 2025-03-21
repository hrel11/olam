import React from 'react';
import { iconMap } from '~/components/iconMap';
import SkillIconTitle from './SkillIconTitle';

interface SkillProps {
  className?: string;
  alt: string;
  rank?: 'rainbow' | 'gold' | 'silver';
}

const SkillIcon: React.FC<SkillProps> = ({ className = '', alt, rank }) => {
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
      <SkillIconTitle title={alt} />
    </li>
  );
};

export default SkillIcon;
