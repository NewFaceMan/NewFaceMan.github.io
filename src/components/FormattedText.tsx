import type { ReactNode } from "react";

/** Inline "→" 를 볼드로 렌더링 */
export function boldArrows(text: string): ReactNode {
  if (!text.includes("→")) return text;
  const parts = text.split("→");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <span className="font-semibold text-heading">→</span>
      )}
    </span>
  ));
}

interface FormattedTextProps {
  text: string;
  className?: string;
}

export default function FormattedText({
  text,
  className = "",
}: FormattedTextProps) {
  // No newlines → plain text
  if (!text.includes("\n")) {
    return <p className={`break-words ${className}`}>{boldArrows(text)}</p>;
  }

  const lines = text.split("\n");

  return (
    <div className={`break-words ${className}`}>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        // Numbered item: "1. xxx" or "1. label — description"
        const numberMatch = trimmed.match(/^(\d+)\.\s(.+)/);
        if (numberMatch) {
          const content = numberMatch[2];
          const dashIdx = content.indexOf(" — ");

          return (
            <div key={i} className="flex gap-2.5 mt-2 first:mt-0">
              <span className="text-accent font-semibold shrink-0 tabular-nums text-[0.85em]">
                {numberMatch[1]}.
              </span>
              {dashIdx !== -1 ? (
                <span>
                  <span className="font-semibold text-heading">
                    {content.slice(0, dashIdx)}:
                  </span>{" "}
                  <span>{boldArrows(content.slice(dashIdx + 3))}</span>
                </span>
              ) : (
                <span>{boldArrows(content)}</span>
              )}
            </div>
          );
        }

        // Section header: "[Engineer]" or "[PM]"
        if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
          return (
            <div key={i} className={i > 0 ? "mt-3" : ""}>
              <span className="inline-block text-[11px] font-semibold text-accent bg-accent-dim border border-accent-border px-2.5 py-0.5 rounded-md tracking-wide">
                {trimmed.slice(1, -1)}
              </span>
            </div>
          );
        }

        // Arrow / conclusion: "→ xxx"
        if (trimmed.startsWith("→")) {
          return (
            <div
              key={i}
              className="mt-2 font-semibold text-heading text-[0.92em]"
            >
              {trimmed}
            </div>
          );
        }

        // Example line: "예: xxx"
        if (trimmed.startsWith("예:") || trimmed.startsWith("예 :")) {
          return (
            <div key={i} className="mt-1.5 text-muted text-[0.9em] pl-5 border-l-2 border-border">
              {boldArrows(trimmed)}
            </div>
          );
        }

        // Regular text (intro / header)
        return (
          <div key={i} className={i > 0 ? "mt-1.5" : ""}>
            {boldArrows(trimmed)}
          </div>
        );
      })}
    </div>
  );
}
