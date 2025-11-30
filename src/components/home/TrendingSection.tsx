import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { getTrendingProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const TrendingSection = () => {
  const products = getTrendingProducts();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-primary mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium tracking-widest uppercase text-sm">
                What's Hot
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Trending Now
            </h2>
          </div>
          <Link
            to="/products?filter=trending"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-primary font-medium hover:underline"
          >
            View All Trending
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={product.id}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
