import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TuneFlow",
  description: "A Next.js music distributor website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container mx-auto py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
