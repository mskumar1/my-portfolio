import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Trophy, Zap, Database, Brain, Verified, Wallet, DiscIcon, BrickWall, BrickWallIcon, LayoutDashboard, ListOrderedIcon, ListOrdered, ZapIcon, ShipIcon, Mail, ShoppingBag, Video, HeartHandshake, Pill, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [  
    {
        title: "MatchSolver.com (Featured)",
        description: "Founder & Architect of an AI-Powered Career Optimization & Document Management Platform. Integrates resume parsing, cover letter optimizations, ATS match rating, and 50+ PDF/image utilities using high-concurrency thread pools and OCR pipelines.",
        technologies: ["Java", "Spring Boot", "React.js", "MySQL", "OCR", "LLM Integration", "Redis", "RabbitMQ"],
        status: "Completed",
        type: "Personal Product",
        icon: Brain,
        color: "from-purple-500 to-indigo-500",
        timeline: "Oct 2024 – Present",
        link: "https://matchsolver.com"
    },
    {
        title: "Merai Mail",
        description: "Multi-account enterprise business email platform and unified inbox. Features split thread views, IMAP/SMTP sync engine, AES-256-GCM credential encryption, WebSocket notifications, and high-concurrency message queues.",
        technologies: ["Go (Golang)", "Gin", "Angular 17", "PostgreSQL", "Redis", "WebSocket", "IMAP/SMTP"],
        status: "Completed",
        type: "Product",
        icon: Mail,
        color: "from-blue-600 to-cyan-500",
        timeline: "2026",
        link: "https://usemerai.com"
    },
    {
        title: "Merai Shopping",
        description: "Full-stack, ultra-fast E-Commerce platform with deterministic catalog generation serving 12.5 Lakh+ catalog items across 11 categories without database bottlenecks. Includes Razorpay online payments with HMAC-SHA256 signature verification and Cash on Delivery.",
        technologies: ["Go (Golang)", "Angular 19", "Razorpay", "Docker", "Nginx", "PWA"],
        status: "Completed",
        type: "Product",
        icon: ShoppingBag,
        color: "from-emerald-500 to-teal-500",
        timeline: "2026",
        link: "https://shopping.usemerai.com"
    },
    {
        title: "Merai Connect",
        description: "Cross-platform real-time communication platform offering P2P WebRTC audio/video calling with STUN/TURN fallback, low-latency WebSocket signaling, and live chat with unread badges, attachments, and alert notifications.",
        technologies: ["Angular 19", "Go (Golang)", "WebRTC", "WebSocket", "Capacitor", "Android"],
        status: "Completed",
        type: "Product",
        icon: Video,
        color: "from-pink-500 to-rose-500",
        timeline: "2026"
    },
    {
        title: "Merai Shaadi",
        description: "Full-stack matrimonial platform featuring daily match recommendations, horoscope matching metadata, real-time matrimonial inbox messaging via WebSockets, and subscription management integrated with Razorpay.",
        technologies: ["Go (Golang)", "Gin", "Angular", "WebSocket", "Razorpay", "MySQL"],
        status: "Completed",
        type: "Product",
        icon: HeartHandshake,
        color: "from-red-500 to-amber-500",
        timeline: "2026"
    },
    {
        title: "Rahul Pharmacy (Merai Pharmacy)",
        description: "Compliance-ready 3D interactive pharmaceutical e-commerce platform. Features Three.js/React-Three-Fiber 3D medicine visualization, 21 CFR Part 11 immutable audit trail logging, cold-chain logistics monitoring, and strict RBAC.",
        technologies: ["Three.js", "React-Three-Fiber", "Node.js / Go", "WebGL", "JWT"],
        status: "Completed",
        type: "Product",
        icon: Pill,
        color: "from-green-500 to-emerald-600",
        timeline: "2026"
    },
    {
        title: "Merai Games",
        description: "Real-time multiplayer competitive gaming platform featuring duel games (2048 Race, Battle Sudoku, Memory Showdown, Word Duel) and arcade logic puzzles synchronized with low-latency WebSockets.",
        technologies: ["Angular 18", "Go (Golang)", "WebSocket", "TypeScript", "Tailwind CSS"],
        status: "Completed",
        type: "Product",
        icon: Gamepad2,
        color: "from-violet-500 to-purple-600",
        timeline: "2026"
    },
    {
        title: "Customer Inquiry and Procurement System",
        description: "Built a customer inquiry portal for steel procurement at optimal market prices. Integrated RESTful APIs with OpenAI, Amazon APIs, and Python-based pricing models. Automated JSON data ingestion and implemented PDF/image-to-text conversion pipelines. Integrated a Python predictive pricing model API to forecast SKU prices accurately.",
        technologies: ["Java", "Spring Boot", "React.js", "Python", "REST APIs", "OpenAI API", "Amazon API"],
        status: "Ongoing",
        type: "Enterprise Project",
        icon: ShipIcon,
        color: "from-indigo-500 to-blue-500",
        timeline: "Jan 2026 – Present",
        link: "https://www.tatanexarc.com/"
    },
    {
        title: "Order Project",
        description: "Developed and enhanced order creation, processing, and tracking workflows using Java, Spring Boot, Js, Html, Css. Optimized RESTful APIs and MySQL queries, improving response time by 25%. Debugged production issues within Agile sprints, ensuring 100% on-time delivery.",
        technologies: ["Java", "Spring Boot", "Js", "Html", "CSS", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: ZapIcon,
        color: "from-blue-500 to-cyan-500",
        timeline: "Dec 2023 – Jan 2026",
        link: "https://www.tatanexarc.com/"
    },
    {
        title: "AI-Powered Document/Image Parser & Validator (Hackathon 2025)",
        description: "Developed an AI-based document parsing system to extract structured data from invoices and images. Integrated OCR pipelines (image/PDF-to-text) with Gemini 2.0 Flash LLM for instant parsing and validation. Built Spring Boot backend with database integration and a dynamic UI for real-time data extraction. Delivered a working demo showcasing AI-assisted document processing.",
        technologies: ["Java", "Spring Boot", "React.js", "OCR", "LLM Integration"],
        status: "Completed",
        type: "Hackathon Project",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        timeline: "June 2025"
    },
     {
        title: "Order Dashboard Project",
        description: "Developed a real-time analytics and reporting dashboard for order management. Integrated frontend (Angular.js) with backend REST APIs for live updates. Enabled data-driven insights for operations and management teams.",
        technologies: ["Java", "Spring Boot", "Angular.js", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: LayoutDashboard,
        color: "from-indigo-500 to-blue-500",
        timeline: "Sept 2023",
        link: "https://www.tatanexarc.com/"
    },
    {
        title: "ERP Middleware (TPL Order Flow Support)",
        description: "Developed backend and frontend enhancements for new lenders (Stride, Mintifi). Built workflows for order creation, invoice generation, and payment handling. Created a centralized configuration table to improve scalability and maintainability.",
        technologies: ["Java", "Spring Boot", "Js", "Html", "CSS", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Database,
        color: "from-teal-500 to-blue-500",
        timeline: "May 2025",
        link: "https://www.tatanexarc.com/"
    },
    {
        title: "Credit Module",
        description: "Implemented credit workflows, including credit limits, tracking, and Camunda-based process automation. Developed REST APIs for credit management and integrated them with frontend modules. Ensured accurate credit calculations and seamless user experience.",
        technologies: ["Java", "Spring Boot", "Js", "Html", "CSS", "REST APIs", "Camunda", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Card,
        color: "from-yellow-500 to-orange-500",
        timeline: "June 2024",
        link: "https://www.tatanexarc.com/"
    },
    {
        title: "Payment Project",
        description: "Integrated Razorpay Payment Gateway for secure and automated digital transactions. Built backend services for payment verification, reconciliation, and transaction tracking. Optimized API performance and collaborated with cross-functional teams for seamless integration.",
        technologies: ["Java", "Spring Boot", "Razorpay", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: Zap,
        color: "from-cyan-500 to-blue-500",
        timeline: "Dec 2023",
        link: "https://www.tatanexarc.com/"
    },
    {
        title: "Ledger Wallet Project",
        description: "Developed UI and backend services for Ledger Account Wallet integration. Built controllers and RESTful APIs to manage wallet transactions and balances. Ensured secure wallet data handling and optimized API performance.",
        technologies: ["Java", "Spring Boot", "REST APIs", "MySQL"], //"Angular.js", 
        status: "Completed",
        type: "Enterprise Project",
        icon: Wallet,
        color: "from-green-500 to-emerald-500",
        timeline: "June 2023",
        link: "https://www.tatanexarc.com/"
    },
    {
        title: "Paywall & Discount Coupons Project",
        description: "Designed and implemented subscription-based paywall features for different user tiers. Built a discount and coupon engine to manage promotions and pricing rules. Integrated modules ensuring real-time updates and smooth workflows.",
        technologies: ["Java", "Spring Boot", "Js", "Html", "CSS", "REST APIs", "MySQL"],
        status: "Completed",
        type: "Enterprise Project",
        icon: BrickWallIcon,
        color: "from-purple-500 to-pink-500",
        timeline: "Aug 2022",
        link: "https://www.tatanexarc.com/"
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
                  <a href={project.link || (project.type === 'Hackathon Project' ? '#' : 'https://www.tatanexarc.com/')}
                    target={project.link || project.type !== 'Hackathon Project' ? '_blank' : undefined}
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