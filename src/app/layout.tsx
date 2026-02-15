import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  title: "박상우 | CERT & DFIR Analyst 포트폴리오",
  description:
    "디지털 포렌식과 침해사고 대응을 중심으로, Python 기반 보안 도구 개발과 AI를 활용한 분석 자동화를 연구하는 CERT/DFIR 분석가가 되고자 합니다.",
  keywords: [
    "CERT",
    "DFIR",
    "디지털 포렌식",
    "침해사고 대응",
    "포트폴리오",
    "Python",
  ],
  authors: [{ name: "박상우" }],
  openGraph: {
    title: "박상우 | CERT & DFIR Analyst 포트폴리오",
    description:
      "디지털 포렌식과 침해사고 대응을 중심으로, Python 기반 보안 도구 개발과 AI를 활용한 분석 자동화를 연구하는 CERT/DFIR 분석가가 되고자 합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased font-sans overflow-x-hidden">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
