import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ReduxProvider from "@/components/shared/ReduxProvider"; // Import ReduxProvider
import ScrollToTopButton from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Tasty Tales Recipes",
  description: "Owned by devalienbrain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="max-w-7xl mx-auto">
        <ReduxProvider>
          {" "}
          {/* Wrap the layout with ReduxProvider */}
          <Navbar />
          <hr className="border-t-0.5 border-gray-200/30 mb-6" />
          <div className="min-h-screen p-3 md:px-0">{children}</div>
          <hr className="border-t-0.5 border-gray-200/30 my-6" />
          <Footer />
          <ScrollToTopButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
