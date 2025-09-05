import React from "react";
import Slider from "react-slick";
import {
  ShieldCheck,
  Star,
  Heart,
  Gift,
  Award,
  Users,
  Calendar,
  Smile,
  Cake,
  Flower,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Custom Arrows with extra padding
const NextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-16 transform -translate-y-1/2 z-10 cursor-pointer text-primary bg-white/80 hover:bg-white rounded-full p-5 shadow-lg"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6" />
  </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-16 transform -translate-y-1/2 z-10 cursor-pointer text-primary bg-white/80 hover:bg-white rounded-full p-5 shadow-lg"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6" />
  </div>
);

// Old trust points with icons
const trustPointsOld = [
  { text: "Driven by Passion: We work with heart and commitment.", icon: Heart },
  { text: "Uncompromised Service & Quality: Your satisfaction is our highest priority, every time.", icon: Star },
  { text: "Data Privacy Assured: Fully GDPR compliant, your information safe and secure.", icon: ShieldCheck },
  { text: "FSSAI-Certified Partners: Partnering only with licensed suppliers for safety.", icon: Award },
  { text: "Quality You Can Count On: Every gift is handpicked and delivered with care, on time.", icon: Gift },
  { text: "Recognized Industry Affiliations: Trusted member of top industry networks.", icon: Users },
];

// New trust points with icons
const trustPointsNew = [
  { text: "Missed dates", icon: Calendar },
  { text: "Wanna Surprise", icon: Smile },
  { text: "Emotional", icon: Heart },
  { text: "Care & Trust", icon: Users },
  { text: "Inspire Joy", icon: Star },
  { text: "Recognize", icon: Award },
  { text: "Celebrate", icon: Cake },
  { text: "Quality", icon: Star },
  { text: "Gift", icon: Gift },
  { text: "Reputation", icon: ShieldCheck },
  { text: "Maintain Relationship", icon: Users },
  { text: "Personal Celebrations", icon: Flower },
  { text: "Forgot Occasion", icon: Mail },
  { text: "Strengthen Bond", icon: Heart },
];

const TrustSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const renderSlider = (points: { text: string; icon: React.ElementType }[]) => (
    <Slider {...settings}>
      {points.map((point, index) => {
        const Icon = point.icon;
        return (
          <div key={index} className="px-4">
            <div className="flex flex-col items-center justify-center gap-4 p-12 bg-background/50 rounded-3xl shadow-md transition-all duration-300 transform cursor-pointer h-[220px] w-full text-center
              hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
            >
              <Icon className="w-10 h-10 text-primary" />
              <p className="text-foreground text-base md:text-lg px-4">{point.text}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );

  return (
    <section className="py-16 bg-accent/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* First Row */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Our Trust Points
        </h2>
        {renderSlider(trustPointsOld)}

        {/* Second Row */}
        <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-12 text-foreground">
          Why People Trust Us
        </h2>
        {renderSlider(trustPointsNew)}
      </div>
    </section>
  );
};

export default TrustSection;
