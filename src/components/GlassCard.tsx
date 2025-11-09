import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const GlassCard = ({ children, className, hoverable = true, style, onClick }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hoverable && "glass-hover cursor-pointer",
        className
      )}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
