import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Threads",
  desciption: "A Nextjs 14 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
