import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Footer Content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Mohana Sai Kumar Rongala
            </h3>
            <p className="text-muted-foreground mb-6">
              Java Full Stack Developer | Spring Boot Specialist | API & Cloud Enthusiast
            </p>
            
            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to Top
            </Button>
          </div>

          {/* Divider */}
          <div className="section-divider mb-8"></div>

          {/* Copyright */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="mb-4 md:mb-0">
              © {currentYear} Mohana Sai Kumar Rongala. All rights reserved.
            </p>
          </div> */}

          {/* Additional Info */}
          {/* <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              This portfolio showcases my skills in modern web development. 
              Built with React, TypeScript, Tailwind CSS, and deployed with love.
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;