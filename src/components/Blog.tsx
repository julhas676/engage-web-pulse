
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 SEO Trends to Watch in 2025",
    excerpt:
      "Stay ahead of the curve with these emerging SEO trends that will shape digital marketing in the coming year.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    date: "Apr 15, 2025",
    category: "SEO",
    url: "#",
  },
  {
    id: 2,
    title: "How to Create a Content Strategy That Drives Results",
    excerpt:
      "Learn the key components of an effective content strategy that attracts, engages, and converts your target audience.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    date: "Apr 10, 2025",
    category: "Content",
    url: "#",
  },
  {
    id: 3,
    title: "Social Media Algorithms: What Marketers Need to Know",
    excerpt:
      "Understanding how social media algorithms work is crucial for maximizing your organic reach and engagement.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    date: "Apr 5, 2025",
    category: "Social Media",
    url: "#",
  },
];

const Blog = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="blog" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Latest Marketing Insights
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends, strategies, and tips in the digital
              marketing industry through our regularly updated blog.
            </p>
          </div>
          <Button className="self-start bg-marketing-600 hover:bg-marketing-700 reveal" asChild>
            <a href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="border-gray-100 hover:shadow-md transition-shadow overflow-hidden reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm text-marketing-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">
                  <a href={post.url} className="hover:text-marketing-600 transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={post.url}
                  className="inline-flex items-center text-marketing-600 font-medium hover:text-marketing-700 transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
