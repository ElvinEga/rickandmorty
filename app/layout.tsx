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
          <Script src="assets/js/vendors/counterup.js" type="module" />
          <Script src="assets/js/vendors/swiper-bundle.min.js" />
          <Script src="assets/js/vendors/fslightbox.js" />
          <Script src="assets/js/vendors/jos.min.js" />
          <Script src="assets/js/vendors/menu.js" />
        </body>
      </ThemeProvider>
    </html>
  );
}
