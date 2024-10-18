import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Tasty Tales Recipes",
  description: "Owned by devalienbrain",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className="max-w-7xl mx-auto">
        <Navbar />
        <hr />
        <div className="min-h-screen py-3">{children}</div>
        <hr />
        <Footer />
      </body>
    </html>
  );
}
