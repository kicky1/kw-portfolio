import { ThemeProvider } from "@/providers/themeProvider";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "krzysztofwicki",
    template: "%s | krzysztofwicki",
  },
  description: "Software developer at Sevenet S.A.",
  openGraph: {
    title: "krzysztofwicki",
    description: "Software developer at Sevenet S.A.",
    url: "https://krzysztofwicki-portfolio.vercel.app/",
    siteName: "krzysztofwicki.com",
    images: [
      {
        url: "https://krzysztofwicki-portfolio.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-EU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "kicky",
    card: "summary_large_image",
    description: "Software engineer at Sevenet S.A.",
    images: ["https://krzysztofwicki-portfolio.vercel.app/og.png"],
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`w-screen 2xl:h-screen 2xl:overflow-hidden ${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
