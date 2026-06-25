"use client";

import { useEffect, useRef } from "react";

// Kit (ConvertKit) "JavaScript" embed. Unlike KitInlineForm (an <iframe>), the Kit
// script injects the form directly into our own DOM, so it sizes to its content
// naturally — no fixed-height iframe to guess at. Use this for forms that live IN
// the page flow. The iframe version is still used inside the toast/modal, where
// loading a script at an arbitrary later moment is trickier.
const SCRIPT_SRC =
  "https://prodigious-trailblazer-3628.kit.com/bd16825169/index.js";
const DATA_UID = "bd16825169";

type KitEmbedFormProps = {
  className?: string;
};

export const KitEmbedForm = ({ className }: KitEmbedFormProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Guard against double-injection (React strict mode runs effects twice, and
    // re-renders shouldn't stack multiple forms).
    if (container.querySelector("script, form")) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-uid", DATA_UID);
    // The Kit script injects the form right where its <script> tag sits, so
    // appending it inside this div makes the form render inside this div.
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className={className} />;
};
