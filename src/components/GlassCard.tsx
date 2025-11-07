import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  style?: React.CSSProperties;
}

const GlassCard = ({ children, className, hoverable = true, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hoverable && "glass-hover cursor-pointer",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
