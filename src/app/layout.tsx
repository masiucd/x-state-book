import "./globals.css";

import type {Metadata} from "next";
import {JetBrains_Mono} from "next/font/google";
import {type ReactNode} from "react";

import {cn} from "@/lib/styles";

// const inter = Inter({subsets: ["latin"]});
const jetBrainsMono = JetBrains_Mono({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "X-state stuff",
  description: "X-state stuff, by @masiucd",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-slate-50 text-gray-800", jetBrainsMono.className)}
      >
        {children}
      </body>
    </html>
  );
}
