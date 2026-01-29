import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-2 md:gap-0 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Virtual Assistant
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Executive Support &<br />
              <span className="text-gradient-gold">Business Efficiency</span><br />
              Specialist
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I help busy executives and entrepreneurs save time, stay organized, 
              and scale their impact through streamlined support and proactive assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToPortfolio}
              >
                View My Work
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={scrollToContact}
              >
                Let's Work Together
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                asChild
              >
                <a href="/Portia_Offei_Nyarko_CV.pdf" download>
                  Download CV
                </a>
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                asChild
              >
                <a href="https://www.linkedin.com/in/portia-offei-nyarko" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-accent/20 rounded-2xl transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-2xl transform -rotate-3" />
              <img
                src={profilePhoto}
                alt="Portia - Executive Virtual Assistant"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-elevated"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground cursor-pointer hover:text-accent transition-colors"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
