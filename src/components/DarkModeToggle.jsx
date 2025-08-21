import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Ensure theme is applied on first render
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="btn btn-circle btn-outline transition-colors duration-300"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? (
        // ☀️ Sun icon for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m15.66 5.66l-.71-.71M6.34 6.34l-.71-.71M12 7a5 5 0 000 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        // 🌙 Moon icon for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
}
