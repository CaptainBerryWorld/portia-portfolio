import { motion } from "framer-motion";
import { Heart, Lightbulb, Shield, Sparkles } from "lucide-react";

const traits = [
  {
    icon: Lightbulb,
    title: "Proactive Approach",
    description: "I anticipate needs and take initiative to solve problems before they arise.",
  },
  {
    icon: Shield,
    title: "Discretion & Trust",
    description: "Handling sensitive information with the utmost confidentiality and professionalism.",
  },
  {
    icon: Sparkles,
    title: "Detail-Oriented",
    description: "Every task is executed with precision, ensuring nothing falls through the cracks.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "Your success is my priority. I'm invested in helping you achieve your goals.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Your Partner in Productivity
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I believe that exceptional executives deserve exceptional support. My mission is to be 
            the trusted partner who handles the details so you can focus on what matters most—leading, 
            growing, and achieving your vision.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a systems-driven mindset and a passion for organization, I transform chaos into clarity. 
            Whether it's managing complex calendars across time zones, streamlining communication workflows, 
            or coordinating intricate projects, I bring both efficiency and a personal touch to every task.
          </p>
        </motion.div>

        {/* Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <trait.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{trait.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{trait.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground italic">
            When I'm not supporting executives, you'll find me exploring new productivity tools, 
            enjoying a good cup of coffee, and planning my next adventure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
