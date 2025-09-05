import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import celebrationImage from "@/assets/celebration-gifts.jpg";
import { 
  Calendar, 
  Gift, 
  Award, 
  Heart, 
  Users, 
  Cake,
  Flower,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from "lucide-react";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("events");

  const services = [
    {
      icon: Calendar,
      title: "Event Organization",
      description: "Professional planning for all your special moments"
    },
    {
      icon: Gift,
      title: "Gift Delivery",
      description: "Thoughtful gifts delivered with care and precision"
    },
    {
      icon: Award,
      title: "Vouchers & Recognition",
      description: "Celebrate achievements with meaningful recognition"
    },
    {
      icon: Heart,
      title: "Stronger Connections",
      description: "Building lasting relationships through celebration"
    }
  ];

  const events = [
    "Birthdays", "Anniversaries", "Weddings", "Valentine's Day",
    "Women's Day", "National Celebrations", "Personal Events",
    "Corporate Milestones", "Achievement Awards", "Team Building"
  ];

  const products = [
    "Cakes & Chocolates", "Fresh Flowers", "Personalized Gifts",
    "Corporate Gifts", "Gift Vouchers", "Celebration Hampers",
    "Custom Arrangements", "Premium Collections"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Moments that Matter.
              <br />
              Connections that Last
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Creating unforgettable experiences through thoughtful event organization 
              and meaningful gift delivery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Explore Events
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={celebrationImage} 
                alt="Celebration and gift exchange"
                className="rounded-lg shadow-elegant w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Your Story of Celebration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Inspire Nest, we believe every moment deserves to be celebrated. 
                Since our founding, we've been dedicated to creating meaningful connections 
                through thoughtfully organized events and carefully curated gifts.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Trust us to transform your special occasions into unforgettable memories. 
                Our commitment to excellence, attention to detail, and genuine care for 
                your happiness sets us apart in creating moments that truly matter.
              </p>
              <div className="flex items-center gap-4">
                <Star className="h-6 w-6 text-primary fill-primary" />
                <span className="text-lg font-semibold text-foreground">
                  Trusted by thousands for life's most precious moments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Trust Inspire Nest?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating extraordinary experiences that bring people together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="text-center p-6 shadow-soft hover:shadow-elegant transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Catalog
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our comprehensive range of events and products
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="events" className="text-sm font-medium">
                Events Organized
              </TabsTrigger>
              <TabsTrigger value="products" className="text-sm font-medium">
                Products & Gifts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="mt-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {events.map((event) => (
                  <Card key={event} className="p-4 text-center shadow-soft hover:shadow-elegant transition-shadow">
                    <CardContent className="pt-4">
                      <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">{event}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="mt-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <Card key={product} className="p-4 text-center shadow-soft hover:shadow-elegant transition-shadow">
                    <CardContent className="pt-4">
                      <Gift className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">{product}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cross-Link Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Explore More at Our Other Platform
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Discover additional services and exclusive offerings on our partner website
              </p>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Our Website
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Inspire Nest
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-background/90">
                    100ft Road, SRS Building<br />
                    Hosur – 635109
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-background/90">+91 9514774611</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-background/90">support@inspire-nest.com</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-background">Quick Links</h4>
              <div className="space-y-3">
                {["Home", "About", "Catalog", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-background/80 hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-background">Get Started</h4>
              <p className="text-background/80 mb-6">
                Ready to create unforgettable moments? Let's make your next celebration special.
              </p>
              <Button variant="secondary" size="lg">
                Start Planning
              </Button>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60">
              © 2024 Inspire Nest. All rights reserved. Creating moments that matter.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;