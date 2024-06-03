import "./globals.css";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lease Request Form",
  description: "We'll Find the Space For You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar></Navbar>
          {children}</NextUIProvider>
          <Footer></Footer>
      </body>
    </html>
  );
}
