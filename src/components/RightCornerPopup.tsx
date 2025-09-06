import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MessageCircle, ArrowUp } from "lucide-react";

const RightCornerPopup = () => {
  const [visible, setVisible] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Delay showing popup
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4 animate-slide-in-right">
      {/* Scroll to Top Button */}
      {showScroll && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full shadow-md"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Social Links */}
      <div className="flex space-x-3">
        <a
          href="https://wa.me/918074256614"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-green-500 text-white hover:scale-110 transition-transform"
        >
          <MessageCircle size={22} />
        </a>
        <a
          href="mailto:mohansaikumar.rongala@gmail.com"
          className="p-2 rounded-full bg-red-500 text-white hover:scale-110 transition-transform"
        >
          <Mail size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohana-sai-kumar-rongala"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform"
        >
          <Linkedin size={22} />
        </a>
      </div>

      {/* Main CTA Button */}
      <Button
        size="lg"
        className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-3 shadow-lg transition-all duration-300"
        onClick={() => {
          const element = document.getElementById("contact");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Let’s Connect
      </Button>
    </div>
  );
};

export default RightCornerPopup;
