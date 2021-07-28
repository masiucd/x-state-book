import { useState } from "react";

interface Toggle {
  state: boolean;
  setStateToTrue: () => void;
  setStateToFalse: () => void;
  toggle: () => void;
}

export const useToggle = (initialState = false): Toggle => {
  const [state, setState] = useState(initialState);

  const setStateToTrue = (): void => {
    setState(true);
  };
  const setStateToFalse = (): void => {
    setState(false);
  };

  const toggle = (): void => {
    setState(p => !p);
  };

  return { state, setStateToFalse, setStateToTrue, toggle };
};
