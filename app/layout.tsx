import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Template",
  description: "Template generated with NEXT",
  keywords: ['Website', 'Template', 'BeUniqueCorp', '...'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* <h1>Web Site Template</h1> */}
          {children}
      </body>
    </html>
  );
}
