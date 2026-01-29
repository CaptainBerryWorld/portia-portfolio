import { motion } from "framer-motion";
import { Users, Plane, Headphones, Globe, UtensilsCrossed } from "lucide-react";

const caseStudies = [
  {
    icon: Plane,
    title: "Executive Travel & Documentation Coordination",
    category: "Golden Angels Travel Consultancy",
    challenge: "Managing travel documentation, contracts, visa processing for 200+ clients, and relationships across multiple government offices and embassies.",
    action: "Streamlined travel documentation processing, coordinated with government offices and embassies for permits and visas, and maintained accurate client records with systematic follow-up protocols.",
    result: "Achieved 100% documentation accuracy over 2 years while maintaining 92% customer satisfaction rate across 200+ client relationships.",
    metrics: ["200+ clients", "92% satisfaction", "100% accuracy"],
  },
  {
    icon: UtensilsCrossed,
    title: "Fast-Paced Customer Service Excellence",
    category: "KFC Ghana",
    challenge: "Delivering exceptional customer service in a high-volume, fast-paced restaurant environment while maintaining quality standards and customer satisfaction.",
    action: "Managed front-of-house operations including order taking, customer inquiries, and complaint resolution. Ensured smooth service flow during peak hours while maintaining friendly and professional demeanor.",
    result: "Consistently met service time targets, received positive customer feedback, and contributed to team efficiency during busy periods.",
    metrics: ["High-volume service", "Customer focused", "Team player"],
  },
  {
    icon: Users,
    title: "Multi-Channel Communication Management",
    category: "Golden Angels Travel Consultancy",
    challenge: "Handling high-volume communications across phone, email, and SMS while ensuring rapid response times and seamless scheduling.",
    action: "Implemented efficient communication protocols with 30-second average response time, scheduled and coordinated meetings, appointments, and travel arrangements for team and clients.",
    result: "Maintained exceptional response times while managing multi-channel communications professionally and efficiently.",
    metrics: ["30-sec response", "2+ years", "Zero errors"],
  },
  {
    icon: Headphones,
    title: "Remote E-commerce Customer Support",
    category: "Contract Role",
    challenge: "Providing comprehensive remote customer support for online retail operations, managing 40+ weekly inquiries across multiple channels.",
    action: "Managed customer inquiries across email, phone, and chat with under 2-hour email response time. Processed orders with meticulous attention to detail and proactively communicated on delays.",
    result: "Achieved 90% customer satisfaction rating, 100% order processing accuracy, and exceeded weekly inquiry targets by 15%.",
    metrics: ["90% satisfaction", "100% accuracy", "15% above target"],
  },
  {
    icon: Globe,
    title: "Cross-Timezone Remote Operations",
    category: "Remote Work Excellence",
    challenge: "Working independently across different time zones with minimal supervision while maintaining consistent productivity and quality standards.",
    action: "Established reliable home office setup with backup internet and power solutions. Demonstrated strong self-management and time management skills with proactive communication.",
    result: "Successfully delivered exceptional results independently across time zones with reliable attendance and consistent quality.",
    metrics: ["3+ years remote", "Multi-timezone", "Self-managed"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Case Studies & Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real examples of how I've helped executives streamline their operations 
            and achieve their goals through systematic support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              {/* Header */}
              <div className="bg-primary/5 p-6 border-b border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <study.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-medium tracking-wider uppercase text-accent">
                    {study.category}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {study.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Challenge</p>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Action</p>
                  <p className="text-sm text-muted-foreground">{study.action}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Result</p>
                  <p className="text-sm text-muted-foreground">{study.result}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-xs font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
