"use client";

import { useEffect, useRef } from "react";
import { roles } from "./roles";

export default function TypewriterText() {
  const textRef = useRef<HTMLSpanElement>(null);
  const stateRef = useRef({ text: "", isDeleting: false, loopIndex: 0 });

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const state = stateRef.current;
      const fullText = roles[state.loopIndex % roles.length];

      if (!state.isDeleting && state.text === fullText) {
        state.isDeleting = true;
        timerId = setTimeout(tick, 500);
        return;
      }

      if (state.isDeleting && state.text === "") {
        state.isDeleting = false;
        state.loopIndex += 1;
        timerId = setTimeout(tick, 0);
        return;
      }

      state.text = state.isDeleting
        ? fullText.substring(0, state.text.length - 1)
        : fullText.substring(0, state.text.length + 1);

      if (textRef.current) {
        textRef.current.textContent = state.text;
      }

      timerId = setTimeout(tick, state.isDeleting ? 30 : 120);
    };

    timerId = setTimeout(tick, 120);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <span className="typewriter-text gradient-text">
      <span ref={textRef} />
      <span className="typewriter-cursor">|</span>
    </span>
  );
}
