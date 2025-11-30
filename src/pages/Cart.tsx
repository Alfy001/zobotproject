import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal, totalDiscount, total } = useCart();
  const formatPrice = (price: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold mb-8">Shopping Bag</h1>
        {items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-xl mb-4">Your bag is empty</p>
            <Link to="/products" className="text-primary underline">Start Shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, i) => (
                <div key={`${item.product.id}-${item.size}-${item.color}-${i}`} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                  <Link to={`/product/${item.product.id}`} className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/product/${item.product.id}`} className="font-medium hover:text-primary">{item.product.name}</Link>
                    <p className="text-sm text-muted-foreground">{item.size} • {item.color}</p>
                    <p className="font-semibold mt-2">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-lg">
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)} className="p-2"><Minus className="w-4 h-4" /></button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)} className="p-2"><Plus className="w-4 h-4" /></button>
                      </div>
                      <button onClick={() => removeItem(item.product.id, item.size, item.color)} className="text-destructive"><Trash2 className="w-5 h-5" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-card p-6 rounded-xl border border-border h-fit">
              <h2 className="font-display text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                {totalDiscount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-{formatPrice(totalDiscount)}</span></div>}
                <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">Free</span></div>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4 border-t border-border mb-6"><span>Total</span><span>{formatPrice(total)}</span></div>
              <Link to="/checkout" className="block w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-center hover:bg-primary/90 transition-colors">Proceed to Checkout</Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
