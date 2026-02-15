"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PrintTrigger() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("download") !== null) {
      const timer = setTimeout(() => window.print(), 500);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return null;
}
