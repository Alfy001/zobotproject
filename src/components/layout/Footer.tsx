import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
              Join Our Style Circle
            </h3>
            <p className="text-background/70 mb-6">
              Subscribe for exclusive offers, early access to sales, and style inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h2 className="font-display text-2xl font-bold">
                <span className="text-primary">Mode</span>
                <span className="text-background">luxe</span>
              </h2>
            </Link>
            <p className="text-background/70 text-sm mb-4">
              Your destination for curated fashion. Discover timeless pieces and contemporary styles.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?filter=new" className="text-background/70 hover:text-primary transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/category/women" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/category/men" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/category/kids" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-background mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/wedding" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Wedding
                </Link>
              </li>
              <li>
                <Link to="/category/festival" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Festival
                </Link>
              </li>
              <li>
                <Link to="/category/ethnic" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Ethnic Wear
                </Link>
              </li>
              <li>
                <Link to="/category/party" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Party Wear
                </Link>
              </li>
              <li>
                <Link to="/category/casual" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Casual
                </Link>
              </li>
              <li>
                <Link to="/category/seasonal" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Seasonal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hello@modeluxe.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2024 Modeluxe. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
