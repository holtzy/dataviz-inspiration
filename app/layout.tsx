import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dataviz-inspiration.com"),
  title: {
    default: "Dataviz Inspiration | Hundreds of chart examples",
    template: "%s | Dataviz Inspiration",
  },
  description:
    "The biggest list of chart examples available on the web. Hundreds of the best viz projects displayed using a pinterest style sorted by tool and chart type.",
  keywords: [
    "Viz",
    "dataviz",
    "data visualization",
    "example",
    "catalog",
    "list",
    "chart",
    "graph",
    "plot",
  ],
  authors: [{ name: "Yan Holtz" }],
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "Dataviz Inspiration | Hundreds of chart examples",
    description:
      "The biggest list of chart examples available on the web. Hundreds of the best viz projects displayed using a pinterest style sorted by tool and chart type.",
    images: ["/overview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={""}>{children}</Suspense>
      </body>
      <GoogleAnalytics gaId="G-TRQ20SZLV3" />
    </html>
  );
}
