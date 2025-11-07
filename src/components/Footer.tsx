import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/faraazz05", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/faraazz05", label: "LinkedIn" },
    { icon: Mail, href: "mailto:faraaz@example.com", label: "Email" },
  ];

  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Faraaz — Designed with intent, built with clarity.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover p-2 rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
