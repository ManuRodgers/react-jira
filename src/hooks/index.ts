/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const useMount = (callback: () => void): void => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(
  initArray: T[]
): {
  value: T[];
  setValue: React.Dispatch<React.SetStateAction<T[]>>;
  add: (item: T) => void;
  removeByIndex: (index: number) => void;
  clear: () => void;
} => {
  const [value, setValue] = useState(initArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    removeByIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
    clear: () => setValue([]),
  };
};
