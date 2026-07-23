import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinxing2027.github.io"),
  title: "Xinxing Li — Observer & Interpreter of Nature's Patterns",
  description:
    "The personal portfolio of Xinxing Li: selected work, digital experiments, and ideas in progress.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xinxing Li — Observer & Interpreter of Nature's Patterns",
    description:
      "Selected work, digital experiments, and ideas in progress.",
    url: "/",
    siteName: "Xinxing Li",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Xinxing Li portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xinxing Li — Observer & Interpreter of Nature's Patterns",
    description: "Selected work, digital experiments, and ideas in progress.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
