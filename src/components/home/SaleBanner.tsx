import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const SaleBanner = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-accent">
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-background" />
              <span className="text-sm font-medium text-background">Limited Time Offer</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
              Season Sale
            </h2>
            <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Up to <span className="font-bold text-2xl">50% OFF</span> on select styles. Don't miss out on our biggest sale of the year.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sale"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-primary font-semibold rounded-full hover:bg-background/90 transition-colors group"
              >
                Shop Sale
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-background/50 text-background font-semibold rounded-full hover:bg-background/10 transition-colors"
              >
                View All Products
              </Link>
            </div>

            {/* Countdown (Static for demo) */}
            <div className="flex justify-center gap-4 mt-10">
              {[
                { value: "02", label: "Days" },
                { value: "15", label: "Hours" },
                { value: "33", label: "Minutes" },
                { value: "47", label: "Seconds" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-background/20 backdrop-blur-sm rounded-lg mb-2">
                    <span className="font-display text-xl md:text-2xl font-bold text-background">
                      {item.value}
                    </span>
                  </div>
                  <span className="text-xs text-background/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
