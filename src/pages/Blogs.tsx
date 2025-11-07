import { useEffect, useState } from "react";
import GlassCard from "@/components/GlassCard";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // TODO: CRITICAL - Replace with YOUR actual Medium RSS feed URL
    // Format: https://medium.com/feed/@your-username
    const MEDIUM_RSS_URL = "https://medium.com/feed/@faraaz";
    
    // Using a CORS proxy to fetch Medium RSS
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`
        );
        const data = await response.json();
        
        if (data.status === "ok") {
          setPosts(data.items.slice(0, 9)); // Get latest 9 posts
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch Medium posts:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <div className="min-h-screen pt-24 pb-20 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text animate-fade-in">
            Blogs
          </h1>
          <p className="text-xl text-muted-foreground mb-4 animate-fade-in-up">
            Thoughts on AI, systems, and the future
          </p>
          <p className="text-sm text-muted-foreground mb-16 animate-fade-in-up">
            Articles from my{" "}
            <a
              href="https://medium.com/@faraaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Medium publication
            </a>
          </p>

          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              <p className="mt-4 text-muted-foreground">Loading articles...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-20">
              <GlassCard hoverable={false} className="max-w-md mx-auto">
                <p className="text-muted-foreground mb-4">
                  Unable to load articles. This could be because:
                </p>
                <ul className="text-sm text-muted-foreground text-left space-y-2 mb-6">
                  <li>• The Medium RSS feed URL needs to be updated</li>
                  <li>• There are no published articles yet</li>
                  <li>• CORS restrictions are blocking the request</li>
                </ul>
                <Button
                  variant="outline"
                  className="border-accent/30 hover:bg-accent/10"
                  asChild
                >
                  <a
                    href="https://medium.com/@faraaz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Medium Directly
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </GlassCard>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles published yet.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <GlassCard
                key={index}
                className="flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-foreground line-clamp-2">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3" />
                  {formatDate(post.pubDate)}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                  {stripHtml(post.description)}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-accent/30 hover:bg-accent/10 hover:border-accent"
                  asChild
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read on Medium
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </GlassCard>
            ))}
          </div>

          {/* Note about TODO items */}
          <div className="mt-12 p-4 rounded-lg bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-accent">Note:</strong> Update the MEDIUM_RSS_URL in Blogs.tsx 
              with your actual Medium profile feed URL. The format is: https://medium.com/feed/@your-username
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
