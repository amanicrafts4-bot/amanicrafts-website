# Amanicraft - South African Art & Heritage E-commerce Implementation

## Project Overview
Amanicraft is a premium e-commerce platform celebrating South African artisans and heritage. Located in Greenmarket Square, Cape Town, the store features handcrafted textiles, beadwork, art, ceramics, and cultural treasures.

## Key Implementation Details

### 1. Design & Branding
- **Color Palette**: Warm, earthy tones inspired by African heritage
  - Primary: #c17a5c (terracotta/rust)
  - Secondary: #8b6f47 (rich earth brown)
  - Accent: #d4a574 (ochre gold)
  - Background: #faf7f2 (warm cream)
  - Dark mode: Rich browns and warm neutrals
- **Typography**: Serif (Playfair Display) for headings, Sans-serif (Inter) for body
- **Logo**: "AMANICRAFT" - modern, elegant branding

### 2. Products Database
Completely redesigned product catalog featuring:
- **Beaded Necklace** - Traditional Zulu beadwork ($280)
- **Hand-Woven Basket** - Sustainable seagrass, Cape Town ($185)
- **Tribal Wall Art** - Contemporary South African artists ($420)
- **Shweshwe Fabric** - Heritage indigo patterns ($145)
- **Leather Satchel** - Handcrafted, Cape Town ($520)
- **Batik Scarf** - Traditional hand-dyed cotton ($165)
- **Beaded Dress** - Xhosa beadwork, Eastern Cape ($450)
- **Ceramic Vessel** - Hand-thrown pottery ($310)

Categories: Jewelry, Textiles, Fashion, Art, Decor, Accessories

### 3. Persistent Shopping Cart
- **Cart Store** (`lib/cart-store.ts`): localStorage-based cart management
- Features:
  - Add/remove items with size and color variations
  - Update quantities
  - Calculate total price
  - Full cart persistence across sessions
- **MiniCart Component**: Real-time cart updates with smooth animations

### 4. Inspiring Sections
- **Hero Section**: "Celebrating African Artistry" with inspiring messaging
- **Heritage Section**: 
  - 50+ Artisan Communities
  - 100% Handcrafted
  - Cape Town, Greenmarket Square
  - Stories of heritage and cultural connection
- **Featured Creations Grid**: 6 hero products with hover animations

### 5. Animations & Transitions
- Smooth scroll reveal animations on page load
- Product card hover effects with scale transform
- Image fade transitions between primary/hover views
- Button interactions with subtle scale animations
- Nav fade in from top
- Scroll-triggered content reveals
- Text color transitions on hover

### 6. Mobile-First Responsive Design
- Flexible hero layout (stack on mobile, split on desktop)
- Responsive typography: scales from 3xl (mobile) to 7xl (desktop)
- Optimized spacing and padding for all screen sizes
- Touch-friendly button sizing
- Mobile menu functionality
- Adaptive grid layouts (1 col mobile, 2 col tablet, 3 col desktop)

### 7. Navigation & Footer
- **Brand Logo**: Updated to "AMANICRAFT"
- **Footer Links**: Artisan-focused navigation
  - Shop categories by product type
  - About: Heritage, communities, fair trade
  - Support: Contact, shipping, care instructions
- **Social Media**: Instagram, Facebook, Twitter
- **Newsletter**: "Artisan Updates" subscription
- Copyright: "© 2026 Amanicraft. Celebrating South African Heritage."

## Technical Stack
- Next.js 16 (App Router)
- React 19 with Framer Motion for animations
- TailwindCSS v4 with semantic design tokens
- localStorage for cart persistence
- TypeScript for type safety

## Files Modified
- `app/globals.css` - Color palette update
- `app/layout.tsx` - Metadata changes
- `app/page.tsx` - Page structure
- `lib/products.ts` - Product database
- `lib/cart-store.ts` - NEW: Cart management
- `components/hero-section.tsx` - Updated copy & styling
- `components/heritage-section.tsx` - Inspiring content
- `components/navigation.tsx` - Brand updates
- `components/mini-cart.tsx` - Persistent cart integration
- `components/collection-grid.tsx` - Amanicraft products
- `components/product-card.tsx` - Enhanced animations
- `components/premium-footer.tsx` - Brand updates & links

## Key Features
1. **Authentic Heritage Storytelling** - Every product celebrates South African artisans
2. **Smooth User Experience** - Framer Motion animations on every interaction
3. **Persistent Shopping** - Cart saved to localStorage across sessions
4. **Mobile-First Approach** - Fully responsive on all devices
5. **Inspiring Design** - Warm, welcoming aesthetic celebrating African culture
6. **Fair Trade Focus** - Messaging around artisan communities and sustainable practices

## Next Steps for Enhancement
- Implement checkout functionality
- Add product filtering by category
- Create artisan profile pages
- Add product reviews from buyers
- Integrate payment gateway
- Build customer account dashboard
- Add email newsletter functionality
