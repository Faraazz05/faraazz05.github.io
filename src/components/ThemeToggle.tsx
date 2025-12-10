import { useTheme } from "@/contexts/ThemeContext";
import { Sparkles } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass border border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-[0_0_20px_var(--shadow-glow)] group"
      title={`Switch to ${theme === "neon-cyan" ? "Crimson Pulse" : "Neon Cyan"}`}
    >
      <Sparkles className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
