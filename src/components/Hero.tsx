import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-new.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 mx-auto">
                <img
                  src={profileImage}
                  alt="Mohana Sai Kumar Rongala"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6 animate-fade-in-up delay-200">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Mohana Sai Kumar Rongala
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Java SpringBoot Backend Developer
            </p>
            <p className="text-lg md:text-xl text-accent">
              Spring Boot Specialist | API & Cloud Enthusiast
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 animate-fade-in-up delay-400">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">9+</div>
              <div className="text-sm text-muted-foreground">Worked on Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">12+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-600">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Download Resume */}
          <div className="animate-fade-in-up delay-800">
            <a href="/MOHANA SAI KUMAR RONGALA Resume.pdf" download>
                <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
                // onClick={() => {
                //     // In a real application, this would download the actual resume
                //     window.open('Mohana_Sai_Kumar_Rongala_Resume.pdf', '_blank');
                // }}
                >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
                </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full hover:bg-card transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;