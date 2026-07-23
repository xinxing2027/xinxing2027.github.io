import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinxing2027.github.io"),
  title: "Xinxing — Independent Builder & Creative Technologist",
  description:
    "The personal portfolio of Xinxing: selected work, digital experiments, and ideas in progress.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xinxing — Independent Builder & Creative Technologist",
    description:
      "Selected work, digital experiments, and ideas in progress.",
    url: "/",
    siteName: "Xinxing",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Xinxing portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xinxing — Independent Builder & Creative Technologist",
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
