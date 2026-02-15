import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "박상우 | DFIR & Security Engineer 포트폴리오",
  description:
    "디지털 포렌식과 침해사고 대응을 중심으로, Python 기반 보안 도구 개발과 AI를 활용한 분석 자동화를 연구하는 보안 엔지니어입니다.",
};

export default function PdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pdf-body bg-white text-black">{children}</div>;
}
