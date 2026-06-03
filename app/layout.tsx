import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Español - Learn Spanish on Your Lock Screen",
  description: "Master Spanish vocabulary effortlessly with Daily Español. The #1 lock screen learning app using spaced repetition for daily fluency.",
  keywords: ["Learn Spanish", "Spanish Vocabulary", "Español", "Lock Screen Learning", "Language App", "Spaced Repetition", "Daily Spanish", "DELE", "Vocabulary"],
  openGraph: {
    title: "Daily Español - Learn Spanish on Your Lock Screen",
    description: "Master Spanish vocabulary effortlessly with every unlock. The #1 lock screen learning app.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Español - Lock Screen Learning",
    description: "Learn Spanish vocabulary effortlessly on your lock screen.",
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
