import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohansaikumar.rongala@gmail.com",
      link: "mailto:mohansaikumar.rongala@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 80742 56614",
      link: "tel:+918074256614"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      link: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohana-sai-kumar-rongala",
      link: "https://linkedin.com/in/mohana-sai-kumar-rongala"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="w-20 h-1 section-divider mx-auto mt-6"></div>
          </div>

          <div className="relative h-screen">
          {/*<div className="grid lg:grid-cols-2 gap-12">*/}
            {/* Contact Information */}
            {/*<div className="animate-fade-in-left">*/}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-fade-in-center">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Get In Touch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking for a developer, have a project in mind, or just want to connect, 
                I'd love to hear from you. Let's build something amazing together!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 card-hover border-border bg-card">
                    <div className="flex items-center">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Download Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://linkedin.com/in/mohana-sai-kumar-rongala', '_blank')}
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/*<div className="animate-fade-in-right">
              <Card className="p-6 border-border bg-card">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-background border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="bg-background border-border focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;