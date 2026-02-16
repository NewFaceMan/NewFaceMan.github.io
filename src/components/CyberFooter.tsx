import { profile } from "@/data/portfolio";

const footerLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Blog", href: profile.blog },
];

export default function CyberFooter() {
  return (
    <footer className="print-hide bg-footer-bg py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-sm mb-1">
              {profile.name}
            </p>
            <p className="text-footer-text text-xs">
              {profile.title}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text text-sm hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-footer-text text-xs">
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
