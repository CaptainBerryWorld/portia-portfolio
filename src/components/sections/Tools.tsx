import { motion } from "framer-motion";

const toolCategories = [
  {
    category: "Scheduling",
    tools: ["Calendly", "Google Calendar", "World Time Buddy", "Cal.com"],
  },
  {
    category: "Communication",
    tools: ["Slack", "Zoom", "Gmail", "Microsoft Teams"],
  },
  {
    category: "Organization",
    tools: ["Trello", "Asana", "Notion", "ClickUp"],
  },
  {
    category: "Research & Docs",
    tools: ["Google Workspace", "Dropbox", "Airtable", "Loom"],
  },
  {
    category: "Design",
    tools: ["Canva", "Figma", "Adobe Express"],
  },
  {
    category: "CRM & Data",
    tools: ["HubSpot", "Salesforce", "Excel", "Google Sheets"],
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in the modern tools that power efficient virtual assistance 
            and seamless remote collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft"
            >
              <h3 className="font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
