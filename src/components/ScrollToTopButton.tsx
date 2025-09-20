import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <Button
        variant="outline"
        size="sm"
        onClick={scrollToTop}
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full shadow-md"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
