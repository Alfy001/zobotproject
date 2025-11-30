import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { getSaleProducts } from "@/data/products";

const Sale = () => {
  const products = getSaleProducts();

  return (
    <Layout>
      <div className="gradient-accent py-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-background mb-4">Season Sale</h1>
        <p className="text-background/90 text-lg">Up to 50% off on select items</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-muted-foreground mb-8">{products.length} products on sale</p>
        <ProductGrid products={products} />
      </div>
    </Layout>
  );
};

export default Sale;
