import { profile } from "@/data/portfolio";

const footerLinks = [
  { label: "GH", href: profile.github },
  { label: "LI", href: profile.linkedin },
  { label: "BG", href: profile.blog },
];

export default function CyberFooter() {
  return (
    <footer className="print-hide border-t border-border py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-muted tracking-wider">
            &copy; 2026 {profile.name} &mdash; {profile.title}
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-muted hover:text-accent transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
