import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import product images
import smartToilet from "@/assets/products/smart-toilet.jpg";
import showerSystem from "@/assets/products/shower-system.jpg";
import solarHeater from "@/assets/products/solar-heater.jpg";
import bathroomBasin from "@/assets/products/bathroom-basin.jpg";
import spcFlooring from "@/assets/products/spc-flooring.jpg";
import electricBike from "@/assets/products/electric-bike.jpg";

const Home = () => {
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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Transform Your Space,
              <span className="block hero-text">Sustainably</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover innovative interior decor solutions that combine luxury functionality 
              with eco-friendly sustainability for a greener tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="btn-gradient glow-effect text-lg px-8 py-6">
                <Link to="/shop">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 hero-text">Why Choose Beulah?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the way in sustainable interior solutions with unmatched quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 hero-text">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our premium collection of sustainable interior solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              <Link to="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
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