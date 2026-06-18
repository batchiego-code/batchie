import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Batchie GO",
  description: "Your Batch Bestie!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} min-h-screen bg-[#f7f3ef]`}
      >
        {children}
      </body>
    </html>
  );
}