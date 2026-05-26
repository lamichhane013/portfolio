"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none rounded-full border border-[#00ff88]"
        style={{ left: pos.x - 16, top: pos.y - 16, width: 32, height: 32, zIndex: 9999 }}
        animate={{ scale: clicking ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <div
        className="fixed pointer-events-none rounded-full bg-[#00ff88]"
        style={{ left: pos.x - 3, top: pos.y - 3, width: 6, height: 6, zIndex: 9999 }}
      />
    </>
  );
}
