import { useState } from "react";

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
      className={`mx-4 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5)] hover:shadow-[0_0_5px_#fff,0_0_10px_#ffc,0_0_15px_#ff9] w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-[#34e44f]" : "bg-gray-400/80"
      }`}
      onClick={handleToggle}
    >
      <button
        type="button"
        aria-label="toggle skill names"
        className={`cursor-pointer w-8 h-8 bg-white rounded-full transform transition-transform ease-[cubic-bezier(0,1.24,1,.89)] duration-300 shadow-[0_0_3px_#5d5d5d] ${
          isOn ? "translate-x-9" : "-translate-x-3"
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;
