export const products = [
  {
    id: 1,
    name: "Organic Honey",
    price: 12.99,
    category: "Food & Beverages",
    description: "Pure, locally sourced organic honey from our partner beekeepers. Rich in antioxidants and perfect for tea, cooking, or enjoying by the spoonful.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 25,
    rating: 4.8,
    reviews: 42
  },
  {
    id: 2,
    name: "Artisan Sourdough Bread",
    price: 6.50,
    category: "Bakery",
    description: "Freshly baked sourdough bread made with traditional methods. Crispy crust, soft interior, and that perfect tangy flavor.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 15,
    rating: 4.9,
    reviews: 38
  },
  {
    id: 3,
    name: "Free-Range Eggs (Dozen)",
    price: 4.99,
    category: "Dairy & Eggs",
    description: "Farm-fresh eggs from free-range chickens. Rich, golden yolks and superior taste from chickens that roam freely.",
    image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 30,
    rating: 4.7,
    reviews: 67
  },
  {
    id: 4,
    name: "Handcrafted Ceramic Mug",
    price: 18.00,
    category: "Home & Kitchen",
    description: "Beautiful handcrafted ceramic mug by local artisans. Perfect for your morning coffee or afternoon tea. Each piece is unique.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 12,
    rating: 4.6,
    reviews: 23
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    category: "Clothing",
    description: "Comfortable, breathable organic cotton t-shirt. Ethically made with sustainable materials. Available in multiple colors.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 18,
    rating: 4.5,
    reviews: 91
  },
  {
    id: 6,
    name: "Lavender Soap Bar",
    price: 8.50,
    category: "Health & Beauty",
    description: "Natural lavender soap bar made with essential oils. Gentle on skin, relaxing scent, and completely chemical-free.",
    image: "https://masakali.shop/cdn/shop/files/MG_2023.jpg?v=1726043317",
    inStock: true,
    stockQuantity: 35,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 7,
    name: "Local Maple Syrup",
    price: 16.75,
    category: "Food & Beverages",
    description: "100% pure maple syrup tapped from local maple trees. Grade A Dark Robust, perfect for pancakes, waffles, and cooking.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 20,
    rating: 4.9,
    reviews: 74
  },
  {
    id: 8,
    name: "Succulent Plant Collection",
    price: 22.00,
    category: "Garden & Plants",
    description: "Beautiful collection of 3 assorted succulent plants in decorative pots. Low maintenance and perfect for indoor decoration.",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 14,
    rating: 4.4,
    reviews: 32
  },
  {
    id: 9,
    name: "Artisan Cheese Selection",
    price: 28.99,
    category: "Dairy & Eggs",
    description: "Curated selection of local artisan cheeses including aged cheddar, goat cheese, and herb-crusted gouda. Perfect for entertaining.",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 8,
    rating: 4.7,
    reviews: 45
  },
  {
    id: 10,
    name: "Reusable Bamboo Water Bottle",
    price: 19.95,
    category: "Home & Kitchen",
    description: "Eco-friendly bamboo water bottle with leak-proof design. Sustainable alternative to plastic bottles, keeps drinks cool.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop",
    inStock: false,
    stockQuantity: 0,
    rating: 4.3,
    reviews: 89
  },
  {
    id: 11,
    name: "Local Coffee Beans (1lb)",
    price: 14.50,
    category: "Food & Beverages",
    description: "Freshly roasted coffee beans from a local roastery. Medium roast with notes of chocolate and caramel. Ground to order.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 22,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 12,
    name: "Handwoven Scarf",
    price: 45.00,
    category: "Clothing",
    description: "Beautiful handwoven scarf made by local textile artists. Soft wool blend in earthy tones. Perfect accessory for any season.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&h=500&fit=crop",
    inStock: true,
    stockQuantity: 6,
    rating: 4.6,
    reviews: 28
  }
];

export const categories = [
  "All Categories",
  "Food & Beverages", 
  "Bakery",
  "Dairy & Eggs",
  "Home & Kitchen",
  "Clothing",
  "Health & Beauty",
  "Garden & Plants"
];

export const getProductsByCategory = (category) => {
  if (category === "All Categories") {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const searchProducts = (query) => {
  if (!query) return products;
  
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.rating >= 4.7).slice(0, 6);
};
