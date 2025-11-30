import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import { products, getNewArrivals, getTrendingProducts } from "@/data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const filterType = searchParams.get("filter") || "";

  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 1000000] as [number, number],
    rating: null as number | null,
    season: [] as string[],
  });
  const [sortBy, setSortBy] = useState("popularity");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply filter type
    if (filterType === "new") result = getNewArrivals();
    else if (filterType === "trending") result = getTrendingProducts();

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Rating filter
    if (filters.rating) {
      result = result.filter((p) => p.rating >= filters.rating!);
    }

    // Season filter
    if (filters.season.length > 0) {
      result = result.filter((p) => p.season && filters.season.includes(p.season));
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "latest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [filters, sortBy, searchQuery, filterType]);

  const pageTitle = filterType === "new" ? "New Arrivals" : filterType === "trending" ? "Trending Now" : searchQuery ? `Search: "${searchQuery}"` : "All Products";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">{pageTitle}</h1>
        <ProductFilters
          filters={filters}
          onFilterChange={setFilters}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalProducts={filteredProducts.length}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </Layout>
  );
};

export default Products;
