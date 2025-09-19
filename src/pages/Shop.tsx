import { useState } from "react";
import { ShoppingCart, Star, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all product images
import smartToilet from "@/assets/products/smart-toilet.jpg";
import showerSystem from "@/assets/products/shower-system.jpg";
import solarHeater from "@/assets/products/solar-heater.jpg";
import bathroomBasin from "@/assets/products/bathroom-basin.jpg";
import spcFlooring from "@/assets/products/spc-flooring.jpg";
import electricBike from "@/assets/products/electric-bike.jpg";
import wpcFlooring from "@/assets/products/wpc-flooring.jpg";
import waterFilter from "@/assets/products/water-filter.jpg";
import ledMirror from "@/assets/products/led-mirror.jpg";
import smartThermostat from "@/assets/products/smart-thermostat.jpg";
import kitchenFaucet from "@/assets/products/kitchen-faucet.jpg";
import bambooPanels from "@/assets/products/bamboo-panels.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Smart Toilet with LED Lighting",
      price: 450000,
      image: smartToilet,
      category: "Bathroom",
      rating: 4.9,
      description: "Ultra-modern smart toilet with LED lighting, automatic flushing, and bidet function",
      inStock: true
    },
    {
      id: 2,
      name: "Premium Rainfall Shower System",
      price: 320000,
      image: showerSystem,
      category: "Bathroom",
      rating: 4.8,
      description: "Digital control panel shower system with rainfall and massage functions",
      inStock: true
    },
    {
      id: 3,
      name: "Solar Water Heater 200L",
      price: 280000,
      image: solarHeater,
      category: "Sustainable Energy",
      rating: 4.7,
      description: "Eco-friendly solar water heating system with evacuated tube technology",
      inStock: true
    },
    {
      id: 4,
      name: "Luxury Bathroom Basin Set",
      price: 180000,
      image: bathroomBasin,
      category: "Bathroom",
      rating: 4.6,
      description: "Premium ceramic basin with modern faucet and marble countertop",
      inStock: true
    },
    {
      id: 5,
      name: "SPC Premium Flooring (per sqm)",
      price: 35000,
      image: spcFlooring,
      category: "Flooring",
      rating: 4.8,
      description: "Waterproof SPC flooring with authentic wood texture and lifetime warranty",
      inStock: true
    },
    {
      id: 6,
      name: "Electric Cargo Bike",
      price: 650000,
      image: electricBike,
      category: "Sustainable Transport",
      rating: 4.5,
      description: "High-capacity electric bike perfect for deliveries and urban transport",
      inStock: true
    },
    {
      id: 7,
      name: "WPC Composite Decking (per sqm)",
      price: 45000,
      image: wpcFlooring,
      category: "Flooring",
      rating: 4.7,
      description: "Weather-resistant composite decking with natural wood appearance",
      inStock: true
    },
    {
      id: 8,
      name: "Smart Water Filtration System",
      price: 250000,
      image: waterFilter,
      category: "Sustainable Equipment",
      rating: 4.9,
      description: "Advanced filtration with UV sterilization and smart monitoring",
      inStock: true
    },
    {
      id: 9,
      name: "LED Anti-Fog Bathroom Mirror",
      price: 120000,
      image: ledMirror,
      category: "Bathroom",
      rating: 4.6,
      description: "Backlit LED mirror with anti-fog technology and touch controls",
      inStock: true
    },
    {
      id: 10,
      name: "Smart Home Thermostat",
      price: 150000,
      image: smartThermostat,
      category: "Sustainable Equipment",
      rating: 4.8,
      description: "Energy-efficient smart thermostat with app control and scheduling",
      inStock: true
    },
    {
      id: 11,
      name: "Premium Kitchen Faucet",
      price: 110000,
      image: kitchenFaucet,
      category: "Kitchen",
      rating: 4.7,
      description: "Pull-out spray faucet with stainless steel finish and water-saving technology",
      inStock: true
    },
    {
      id: 12,
      name: "Eco-Friendly Bamboo Wall Panels (per sqm)",
      price: 25000,
      image: bambooPanels,
      category: "Sustainable Materials",
      rating: 4.5,
      description: "Sustainable bamboo panels for modern interior wall applications",
      inStock: true
    }
  ];

  const categories = ["all", "Bathroom", "Flooring", "Sustainable Energy", "Sustainable Equipment", "Sustainable Transport", "Kitchen", "Sustainable Materials"];

  const filteredProducts = products
    .filter(product => selectedCategory === "all" || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleAddToCart = (product: typeof products[0]) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    };
    addToCart(cartItem);
  };

  const handlePurchase = (product: typeof products[0]) => {
    // Initialize Paystack payment
    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: 'pk_test_371f62c844238132677c6f291d6414193ff14b06',
      email: 'customer@example.com', // In real app, get from user input
      amount: product.price * 100, // Paystack expects amount in kobo
      currency: 'NGN',
      callback: function(response: any) {
        toast.success(`Payment successful! Reference: ${response.reference}`);
        console.log('Payment successful:', response);
      },
      onClose: function() {
        toast.info('Payment cancelled');
      }
    });
    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Premium Products</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our complete collection of sustainable interior solutions and innovative products
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="card-gradient border-0 shadow-medium hover-lift overflow-hidden group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {product.category}
                  </Badge>
                  {product.inStock && (
                    <Badge className="absolute top-4 right-4 bg-success text-success-foreground">
                      In Stock
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ₦{product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="flex-1"
                      variant="outline"
                      disabled={!product.inStock}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    
                    <Button 
                      onClick={() => handlePurchase(product)}
                      className="flex-1 btn-gradient"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;