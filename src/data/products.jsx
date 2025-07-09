const products = [
  // Existing 10 refined
  {
    id: 1,
    title: "Classic Leather Wallet",
    description: "Handcrafted genuine leather wallet, slim and durable.",
    category: "Accessories",
    price: 45.99,
    originalPrice: 60.0,
    image:
      "https://images.unsplash.com/photo-1697267322976-5c3d05d07d96?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Bluetooth Over‑Ear Headphones",
    description: "Noise‑cancelling headphones with 20‑hour battery life.",
    category: "Electronics",
    price: 89.99,
    originalPrice: 120.0,
    image:
      "https://images.unsplash.com/photo-1641576039236-4c9b4cf846b0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Smart Fitness Tracker",
    description: "Health‑monitoring band with heart‑rate and sleep tracking.",
    category: "Electronics",
    price: 29.5,
    originalPrice: 48.0,
    image:
      "https://images.unsplash.com/photo-1589308454676-06c69786e24c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Casual Cotton T‑Shirt",
    description: "Soft and breathable daily‑wear cotton tee.",
    category: "Fashion",
    price: 19.99,
    originalPrice: 35.0,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "RGB Gaming Mouse",
    description: "High‑precision mouse with customizable DPI and lights.",
    category: "Electronics",
    price: 25.49,
    originalPrice: 38.0,
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  {
    id: 6,
    title: "Men’s Running Shoes",
    description: "Lightweight joggers with cushioned sole.",
    category: "Fashion",
    price: 59.0,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1606890657878-16393aa45766?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Qi Wireless Charger Pad",
    description: "Fast charging pad compatible with Qi‑enabled devices.",
    category: "Electronics",
    price: 18.99,
    originalPrice: 30.0,
    image:
      "https://images.unsplash.com/photo-1591084336506-9cdca26b4c14?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Women’s Leather Shoulder Bag",
    description: "Elegant leather handbag for all occasions.",
    category: "Accessories",
    price: 120.0,
    originalPrice: 155.0,
    image:
      "https://images.unsplash.com/photo-1569097941209-aca563eb07d8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "LED Desk Lamp",
    description: "Energy‑efficient lamp with adjustable brightness.",
    category: "Home",
    price: 35.0,
    originalPrice: 48.0,
    image:
      "https://images.unsplash.com/photo-1612813434847-b01fffea46ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "Portable Bluetooth Speaker",
    description: "Compact waterproof speaker with powerful sound.",
    category: "Electronics",
    price: 49.99,
    originalPrice: 70.0,
    image:
      "https://images.unsplash.com/photo-1572183717150-0ca8073a2457?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // New additional 30 items
  {
    id: 11,
    title: "Stainless Steel Travel Mug",
    description: "Keeps drinks hot or cold for hours.",
    category: "Home",
    price: 22.49,
    originalPrice: 30.0,
    image:
      "https://images.unsplash.com/photo-1599996325261-4ee2c679a252?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    title: "Wireless Earbuds",
    description: "True wireless earbuds with charging case.",
    category: "Electronics",
    price: 59.99,
    originalPrice: 85.0,
    image:
      "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    title: "Ceramic Coffee Set",
    description: "Stylish set with mug and saucer.",
    category: "Home",
    price: 29.99,
    originalPrice: 45.0,
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 14,
    title: "Leather Belt",
    description: "Durable genuine leather belt with metal buckle.",
    category: "Accessories",
    price: 27.5,
    originalPrice: 40.0,
    image:
      "https://plus.unsplash.com/premium_photo-1663100940306-d9d419fe7cfa?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    title: "Women’s Sunglasses",
    description: "UV‑protected stylish shades.",
    category: "Accessories",
    price: 34.99,
    originalPrice: 50.0,
    image:
      "https://images.unsplash.com/photo-1623071279305-74260546bf66?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    title: "Cotton Bed Sheet Set",
    description: "Soft and breathable king‑size sheet set.",
    category: "Home",
    price: 49.99,
    originalPrice: 70.0,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 20,
    title: "Floor Standing Lamp",
    description: "Modern LED lamp with touch dimmer.",
    category: "Home",
    price: 69.99,
    originalPrice: 95.0,
    image:
      "https://images.unsplash.com/photo-1709313817884-19b66a05d5a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 23,
    title: "Blender with Glass Jar",
    description: "Multi‑speed kitchen blender, 1.5 L jar.",
    category: "Home",
    price: 49.5,
    originalPrice: 68.0,
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 24,
    title: "Wireless Keyboard & Mouse",
    description: "Combo with ergonomic design and long battery life.",
    category: "Electronics",
    price: 34.99,
    originalPrice: 50.0,
    image:
      "https://images.unsplash.com/photo-1656946184681-d876ddb938ff?q=80&w=819&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 25,
    title: "4K Computer Monitor",
    description: "27‑inch 4K UHD IPS display with HDMI/DisplayPort.",
    category: "Electronics",
    price: 279.99,
    originalPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 27,
    title: "Stainless Steel Knife Set",
    description: "10‑piece kitchen knife block set.",
    category: "Home",
    price: 59.99,
    originalPrice: 80.0,
    image:
      "https://images.unsplash.com/photo-1668415326063-ab0a3648d53a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 28,
    title: "Cordless Vacuum Cleaner",
    description: "Lightweight stick vacuum with HEPA filter.",
    category: "Home",
    price: 129.99,
    originalPrice: 160.0,
    image:
      "https://plus.unsplash.com/premium_photo-1664910661284-e404395967c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 29,
    title: "Action Camera 4K",
    description: "Waterproof sports cam with free accessories kit.",
    category: "Electronics",
    price: 99.99,
    originalPrice: 139.99,
    image:
      "https://images.unsplash.com/photo-1690176483702-7ee397871388?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 30,
    title: "Smart LED Bulb",
    description: "Color‑changing Wi‑Fi bulb controllable via app.",
    category: "Home",
    price: 14.99,
    originalPrice: 20.0,
    image:
      "https://images.unsplash.com/photo-1581872553874-d06e371fef2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 31,
    title: "Pocket Notebook Set",
    description: "Set of 3 pocket‑size ruled notebooks.",
    category: "Office",
    price: 9.99,
    originalPrice: 15.0,
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 32,
    title: "Ballpoint Pen 10‑Pack",
    description: "Smooth writing retractable pens.",
    category: "Office",
    price: 6.99,
    originalPrice: 10.0,
    image:
      "https://images.unsplash.com/photo-1701672888237-3251ba9b3732?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 33,
    title: "Office Desk Organizer",
    description: "Multi‑compartment wood desktop organizer.",
    category: "Office",
    price: 24.99,
    originalPrice: 35.0,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 34,
    title: 'Laptop Sleeve 15"',
    description: "Neoprene padded sleeve for 15‑inch laptops.",
    category: "Accessories",
    price: 19.99,
    originalPrice: 28.0,
    image:
      "https://images.unsplash.com/photo-1738494610263-4e27d9d4e201?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 35,
    title: "Leather Card Holder",
    description: "Slim wallet for cards and bills.",
    category: "Accessories",
    price: 17.99,
    originalPrice: 25.0,
    image:
      "https://images.unsplash.com/photo-1602638034367-26c55969967c?q=80&w=1153&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 36,
    title: "Silicone Phone Case",
    description: "Shock‑absorbent protective case for smartphones.",
    category: "Fashion",
    price: 12.99,
    originalPrice: 18.0,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 37,
    title: "Travel Backpack 20 L",
    description: "Water‑resistant daypack with multiple pockets.",
    category: "Fashion",
    price: 45.0,
    originalPrice: 60.0,
    image:
      "https://images.unsplash.com/photo-1604712937118-0835edf8130a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 39,
    title: "Bamboo Cutting Board",
    description: "Eco‑friendly reversible wood cutting board.",
    category: "Home",
    price: 21.99,
    originalPrice: 30.0,
    image:
      "https://plus.unsplash.com/premium_photo-1736505437580-7d2dfc89994e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 40,
    title: "USB‑C Fast Charger",
    description: "30 W rapid charger with USB‑C power delivery.",
    category: "Electronics",
    price: 25.99,
    originalPrice: 35.0,
    image:
      "https://images.unsplash.com/photo-1588422273146-c799447ccb81?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default products;
