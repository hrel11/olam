import { showTextState } from './ShowTextState';
import { useAtomValue } from 'jotai';

type SkillIconTitleProps = {
  title: string;
};

const SkillIconTitle = ({ title }: SkillIconTitleProps) => {
  const showText = useAtomValue(showTextState);

  return (
    <span
      className={`z-2 flex h-12.5 w-12.5 items-center justify-center text-center text-[0.7rem] leading-none break-all transition duration-250 ${
        showText ? '' : '-translate-x-5 opacity-0'
      }`}
    >
      {title}
    </span>
  );
};

export default SkillIconTitle;
