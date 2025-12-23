# Image Reference Guide

## Product Images

All images are located in the `/public` directory and can be referenced with a leading slash `/`.

### Main Product Images

- **RODMAN**: `/buzzerbeater.jpeg` (currently using flavor image)
- **Coolbar**: `/coolbar1.jpeg`

### RODMAN Flavor Images (15,000 Puffs)

1. Allstar → `/allstar.jpeg`
2. Pineapple Banana Ice → `/pineapplebananaice.jpeg`
3. Buzzer Beater → `/buzzerbeater.jpeg`
4. Cool Mint → `/coolmint.jpeg`
5. Peach Berry → `/peachberry.jpeg`

### Coolbar Flavor Images (12,000 Puffs)

1. Watermelon Ice → `/watermelonice.webp`
2. Red Bull Ice → `/redbullice.webp`
3. Sparkling Lemon → `/sparklinglemon.webp`
4. Mixed Berries → `/mixedberries.webp`
5. Peach Ice → `/peachice.webp`
6. Double Mint → `/doublemint.webp`
7. Cola Ice → `/colaice.webp`

### Other Images

- **Favicon**: `/favicon.png`

## Note

If you want to add a dedicated product image for RODMAN:
1. Add the image file to the `/public` directory
2. Update `data/products.ts` and change the `image` property for RODMAN
3. Recommended naming: `/rodman.jpeg` or `/rodman.webp`

## Using Images in Components

```tsx
import Image from 'next/image';

<Image
  src="/coolbar1.jpeg"
  alt="Coolbar"
  fill
  className="object-cover"
/>
```

All images in the `/public` folder are automatically served by Next.js at the root URL path.

