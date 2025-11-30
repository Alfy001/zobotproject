import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, getTrendingProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

interface FeaturedProductsProps {
  title?: string;
  subtitle?: string;
  type?: "featured" | "trending" | "new";
  showViewAll?: boolean;
}

const FeaturedProducts = ({
  title = "Featured Collection",
  subtitle = "Handpicked styles just for you",
  type = "featured",
  showViewAll = true,
}: FeaturedProductsProps) => {
  const products = type === "trending" ? getTrendingProducts() : getFeaturedProducts();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
              {subtitle}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {title}
            </h2>
          </div>
          {showViewAll && (
            <Link
              to="/products"
              className="inline-flex items-center gap-2 mt-4 md:mt-0 text-primary font-medium hover:underline"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
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

export default FeaturedProducts;
