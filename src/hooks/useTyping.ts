import { useEffect, useState } from 'react';

export function useTyping(text: string, speed = 42, delayStart = 400) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setDisplay('');
    setDone(false);
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      let i = 0;
      intervalId = window.setInterval(() => {
        if (cancelled) return;
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId) window.clearInterval(intervalId);
          if (!cancelled) setDone(true);
        }
      }, speed);
    }, delayStart);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, speed, delayStart]);

  return { display, done };
}
