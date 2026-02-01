import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Eventro | Plan & Staff Events Effortlessly",
    template: "%s | Eventro",
  },
  description:
    "Plan events, post hiring requirements, and connect with planners, performers, and crew — all in one place.",
  keywords: [
    "event planning",
    "hire event planners",
    "event performers",
    "event crew hiring",
    "wedding planning",
    "corporate events",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50 text-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
