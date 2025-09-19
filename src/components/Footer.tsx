import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Beulah Logo" className="h-12 w-12 rounded-lg" />
              <div>
                <div className="text-2xl font-bold text-white">BEULAH</div>
                <div className="text-sm text-gray-300">Technologies & Innovatives LTD</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your partner in innovative interior decor solutions for a sustainable future. 
              Creating beautiful spaces that care for the planet, one project at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm">
                  Warehouse 1, Korstin Muller Complex,<br />
                  Idu Industrial Area, Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <div>+234 902 552 9623</div>
                  <div>+234 817 116 6611</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">beulah247solution@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Beulah Technologies & Innovatives LTD. All rights reserved.</p>
          <p className="mt-2 italic text-primary">"Transform Your Space, Sustainably"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;