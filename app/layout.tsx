import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wanlu Jade | 缅甸翡翠原石源头看货",
  description:
    "Wanlu Jade 面向全球华人市场，提供缅甸翡翠原石、半明料、改口料与高端色料，支持自然光视频、打灯视频、直播看货与私域询价。",
  keywords: [
    "翡翠原石",
    "缅甸翡翠",
    "半明料",
    "改口料",
    "翡翠直播",
    "jadeite rough stone"
  ],
  openGraph: {
    title: "Wanlu Jade",
    description: "缅甸翡翠原石源头看货，视频复核后再决定",
    type: "website",
    locale: "zh_CN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
