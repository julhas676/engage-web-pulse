
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-marketing-700">
            DigiMarkPro
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            <a href="#services" className="text-gray-700 hover:text-marketing-600 font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-marketing-600 font-medium">
              About
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-marketing-600 font-medium">
              Testimonials
            </a>
            <a href="#team" className="text-gray-700 hover:text-marketing-600 font-medium">
              Team
            </a>
            <a href="#blog" className="text-gray-700 hover:text-marketing-600 font-medium">
              Blog
            </a>
          </nav>
          <Button asChild className="bg-marketing-600 hover:bg-marketing-700">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-4 px-4">
            <a
              href="#services"
              className="py-3 text-gray-700 hover:text-marketing-600 font-medium"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="py-3 text-gray-700 hover:text-marketing-600 font-medium"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="py-3 text-gray-700 hover:text-marketing-600 font-medium"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a
              href="#team"
              className="py-3 text-gray-700 hover:text-marketing-600 font-medium"
              onClick={toggleMobileMenu}
            >
              Team
            </a>
            <a
              href="#blog"
              className="py-3 text-gray-700 hover:text-marketing-600 font-medium"
              onClick={toggleMobileMenu}
            >
              Blog
            </a>
            <Button className="mt-4 bg-marketing-600 hover:bg-marketing-700" asChild>
              <a href="#contact" onClick={toggleMobileMenu}>
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
