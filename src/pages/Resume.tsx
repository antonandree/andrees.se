import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      title: 'Data Engineer',
      company: 'Solita',
      period: '2022 – 2026',
      description:
        'Arbetade som Data Engineering-konsult i flera kunduppdrag med fokus på att bygga, migrera och optimera skalbara och driftsäkra dataplattformar.',
      tech: [],
    },
    {
      title: 'Senior Data Engineer (via Solita)',
      company: 'Schibsted',
      period: '2025 – 2026',
      description:
        'Migrerade, optimerade och förenklade interna datapipelines i ett nybildat team. Designade och implementerade centrala delar av teamets CI/CD-processer. Genomförde även ad-hoc-analyser samt löpande systemunderhåll.',
      tech: [
        'AWS',
        'Snowflake',
        'dbt',
        'Terraform',
        'Airflow',
        'Docker',
        'Git',
        'Python',
        'SQL',
      ],
    },
    {
      title: 'Data Engineer (via Solita)',
      company: 'Tele2',
      period: '2022 – 2024',
      description:
        'Planerade och genomförde storskaliga datamigreringar samt utvecklade nya datalösningar inklusive datamodellering med versionshantering och CI/CD. Arbetade både strategiskt och operativt för att säkerställa stabila och effektiva dataplattformar.',
      tech: [
        'AWS',
        'Snowflake',
        'Redshift',
        'SQL Server',
        'dbt',
        'Airflow',
        'Docker',
        'Git',
        'Python',
        'SQL',
      ],
    },
    {
      title: 'Data Engineer (via Solita)',
      company: 'Spiltan fonder',
      period: '2022 – 2022',
      description:
        'Designade och implementerade en proof of concept för att automatisera datatransformationer som tidigare utfördes manuellt. Arbetet inkluderade analys av befintliga processer, utveckling av datalogik samt utvärdering av lösningen ur ett skalbarhets- och förvaltningsperspektiv.',
      tech: [
        'Azure',
        'Data factory',
        'Python',
        'SQL',
      ],
    },
    {
      title: 'Riskanalytiker',
      company: 'Länsförsäkringar Bank',
      period: '2020 – 2022',
      description:
        'Utvecklade kod för att ta fram nyckeltal kopplade till riskexponeringar, analyserade stora datamängder samt skapade dashboards och visualiseringar. Ansvarade för regulatorisk rapportering och säkerställde efterlevnad av uppdaterade regelverk.',
      tech: ['SAS Base', 'Python', 'SQL'],
    },
    {
      title: 'Konsult',
      company: 'UU Projekt AB',
      period: '2020 – 2021',
      description:
        'Utvecklade mjukvara för analys av HPV-testresultat åt en forskargrupp. Byggde backend- och frontend-gränssnitt samt arbetade nära intressenter för kravinsamling och lösningsdesign.',
      tech: ['Go', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  const education = [
    {
      degree: 'Civilingenjörsprogrammet i system i teknik och samhälle',
      school: 'Uppsala universitet',
      period: '2014 – 2020',
      description:
        'Tvärvetenskapligt civilingenjörsprogram med inriktning mot datavetenskap, inklusive maskininlärning, beräkningsvetenskap samt algoritmer och datastrukturer.',
    },
    {
      degree: 'Utbytesstudier',
      school: 'University of KwaZulu-Natal, Durban',
      period: '2017 – 2018',
      description:
        'Två terminer med fokus på teknik och management samt internationell erfarenhet.',
    },
  ];

  const skills = {
    languages: ['Python', 'SQL', 'Terraform'],
    cloud: ['AWS', 'Git', 'CI/CD'],
    data: [
      'Snowflake',
      'dbt',
      'Airflow',
    ],
    tools: [],
  };

  const certifications = [
    'Snowflake SnowPro Core',
    'Databricks Fundamentals',
    'dbt Fundamentals',
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 opacity-0 animate-fade-in">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Anton Andrée — Data Engineer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <section className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Erfarenhet</h2>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-6 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-primary/50 before:rounded-l-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <span className="text-sm text-primary font-medium">{job.period}</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-3">{job.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Utbildning</h2>
              </div>

              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                    <span className="text-sm text-accent font-medium">{edu.period}</span>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <section className="glass-card rounded-xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Kärnkompetenser</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Språk</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Data</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.data.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </section>

            {/* Certifications */}
            <section className="glass-card rounded-xl p-6 opacity-0 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Certifieringar</h2>
              </div>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
