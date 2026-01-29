import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, ArrowRight } from "lucide-react";


const Contact = () => {

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-gold-light font-medium tracking-widest uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Ready to Streamline Your Success?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Let's discuss how I can help you reclaim your time, stay organized, 
            and focus on what truly matters. Book a discovery call or reach out directly.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-10">
            <Button
              variant="gold"
              size="xl"
              className="group"
              onClick={() => window.open("https://calendly.com/offeibeaportia0", "_blank")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Links */}
          <div className="flex items-center justify-center pt-8 border-t border-primary-foreground/20">
            <a
              href="mailto:offeibeaportia0@gmail.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold-light transition-colors group"
            >
              <div className="w-10 h-10 border border-primary-foreground/30 rounded-lg flex items-center justify-center group-hover:border-gold-light">
                <Mail className="w-5 h-5" />
              </div>
              <span>offeibeaportia0@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
