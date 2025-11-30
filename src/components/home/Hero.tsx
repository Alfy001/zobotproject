import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 opacity-0 animate-fade-up">
              New Season Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up stagger-1">
              Discover Your
              <span className="block text-gradient">Perfect Style</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up stagger-2">
              Explore our curated collection of designer fashion. From elegant wedding wear to casual essentials, find pieces that define your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up stagger-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-glow transition-all duration-300 group"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/sale"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View Sale
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border opacity-0 animate-fade-up stagger-4">
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Designer Brands</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-elegant opacity-0 animate-fade-up stagger-2">
                  <img
                    src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400&h=500&fit=crop"
                    alt="Wedding dress"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant opacity-0 animate-fade-up stagger-4">
                  <img
                    src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=300&fit=crop"
                    alt="Men's fashion"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-elegant opacity-0 animate-fade-up stagger-3">
                  <img
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=300&fit=crop"
                    alt="Women's fashion"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elegant opacity-0 animate-fade-up stagger-5">
                  <img
                    src="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop"
                    alt="Kids fashion"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-card p-4 rounded-2xl shadow-lg animate-bounce-subtle">
              <p className="text-sm font-medium text-muted-foreground">Up to</p>
              <p className="font-display text-2xl font-bold text-destructive">50% OFF</p>
              <p className="text-xs text-muted-foreground">on select items</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
