import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Trophy, Zap, Database, Brain, Verified, Wallet, DiscIcon, BrickWall, BrickWallIcon, LayoutDashboard, ListOrderedIcon, ListOrdered, ZapIcon } from 'lucide-react';

const Projects = () => {
  const projects = [  
    // {
    //   title: "Transaction Experience Platform",
    //   description: "Comprehensive payment and order management system with integrated dashboard, order tracking, paywall implementation, and Razorpay payment gateway.",
    //   technologies: ["Spring Boot", "React.js", "Razorpay", "MySQL", "REST APIs"],
    //   status: "On going",
    //   type: "Enterprise Project",
    //   icon: Zap,
    //   color: "from-blue-500 to-cyan-500"
    // },
    {
        title: "Order",
        description: "Core ongoing project in the Transaction Experience Platform. Continuously developing new features for order creation, processing, tracking, and management, ensuring seamless workflows and integration with other modules.",
        technologies: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL"],
        status: "Ongoing",
        type: "Enterprise Project",
        icon: ZapIcon,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Order Dashboard",
        description: "Comprehensive order management interface with live updates, analytics, and reporting in the Transaction Experience Platform. Continuously enhanced with new features.",
        technologies: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
        status: "Ongoing",
        type: "Enterprise Project",
        icon: LayoutDashboard,
        color: "from-indigo-500 to-blue-500"
    },
    {
        title: "Order Management System",
        description: "Oversaw full order lifecycle including order creation, updates, tracking, and reporting.",
        technologies: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: ListOrderedIcon,
        color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Invoice Parser & Validator",
      description: "Hackathon 2025 project featuring OCR and LLM-powered instant invoice data extraction with validation. Built with cutting-edge AI technologies for automated finance processing.",
      technologies: ["Spring AI", "LLM Integration", "OCR", "Java", "React", "Machine Learning"],
      status: "Completed",
      type: "Hackathon Project",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
        title: "FNA (ERP)",
        description: "Worked on ERP-related finance and accounting functionalities including expense tracking and automated workflows.",
        technologies: ["Java", "Spring Boot", "Angular.js", "MySQL", "REST APIs"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Database,
        color: "from-teal-500 to-blue-500"
    },
    {
        title: "Credit Module",
        description: "Implemented credit management functionalities for users, including credit limits and tracking.",
        technologies: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL", "Camunda"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Card,
        color: "from-yellow-500 to-orange-500"
    },
    {
        title: "Payment",
        description: "Implemented payment handling including Razorpay integration, payment verification, and transaction management.",
        technologies: ["Java", "Spring Boot", "React.js", "Razorpay", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Zap,
        color: "from-cyan-500 to-blue-500"
    },
    {
        title: "Ledger Wallet",
        description: "Developed wallet management functionality for users, including balance tracking and transaction history.",
        technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "Wallet APIs"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Wallet,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Paywall",
        description: "Implemented access control and subscription/paywall features for different user tiers.",
        technologies: ["Java", "Spring Boot", "React.js", "REST APIs"],
        status: "Completed",
        type: "Enterprise Project",
        icon: BrickWall,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Products",
        description: "Managed product catalog, inventory, and details within the platform.",
        technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
        status: "Completed",
        type: "Enterprise Project",
        icon: BrickWallIcon,
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "Discount & Coupons",
        description: "Built discount and coupon management functionality for orders and promotions.",
        technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
        status: "Completed",
        type: "Enterprise Project",
        icon: DiscIcon,
        color: "from-pink-500 to-purple-500"
    },
    {
        title: "Business Verification Platform (BVP)",
        description: "Handled business verification flows including KYC, document verification, and validation processes.",
        technologies: ["Java", "Spring Boot", "React.js", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Verified,
        color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work spanning enterprise applications, hackathon projects, and innovative solutions
            </p>
            <div className="w-20 h-1 section-divider mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`p-6 card-hover border-border bg-card animate-fade-in-up delay-${index * 100} group`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={project.status === 'Ongoing' ? 'secondary' : 'outline'} className="text-xs">
                      {project.status}
                    </Badge>
                    {project.type === 'Hackathon Runner-up' && (
                      <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 text-xs">
                        🏆 Runner-up
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    {project.type}
                  </Badge>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a href={project.type === 'Hackathon Project' ? '#' : 'https://www.tatanexarc.com/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1">
                    <Button 
                        size="sm" 
                        className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all w-full"
                        >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                    </Button>
                  </a>
                  {/* <Button 
                    size="sm" 
                    variant="outline"
                    className="border-muted-foreground/20 hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </Button> */}
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up delay-800">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;