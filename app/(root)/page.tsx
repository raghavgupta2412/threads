import React from "react";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}
