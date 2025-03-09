import { useState } from 'react';

type ToggleSwitchProps = {
  onToggle: () => void;
};

const ToggleSwitch = ({ onToggle }: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle();
  };

  return (
    <div
      className={`mx-4 flex h-7 w-14 cursor-pointer items-center rounded-full shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:shadow-[0_0_5px_#fff,0_0_10px_#ffc,0_0_15px_#ff9] ${
        isOn ? 'bg-[#34e44f]' : 'bg-gray-400/80'
      }`}
      onClick={handleToggle}
    >
      <button
        type="button"
        aria-label="toggle skill names"
        className={`h-8 w-8 transform cursor-pointer rounded-full bg-white shadow-[0_0_3px_#5d5d5d] transition-transform duration-300 ease-[cubic-bezier(0,1.24,1,.89)] ${
          isOn ? 'translate-x-9' : '-translate-x-3'
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
