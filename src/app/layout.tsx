import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ClientLoader from "@/components/ClientLoader"; 

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (must stay in a server component)
export const metadata: Metadata = {
  title: "GridSpace",
  description: "Generated by Aslin Karmacharya",
  icons: { icon: "/Favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLoader>{children}</ClientLoader> {/* Wrap in ClientLoader */}
        <Toaster />
      </body>
    </html>
  );
}
