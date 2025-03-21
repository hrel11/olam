import { showTextState } from './ShowTextState';
import { useAtom } from 'jotai';
import ToggleSwitch from '~/components/ToggleSwitch';

const ToggleSwitchForSkillIcon = () => {
  const [showText, setShowText] = useAtom(showTextState);

  const toggleShowText = () => {
    setShowText(!showText);
  };

  return <ToggleSwitch onToggle={toggleShowText} />;
};

export default ToggleSwitchForSkillIcon;
