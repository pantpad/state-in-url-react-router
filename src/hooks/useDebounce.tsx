import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue];
}

export function useDebounceCallback(callback: () => void, delay: number) {
  const [debouncedCallback, setDebouncedCallback] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
      setDebouncedCallback((prev) => !prev);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedCallback, callback, delay]);

  return;
}
