import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [idleTimer, setIdleTimer] = useState<NodeJS.Timeout | null>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  // Delayed fade-in on initial load (after preloader)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 3500); // Fade in after preloader completes
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Writings", path: "/writings" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      // Show navbar on scroll up, hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Reset idle timer on scroll
      if (idleTimer) clearTimeout(idleTimer);
      setVisible(true);
      
      const timer = setTimeout(() => {
        if (window.scrollY > 100) {
          setVisible(false);
        }
      }, 5000);
      
      setIdleTimer(timer);
    };

    const handleMouseMove = () => {
      if (idleTimer) clearTimeout(idleTimer);
      setVisible(true);
      
      const timer = setTimeout(() => {
        if (window.scrollY > 100) {
          setVisible(false);
        }
      }, 5000);
      
      setIdleTimer(timer);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [lastScrollY, idleTimer]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled ? "glass py-3" : "bg-transparent py-6",
        !visible && "transform -translate-y-full",
        initialLoad && "opacity-0 transform -translate-y-8",
        !initialLoad && "opacity-100 translate-y-0"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold glow-text transition-all hover:scale-105">
            FARAAZ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-muted-foreground hover:text-accent"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden glass-hover p-2 rounded-lg text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-all duration-300",
                    location.pathname === link.path
                      ? "bg-accent/10 text-accent border border-accent/30"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
