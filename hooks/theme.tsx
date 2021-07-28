import { useEffect } from "react";
import useLocalStorage from "./local-storage";

interface UseTheme {
  storedTheme: Theme;
  setTheme: (value: Theme | ((value: Theme) => Theme)) => void;
  handleTheme: () => void;
}

type Theme = "light" | "dark";
const useTheme = (themeKey = "theme", themeValue: Theme = "light"): UseTheme => {
  const { storedValue, setValue } = useLocalStorage<Theme>(themeKey, themeValue);

  const handleTheme = () => {
    const nextTheme = storedValue === "light" ? "dark" : "light";
    setValue(nextTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = storedValue;
  }, [storedValue]);

  return { storedTheme: storedValue, setTheme: setValue, handleTheme };
};

export default useTheme;
