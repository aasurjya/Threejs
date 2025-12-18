"use client";

import React, { useEffect, useMemo, useState } from "react";

export default function TypingText({
  text,
  speedMs = 30,
  startDelayMs = 300,
  cursor = true,
  className,
}) {
  const fullText = useMemo(() => (text ?? "").toString(), [text]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    setVisibleCount(0);

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setVisibleCount((c) => {
          if (c >= fullText.length) {
            clearInterval(intervalId);
            return c;
          }
          return c + 1;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [fullText, speedMs, startDelayMs]);

  const shown = fullText.slice(0, visibleCount);

  return (
    <span className={className} aria-label={fullText}>
      {shown}
      {cursor ? (
        <span
          className={"inline-block w-[1ch] align-baseline animate-pulse"}
          aria-hidden="true"
        >
          |
        </span>
      ) : null}
    </span>
  );
}
