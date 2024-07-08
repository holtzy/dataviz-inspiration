import { Metadata } from "next";

import "../styles/globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dataviz Inspiration",
  description:
    "The Pinterest of data visualization. Explore hundreds of stunning dataviz projects in a clean, organized layout. Easily searchable, filterable, and categorized by chart type for your convenience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={"loading"}>{children}</Suspense>
      </body>
    </html>
  );
}
