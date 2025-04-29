
import { Check } from "lucide-react";
import { useRef, useEffect } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 reveal">
            <div className="relative">
              <div className="absolute -z-10 top-1/4 -left-6 w-72 h-72 bg-marketing-100 rounded-full blur-3xl opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Digital Marketing Agency"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-marketing-600 rounded-full p-2">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">98%</p>
                    <p className="text-sm text-gray-600">Client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16 reveal" style={{ transitionDelay: "0.2s" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Our Digital Marketing Agency
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              DigiMarkPro is a full-service digital marketing agency with a mission to help businesses
              grow their online presence. With over 10 years of experience, we've helped hundreds of
              clients achieve their marketing goals and drive tangible business results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-marketing-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-marketing-700" />
                </div>
                <p>Data-driven strategies</p>
              </div>
              <div className="flex items-start">
                <div className="bg-marketing-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-marketing-700" />
                </div>
                <p>Customized solutions</p>
              </div>
              <div className="flex items-start">
                <div className="bg-marketing-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-marketing-700" />
                </div>
                <p>Transparent reporting</p>
              </div>
              <div className="flex items-start">
                <div className="bg-marketing-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-marketing-700" />
                </div>
                <p>ROI focused campaigns</p>
              </div>
              <div className="flex items-start">
                <div className="bg-marketing-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-marketing-700" />
                </div>
                <p>Expert team members</p>
              </div>
              <div className="flex items-start">
                <div className="bg-marketing-100 rounded-full p-1 mr-3 mt-1">
                  <Check className="h-4 w-4 text-marketing-700" />
                </div>
                <p>Industry-leading tools</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-3xl font-bold text-marketing-700">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-3xl font-bold text-accent1-DEFAULT">500+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="text-3xl font-bold text-marketing-700">95%</p>
                <p className="text-gray-600">Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
