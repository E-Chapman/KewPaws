import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KewPaws",
  description: "Adoptable animals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Background />
      </body>
    </html>
  );
}
