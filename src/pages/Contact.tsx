import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import ContactFormCard from "../ContactFormCard";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anton@andrees.com',
      href: 'mailto:anton@andrees.com',
    },
    {
      icon: MapPin,
      label: 'Plats',
      value: 'Östersund/Stockholm, Sverige',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/antonandree',
      href: 'https://linkedin.com/in/antonandree',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
              Låt oss prata
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Har du ett projekt eller en idé? Jag hjälper gärna till att
              förvandla era data till konkurrensfördelar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktuppgifter</h2>

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <ContactFormCard />
            </div>
          </div>

          {/* Availability Notice */}
          <div className="mt-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <span className="text-foreground font-medium">
                Tillgänglig för nya uppdrag från mars 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
