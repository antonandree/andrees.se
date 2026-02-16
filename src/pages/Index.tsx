import { Database, Cloud, GitBranch, BarChart3, Workflow, Download } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Engineering & Integration',
      description: 'Bygger robusta datapipelines och ETL-processer som skapar värde från era data och integrerar datakällor.',
    },
    {
      icon: Workflow,
      title: 'Data Orchestration',
      description: 'Automatiserar och optimerar arbetsflöden med moderna verktyg som Airflow, vilket säkerställer pålitliga och repeterbara dataflöden.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Platforms',
      description: 'Skapar analytiska plattformar som möjliggör datadrivna beslut och insikter för verksamheten.',
    },
    {
      icon: Download,
      title: 'Web Scraping',
      description: 'Automatiserad datainsamling från webbkällor med effektiva, skalbara och säkra lösningar.',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design och implementation av skalbara och kostnadseffektiva molnlösningar, främst i AWS.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 opacity-0 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-primary font-medium">Tillgänglig för uppdrag</span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '100ms' }}
          >
            Data Engineering
            <br />
            <span className="text-gradient">som driver tillväxt</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            Data engineer med passion för att bygga skalbara
            datalösningar som transformerar rådata till affärsvärde.
            Med 5 års erfarenhet och ett flertal uppdrag i ryggen vet  jag vad som funkar!
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '300ms' }}
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
            Med bred erfarenhet inom modern datainfrastruktur hjälper jag företag
            att bygga framtidssäkra datalösningar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Låt oss diskutera hur jag kan hjälpa er organisation att
            maximera värdet av era data.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 glow-primary"
          >
            Kontakta mig!
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-border/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Andrées Ingenjörsbyrå. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/resume" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              CV
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
