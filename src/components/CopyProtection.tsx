import { useEffect } from "react";
import { toast } from "sonner";

const CopyProtection = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      toast.error("⚠️ Content is protected", {
        description: "© 2025 Faraaz. All rights reserved.",
      });
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      toast.error("⚠️ Copying disabled", {
        description: "This content is protected under copyright law.",
      });
    };

    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      // Allow selection in input fields and textareas
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);

  return null;
};

export default CopyProtection;
