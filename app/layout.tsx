// app/page.tsx
"use client";

import "./globals.css";
import { useEffect } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "bootstrap-icons/font/bootstrap-icons.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Rick & Morty Universe",
  description: "Leading with Data for a Greener Future",
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
          <script src="assets/libs/tiny-slider/min/tiny-slider.js"></script>
          <script src="assets/libs/feather-icons/feather.min.js"></script>
          <script src="assets/js/plugins.init.js"></script>
          <script src="assets/js/app.js"></script>
        </body>
      </ThemeProvider>
    </html>
  );
}
