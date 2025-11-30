import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", pincode: "" });
  const formatPrice = (price: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.address) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setIsComplete(true);
    clearCart();
  };

  if (items.length === 0 && !isComplete) {
    navigate("/cart");
    return null;
  }

  if (isComplete) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">Thank you for your order. We'll send you a confirmation email shortly.</p>
          <button onClick={() => navigate("/products")} className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg">Continue Shopping</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-lg mb-4">Contact Information</h2>
              <div className="grid gap-4">
                <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                <input type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-lg mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                <textarea placeholder="Address *" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" rows={3} />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  <input type="text" placeholder="Pincode" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h2 className="font-semibold text-lg mb-4">Payment (Demo)</h2>
              <p className="text-muted-foreground text-sm">This is a demo checkout. No actual payment will be processed.</p>
            </div>
            <button type="submit" className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Place Order • {formatPrice(total)}</button>
          </form>
          <div className="bg-muted/50 p-6 rounded-xl h-fit">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <img src={item.product.image} alt={item.product.name} className="w-16 h-20 object-cover rounded-lg" />
                  <div className="flex-1"><p className="font-medium text-sm">{item.product.name}</p><p className="text-xs text-muted-foreground">{item.size} • {item.color} • Qty: {item.quantity}</p><p className="font-semibold text-sm mt-1">{formatPrice(item.product.price * item.quantity)}</p></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg pt-4 border-t border-border"><span>Total</span><span>{formatPrice(total)}</span></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
