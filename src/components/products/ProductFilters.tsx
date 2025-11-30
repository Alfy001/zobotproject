import { useState } from "react";
import { ChevronDown, X, SlidersHorizontal } from "lucide-react";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  rating: number | null;
  season: string[];
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalProducts: number;
}

const ProductFilters = ({
  filters,
  onFilterChange,
  sortBy,
  onSortChange,
  totalProducts,
}: ProductFiltersProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>(["category", "price"]);

  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "latest", label: "What's New" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Customer Rating" },
  ];

  const seasons = ["Summer", "Winter", "Monsoon", "All Season"];

  const priceRanges = [
    { label: "Under ₹1,000", min: 0, max: 1000 },
    { label: "₹1,000 - ₹5,000", min: 1000, max: 5000 },
    { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
    { label: "₹10,000 - ₹25,000", min: 10000, max: 25000 },
    { label: "Above ₹25,000", min: 25000, max: 1000000 },
  ];

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const toggleCategory = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((c) => c !== categoryId)
      : [...filters.categories, categoryId];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const toggleSeason = (season: string) => {
    const newSeasons = filters.season.includes(season)
      ? filters.season.filter((s) => s !== season)
      : [...filters.season, season];
    onFilterChange({ ...filters, season: newSeasons });
  };

  const setPriceRange = (min: number, max: number) => {
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const setRating = (rating: number | null) => {
    onFilterChange({ ...filters, rating });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      priceRange: [0, 1000000],
      rating: null,
      season: [],
    });
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 1000000 ||
    filters.rating !== null ||
    filters.season.length > 0;

  return (
    <div className="mb-6">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-sm text-muted-foreground">
            {totalProducts} {totalProducts === 1 ? "product" : "products"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-muted-foreground">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {filters.categories.map((catId) => {
            const category = categories.find((c) => c.id === catId);
            return (
              <button
                key={catId}
                onClick={() => toggleCategory(catId)}
                className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors"
              >
                {category?.name}
                <X className="w-3 h-3" />
              </button>
            );
          })}
          {filters.season.map((season) => (
            <button
              key={season}
              onClick={() => toggleSeason(season)}
              className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors"
            >
              {season}
              <X className="w-3 h-3" />
            </button>
          ))}
          {(filters.priceRange[0] > 0 || filters.priceRange[1] < 1000000) && (
            <button
              onClick={() => setPriceRange(0, 1000000)}
              className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors"
            >
              Price range
              <X className="w-3 h-3" />
            </button>
          )}
          {filters.rating && (
            <button
              onClick={() => setRating(null)}
              className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs hover:bg-primary/20 transition-colors"
            >
              {filters.rating}+ stars
              <X className="w-3 h-3" />
            </button>
          )}
          <button
            onClick={clearAllFilters}
            className="text-xs text-destructive hover:underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Filter Panels */}
      <div
        className={cn(
          "lg:flex gap-8 border-t border-border pt-4",
          isFiltersOpen ? "block" : "hidden lg:flex"
        )}
      >
        {/* Category Filter */}
        <div className="flex-1 max-w-[200px]">
          <button
            onClick={() => toggleSection("category")}
            className="flex items-center justify-between w-full py-2 text-sm font-semibold"
          >
            Category
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                openSections.includes("category") && "rotate-180"
              )}
            />
          </button>
          {openSections.includes("category") && (
            <div className="space-y-2 mt-2">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.id)}
                    onChange={() => toggleCategory(category.id)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price Filter */}
        <div className="flex-1 max-w-[200px] mt-4 lg:mt-0">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full py-2 text-sm font-semibold"
          >
            Price
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                openSections.includes("price") && "rotate-180"
              )}
            />
          </button>
          {openSections.includes("price") && (
            <div className="space-y-2 mt-2">
              {priceRanges.map((range) => (
                <label
                  key={range.label}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    checked={
                      filters.priceRange[0] === range.min &&
                      filters.priceRange[1] === range.max
                    }
                    onChange={() => setPriceRange(range.min, range.max)}
                    className="w-4 h-4 border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="flex-1 max-w-[200px] mt-4 lg:mt-0">
          <button
            onClick={() => toggleSection("rating")}
            className="flex items-center justify-between w-full py-2 text-sm font-semibold"
          >
            Rating
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                openSections.includes("rating") && "rotate-180"
              )}
            />
          </button>
          {openSections.includes("rating") && (
            <div className="space-y-2 mt-2">
              {[4, 3, 2].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => setRating(rating)}
                    className="w-4 h-4 border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {rating}+ stars
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Season Filter */}
        <div className="flex-1 max-w-[200px] mt-4 lg:mt-0">
          <button
            onClick={() => toggleSection("season")}
            className="flex items-center justify-between w-full py-2 text-sm font-semibold"
          >
            Season
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                openSections.includes("season") && "rotate-180"
              )}
            />
          </button>
          {openSections.includes("season") && (
            <div className="space-y-2 mt-2">
              {seasons.map((season) => (
                <label
                  key={season}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.season.includes(season)}
                    onChange={() => toggleSeason(season)}
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {season}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
