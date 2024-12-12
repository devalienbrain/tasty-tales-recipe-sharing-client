import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ReduxProvider from "@/components/shared/ReduxProvider";
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="max-w-7xl mx-auto">
        <ReduxProvider>
          <header>
            <Navbar />
          </header>
          <main className="min-h-screen p-3 md:px-0">{children}</main>
          <footer>
            <Footer />
          </footer>
          <ScrollToTopButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
