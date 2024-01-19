import { useState } from "react";

export default function useModal() {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return {
    active,
    toggle
  };
}