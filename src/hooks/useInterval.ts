import { useEffect, useRef } from 'react';

export const useInterval = (callbackFn, delay ) => {
  const savedCallback = useRef(null);

  // Remember the latest callback function
  useEffect(() => {
    savedCallback.current = callbackFn;
  }, [callbackFn]);

  // Set up the interval
  useEffect(() => {
    // Don't schedule if no delay is specified
    // Note: 0 is a valid value for delay
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};
