'use client';

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";


export default function Providers({ children, ...props }) {

  return (
    <NextThemesProvider {...props}>
      <div className="text-gray-700 dark:text-gray-200 dark:bg-black min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </NextThemesProvider>
  );
}
