// app/page.tsx
"use client";

import "./globals.css";
import { useEffect } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "Rick & Morty Universe",
  description: "Explore the characters, locations, and lore of Rick and Morty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body>
          {children}
          {/* Include your scripts here using next/script */}
          {/* <PrelineScript /> */}
          {/* <script src="./node_modules/preline/dist/preline.js"></script> */}
          <script src="assets/js/plugins.init.js"></script>
          <script src="assets/js/app.js"></script>
        </body>
      </ThemeProvider>
    </html>
  );
}
