import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Portia has been an exceptional team member at Golden Angels Travel Consultancy. Her dedication to client satisfaction, attention to detail in documentation processing, and ability to handle complex travel arrangements have made her invaluable to our operations.",
    name: "Lawrencia Boakye",
    role: "Manager",
    company: "Golden Angels Travel Consultancy",
  },
  {
    quote: "Portia consistently delivered exceptional customer service, handling guest inquiries and complaints with professionalism and a warm demeanor. Her ability to stay calm under pressure and ensure customer satisfaction made her a standout team member.",
    name: "Lord Hagan",
    role: "Supervisor",
    company: "KFC Ghana (Mascó Food Services Limited)",
  },
  {
    quote: "Working with Portia transformed how I approach my workday. Her attention to detail and systems-thinking have made me significantly more productive and less stressed.",
    name: "Nylah Lenoir",
    role: "Operations Manager",
    company: "E-commerce Client",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it—here's what colleagues and clients 
            have to say about working together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-gold">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6 mt-2 italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
