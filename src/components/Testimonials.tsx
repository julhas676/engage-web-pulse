
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director, Tech Solutions Inc.",
    content:
      "DigiMarkPro transformed our online presence completely. Their SEO strategies helped us rank on the first page for our key terms, and our organic traffic has increased by 156% in just six months.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 2,
    name: "Mark Williams",
    position: "CEO, GrowFast Startup",
    content:
      "The ROI we've seen from DigiMarkPro's PPC campaigns has been incredible. They understand our target audience perfectly and have helped us reduce cost per acquisition while scaling our ad spend effectively.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 3,
    name: "Emily Chen",
    position: "E-commerce Manager, Lifestyle Brands",
    content:
      "DigiMarkPro's content marketing strategy has helped us establish our brand as a thought leader in our industry. Their team consistently delivers high-quality content that resonates with our audience and drives engagement.",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    position: "Owner, Local Business Services",
    content:
      "As a small business, we were struggling to compete online until we partnered with DigiMarkPro. Their local SEO and social media strategies have put us on the map and brought in a steady stream of new customers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionRef.current?.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('active');
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

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about
            their experience working with our digital marketing agency.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative reveal" style={{ transitionDelay: "0.2s" }}>
          <Card className="border-gray-100 p-8 md:p-12 shadow-lg">
            <div className="text-marketing-600 mb-6">
              <Quote size={40} />
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 italic">
              {testimonials[currentTestimonial].content}
            </p>
            <div className="flex items-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-marketing-200 hover:bg-marketing-50 hover:text-marketing-700"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-marketing-600 scale-110"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-marketing-200 hover:bg-marketing-50 hover:text-marketing-700"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
