import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";

type Product = {
  product_id: number | string;
  name?: string;
  description?: string;
  price?: number | string;
  image_url?: string | null;
  [k: string]: any;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [email, setEmail] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/server/fetch_products/products", { mode: "cors" });
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        if (!data || !Array.isArray(data.products)) {
          throw new Error("Unexpected product data");
        }
        // normalize comparison as strings
        const found = data.products.find((p: Product) => String(p.product_id) === String(id));
        setProduct(found || null);
      } catch (err) {
        console.error("Failed to load product:", err);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  const handlePlaceOrder = async () => {
    if (!email) {
      alert("Please enter your email to place the order.");
      return;
    }
    if (!product) {
      alert("Product not loaded. Please try again.");
      return;
    }

    setIsPlacingOrder(true);

    // build payload matching server expectation
    const payload = {
      product_id: Number(product.product_id),
      total: Number(product.price ?? 0),
      email: String(email).trim().toLowerCase(),
    };

    try {
      const response = await fetch("/server/buy_product/product_ordered", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      // always read body so we can show server message
      const text = await response.text().catch(() => null);
      let json: any = null;
      try { json = text ? JSON.parse(text) : null; } catch (e) { /* not json */ }

      if (!response.ok) {
        // prefer server-provided message if any
        const msg = (json && (json.error || json.message)) || text || `Server returned ${response.status}`;
        console.error("Order placement failed:", response.status, msg);
        alert("Failed to place order: " + msg);
        return;
      }

      // Success response (server returns order info)
      alert("Order placed successfully. Thank you!");
    } catch (err: any) {
      console.error("Order placement failed:", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl">Loading product details...</h1>
        </div>
      </Layout>
    );
  }

  const displayPrice = (() => {
    const p = Number(product.price ?? 0);
    try {
      return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(p);
    } catch {
      return `₹${p}`;
    }
  })();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {product.image_url ? (
            <img src={product.image_url} alt={product.name} className="w-64 h-64 object-cover mb-4" />
          ) : (
            <div className="w-64 h-64 bg-gray-100 mb-4 flex items-center justify-center">No image</div>
          )}

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">{displayPrice}</p>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded mb-4 w-full max-w-md"
          />

          <button
            onClick={handlePlaceOrder}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            disabled={isPlacingOrder}
          >
            {isPlacingOrder ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

