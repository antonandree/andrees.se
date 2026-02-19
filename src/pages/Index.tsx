import { Sprout, Users, Globe, Bot } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Sprout,
      title: "Bygga datadrivna system från grunden",
      description:
        "Jag hjälper er ta steget mot en datadriven verksamhet – från första integrationerna till en stabil och automatiserad dataplattform som fungerar i produktion.",
    },
    {
      icon: Users,
      title: "Förstärka ert datateam",
      description:
        "Arbetar som en integrerad del av ert team med både teknisk leverans och struktur – från arkitektur och pipelines till datamodellering och automatisering.",
    },
    {
      icon: Globe,
      title: "Web scraping & datainsamling",
      description:
        "Design och utveckling av stabila lösningar för att samla in, strukturera och integrera extern data i era befintliga dataflöden.",
    },
    {
      icon: Bot,
      title: "AI proof-of-concepts",
      description:
        "Hjälper er utforska AI-möjligheter genom praktiska proof-of-concepts baserade på er egen data – utan att bygga onödig komplexitet.",
    },
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 opacity-0 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Tillgänglig för uppdrag
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Data Engineering
            <br />
            <span className="text-gradient">som gör er datadrivna</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            Hands-on data engineer som hjälper er hela vägen – från första
            stegen till en robust och automatiserad dataplattform. Fokus på
            kvalitet, driftsäkerhet och struktur så att data faktiskt går att
            lita på och använda i beslut.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 glow-primary"
            >
              Kontakta mig
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 border border-border transition-all duration-300"
            >
              Se mitt CV
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hur jag kan hjälpa er
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jag hjälper organisationer bli datadrivna på riktigt – genom att
            bygga en stabil grund, få dataflöden att fungera i produktion och
            göra data användbar i vardagen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={400 + index * 100}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Intresserad?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Låt oss prata igenom nuläge, målbild och första steg. Jag kan bidra
            med både riktning och hands-on leverans – utan onödig komplexitet.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 glow-primary"
          >
            Kontakta mig!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
