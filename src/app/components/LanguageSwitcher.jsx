"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [showOptions, setShowOptions] = useState(false);

  const languages = {
    uz: "🇺🇿 ",
    ru: "🇷🇺 ",
    en: "🇬🇧 ",
  };

  return (
    <div className="relative">
      <button
        className="p-2 bg-gray-800 text-white rounded"
        onClick={() => setShowOptions(!showOptions)}
      >
        uzb
      </button>

      {showOptions && (
        <div className="absolute top-10 left-0 bg-white shadow-lg rounded p-2">
          {Object.entries(languages).map(([key, label]) => (
            <button
              key={key}
              className="block p-2 hover:bg-gray-200 w-full text-left"
              onClick={() => {
                console.log(`Til tanlandi: ${key}`);
                setShowOptions(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
