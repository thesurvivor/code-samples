"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
      Tema: {theme}
    </button>
  );
}
