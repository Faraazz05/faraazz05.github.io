// contact.tsx
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "223b5477-2c3f-4579-bc01-28197ad9351c"; // <-- replace this

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  // TODO: Update ALL these social links and email address
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/faraazz05",
      handle: "@faraazz05",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/faraazz05",
      handle: "/faraazz05",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:sp_mohfaraz@outlook.com",
      handle: "sp_mohdfaraz@outlook.com",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side guard
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields before sending.",
      });
      return;
    }

    setSending(true);

    try {
      // Build FormData exactly as web3forms expects
      const fd = new FormData();
      fd.append("access_key", WEB3FORMS_ACCESS_KEY);
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("message", formData.message);

      // Optional: add subject or redirect fields
      // fd.append("subject", "Website message from portfolio");
      // fd.append("redirect", "https://your-site.com/thanks");

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: fd,
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks — I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // web3forms sends useful messages in json.message
        toast({
          title: "Failed to send",
          description: json?.message || "Something went wrong. Try again later.",
        });
      }
    } catch (err) {
      console.error("Web3Forms error:", err);
      toast({
        title: "Network error",
        description: "Couldn't send message. Check your connection or try again.",
      });
    } finally {
      setSending(false);
    }
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
    <div className="min-h-screen pt-24 pb-20 gradient-bg relative overflow-hidden">
      {/* Vertical Side Text */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-accent to-transparent" />
          <p className="text-xs tracking-[0.3em] text-accent/60 [writing-mode:vertical-lr] rotate-180">
            06 / CONTACT
          </p>
          <div className="w-px h-24 bg-gradient-to-t from-transparent via-accent to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:pl-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-16 animate-fade-in-up">
            Let's build something meaningful together
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Details & Social Links */}
            <div className="space-y-8 animate-fade-in-up">
              <GlassCard hoverable={false}>
                <h2 className="text-2xl font-semibold mb-6 text-accent">Connect</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
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
                        className="flex items-center gap-4 p-4 rounded-lg glass-hover group transition-all hover:scale-[1.02]"
                      >
                        <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-all group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                          <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                            {social.label}
                          </p>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </GlassCard>

              {/* Quick Info */}
              <GlassCard hoverable={false} className="border-accent/20">
                <h3 className="text-lg font-semibold mb-3 text-accent">Response Time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I typically respond within 24-48 hours. For urgent inquiries, 
                  feel free to reach out directly via email or LinkedIn.
                </p>
              </GlassCard>
            </div>

            {/* Right: Message Form */}
            <GlassCard hoverable={false} className="animate-fade-in-up delay-100 h-fit">
              <h2 className="text-2xl font-semibold mb-6 text-accent">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-accent bg-background/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-accent bg-background/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass border-white/20 focus:border-accent bg-background/50 resize-none transition-all"
                    placeholder="What's on your mind?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full glass-hover bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] group"
                >
                  <Send className="mr-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
