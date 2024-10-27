import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Karrot Market",
    default: "Karrot Market",
  },
  description: "Sell and buy all the things!",
};

export default function RootLayout({
  children,
  //@ts-ignore
  potato,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(potato);
  return (
    <html lang="en">
      <body
        className={`bg-neutral-900 text-white max-w-screen-sm m-auto ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {potato}
        {children}
      </body>
    </html>
  );
}
