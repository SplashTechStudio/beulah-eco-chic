import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+234 817 116 6611</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>beulah247solution@gmail.com</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            Transform Your Space, Sustainably
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Beulah Logo" className="h-12 w-12 rounded-lg" />
            <div>
              <div className="text-2xl font-bold hero-text">BEULAH</div>
              <div className="text-xs text-muted-foreground">Technologies & Innovatives LTD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              About & Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="default" className="btn-gradient glow-effect">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About & Contact
              </Link>
              <Button asChild variant="default" className="btn-gradient mt-4">
                <Link to="/shop" onClick={() => setIsOpen(false)}>Shop Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;