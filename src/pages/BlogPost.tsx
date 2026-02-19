import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import BlogPost1 from "@/components/blog/BlogPost1";
import BlogPost2 from "@/components/blog/BlogPost2";

const posts: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    tags: string[];
    component: React.ComponentType;
  }
> = {};
/*
  "data-warehouses-och-deras-begransningar": {
    title: "Data warehouses och deras begränsningar",
    date: "2024-12-01",
    readTime: "8 min",
    tags: ["Data Warehouse", "Data Lake", "Lakehouse"],
    component: BlogPost1,
  },
  "dataformat-for-data-engineers": {
    title: "Dataformat för Data Engineers: från CSV till Parquet",
    date: "2025-01-15",
    readTime: "12 min",
    tags: ["CSV", "JSON", "Avro", "Parquet", "Filformat"],
    component: BlogPost2,
  },
};
*/

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) return <Navigate to="/blogg" replace />;

  const PostContent = post.component;

  return (
    <div className="page-content">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-2xl shadow-2xl p-6 sm:p-10 border border-border opacity-0 animate-fade-in">
          <Link
            to="/blogg"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 text-sm font-medium group opacity-0 animate-fade-in"
            style={{ animationDelay: "80ms" }}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Tillbaka till bloggen
          </Link>

          <div className="flex flex-wrap gap-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "140ms" }}>
            {post.tags.map((tag, idx) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 bg-accent/10 text-accent rounded-full font-medium opacity-0 animate-fade-in"
                style={{ animationDelay: `${180 + idx * 60}ms` }}
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "220ms" }}
          >
            {post.title}
          </h1>

          <div
            className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
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

          <article
            className="
              prose prose-invert max-w-none
              prose-headings:tracking-tight
              prose-h1:text-4xl prose-h2:text-2xl
              prose-p:leading-7
              prose-a:text-accent hover:prose-a:underline
              prose-strong:text-white
              prose-hr:border-white/10
              prose-blockquote:border-l-accent/40
              prose-code:text-accent prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10
              prose-th:bg-white/5 prose-td:border-white/10 prose-th:border-white/10
              opacity-0 animate-fade-in
            "
            style={{ animationDelay: "380ms" }}
          >
            <PostContent />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
