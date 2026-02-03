export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  hoverImage: string
  description: string
  longDescription: string
  materials: string[]
  care: string[]
  sizes: { size: string; available: boolean }[]
  colors: { name: string; hex: string; available: boolean }[]
  details: string[]
  madeIn: string
}

export const products: Product[] = [
  {
    id: "beaded-necklace",
    name: "Traditional Zulu Beaded Necklace",
    price: 280,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    description: "Handcrafted beadwork celebrating Zulu heritage",
    longDescription:
      "Each necklace is meticulously hand-beaded by Zulu artisans using traditional techniques passed down through generations. The vibrant patterns and color combinations tell stories of culture and tradition. These pieces are more than jewelry—they are wearable art celebrating South African heritage and supporting local artisan communities.",
    materials: ["Glass beads", "Traditional seed beads", "Leather adjustable closure"],
    care: ["Gently hand wash", "Dry naturally", "Store away from direct sunlight"],
    sizes: [
      { size: "Standard", available: true },
      { size: "Extended", available: true },
    ],
    colors: [
      { name: "Royal Blue & Gold", hex: "#1B3B7F", available: true },
      { name: "Red & White", hex: "#C41E3A", available: true },
      { name: "Rainbow Mix", hex: "#FFD700", available: true },
    ],
    details: [
      "100% handmade",
      "Traditional Zulu patterns",
      "Adjustable leather cord",
      "Authentic artisan signature",
    ],
    madeIn: "KwaZulu-Natal, South Africa",
  },
  {
    id: "woven-basket",
    name: "Hand-Woven Seagrass Basket",
    price: 185,
    category: "Decor",
    image: "https://images.unsplash.com/photo-1595523676357-1f5f6b30cf65?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
    description: "Sustainable storage celebrating artisan craft",
    longDescription:
      "Woven by skilled artisans using sustainably harvested seagrass, these baskets are both beautiful and functional. Each piece features unique patterns created by traditional hand-weaving techniques. Perfect for storing treasures or displaying as decorative art, these baskets add warmth and character to any space while supporting fair-trade practices.",
    materials: ["Natural seagrass", "Durable twisted handles", "Eco-friendly dyes"],
    care: ["Dust with soft cloth", "Spot clean as needed", "Keep away from excess moisture"],
    sizes: [
      { size: "Small", available: true },
      { size: "Medium", available: true },
      { size: "Large", available: true },
    ],
    colors: [
      { name: "Natural", hex: "#D4A574", available: true },
      { name: "Earth Brown", hex: "#8B6F47", available: true },
      { name: "Charcoal", hex: "#4A4A4A", available: true },
    ],
    details: ["100% handwoven", "Natural materials", "Unique patterns", "Fair-trade certified"],
    madeIn: "Cape Town, South Africa",
  },
  {
    id: "tribal-wall-art",
    name: "Contemporary Tribal Wall Art",
    price: 420,
    category: "Art",
    image: "https://images.unsplash.com/photo-1578688846-5382633e102d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    description: "Modern art rooted in traditional aesthetics",
    longDescription:
      "Created by contemporary South African artists, these pieces blend traditional tribal motifs with modern artistic expression. Hand-painted on sustainable canvas using natural pigments, each artwork tells a unique story of cultural connection and creative vision. These pieces celebrate the evolution of African art while honoring ancestral traditions.",
    materials: ["Canvas", "Natural pigments", "Wooden frame"],
    care: ["Dust gently", "Avoid direct sunlight", "Wipe frame periodically"],
    sizes: [
      { size: "Small (40x50cm)", available: true },
      { size: "Medium (60x80cm)", available: true },
      { size: "Large (80x100cm)", available: true },
    ],
    colors: [
      { name: "Earth Tones", hex: "#8B6F47", available: true },
      { name: "Bold Jewel", hex: "#4A5F7F", available: true },
      { name: "Natural Earth", hex: "#D4A574", available: true },
    ],
    details: ["Hand-painted", "Natural pigments", "Artist certified", "Certificate of authenticity"],
    madeIn: "Cape Town, South Africa",
  },
  {
    id: "shweshwe-fabric",
    name: "Shweshwe Printed Fabric - Heritage Pattern",
    price: 145,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    description: "Iconic South African fabric with cultural significance",
    longDescription:
      "Shweshwe is a hand-dyed cotton fabric with indigo patterns that has been a symbol of South African identity for generations. This premium quality fabric features traditional geometric designs that tell stories of cultural heritage. Perfect for fashion, home décor, or art projects, each roll supports traditional textile artisans.",
    materials: ["100% Cotton", "Hand-dyed indigo", "Traditional patterns"],
    care: ["Machine wash separately", "Use cold water", "Lay flat to dry"],
    sizes: [
      { size: "1 Meter", available: true },
      { size: "2 Meters", available: true },
      { size: "5 Meters", available: true },
    ],
    colors: [
      { name: "Deep Indigo", hex: "#4A5F7F", available: true },
      { name: "Indigo & White", hex: "#FFFFFF", available: true },
      { name: "Royal Blue", hex: "#1B3B7F", available: true },
    ],
    details: ["Hand-dyed", "Traditional patterns", "Premium cotton", "Authentic heritage"],
    madeIn: "South Africa",
  },
  {
    id: "leather-satchel",
    name: "Handcrafted Leather Satchel",
    price: 520,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=800&q=80",
    description: "Timeless craftsmanship from Cape Town artisans",
    longDescription:
      "Each satchel is hand-stitched by skilled leather workers in Cape Town, using vegetable-tanned leather that develops character with age. The geometric embossing reflects South African design traditions, creating a piece that is both functional and artistic. Built to last generations, these bags become more beautiful over time.",
    materials: ["Vegetable-tanned leather", "Solid brass hardware", "Hand-stitched construction"],
    care: ["Condition regularly with leather balm", "Store in cool, dry place", "Air dry if wet"],
    sizes: [
      { size: "Standard", available: true },
      { size: "Large", available: true },
    ],
    colors: [
      { name: "Cognac", hex: "#9A463D", available: true },
      { name: "Rich Tan", hex: "#8B6F47", available: true },
      { name: "Chocolate", hex: "#3E2723", available: true },
    ],
    details: ["Hand-stitched", "Geometric embossing", "Brass hardware", "Artisan signed"],
    madeIn: "Cape Town, South Africa",
  },
  {
    id: "batik-scarf",
    name: "Hand-Dyed Batik Scarf",
    price: 165,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1608787066975-8d166ea46203?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    description: "Wearable art using ancient batik techniques",
    longDescription:
      "Each scarf is created using traditional batik techniques where wax is hand-applied to fabric before dyeing. The process creates unique, unrepeatable patterns that celebrate the randomness of natural art. Produced by artisans who preserve this ancient craft, every piece supports cultural heritage and sustainable practices.",
    materials: ["100% Cotton", "Natural dyes", "Hand-waxed & dyed"],
    care: ["Hand wash in cool water", "Air dry", "Avoid harsh sunlight"],
    sizes: [
      { size: "Standard (100x100cm)", available: true },
      { size: "Large (120x120cm)", available: true },
    ],
    colors: [
      { name: "Indigo Dreams", hex: "#4A5F7F", available: true },
      { name: "Sunset Earth", hex: "#D4A574", available: true },
      { name: "Forest Spirit", hex: "#3A5C3A", available: true },
    ],
    details: ["Hand-batik process", "Natural dyes", "Unique patterns", "Artisan-made"],
    madeIn: "KwaZulu-Natal, South Africa",
  },
  {
    id: "beaded-dress",
    name: "Beaded Traditional Dress",
    price: 450,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1595777712244-ec3dca06fd78?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515552726519-7d1c6dcd5cfd?w=800&q=80",
    description: "Contemporary fashion honoring Xhosa beadwork",
    longDescription:
      "This dress combines modern silhouette with traditional Xhosa beadwork. Each bead is hand-applied by artisans, creating intricate patterns that celebrate cultural identity. The lightweight natural fabric ensures comfort while the beaded details make it suitable for special occasions or everyday celebration of heritage.",
    materials: ["100% Cotton base", "Glass beads", "Hand-stitched embellishments"],
    care: ["Gentle hand wash", "Lay flat to dry", "Store carefully to protect beadwork"],
    sizes: [
      { size: "XS", available: true },
      { size: "S", available: true },
      { size: "M", available: true },
      { size: "L", available: true },
      { size: "XL", available: true },
    ],
    colors: [
      { name: "Rust & Cream", hex: "#8B6F47", available: true },
      { name: "Forest Green", hex: "#3A5C3A", available: true },
      { name: "Deep Navy", hex: "#1B3B7F", available: true },
    ],
    details: ["Hand-beaded design", "Xhosa patterns", "Lightweight cotton", "Unique pieces"],
    madeIn: "Eastern Cape, South Africa",
  },
  {
    id: "ceramic-vessel",
    name: "Handcrafted Ceramic Vessel",
    price: 310,
    category: "Decor",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&q=80&crop=entropy&cs=tinysrgb",
    description: "Functional art celebrating African pottery traditions",
    longDescription:
      "Each vessel is hand-thrown and finished by master potters from communities across South Africa. Inspired by centuries-old pottery traditions, these pieces blend ancestral techniques with contemporary aesthetics. Perfect for flowers, storage, or display, they bring cultural richness and artisan heritage into any home.",
    materials: ["Natural clay", "Hand-thrown", "Ceramic glaze"],
    care: ["Hand wash with care", "Dry completely before storing", "Handle gently"],
    sizes: [
      { size: "Small", available: true },
      { size: "Medium", available: true },
      { size: "Large", available: true },
    ],
    colors: [
      { name: "Earth Brown", hex: "#8B6F47", available: true },
      { name: "Ochre", hex: "#D4A574", available: true },
      { name: "Terracotta", hex: "#C17A5C", available: true },
    ],
    details: ["Hand-thrown", "Natural clay", "Artisan glazed", "Unique each piece"],
    madeIn: "South Africa",
  },
]

export const categories = ["All", "Jewelry", "Textiles", "Fashion", "Art", "Decor", "Accessories"]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((p) => p.category === category)
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  const current = getProductById(currentId)
  if (!current) return products.slice(0, limit)

  const sameCategory = products.filter((p) => p.id !== currentId && p.category === current.category)
  const others = products.filter((p) => p.id !== currentId && p.category !== current.category)

  return [...sameCategory, ...others].slice(0, limit)
}
