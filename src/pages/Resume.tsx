import { Briefcase, GraduationCap, Award, Building2 } from "lucide-react";

type Assignment = {
  title: string;
  client: string;
  period: string;
  description: string;
  tech: string[];
};

type ExperienceEntry =
  | {
      kind: "grouped";
      title: string;
      company: string;
      period: string;
      description: string;
      assignments: Assignment[];
    }
  | {
      kind: "single";
      title: string;
      company: string;
      period: string;
      description: string;
      tech: string[];
    };

const experiences: ExperienceEntry[] = [
  {
    kind: "grouped",
    title: "Data Engineer",
    company: "Solita",
    period: "2022 – 2026",
    description:
      "Arbetade som Data Engineering-konsult i flera kunduppdrag med fokus på att bygga, migrera och optimera skalbara och driftsäkra dataplattformar.",
    assignments: [
      {
        title: "Senior Data Engineer",
        client: "Schibsted",
        period: "2025 – 2026",
        description:
          "Migrerade, optimerade och förenklade interna datapipelines i ett nybildat team. Designade och implementerade centrala delar av teamets CI/CD-processer samt införde Terraform för hantering av AWS- och Snowflake-infrastruktur. Genomförde även ad-hoc-analyser samt löpande systemunderhåll. Uppdraget innebar mycket kommunikation med ägare av källsystem samt data analysts för att säkerställa robusta och användbara datamodeller.",
        tech: ["AWS", "Snowflake", "dbt", "Terraform", "Airflow", "Docker", "Git", "Python", "SQL"],
      },
      {
        title: "Data Engineer",
        client: "Tele2",
        period: "2022 – 2024",
        description:
          "Planerade och genomförde storskaliga datamigreringar från SQL Server till Snowflake (AWS). Utvecklade nya datalösningar inklusive datamodellering och analysvänliga tabeller för data analysts, med versionshantering och CI/CD. Arbetade både strategiskt och operativt för att säkerställa stabila och effektiva dataplattformar.",
        tech: ["AWS", "Snowflake", "Redshift", "SQL Server", "dbt", "Airflow", "Docker"],
      },
      {
        title: "Data Engineer",
        client: "Aftonbladet",
        period: "2022 – 2022",
        description:
          "Införde dbt och Airflow som centrala transformations- och orkestreringsverktyg i Snowflake-miljön och ersatte tidigare lösningar baserade på Snowflake Tasks och cron-jobb. Uppdraget omfattade etablering av versionshantering, testning och struktur i dbt samt utbildning och stöd till analytiker i hur de nya verktygen användes i det dagliga arbetet, vilket möjliggjorde mer hållbara och skalbara datapipelines.",
        tech: ["AWS", "Snowflake", "dbt", "Airflow"],
      },
      {
        title: "Data Engineer",
        client: "Spiltan fonder",
        period: "2022 – 2022",
        description:
          "Designade och implementerade en proof of concept för att automatisera datatransformationer som tidigare utfördes manuellt. Arbetet inkluderade analys av befintliga processer, utveckling av datalogik samt utvärdering av lösningen ur ett skalbarhets- och förvaltningsperspektiv.",
        tech: ["Azure", "Data Factory", "Python", "SQL"],
      },
    ],
  },
  {
    kind: "single",
    title: "Riskanalytiker",
    company: "Länsförsäkringar Bank",
    period: "2020 – 2022",
    description:
      "Utvecklade kod för att ta fram nyckeltal kopplade till riskexponeringar, analyserade stora datamängder samt skapade dashboards och visualiseringar. Ansvarade för regulatorisk rapportering och säkerställde efterlevnad av uppdaterade regelverk.",
    tech: ["SAS Base", "Python", "SQL"],
  },
  {
    kind: "single",
    title: "Konsult",
    company: "UU Projekt AB",
    period: "2020 – 2021",
    description:
      "Utvecklade mjukvara för analys av HPV-testresultat åt en forskargrupp. Byggde backend- och frontend-gränssnitt samt arbetade nära intressenter för kravinsamling och lösningsdesign.",
    tech: ["Go", "PostgreSQL", "JavaScript", "HTML", "CSS"],
  },
];

const education = [
  {
    degree: "Civilingenjörsprogrammet i system i teknik och samhälle",
    school: "Uppsala universitet",
    period: "2014 – 2020",
    description:
      "Tvärvetenskapligt civilingenjörsprogram med inriktning mot datavetenskap, inklusive maskininlärning, beräkningsvetenskap samt algoritmer och datastrukturer.",
  },
  {
    degree: "Utbytesstudier",
    school: "University of KwaZulu-Natal, Durban",
    period: "2017 – 2018",
    description: "Två terminer med fokus på teknik och management samt internationell erfarenhet.",
  },
];

const skills = {
  Språk: ["Python", "SQL", "Terraform"],
  Molntjänster: ["AWS", "Git", "CI/CD"],
  Data: ["Snowflake", "dbt", "Airflow"],
};

const certifications = ["Snowflake SnowPro Core", "Databricks Fundamentals", "dbt Fundamentals"];

const CV = () => {
  return (
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 opacity-0 animate-fade-in">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-2">Anton Andrée</h1>
            <p className="text-accent text-lg font-medium">Data Engineer</p>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-14 opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Erfarenhet</h2>
          </div>

          <div className="space-y-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-4 hidden sm:block" />

            {experiences.map((exp, i) => (
              <div
                key={i}
                className="sm:pl-12 relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${220 + i * 90}ms` }}
              >
                <div
                  className="hidden sm:block absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background"
                  style={{ marginLeft: "11px" }}
                />

                {exp.kind === "grouped" ? (
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    {/* Parent header */}
                    <div className="p-5 border-b border-border/60 bg-primary/5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <div>
                          <h3 className="font-semibold text-primary text-lg">{exp.title}</h3>
                          <p className="text-accent font-medium text-sm">{exp.company}</p>
                        </div>
                        <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </div>

                    {/* Sub-assignments */}
                    <div className="divide-y divide-border/40">
                      {exp.assignments.map((a, j) => (
                        <div
                          key={j}
                          className="p-5 pl-6 sm:pl-8 relative opacity-0 animate-fade-in"
                          style={{ animationDelay: `${260 + i * 90 + j * 80}ms` }}
                        >
                          {/* Vertical connector line on the left */}
                          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/60 hidden sm:block" />
                          <div className="absolute left-[13px] top-5 w-2 h-2 rounded-full bg-accent/60 border border-background hidden sm:block" />

                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                            <div>
                              <div className="flex items-center gap-2">
                                <Building2 className="w-3.5 h-3.5 text-accent/70 flex-shrink-0" />
                                <span className="font-semibold text-primary text-sm">{a.client}</span>
                              </div>
                              <p className="text-muted-foreground text-xs mt-0.5 ml-5">{a.title}</p>
                            </div>
                            <span className="text-muted-foreground text-xs font-medium whitespace-nowrap">{a.period}</span>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed mb-3 ml-5">{a.description}</p>

                          {a.tech.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 ml-5">
                              {a.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="font-semibold text-primary text-lg">{exp.title}</h3>
                        <p className="text-accent font-medium text-sm">{exp.company}</p>
                      </div>
                      <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{exp.description}</p>
                    {exp.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-14 opacity-0 animate-fade-in" style={{ animationDelay: "220ms" }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Utbildning</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 opacity-0 animate-fade-in"
                style={{ animationDelay: `${260 + i * 90}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-accent text-sm font-medium">{edu.school}</p>
                  </div>
                  <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills + Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: "320ms" }}>
          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6">Kärnkompetenser</h2>
            <div className="space-y-5">
              {Object.entries(skills).map(([category, items], idx) => (
                <div
                  key={category}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${360 + idx * 90}ms` }}
                >
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-primary/8 text-primary border border-primary/15 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="opacity-0 animate-fade-in" style={{ animationDelay: "440ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Certifieringar</h2>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${480 + idx * 80}ms` }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
