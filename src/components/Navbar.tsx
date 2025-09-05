import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import inspireLogo from "@/assets/inspire1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Purpose", href: "#purpose" },
    { name: "Why Trust Us", href: "#wtu" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" }
  ];

  // Smooth scroll
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= scrollPosition &&
          section.getBoundingClientRect().bottom + window.scrollY > scrollPosition
        ) {
          setActiveSection(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-b border-background/20 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
src={inspireLogo}              alt="Inspire Nest Logo"
              className="h-10 w-auto mr-2"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? "text-cyan-400 font-semibold"
                      : "text-foreground hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5 text-foreground" /> : <Menu className="h-5 w-5 text-foreground" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 border-t border-background/20 backdrop-blur-md">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === link.href
                      ? "text-cyan-400 font-semibold"
                      : "text-foreground hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
