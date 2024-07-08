import { Metadata } from "next";

import "../styles/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "TODO",
  description: "TODO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={"loading"}>
        <body>{children}</body>
      </Suspense>
    </html>
  );
}
