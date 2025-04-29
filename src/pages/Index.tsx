
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Initialize scroll reveal
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScrollReveal);
    handleScrollReveal(); // Call once on mount
    
    return () => window.removeEventListener("scroll", handleScrollReveal);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollButton && (
        <Button
          className="fixed bottom-6 right-6 rounded-full bg-marketing-600 hover:bg-marketing-700 shadow-lg z-40"
          size="icon"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </Button>
      )}
    </div>
  );
};

export default Index;
