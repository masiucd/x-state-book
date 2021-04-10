import { useState } from "react";

interface UseLocalStorage<T> {
  storedValue: T;
  setValue: (value: T | ((value: T) => T)) => void;
}
const useLocalStorage = <T,>(key: string, value: T): UseLocalStorage<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : value;
    } catch (error) {
      console.error(error);
      return value;
    }
  });
  const setValue = (value: T | ((value: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return { storedValue, setValue };
};

export default useLocalStorage;
