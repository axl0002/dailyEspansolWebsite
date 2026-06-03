"use client";

import { useEffect, useRef } from "react";

const FORM_ID = "a10112ee-e87b-483a-a7ed-1ad5bd0e66e2";
const LOADER_SRC = "https://subscribe-forms.beehiiv.com/v3/loader.js";

export default function WaitlistForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Avoid injecting twice (e.g. React Strict Mode double-mount in dev).
    if (container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    script.setAttribute("data-beehiiv-form", FORM_ID);
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className="w-full max-w-[400px] mx-auto" />;
}
