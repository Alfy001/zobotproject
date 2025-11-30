import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategory, categories } from "@/data/products";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find((c) => c.id === id);
  const products = getProductsByCategory(id || "");

  return (
    <Layout>
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={category?.image} alt={category?.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-background">{category?.name}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-muted-foreground mb-8">{products.length} products</p>
        <ProductGrid products={products} />
      </div>
    </Layout>
  );
};

export default Category;
