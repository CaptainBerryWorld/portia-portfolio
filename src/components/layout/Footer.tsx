const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg font-semibold text-foreground">
            Portia<span className="text-accent">.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
