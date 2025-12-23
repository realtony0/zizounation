# Pre-Launch Checklist

## Configuration

- [ ] Updated WhatsApp number in all files (currently set to `237`)
  - [ ] `app/page.tsx`
  - [ ] `app/product/[id]/page.tsx`
  - [ ] `app/cart/page.tsx`
  - [ ] `app/contact/page.tsx`
  - [ ] `components/Footer.tsx`

## Product Setup

- [ ] Verified product information in `data/products.ts`
  - [ ] RODMAN: Price 9,000 FCFA, 15,000 puffs
  - [ ] Coolbar: Price 8,000 FCFA, 12,000 puffs
- [ ] All product images are in `/public` folder
- [ ] Reviewed flavor names and variants
- [ ] Added dedicated RODMAN product image (optional, currently using flavor image)

## Testing

- [ ] Installed dependencies (`npm install`)
- [ ] Dev server runs without errors (`npm run dev`)
- [ ] Age verification modal appears on first visit
- [ ] Age verification persists in localStorage
- [ ] Can browse all pages (Home, Shop, Product Detail, Cart, Contact)
- [ ] Can add products to cart
- [ ] Cart persists after page refresh (localStorage)
- [ ] Can update quantities in cart
- [ ] Can remove items from cart
- [ ] WhatsApp order link generates correct message
- [ ] WhatsApp opens with pre-filled message
- [ ] Mobile responsive design works
- [ ] All images load correctly
- [ ] Navbar cart counter updates
- [ ] Empty cart state displays correctly

## Design & Content

- [ ] Reviewed all text content
- [ ] Checked color scheme (optional customization)
- [ ] Verified logo and branding
- [ ] Tested on mobile devices
- [ ] Tested on different browsers (Chrome, Safari, Firefox)
- [ ] Checked animation smoothness

## Production Ready

- [ ] Build completes successfully (`npm run build`)
- [ ] Production server runs (`npm start`)
- [ ] No console errors in production
- [ ] All links work correctly
- [ ] Favicon displays correctly
- [ ] Page titles are correct

## SEO & Meta

- [ ] Page title is appropriate
- [ ] Meta description is set
- [ ] Favicon is in place
- [ ] Social media preview looks good (optional)

## Legal & Compliance

- [ ] Age verification is working
- [ ] Warning message about nicotine is visible
- [ ] Terms of service (if needed)
- [ ] Privacy policy (if needed)

## Deployment

- [ ] Chose hosting platform
- [ ] Set up deployment
- [ ] Custom domain configured (optional)
- [ ] SSL certificate enabled
- [ ] Test live site thoroughly

## Post-Launch

- [ ] Monitor WhatsApp messages
- [ ] Test order flow with real customers
- [ ] Gather feedback
- [ ] Make adjustments as needed

## Optional Enhancements

- [ ] Add more products
- [ ] Add product reviews
- [ ] Add newsletter signup
- [ ] Add loyalty program
- [ ] Add payment gateway integration
- [ ] Add order tracking
- [ ] Add customer accounts
- [ ] Add admin dashboard
- [ ] Add analytics (Google Analytics, etc.)
- [ ] Add live chat

---

**Note**: Check off items as you complete them. Items marked "optional" are not required for launch but can be added later.

