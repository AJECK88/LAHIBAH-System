'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting until mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-9 w-24 bg-gray-200 animate-pulse rounded-md" />;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">System Theme</label>
      <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg w-fit">
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            theme === 'light' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          ☀️ Light Mode
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            theme === 'dark' ? 'bg-black text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          🌙 Dark Mode
        </button>
        <button
          type="button"
          onClick={() => setTheme('system')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            theme === 'system' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500'
          }`}
        >
          💻 System Default
        </button>
      </div>
    </div>
  );
}