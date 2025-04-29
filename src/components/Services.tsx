
import {
  Search,
  MessageSquare,
  BarChart,
  Mail,
  Instagram,
  Target
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Search Engine Optimization",
    description:
      "Improve your website's visibility and drive organic traffic with our data-driven SEO strategies.",
    icon: Search,
    color: "bg-marketing-100 text-marketing-700",
  },
  {
    id: 2,
    title: "Content Marketing",
    description:
      "Engage your audience with compelling content that builds trust and converts visitors into customers.",
    icon: MessageSquare,
    color: "bg-accent1-light text-accent1-DEFAULT",
  },
  {
    id: 3,
    title: "Analytics & Reporting",
    description:
      "Make data-driven decisions with comprehensive analytics and actionable insights on your campaigns.",
    icon: BarChart,
    color: "bg-marketing-100 text-marketing-700",
  },
  {
    id: 4,
    title: "Email Marketing",
    description:
      "Create personalized email campaigns that nurture leads and drive conversions for your business.",
    icon: Mail,
    color: "bg-accent1-light text-accent1-DEFAULT",
  },
  {
    id: 5,
    title: "Social Media Marketing",
    description:
      "Build brand awareness and engage with your audience across all major social media platforms.",
    icon: Instagram,
    color: "bg-marketing-100 text-marketing-700",
  },
  {
    id: 6,
    title: "PPC Advertising",
    description:
      "Maximize ROI with targeted paid advertising campaigns across search engines and social platforms.",
    icon: Target,
    color: "bg-accent1-light text-accent1-DEFAULT",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.reveal');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('active');
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
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Digital Marketing Services
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive suite of services designed to help your business
            grow online and reach your target audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="service-card border border-gray-100 hover:border-marketing-200 reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className={`rounded-full p-3 w-14 h-14 flex items-center justify-center mb-5 ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
