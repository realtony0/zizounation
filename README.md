# Zizounation - Premium Vape E-Commerce Website

A modern, dark-themed e-commerce website for premium vaping products built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Dark Theme**: Beautiful gradient designs with smooth animations
- 📱 **Mobile-First Design**: Fully responsive across all devices
- 🔞 **Age Verification**: Fullscreen modal for 18+ verification (stored in localStorage)
- 🛒 **Shopping Cart**: Full cart functionality with localStorage persistence
- 💬 **WhatsApp Integration**: Direct checkout and ordering via WhatsApp
- ⚡ **Fast Performance**: Built with Next.js App Router for optimal speed
- 🎯 **TypeScript**: Type-safe development for better code quality

## Products

### RODMAN (15,000 Puffs) - 9,000 FCFA
Available flavors:
- Allstar
- Pineapple Banana Ice
- Buzzer Beater
- Cool Mint
- Peach Berry

### Coolbar (12,000 Puffs) - 8,000 FCFA
Available flavors:
- Watermelon Ice
- Red Bull Ice
- Sparkling Lemon
- Mixed Berries
- Peach Ice
- Double Mint
- Cola Ice

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Storage**: localStorage for cart and age verification
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
zizounation/
├── app/                    # Next.js App Router pages
│   ├── cart/              # Shopping cart page
│   ├── contact/           # Contact page
│   ├── product/[id]/      # Dynamic product detail page
│   ├── shop/              # Shop listing page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AgeGate.tsx       # Age verification modal
│   ├── Footer.tsx        # Footer component
│   ├── Navbar.tsx        # Navigation bar
│   └── ProductCard.tsx   # Product card component
├── context/              # React Context
│   └── CartContext.tsx   # Cart state management
├── data/                 # Data files
│   └── products.ts       # Product data
├── types/                # TypeScript types
│   └── index.ts          # Type definitions
└── public/               # Static assets
    └── *.jpeg/webp       # Product images
```

## Features Overview

### Age Verification
- Displays on first visit only
- Blocks access until user confirms 18+
- Stored in localStorage

### Shopping Cart
- Add/remove products
- Update quantities
- Persistent storage (localStorage)
- Real-time total calculation

### WhatsApp Checkout
- Generates formatted order message
- Includes product details, quantities, and total
- Opens WhatsApp with pre-filled message
- Direct ordering from product pages

### Pages
1. **Home**: Hero section, features, and product showcase
2. **Shop**: Product grid with all available products
3. **Product Detail**: Full product information with variant selection
4. **Cart**: Shopping cart with checkout functionality
5. **Contact**: WhatsApp contact information

## Customization

### Update WhatsApp Number
Replace `237` in all WhatsApp links with your phone number (with country code, no + sign):
- `app/page.tsx`
- `app/product/[id]/page.tsx`
- `app/cart/page.tsx`
- `app/contact/page.tsx`
- `components/Footer.tsx`

### Add/Edit Products
Edit `data/products.ts` to add or modify products.

### Change Colors
Update the color scheme in `tailwind.config.ts`:
- `primary`: Main brand color (purple)
- `secondary`: Accent color (pink)
- `dark`: Dark theme shades

## License

This project is private and proprietary.

## Support

For support, contact us via WhatsApp or email.

