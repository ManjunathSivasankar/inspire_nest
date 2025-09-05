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
  ExternalLink, 
  PartyPopper
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
      
    <section
      id="home"
      className="pt-20 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-5xl md:text-5xl font-extrabold mb-12 leading-tight">
    <span className="block text-transparent bg-clip-text 
                    bg-gradient-to-r from-amber-200 via-yellow-400 to-white 
                    drop-shadow-lg italic tracking-tight">
      Moments that Matter
    </span>

            <span className="block italic tracking-wide drop-shadow-md">
              Connections that Last
            </span>
          </h1>

          {/* Tagline */}
          <div className="mb-14 max-w-3xl mx-auto mt-2">
            <p className="text-3xl md:text-2lg font-bold text-white drop-shadow-xl tracking-tight mb-4">
              ❤️ U Care 🎁 We Deliver 😊 They Smile
            </p>
            <p className="mt-5 text-lg md:text-xl text-blue-100 font-light italic">
              Creating unforgettable experiences through events & gifts.
            </p>
          </div>

          {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      {/* Primary Button - Gradient Glow */}
      <Button
        size="lg"
        className="relative text-lg px-10 py-4 rounded-full
                  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                  text-white shadow-xl hover:scale-110 
                  transition-all duration-300 overflow-hidden"
      >
        <span className="relative z-10">🚀 Explore Events</span>
        <span className="absolute inset-0 bg-white/20 blur-xl opacity-50 animate-pulse" />
      </Button>

      {/* Secondary Button - Glassmorphic */}
      <Button
        size="lg"
        className="text-lg px-10 py-4 rounded-full font-semibold 
                  bg-white/10 backdrop-blur-lg border border-white/30 
                  text-white shadow-md hover:scale-105 hover:shadow-lg 
                  hover:bg-white/20 transition-all duration-300"
      >
        📖 View Catalog
      </Button>
    </div>



        </div>
      </div>

      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
    </section>

    {/* Purpose Section */}
<section id="purpose" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
        Our Purpose
      </h2>
<p
  className="relative text-lg md:text-xl max-w-3xl mx-auto leading-relaxed 
             bg-gradient-to-r from-pink-50 via-white to-pink-50 
             border-l-4 border-pink-500 px-6 py-6 rounded-lg shadow-md 
             text-gray-700 font-medium italic"
>
  ✨ <span className="font-semibold text-pink-600">At Inspire Nest</span>, our purpose goes beyond 
  planning events or delivering gifts.  
  We exist to <span className="font-bold text-red-500">bring people closer</span>, 
  to <span className="font-bold text-yellow-500">spread joy</span>, and to 
  <span className="font-bold text-purple-500"> create memories that last a lifetime</span>.  
  Every moment we touch is carefully crafted to make someone smile, strengthen relationships, 
  and celebrate life’s most precious milestones. 🌸
</p>

    </div>

    {/* Three Pillars of Purpose */}
<div className="grid md:grid-cols-3 gap-10">
  {/* Spreading Joy */}
  <Card className="p-8 text-center rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-b from-pink-50 to-white">
    <CardContent>
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-red-400 flex items-center justify-center shadow-lg">
        <Heart className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Spreading Joy</h3>
      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
        Happiness is contagious. We believe every surprise, every thoughtful 
        gesture, and every celebration should spark joy — not just for one 
        person, but for everyone who shares the moment.
      </p>
    </CardContent>
  </Card>

  {/* Building Bonds */}
  <Card className="p-8 text-center rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-b from-indigo-50 to-white">
    <CardContent>
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg">
        <Users className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Building Bonds</h3>
      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
        True connections are built on love, trust, and care. Through our services, 
        we help you express your emotions in the most meaningful ways, strengthening 
        bonds with family, friends, and colleagues.
      </p>
    </CardContent>
  </Card>

  {/* Creating Memories */}
  <Card className="p-8 text-center rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-b from-yellow-50 to-white">
    <CardContent>
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg">
        <Star className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Creating Memories</h3>
      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
        Memories are treasures that live forever. Our goal is to transform ordinary 
        days into extraordinary stories — the kind of stories you’ll cherish and 
        share for years to come.
      </p>
    </CardContent>
  </Card>
</div>

  </div>
</section>


        {/* What We Do Section */}
        <section className="py-20 bg-accent/30" id="wtu">
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
<section id="products" className="py-24 bg-gray-100">  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
          Our Catalog
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Discover meaningful celebrations & thoughtful gifts designed to connect hearts.
      </p>

      {/* Brochure-style quote */}
      <p className="mt-6 italic text-primary text-xl font-medium">
        “Turning Everyday Moments Into Lasting Bonds.”
      </p>
    </div>

    {/* Tabs */}
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
<TabsList className="flex justify-center gap-4 max-w-lg mx-auto bg-gray-100 rounded-full p-1 shadow-sm">
  <TabsTrigger
    value="consumer"
    className="rounded-full px-6 py-2.5 text-base font-semibold text-gray-700 
               transition-all duration-300 hover:bg-pink-100 hover:text-pink-600
               data-[state=active]:bg-pink-500 data-[state=active]:text-white data-[state=active]:shadow-md"
  >
    🎁 Consumers
  </TabsTrigger>

  <TabsTrigger
    value="corporate"
    className="rounded-full px-6 py-2.5 text-base font-semibold text-gray-700 
               transition-all duration-300 hover:bg-blue-100 hover:text-blue-600
               data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-md"
  >
    💼 Corporates
  </TabsTrigger>
</TabsList>


   {/* Consumer Catalog */}
{/* Consumer Catalog */}
<TabsContent value="consumer" className="mt-12">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      "Birthdays 🎂",
      "Anniversaries 💍",
      "Weddings 💒",
      "Cakes & Chocolates 🍫",
      "Fresh Flowers 🌸",
      "Personalized Gifts 🎨",
      "Celebration Hampers 🧺",
    ].map((item, index) => (
      <Card
        key={index}
        className="group p-5 text-center rounded-2xl bg-gradient-to-r from-pink-50 to-red-50 
                   shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
      >
        <CardContent className="flex flex-col items-center justify-center">
          <div className="w-14 h-14 mb-4 rounded-full 
                          bg-gradient-to-tr from-pink-400 to-red-400 
                          flex items-center justify-center shadow-sm">
            <Gift className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-base font-semibold text-gray-800">{item}</h3>
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>

{/* Corporate Catalog */}
<TabsContent value="corporate" className="mt-12">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      "Corporate Milestones 🏆",
      "Team Building 🤝",
      "Achievement Awards 🥇",
      "Corporate Hampers 🎁",
      "Branded Merchandise 🧢",
      "Premium Collections 🌟",
      "Employee Recognition 🎫",
    ].map((item, index) => (
      <Card
        key={index}
        className="group p-5 text-center rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 
                   shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
      >
        <CardContent className="flex flex-col items-center justify-center">
          <div className="w-14 h-14 mb-4 rounded-full 
                          bg-gradient-to-tr from-indigo-500 to-blue-500 
                          flex items-center justify-center shadow-sm">
            <Calendar className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-base font-semibold text-gray-800">{item}</h3>
        </CardContent>
      </Card>
    ))}
  </div>
</TabsContent>

    </Tabs>
  </div>
</section>





      {/* Cross-Link Section */}
<section className="py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <Card className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl">
      <CardContent className="p-12">
        {/* Quote */}
        <p className="italic text-white/80 mb-6 text-lg font-serif">
          "Excellence is the result of thoughtful exploration and discovery."
        </p>

        <h3 className="text-4xl font-bold mb-4 tracking-tight font-sans text-white">
          Unlock Exclusive Experiences
        </h3>
        <p className="text-lg text-white/90 mb-8 font-sans">
          Explore our curated selection of services and premium offerings designed to inspire and delight. Discover more with our handpicked experiences.
        </p>
<Button
  size="lg"
  className="relative text-lg px-12 py-3 font-semibold rounded-full flex items-center justify-center mx-auto
             bg-gradient-to-r from-teal-400 to-emerald-500 text-white
             shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300
             ring-1 ring-white/20 hover:ring-white/40"
>
  <ExternalLink className="mr-2 h-5 w-5" />
  Explore Now
</Button>
      </CardContent>
    </Card>
  </div>
</section>






      {/* Contact Section */}
<footer id="contact" className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Company Info */}
      <div>
        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
          Inspire Nest
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
            <a
              href="https://www.google.com/maps/search/100ft+Road,+SRS+Building,+Hosur+635109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-gray-400 transition-colors"
            >
              100ft Road, SRS Building<br />
              Hosur – 635109
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-gray-400" />
            <a
              href="tel:+919514774611"
              className="text-white/90 hover:text-gray-400 transition-colors"
            >
              +91 9514774611
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <a
              href="mailto:support@inspire-nest.com"
              className="text-white/90 hover:text-gray-400 transition-colors"
            >
              support@inspire-nest.com
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
        <div className="space-y-3">
          {["Home", "Purpose", "Why Trust Us", "Products", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => {
                const element = document.querySelector(`#${link.toLowerCase().replace(/\s+/g, "")}`);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block text-white/70 hover:text-gray-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div>
        <h4 className="text-lg font-semibold mb-6 text-white">Get Started</h4>
        <p className="text-white/70 mb-6">
          Ready to create unforgettable moments? Let's make your next celebration special.
        </p>
        <button
          onClick={() => {
            const catalogSection = document.querySelector("#products");
            catalogSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start Planning
        </button>
      </div>
    </div>

    <div className="border-t border-white/20 mt-12 pt-8 text-center">
      <p className="text-white/50">
        © 2025 Inspire Nest. All rights reserved.
      </p>
    </div>
  </div>
</footer>



    </div>
  );
};

export default LandingPage;