
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-20 lg:pt-24 hero-gradient">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <span className="text-marketing-700 block">Boost Your Business</span>
            <span className="block">With Digital Marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            We help businesses grow online through strategic digital marketing solutions
            tailored to your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="text-lg px-8 py-6 bg-marketing-600 hover:bg-marketing-700"
              asChild
            >
              <a href="#contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-6 border-marketing-600 text-marketing-600 hover:bg-marketing-50"
              asChild
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent1-light rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-marketing-100 rounded-full opacity-50 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop"
              alt="Digital Marketing Team"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
