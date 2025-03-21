import { showTextState } from './ShowTextState';
import { useAtomValue } from 'jotai';

type SkillIconTitleProps = {
  title: string;
};

const SkillIconTitle = ({ title }: SkillIconTitleProps) => {
  const showText = useAtomValue(showTextState);

  return (
    <span
      className={`z-2 flex h-[50px] w-[50px] items-center justify-center text-center text-[0.7rem] leading-none break-all transition duration-250 ${
        showText ? '' : '-translate-x-5 opacity-0'
      }`}
    >
      {title}
    </span>
  );
};

export default SkillIconTitle;
