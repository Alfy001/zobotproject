import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SaleBanner from "@/components/home/SaleBanner";
import TrendingSection from "@/components/home/TrendingSection";
import Features from "@/components/home/Features";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <SaleBanner />
      <TrendingSection />
      <Features />
    </Layout>
  );
};

export default Index;
