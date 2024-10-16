import type { Metadata } from "next";
import "./globals.css";
import Header from "./_layouts/Header";
import Footer from "./_layouts/Footer";

export const metadata: Metadata = {
  title: "천진동명다이아몬드",
  description: "천진동명다이아몬드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-title">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
