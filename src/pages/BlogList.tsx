import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [];
/*
  {
    slug: "data-warehouses-och-deras-begransningar",
    title: "Data warehouses och deras begränsningar",
    excerpt:
      "Data warehouses har under lång tid haft stor framgång. Men trots alla fördelar har det alltid funnits delar som skavt — och ur de begränsningarna växte en ny idé fram.",
    date: "2024-12-01",
    readTime: "8 min",
    tags: ["Data Warehouse", "Data Lake", "Lakehouse"],
  },
  {
    slug: "dataformat-for-data-engineers",
    title: "Dataformat för Data Engineers: från CSV till Parquet",
    excerpt:
      "När jag började min bana som Data Engineer trodde jag att det inte spelade så stor roll vilket filformat man valde. Oj vad naiv jag var.",
    date: "2025-01-15",
    readTime: "12 min",
    tags: ["CSV", "JSON", "Avro", "Parquet", "Filformat"],
  },
];*/

const BlogList = () => {
  return (
    <div className="page-content">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Blogg</h1>
          <p className="text-muted-foreground text-lg">
            Tankar och erfarenheter från arbetet med modern datainfrastruktur.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blogg/${post.slug}`}
              className="block bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group opacity-0 animate-fade-in"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("sv-SE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime} läsning
                  </span>
                </div>

                <span className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                  Läs mer <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
