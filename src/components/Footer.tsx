import { Github, Linkedin, Mail } from "lucide-react";
import AmbientSound from "./AmbientSound";

const Footer = () => {
  // TODO: Update these social links with your actual profiles
  const socialLinks = [
    { icon: Github, href: "https://github.com/faraazz05", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/faraazz05", label: "LinkedIn" },
    { icon: Mail, href: "mailto:faraaz@example.com", label: "Email" },
  ];

  return (
    <footer className="glass border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground space-y-1">
            <p>© 2025 Faraaz. All rights reserved.</p>
            <p className="text-xs">
              All written works, projects, designs, and content are protected under copyright law. 
              <a href="/legal" className="text-accent hover:underline ml-1">Legal Notice</a>
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <AmbientSound />
            <div className="w-px h-6 bg-border" />
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover p-2 rounded-lg transition-all duration-300 hover:scale-110"
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
