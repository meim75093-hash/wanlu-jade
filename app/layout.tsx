import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { LanguageProvider } from "@/context/language";
import "./globals.css";

const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Wanlu Jade 万璐翡翠 | 缅甸翡翠原石源头看货",
  description:
    "Wanlu Jade 万璐翡翠，面向全球华人藏家，提供缅甸翡翠原石、半明料、改口料与高端色料。自然光视频、打灯视频、直播看货，先看清楚风险再决定。",
  keywords: [
    "翡翠原石",
    "缅甸翡翠",
    "半明料",
    "改口料",
    "翡翠直播",
    "翡翠代购",
    "jadeite rough stone",
    "Burmese jade"
  ],
  openGraph: {
    title: "Wanlu Jade 万璐翡翠",
    description: "缅甸翡翠原石源头看货，视频复核后再决定。",
    type: "website",
    locale: "zh_CN"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={displaySerif.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
