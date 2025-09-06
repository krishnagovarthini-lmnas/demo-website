import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "SGB-SMIT Group",
};

const oswald = Oswald({
  subsets: ["vietnamese"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
