# Zizounation - Setup Guide

## Quick Start

Follow these steps to get your e-commerce website up and running:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- TypeScript
- Tailwind CSS
- And other dependencies

### 2. Configure WhatsApp Number

**IMPORTANT**: Update your WhatsApp number in the following files:

Replace `237` with your WhatsApp number (include country code, no + sign):

- `app/page.tsx` (3 locations)
- `app/product/[id]/page.tsx` (1 location)
- `app/cart/page.tsx` (1 location)
- `app/contact/page.tsx` (1 location)
- `components/Footer.tsx` (1 location)

**Example**: If your number is +237 123 456 789, use: `https://wa.me/237123456789`

**Find and Replace**:
```bash
# Use your code editor's find/replace feature
Find: wa.me/237
Replace: wa.me/237YOURNUMBER
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Test the Website

1. **Age Verification**: 
   - Should appear on first visit
   - Click "I am 18+" to proceed
   - Clear localStorage to see it again: `localStorage.clear()`

2. **Browse Products**:
   - Navigate to Shop page
   - Click on a product to view details

3. **Add to Cart**:
   - Select a flavor
   - Choose quantity
   - Click "Add to Cart"

4. **Checkout**:
   - View cart
   - Click "Order via WhatsApp"
   - Verify the message format

### 5. Customize (Optional)

#### Update Product Images
- Add/replace images in `/public` directory
- Update image paths in `data/products.ts`
- See `IMAGE_REFERENCE.md` for details

#### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#8B5CF6',    // Purple
  secondary: '#EC4899',   // Pink
  dark: {
    100: '#1E1E2E',
    200: '#181825',
    300: '#11111B',
  }
}
```

#### Add/Edit Products
Edit `data/products.ts`:
```typescript
{
  id: 'product-id',
  name: 'Product Name',
  category: 'Category',
  price: 9000,
  puffs: 15000,
  variants: ['Flavor 1', 'Flavor 2'],
  image: '/image.jpeg',
  description: 'Product description'
}
```

### 6. Build for Production

```bash
npm run build
```

This creates an optimized production build in `.next` folder.

### 7. Test Production Build

```bash
npm start
```

Runs the production server on [http://localhost:3000](http://localhost:3000).

### 8. Deploy

#### Option A: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic setup for Next.js)

#### Option B: Other Platforms

- **Netlify**: Supports Next.js
- **Railway**: Simple deployment
- **Heroku**: Container deployment
- **VPS**: Use PM2 or Docker

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Clear localStorage (Testing)
```javascript
// Open browser console (F12)
localStorage.clear()
// Refresh page
```

### Image Not Loading
- Ensure image is in `/public` folder
- Check file name matches exactly (case-sensitive)
- Restart dev server after adding new images

### TypeScript Errors
```bash
# Check for errors
npm run lint
# Fix automatically when possible
npm run lint -- --fix
```

## File Structure Overview

```
zizounation/
├── app/                    # Next.js pages
│   ├── cart/              # Cart page
│   ├── contact/           # Contact page
│   ├── product/[id]/      # Product details
│   ├── shop/              # Shop page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── context/              # State management
├── data/                 # Product data
├── types/                # TypeScript types
├── public/               # Static assets
└── Configuration files
```

## Environment Variables (Optional)

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=237YOURNUMBER
```

Then use in code:
```typescript
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
```

## Support

- Check `README.md` for detailed documentation
- Review `IMAGE_REFERENCE.md` for image guidelines
- Open browser DevTools (F12) to debug issues

## Next Steps

1. ✅ Install dependencies
2. ✅ Update WhatsApp number
3. ✅ Run dev server
4. ✅ Test all features
5. ✅ Customize as needed
6. ✅ Build for production
7. ✅ Deploy to hosting

Happy selling! 🚀

