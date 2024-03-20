import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description: "Frontend Challenge by Rocketseat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
