import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, MapPin } from 'lucide-react';

const calculateExperience = () => {
  const startDate = new Date('2022-08-01');
  const currentDate = new Date();
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return months > 0 ? `${years}.${months}` : `${years}`;
};

const About = () => {
  const exp = calculateExperience();
  const achievements = [
    // { icon: Trophy, text: "Hackathon Runner-up 2025" },
    { icon: Calendar, text: `${exp}+ Years Experience` },
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
                I'm a passionate <span className="text-primary font-semibold">Backend Java Developer</span> with 
                over {exp} years of experience designing, developing, and maintaining scalable enterprise applications. 
                Currently working as an <span className="text-secondary font-semibold">Associate Consultant at Infosys</span> (previously at <span className="text-secondary font-semibold">Tata Nexarc</span>), 
                I specialize in Spring Boot, Microservices, REST APIs, and cloud-native integrations. I am also the founder of 
                <span className="text-accent font-semibold"> MatchSolver.com</span> and creator of the <span className="text-accent font-semibold">UseMerai.com</span> platform.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My expertise spans backend development with Java, Spring Data JPA, Hibernate, Docker, Kubernetes, AWS, 
                and frontend frameworks like Angular. I have a proven track record in payment gateway integrations (Razorpay), 
                credit/lender automation workflows, OCR invoice pipelines, and integrating AI services like Gemini and OpenAI.
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
                  <p className="text-foreground font-medium">Associate Consultant</p>
                  <p className="text-muted-foreground">Infosys, Hyderabad, India</p>
                  <p className="text-sm text-muted-foreground mt-2">Oct 2026 – Present</p>
                </Card>

                <Card className="p-6 card-hover border-border bg-card">
                  <h3 className="font-semibold text-xl mb-2 gradient-text">Previous Role</h3>
                  <p className="text-foreground font-medium">Software Developer</p>
                  <p className="text-muted-foreground">Tata Nexarc, Hyderabad (Remote)</p>
                  <p className="text-sm text-muted-foreground mt-2">Aug 2022 – Oct 2026</p>
                </Card>

                <Card className="p-6 card-hover border-border bg-card">
                  <h3 className="font-semibold text-xl mb-2 gradient-text">Founder</h3>
                  <p className="text-foreground font-medium">Founder & Architect</p>
                  <p className="text-muted-foreground">UseMerai.com / MatchSolver.com</p>
                  <p className="text-sm text-muted-foreground mt-2">Oct 2024 – Present</p>
                </Card>

                <Card className="p-6 card-hover border-border bg-card">
                  <h3 className="font-semibold text-xl mb-2 gradient-text">Education</h3>
                  <p className="text-foreground font-medium">B.Tech Electronics & Communication (CGPA: 8.65)</p>
                  <p className="text-muted-foreground">CIET, Guntur, Andhra Pradesh</p>
                  <p className="text-sm text-muted-foreground mt-2">2018 – 2022</p>
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