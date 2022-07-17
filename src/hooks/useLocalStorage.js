import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setstate] = useState(
    JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setstate];
};
