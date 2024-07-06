import { useState } from "react";

export interface ToggleButtonProps {
  onToggle: () => void;
}

export function ToggleButton({ onToggle }: ToggleButtonProps) {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggle = () => {
    setIsToggled(!isToggled);
    onToggle();
  };

  return <button data-testid='toggle' onClick={toggle}>{isToggled ? "Forwards" : "Backwards"}</button>;
}
