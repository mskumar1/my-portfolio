import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import JavaIcon from "@/assets/skills/java.png";
import SpringIcon from "@/assets/skills/spring-boot.png";
import HibernateIcon from "@/assets/skills/hibernate.png";
import RestIcon from "@/assets/skills/restapi.png";
import MicroservicesIcon from "@/assets/skills/microservices.png";
import MavenIcon from "@/assets/skills/maven.png";
import ReactIcon from "@/assets/skills/react.png";
import AngularIcon from "@/assets/skills/angular.png";
import HTML5Icon from "@/assets/skills/html5.png";
import CSS3Icon from "@/assets/skills/css3.png";
import JavaScriptIcon from "@/assets/skills/javascript.png";
import JQueryIcon from "@/assets/skills/jquery.png";
import MySQLIcon from "@/assets/skills/mysql.png";
import JDBCIcon from "@/assets/skills/jdbc.png";
import SwaggerIcon from "@/assets/skills/swagger.png";
import PostmanIcon from "@/assets/skills/postman.png";
import RazorpayIcon from "@/assets/skills/razorpay.png";
import GitIcon from "@/assets/skills/git.png";
import SVNIcon from "@/assets/skills/subversion.png";
import SonarQubeIcon from "@/assets/skills/sonarqube.png";
import NexusIcon from "@/assets/skills/sonatype.png";
import AWSIcon from "@/assets/skills/amazonaws.png";
import AIIcon from "@/assets/skills/ai.png";
import LLMIcon from "@/assets/skills/LLM-Integration.png";
import AjaxIcon from "@/assets/skills/ajax.png";
import JSONIcon from "@/assets/skills/json.png";
import JSPIcon from "@/assets/skills/jsp.png";
import ServletIcon from "@/assets/skills/servlets.png";
import AgileIcon from "@/assets/skills/agile.png";

const skillIcons: Record<string, string> = {
  "Java 8": JavaIcon,
  "Spring Boot": SpringIcon,
  "Hibernate/JPA": HibernateIcon,
  "REST APIs": RestIcon,
  "Microservices": MicroservicesIcon,
  "Maven": MavenIcon,
  "React.js": ReactIcon,
  "Angular.js": AngularIcon,
  "HTML5": HTML5Icon,
  "CSS3": CSS3Icon,
  "JavaScript (ES6+)": JavaScriptIcon,
  "jQuery": JQueryIcon,
  "MySQL": MySQLIcon,
  "JDBC": JDBCIcon,
  "Swagger": SwaggerIcon,
  "Postman": PostmanIcon,
  "Payment Gateways": RazorpayIcon,
  "Razorpay": RazorpayIcon,
  "Git": GitIcon,
  "SVN": SVNIcon,
  "SonarQube": SonarQubeIcon,
  "Nexus": NexusIcon,
  "AWS": AWSIcon,
  "Spring AI": AIIcon,
  "LLM Integration": LLMIcon,
  "Ajax": AjaxIcon,
  "JSON": JSONIcon,
  "JSP": JSPIcon,
  "Servlets": ServletIcon,
  "Agile/Scrum": AgileIcon
};

const skillCategories = [
  {
    title: "Backend Development",
    skills: ["Java 8", "Spring Boot", "Hibernate/JPA", "REST APIs", "Microservices"],// "Maven"],
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    title: "Frontend Development", 
    skills: ["React.js", "Angular.js", "HTML5", "CSS3", "jQuery"],// "JavaScript (ES6+)"],
    color: "bg-secondary/10 text-secondary border-secondary/20"
  },
  {
    title: "Database & APIs",
    skills: ["MySQL", "JDBC", "Swagger", "Postman", "Razorpay"],// "Payment Gateways"],
    color: "bg-accent/10 text-accent border-accent/20"
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "SVN", "SonarQube", "Nexus", "AWS", "Spring AI", "LLM Integration"],
    color: "bg-muted text-muted-foreground border-border"
  },
  {
    title: "Additional Skills",
    skills: ["Ajax", "JSON", "JSP", "Servlets", "Agile/Scrum"], //"Django",
    color: "bg-card text-card-foreground border-border"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building scalable applications
            </p>
            <div className="w-20 h-1 section-divider mx-auto mt-6"></div>
          </div>

          {/* Skills Grid */}
        <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
            <Card 
            key={categoryIndex} 
            className={`p-6 card-hover border-border bg-card animate-fade-in-up delay-${categoryIndex * 200}`}
            >
            <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {category.skills.map((skill, skillIndex) => (
                <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/60 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                    {skillIcons[skill] && (
                    <img src={skillIcons[skill]} alt={skill} className="h-20 w-20 mb-4 object-contain" />
                    )}
                    <span className="text-base font-semibold text-center">{skill}</span>
                </div>
                ))}
            </div>
            </Card>
        ))}
        </div>

          {/* Proficiency Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center card-hover border-border bg-card animate-fade-in-up delay-1000">
              <div className="text-3xl font-bold gradient-text mb-2">Expert</div>
              <p className="text-muted-foreground">Java, Spring Boot, REST APIs</p>
            </Card>
            <Card className="p-6 text-center card-hover border-border bg-card animate-fade-in-up delay-1200">
              <div className="text-3xl font-bold gradient-text mb-2">Advanced</div>
              <p className="text-muted-foreground">React.js, MySQL, AWS</p>
            </Card>
            <Card className="p-6 text-center card-hover border-border bg-card animate-fade-in-up delay-1400">
              <div className="text-3xl font-bold gradient-text mb-2">Intermediate</div>
              <p className="text-muted-foreground">Angular, Django, AI Integration</p>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
