import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Tata Nexarc",
      location: "Hyderabad, India",
      period: "Aug 2022 – Present",
      type: "Full-time",
      responsibilities: [
        "Developed and maintained backend services using Java, Spring Boot, and REST APIs",
        "Implemented payment gateway integrations with Razorpay for seamless transactions",
        "Built responsive frontend interfaces using React.js and Angular.js",
        "Designed and optimized MySQL database schemas for improved performance",
        "Collaborated in Agile/Scrum environment with cross-functional teams",
        "Provided production support and resolved critical system issues",
        "Created automated tools for finance workflows and invoice processing"
      ],
      technologies: ["Java 8", "Spring Boot", "React.js", "MySQL", "REST APIs", "Razorpay", "AWS"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronics & Communications Engineering",
      institution: "Chalapathi Institute of Engineering & Technology",
      period: "2018 – 2022",
      location: "Andhra Pradesh, India"
    },
    {
      degree: "Higher Secondary (CBSE)",
      field: "Science Stream (MPC)",
      institution: "Sir C.R. Reddy Public School",
      period: "2012 – 2018",
      location: "Andhra Pradesh, India"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and educational background
            </p>
            <div className="w-20 h-1 section-divider mx-auto mt-6"></div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary animate-fade-in-left">
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 mb-6 card-hover border-border bg-card animate-fade-in-up">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h4>
                    <div className="flex items-center text-primary font-medium mb-2">
                      <Building className="mr-2 h-4 w-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    {exp.type}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-3 text-foreground">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium mb-3 text-foreground">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-secondary animate-fade-in-left">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 card-hover border-border bg-card animate-fade-in-up delay-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-2">{edu.field}</p>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;