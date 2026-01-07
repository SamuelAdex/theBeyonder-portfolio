import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "TheBeyonder",
  description:
    "",
  metadataBase: new URL("https://thebeyonder.vercel.app/"),
  keywords: [
    "web3",
    "StableFi",
    "blockchain",
    "DeFi",
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1767807466/Ellipse_15_qhxnmh.png",
    shortcut:
      "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1767807466/Ellipse_15_qhxnmh.png",
    apple:
      "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1767807466/Ellipse_15_qhxnmh.png",
  },
  applicationName: "TheBeyonder",
  authors: [
    {
      name: "",
      url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1767807466/Ellipse_15_qhxnmh.png",
    },
  ],
  referrer: "origin",
  creator: "@TheBeyonder",
  publisher: "TheBeyonder",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://thebeyonder.vercel.app/" },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://thebeyonder.vercel.app/",
    title: "TheBeyonder",
    description:
      "",
    siteName: "TheBeyonder",
    images: [
      {
        url: "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1767807466/Ellipse_15_qhxnmh.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheBeyonder",
    creator: "@onchainwithAde",
    images:
      "https://res.cloudinary.com/samueladexcloudinary/image/upload/v1767807466/Ellipse_15_qhxnmh.png",
    title: "TheBeyonder",
    description:
      ""
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
