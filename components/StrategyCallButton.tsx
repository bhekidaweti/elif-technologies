"use client";

import { Calendar } from "lucide-react";

export default function StrategyCallButton() {
  return (
    <a
      href="/book"
      className="
      fixed bottom-6 right-6
      flex items-center gap-2
      bg-gradient-to-r from-indigo-500 to-purple-500
      text-white
      px-5 py-3
      rounded-full
      shadow-lg
      hover:scale-105
      transition
      z-50
      "
    >
      <Calendar size={18} />
      Book Free Strategy Call
    </a>
  );
}