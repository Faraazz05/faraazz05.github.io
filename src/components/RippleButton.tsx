import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RippleButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

const RippleButton = ({ children, className, onClick, ...props }: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();

      setRipples((prev) => [...prev, { x, y, id }]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      }, 600);
    }

    onClick?.(e);
  };

  return (
    <Button
      ref={buttonRef}
      className={cn("relative overflow-hidden", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-accent/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </Button>
  );
};

export default RippleButton;
