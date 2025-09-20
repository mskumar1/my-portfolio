import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const achievements = [
    // { icon: Trophy, text: "Hackathon Runner-up 2025" },
    { icon: Calendar, text: "3+ Years Experience" },
    { icon: MapPin, text: "Andhra Pradesh, India" },
  ];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <div className="w-20 h-1 section-divider mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="animate-fade-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate <span className="text-primary font-semibold">Java Full Stack Developer</span> with 
                over 3 years of experience building scalable web applications and robust backend systems. 
                Currently working at <span className="text-secondary font-semibold">Tata Nexarc</span>, 
                I specialize in Spring Boot, REST APIs, and modern web technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My expertise spans across backend development with Java, frontend frameworks like React and Angular, 
                and cloud technologies including AWS. I'm passionate about creating efficient, scalable solutions 
                and have a proven track record in payment gateway integrations, finance workflows, and API development.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                When I'm not coding, I'm exploring new technologies, participating in hackathons, 
                and contributing to open-source projects. I believe in continuous learning and 
                staying updated with the latest industry trends.
              </p>

              {/* Achievements */}
              <div className="flex flex-wrap gap-4">
                {achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    <achievement.icon className="mr-2 h-4 w-4" />
                    {achievement.text}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="animate-fade-in-right">
              <div className="grid gap-6">
                <Card className="p-6 card-hover border-border bg-card">
                  <h3 className="font-semibold text-xl mb-2 gradient-text">Current Role</h3>
                  <p className="text-foreground font-medium">Software Developer</p>
                  <p className="text-muted-foreground">Tata Nexarc, Hyderabad</p>
                  <p className="text-sm text-muted-foreground mt-2">Aug 2022 – Present</p>
                </Card>

                <Card className="p-6 card-hover border-border bg-card">
                  <h3 className="font-semibold text-xl mb-2 gradient-text">Education</h3>
                  <p className="text-foreground font-medium">B.Tech Electronics & Communications</p>
                  <p className="text-muted-foreground">Chalapathi Institute of Engineering & Technology</p>
                  <p className="text-sm text-muted-foreground mt-2">2018 – 2022</p>
                </Card>

                <Card className="p-6 card-hover border-border bg-card">
                  <h3 className="font-semibold text-xl mb-2 gradient-text">Specialization</h3>
                  <p className="text-foreground font-medium">Backend Development & APIs</p>
                  <p className="text-muted-foreground">Spring Boot, REST APIs, Payment Gateways</p>
                  <p className="text-sm text-muted-foreground mt-2">Enterprise Scale Solutions</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;