import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-8 border-t border-border/30 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Andrées Ingenjörsbyrå. Alla rättigheter förbehållna.
        </p>

        <div className="flex items-center gap-6">
          <Link to="/resume" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            CV
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Kontakt
          </Link>
          <Link to="/blogg" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Blogg
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
