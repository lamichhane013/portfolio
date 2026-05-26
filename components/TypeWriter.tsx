"use client";
import { useState, useEffect } from "react";

interface Props {
  texts: string[];
}

export default function TypeWriter({ texts }: Props) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const current = texts[idx] ?? "";

    const timeout = deleting
      ? setTimeout(() => {
          setTxt((t) => t.slice(0, -1));
          if (txt.length <= 1) {
            setDeleting(false);
            setIdx((i) => (i + 1) % texts.length);
          }
        }, 60)
      : setTimeout(() => {
          setTxt(current.slice(0, txt.length + 1));
          if (txt.length >= current.length - 1) {
            setTimeout(() => setDeleting(true), 1500);
          }
        }, 80);

    return () => clearTimeout(timeout);
  }, [txt, deleting, idx, texts]);

  return (
    <span className="text-[#00ff88]">
      {txt}
      <span className="blink">|</span>
    </span>
  );
}
