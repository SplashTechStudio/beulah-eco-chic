import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useCallback } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";

// Import product images
import smartToilet from "@/assets/products/smart-toilet.jpg";
import showerSystem from "@/assets/products/shower-system.jpg";
import solarHeater from "@/assets/products/solar-heater.jpg";
import bathroomBasin from "@/assets/products/bathroom-basin.jpg";
import spcFlooring from "@/assets/products/spc-flooring.jpg";
import electricBike from "@/assets/products/electric-bike.jpg";

// Import hero background images
import showerScene from "@/assets/hero/shower-scene.jpg";
import basinScene from "@/assets/hero/basin-scene.jpg";
import bikeScene from "@/assets/hero/bike-scene.jpg";
import solarScene from "@/assets/hero/solar-scene.jpg";

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const heroSlides = [
    {
      image: showerScene,
      title: "Premium Shower Systems",
      subtitle: "Experience luxury with water-efficient technology"
    },
    {
      image: basinScene,
      title: "Luxury Bathroom Basins",
      subtitle: "Modern design meets functional elegance"
    },
    {
      image: bikeScene,
      title: "Electric Cargo Bikes",
      subtitle: "Sustainable transport for the future"
    },
    {
      image: solarScene,
      title: "Solar Water Heaters",
      subtitle: "Harness the sun's energy for your home"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const featuredProducts = [
    {
      name: "Smart Toilet System",
      image: smartToilet,
      price: "₦450,000",
      category: "Bathroom"
    },
    {
      name: "Premium Shower System",
      image: showerSystem,
      price: "₦320,000",
      category: "Bathroom"
    },
    {
      name: "Solar Water Heater",
      image: solarHeater,
      price: "₦280,000",
      category: "Sustainable Energy"
    },
    {
      name: "Luxury Bathroom Basin",
      image: bathroomBasin,
      price: "₦180,000",
      category: "Bathroom"
    },
    {
      name: "SPC Premium Flooring",
      image: spcFlooring,
      price: "₦35,000/sqm",
      category: "Flooring"
    },
    {
      name: "Electric Cargo Bike",
      image: electricBike,
      price: "₦650,000",
      category: "Sustainable Transport"
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-success" />,
      title: "Eco-Friendly",
      description: "100% sustainable materials and energy-efficient solutions"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Quality",
      description: "High-grade materials with international quality standards"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Installation",
      description: "Professional installation and after-sales support"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen h-[100vh] overflow-hidden">
        <Carousel setApi={setApi} className="h-screen">
          <CarouselContent className="h-screen -ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full pl-0 basis-full">
                <div className="relative h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-6 lg:px-12">
                      <div className="max-w-4xl animate-fade-in">
                        <div className="text-sm uppercase tracking-wider text-primary-glow mb-4 font-semibold">
                          {slide.subtitle}
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                          Transform Your Space,
                          <span className="block hero-text mt-2">{slide.title}</span>
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
                          Discover innovative interior decor solutions that combine luxury functionality 
                          with eco-friendly sustainability for a greener tomorrow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                          <Button asChild size="lg" className="btn-gradient glow-effect text-lg px-10 py-7 shadow-strong">
                            <Link to="/shop">
                              Explore Products <ArrowRight className="ml-3 h-5 w-5" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="glass-card text-white bg-white/30 border-white/40 hover:bg-white/10 text-lg px-10 py-7">
                            <Link to="/about">Learn More</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? 'bg-primary ' : 'bg-white/50 hover:bg-white/70'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-muted/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 hero-text">Why Choose Beulah?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the way in sustainable interior solutions with unmatched quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-gradient border-0 shadow-medium hover-lift text-center p-8">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 hero-text">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our premium collection of sustainable interior solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="card-gradient border-0 shadow-medium hover-lift overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="btn-gradient">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-bg text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of satisfied customers who have chosen sustainable, 
              innovative solutions for their homes and businesses.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/shop">
                Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;