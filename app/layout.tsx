import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Hanzi - Learn Chinese Characters (Hanzi) on Your Lock Screen",
  description: "Master Chinese characters (Hanzi) effortlessly with Daily Hanzi. The #1 lock screen learning app using spaced repetition for daily fluency.",
  keywords: ["Learn Chinese", "Chinese Characters", "Hanzi", "Lock Screen Learning", "Language App", "Spaced Repetition", "Daily Chinese", "HSK", "Vocabulary"],
  openGraph: {
    title: "Daily Hanzi - Learn Chinese Characters on Your Lock Screen",
    description: "Master Chinese characters (Hanzi) effortlessly with every unlock. The #1 lock screen learning app.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Hanzi - Lock Screen Learning",
    description: "Learn Chinese characters (Hanzi) effortlessly on your lock screen.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
