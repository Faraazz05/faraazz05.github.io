import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // TODO: Update ALL these social links and email address
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/faraazz05", // Update this
      handle: "@faraazz05", // Update this
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/faraazz05", // Update this
      handle: "/faraazz05", // Update this
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:faraaz@example.com", // Update this
      handle: "faraaz@example.com", // Update this
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: CRITICAL - Implement actual form submission
    // Option 1: Formspree - Add action="https://formspree.io/f/YOUR_FORM_ID"
    // Option 2: EmailJS - Install package and implement
    // Option 3: Lovable Cloud - Create edge function
    // For now, this just shows a toast notification
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-16 animate-fade-in-up">
            Let's build something meaningful together
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <GlassCard hoverable={false} className="animate-fade-in-up">
              <h2 className="text-2xl font-semibold mb-6 text-accent">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-accent bg-background/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-accent bg-background/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass border-white/20 focus:border-accent bg-background/50 resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glass-hover bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </GlassCard>

            {/* Social Links */}
            <div className="space-y-6 animate-fade-in-up delay-100">
              <GlassCard hoverable={false}>
                <h2 className="text-2xl font-semibold mb-6 text-accent">Connect</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Find me on these platforms. I'm always open to interesting conversations 
                  about AI, technology, and creative projects.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg glass-hover group"
                      >
                        <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{social.label}</p>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </GlassCard>

              {/* Quick Info */}
              <GlassCard hoverable={false}>
                <h3 className="text-lg font-semibold mb-3 text-accent">Response Time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond within 24-48 hours. For urgent inquiries, 
                  feel free to reach out directly via email or LinkedIn.
                </p>
              </GlassCard>
            </div>
          </div>

          {/* Note about TODO items */}
          <div className="mt-12 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Note:</strong> Update all social links and email addresses 
              in Contact.tsx. Implement form submission using Formspree, EmailJS, or a custom backend endpoint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
