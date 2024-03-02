import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Navbar";
import { Provider } from "jotai";
import Footer from "@components/Footer";

const chackra = Chakra_Petch({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie app",
  description: "A movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chackra.className} min-h-screen pt-5 md:pt-10 bg-primary-200 text-white bg-[url('/img/bg-1.png')] bg-no-repeat bg-cover`}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}