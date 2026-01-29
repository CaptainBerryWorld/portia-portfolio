import { motion } from "framer-motion";
import { Calendar, FileText, ClipboardList, Mail } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Executive Assistance",
    description: "Comprehensive support for busy executives to maximize their time and impact.",
    features: ["Calendar management", "Email triage", "Travel planning", "Meeting prep"],
  },
  {
    icon: FileText,
    title: "Administrative Support",
    description: "Organized, efficient handling of your day-to-day operational needs.",
    features: ["Document organization", "Data entry", "CRM management", "Digital file & folder management"],
  },
  {
    icon: ClipboardList,
    title: "Project Coordination",
    description: "Keep your projects on track with systematic planning and execution.",
    features: ["Task tracking", "Workflow setup", "Deadline management", "Progress reporting"],
  },
  {
    icon: Mail,
    title: "Communication Support",
    description: "Professional communication that represents you and your brand.",
    features: ["Client follow-ups", "Appointment scheduling", "Email drafting", "Stakeholder liaison"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored virtual assistance solutions designed to streamline your operations 
            and free you to focus on high-impact work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li 
                        key={feature} 
                        className="text-sm text-foreground/80 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
