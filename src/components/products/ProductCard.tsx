import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("product-card group block", className)}
    >
      {/* Image Container */}
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.discount && product.discount > 0 && (
            <span className="sale-badge">{product.discount}% OFF</span>
          )}
          {product.isNew && (
            <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm">
              New
            </span>
          )}
          {product.isTrending && (
            <span className="bg-foreground text-background px-2 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm">
              Trending
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add wishlist functionality
          }}
          className="absolute top-3 right-3 z-10 p-2 bg-card/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-medium text-foreground line-clamp-2 min-h-[2.5rem] mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-sm text-destructive font-medium">
                ({product.discount}% off)
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
