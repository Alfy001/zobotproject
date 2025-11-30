export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
  category: string;
  subcategory?: string;
  season?: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
  isNew?: boolean;
  isTrending?: boolean;
}

export const categories = [
  { id: "wedding", name: "Wedding Dresses", image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop" },
  { id: "festival", name: "Festival Wear", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop" },
  { id: "seasonal", name: "Seasonal Collection", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop" },
  { id: "casual", name: "Casual Wear", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop" },
  { id: "ethnic", name: "Ethnic Wear", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop" },
  { id: "party", name: "Party Wear", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop" },
  { id: "kids", name: "Kids Fashion", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop" },
  { id: "men", name: "Men's Fashion", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop" },
  { id: "women", name: "Women's Fashion", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop" },
];

export const products: Product[] = [
  // Wedding Dresses
  {
    id: "wed-001",
    name: "Ivory Lace Bridal Gown",
    brand: "Vera Wang",
    price: 45999,
    originalPrice: 59999,
    discount: 23,
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
    ],
    category: "wedding",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "White", "Champagne"],
    rating: 4.8,
    reviews: 234,
    description: "Stunning ivory lace bridal gown with intricate detailing. Features a sweetheart neckline and cathedral train.",
    tags: ["bridal", "lace", "elegant"],
    isNew: true,
  },
  {
    id: "wed-002",
    name: "Elegant Mermaid Wedding Dress",
    brand: "Pronovias",
    price: 52999,
    originalPrice: 65000,
    discount: 18,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=800&fit=crop",
    ],
    category: "wedding",
    sizes: ["S", "M", "L"],
    colors: ["White", "Off-White"],
    rating: 4.9,
    reviews: 189,
    description: "Sophisticated mermaid silhouette wedding dress with delicate beading and a dramatic tulle train.",
    tags: ["bridal", "mermaid", "beaded"],
    isTrending: true,
  },
  {
    id: "wed-003",
    name: "Classic A-Line Bridal Dress",
    brand: "Monique Lhuillier",
    price: 38999,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=800&fit=crop",
    ],
    category: "wedding",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Ivory"],
    rating: 4.7,
    reviews: 156,
    description: "Timeless A-line wedding dress with chapel length train. Perfect for the modern bride.",
    tags: ["bridal", "classic", "a-line"],
  },

  // Festival Dresses
  {
    id: "fest-001",
    name: "Bohemian Maxi Dress",
    brand: "Free People",
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
    ],
    category: "festival",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Rust", "Teal", "Mustard"],
    rating: 4.5,
    reviews: 342,
    description: "Flowy bohemian maxi dress perfect for music festivals. Features beautiful floral prints and tassel details.",
    tags: ["boho", "maxi", "festival"],
    isTrending: true,
  },
  {
    id: "fest-002",
    name: "Sequin Festival Top",
    brand: "ASOS",
    price: 2499,
    originalPrice: 3499,
    discount: 29,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    ],
    category: "festival",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Silver", "Rainbow"],
    rating: 4.3,
    reviews: 567,
    description: "Eye-catching sequin top that catches the light. Perfect for festival nights.",
    tags: ["sequin", "sparkle", "festival"],
  },
  {
    id: "fest-003",
    name: "Printed Harem Pants",
    brand: "Anthropologie",
    price: 3299,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    ],
    category: "festival",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Multi", "Blue", "Orange"],
    rating: 4.4,
    reviews: 234,
    description: "Comfortable harem pants with vibrant ethnic prints. Elastic waistband for easy wear.",
    tags: ["harem", "printed", "comfortable"],
  },

  // Seasonal - Summer
  {
    id: "sum-001",
    name: "Floral Sundress",
    brand: "Reformation",
    price: 5499,
    originalPrice: 7999,
    discount: 31,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=800&fit=crop",
    ],
    category: "seasonal",
    subcategory: "summer",
    season: "Summer",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Floral Print", "Yellow", "Pink"],
    rating: 4.6,
    reviews: 423,
    description: "Light and breezy floral sundress perfect for summer days. Features adjustable straps and a flattering fit.",
    tags: ["summer", "floral", "sundress"],
    isNew: true,
  },
  {
    id: "sum-002",
    name: "Linen Beach Dress",
    brand: "Faithfull The Brand",
    price: 6999,
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&h=800&fit=crop",
    ],
    category: "seasonal",
    subcategory: "summer",
    season: "Summer",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Navy", "Terracotta"],
    rating: 4.7,
    reviews: 312,
    description: "Premium linen beach dress with relaxed silhouette. Perfect for beach vacations and resort wear.",
    tags: ["linen", "beach", "summer"],
  },

  // Winter
  {
    id: "win-001",
    name: "Velvet Evening Gown",
    brand: "Tadashi Shoji",
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    image: "https://images.unsplash.com/photo-1518331483807-f6adb0e1ad23?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518331483807-f6adb0e1ad23?w=600&h=800&fit=crop",
    ],
    category: "seasonal",
    subcategory: "winter",
    season: "Winter",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Burgundy", "Emerald", "Navy"],
    rating: 4.8,
    reviews: 178,
    description: "Luxurious velvet evening gown with a dramatic neckline. Perfect for winter galas and formal events.",
    tags: ["velvet", "evening", "winter"],
    isTrending: true,
  },

  // Casual Wear
  {
    id: "cas-001",
    name: "Classic White T-Shirt Dress",
    brand: "Everlane",
    price: 2999,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
    ],
    category: "casual",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    rating: 4.5,
    reviews: 876,
    description: "Essential cotton t-shirt dress for everyday comfort. Relaxed fit with a classic crew neck.",
    tags: ["casual", "cotton", "everyday"],
  },
  {
    id: "cas-002",
    name: "Denim Midi Skirt",
    brand: "Levi's",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=800&fit=crop",
    ],
    category: "casual",
    sizes: ["24", "26", "28", "30", "32"],
    colors: ["Light Wash", "Medium Wash", "Dark Wash"],
    rating: 4.4,
    reviews: 543,
    description: "Versatile denim midi skirt with a flattering A-line silhouette. Features front button closure.",
    tags: ["denim", "midi", "casual"],
  },
  {
    id: "cas-003",
    name: "Oversized Knit Sweater",
    brand: "& Other Stories",
    price: 5499,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
    ],
    category: "casual",
    sizes: ["XS/S", "M/L"],
    colors: ["Cream", "Camel", "Charcoal"],
    rating: 4.6,
    reviews: 389,
    description: "Cozy oversized knit sweater in a soft wool blend. Perfect for layering.",
    tags: ["knit", "cozy", "oversized"],
    isNew: true,
  },

  // Ethnic Wear
  {
    id: "eth-001",
    name: "Embroidered Anarkali Suit",
    brand: "Sabyasachi",
    price: 35999,
    originalPrice: 45999,
    discount: 22,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=800&fit=crop",
    ],
    category: "ethnic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Royal Blue", "Maroon", "Emerald"],
    rating: 4.9,
    reviews: 267,
    description: "Exquisite hand-embroidered Anarkali suit with intricate zardozi work. Includes dupatta.",
    tags: ["anarkali", "embroidered", "ethnic"],
    isTrending: true,
  },
  {
    id: "eth-002",
    name: "Silk Banarasi Saree",
    brand: "Raw Mango",
    price: 28999,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=800&fit=crop",
    ],
    category: "ethnic",
    sizes: ["Free Size"],
    colors: ["Red & Gold", "Pink & Silver", "Green & Gold"],
    rating: 4.8,
    reviews: 198,
    description: "Handwoven Banarasi silk saree with traditional motifs. Includes matching blouse piece.",
    tags: ["saree", "silk", "banarasi"],
  },
  {
    id: "eth-003",
    name: "Designer Lehenga Choli",
    brand: "Manish Malhotra",
    price: 75999,
    originalPrice: 95999,
    discount: 21,
    image: "https://images.unsplash.com/photo-1519657814959-9b93e3d1e9d5?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519657814959-9b93e3d1e9d5?w=600&h=800&fit=crop",
    ],
    category: "ethnic",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Pink", "Turquoise"],
    rating: 4.9,
    reviews: 145,
    description: "Stunning designer lehenga with heavy embroidery and sequin work. Complete set with blouse and dupatta.",
    tags: ["lehenga", "designer", "wedding"],
    isNew: true,
  },

  // Party Wear
  {
    id: "par-001",
    name: "Sequin Mini Dress",
    brand: "Revolve",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop",
    ],
    category: "party",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Gold", "Silver", "Black"],
    rating: 4.6,
    reviews: 456,
    description: "Show-stopping sequin mini dress that catches every light. Perfect for parties and special nights out.",
    tags: ["sequin", "party", "mini"],
    isTrending: true,
  },
  {
    id: "par-002",
    name: "Satin Slip Dress",
    brand: "Reformation",
    price: 7499,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    ],
    category: "party",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Champagne", "Black", "Emerald"],
    rating: 4.7,
    reviews: 389,
    description: "Elegant satin slip dress with a cowl neckline. Effortlessly chic for any occasion.",
    tags: ["satin", "slip", "elegant"],
  },
  {
    id: "par-003",
    name: "Feather Trim Blazer Dress",
    brand: "Zara",
    price: 9999,
    originalPrice: 13999,
    discount: 29,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop",
    ],
    category: "party",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "White", "Pink"],
    rating: 4.5,
    reviews: 278,
    description: "Statement blazer dress with luxurious feather trim. Bold and fashion-forward.",
    tags: ["blazer", "feather", "statement"],
    isNew: true,
  },

  // Kids Fashion
  {
    id: "kid-001",
    name: "Princess Tulle Dress",
    brand: "Monsoon",
    price: 3999,
    originalPrice: 5499,
    discount: 27,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
    ],
    category: "kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Pink", "Lavender", "Mint"],
    rating: 4.8,
    reviews: 567,
    description: "Magical princess tulle dress with sparkly bodice. Perfect for special occasions.",
    tags: ["princess", "tulle", "party"],
    isTrending: true,
  },
  {
    id: "kid-002",
    name: "Boys Formal Suit Set",
    brand: "H&M Kids",
    price: 4999,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop",
    ],
    category: "kids",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Navy", "Grey", "Black"],
    rating: 4.6,
    reviews: 234,
    description: "Smart formal suit set including blazer, trousers, and vest. Perfect for weddings and events.",
    tags: ["formal", "suit", "boys"],
  },
  {
    id: "kid-003",
    name: "Floral Cotton Dress",
    brand: "Zara Kids",
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
    ],
    category: "kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: ["Blue Floral", "Pink Floral", "Yellow"],
    rating: 4.7,
    reviews: 456,
    description: "Adorable cotton dress with delicate floral print. Comfortable for everyday wear.",
    tags: ["cotton", "floral", "everyday"],
  },

  // Men's Fashion
  {
    id: "men-001",
    name: "Slim Fit Navy Blazer",
    brand: "Hugo Boss",
    price: 24999,
    originalPrice: 32999,
    discount: 24,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=800&fit=crop",
    ],
    category: "men",
    sizes: ["36", "38", "40", "42", "44"],
    colors: ["Navy", "Charcoal", "Black"],
    rating: 4.7,
    reviews: 345,
    description: "Impeccably tailored slim fit blazer in premium wool. A wardrobe essential for the modern man.",
    tags: ["blazer", "formal", "slim-fit"],
    isTrending: true,
  },
  {
    id: "men-002",
    name: "Premium Cotton Shirt",
    brand: "Ralph Lauren",
    price: 6999,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
    ],
    category: "men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink"],
    rating: 4.6,
    reviews: 567,
    description: "Classic cotton dress shirt with subtle texture. Perfect for office and formal occasions.",
    tags: ["shirt", "cotton", "formal"],
  },
  {
    id: "men-003",
    name: "Designer Sherwani",
    brand: "Manyavar",
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    ],
    category: "men",
    sizes: ["36", "38", "40", "42", "44"],
    colors: ["Ivory", "Gold", "Maroon"],
    rating: 4.8,
    reviews: 234,
    description: "Regal designer sherwani with intricate embroidery. Perfect for weddings and festive occasions.",
    tags: ["sherwani", "ethnic", "wedding"],
    isNew: true,
  },

  // Women's Fashion
  {
    id: "wom-001",
    name: "Tailored Wool Coat",
    brand: "Max Mara",
    price: 45999,
    originalPrice: 59999,
    discount: 23,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop",
    ],
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Black", "Grey"],
    rating: 4.9,
    reviews: 189,
    description: "Timeless tailored wool coat with classic silhouette. Investment piece for your wardrobe.",
    tags: ["coat", "wool", "classic"],
    isTrending: true,
  },
  {
    id: "wom-002",
    name: "Silk Blouse",
    brand: "Equipment",
    price: 12999,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=800&fit=crop",
    ],
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Black", "Blush"],
    rating: 4.7,
    reviews: 345,
    description: "Luxurious silk blouse with relaxed fit. Versatile for work and weekend.",
    tags: ["silk", "blouse", "elegant"],
  },
  {
    id: "wom-003",
    name: "High-Waisted Trousers",
    brand: "Theory",
    price: 8999,
    originalPrice: 11999,
    discount: 25,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    ],
    category: "women",
    sizes: ["0", "2", "4", "6", "8", "10", "12"],
    colors: ["Black", "Navy", "Tan"],
    rating: 4.6,
    reviews: 456,
    description: "Flattering high-waisted trousers with wide leg. Polished look for the office.",
    tags: ["trousers", "high-waisted", "office"],
    isNew: true,
  },
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getSaleProducts = (): Product[] => {
  return products.filter((product) => product.discount && product.discount > 0);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((product) => product.isNew);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter((product) => product.isTrending);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 8);
};
