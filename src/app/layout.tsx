import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  title: "박상우 | Security Operations & DFIR Analyst",
  description:
    "위협 탐지·대응 자동화와 정밀한 아티팩트 분석을 추구하는 SecOps/DFIR 분석가가 되고자 합니다.",
  keywords: [
    "SecOps",
    "DFIR",
    "Security Operations",
    "Threat Detection",
    "네트워크 보안",
    "포트폴리오",
    "Python",
  ],
  authors: [{ name: "박상우" }],
  openGraph: {
    title: "박상우 | Security Operations & DFIR Analyst",
    description:
      "위협 탐지·대응 자동화와 정밀한 아티팩트 분석을 추구하는 SecOps/DFIR 분석가가 되고자 합니다.",
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
