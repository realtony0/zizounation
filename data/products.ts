import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'rodman',
    name: 'RODMAN',
    category: 'Premium',
    price: 9000,
    puffs: 15000,
    variants: [
      'Allstar',
      'Pineapple Banana Ice',
      'Buzzer Beater',
      'Cool Mint',
      'Peach Berry'
    ],
    image: '/buzzerbeater.jpeg',
    description: '15 000 bouffées d\'expérience de vape premium',
    boxPrice: 55000,
    boxQuantity: 10
  },
  {
    id: 'coolbar',
    name: 'Coolbar',
    category: 'Classic',
    price: 8000,
    puffs: 12000,
    variants: [
      'Watermelon Ice',
      'Red Bull Ice',
      'Sparkling Lemon',
      'Mixed Berries',
      'Peach Ice',
      'Double Mint',
      'Cola Ice'
    ],
    image: '/coolbar1.jpeg',
    description: '12 000 bouffées de saveurs rafraîchissantes',
    boxPrice: 45000,
    boxQuantity: 10
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get variant image
export const getVariantImage = (productId: string, variant: string): string => {
  // Mapping des variants aux images
  const variantImageMap: Record<string, Record<string, string>> = {
    rodman: {
      'Allstar': '/allstar.jpeg',
      'Pineapple Banana Ice': '/pineapplebananaice.jpeg',
      'Buzzer Beater': '/buzzerbeater.jpeg',
      'Cool Mint': '/coolmint.jpeg',
      'Peach Berry': '/peachberry.jpeg',
    },
    coolbar: {
      'Watermelon Ice': '/watermelonice.webp',
      'Red Bull Ice': '/redbullice.webp',
      'Sparkling Lemon': '/sparklinglemon.webp',
      'Mixed Berries': '/mixedberries.webp',
      'Peach Ice': '/peachice.webp',
      'Double Mint': '/doublemint.webp',
      'Cola Ice': '/colaice.webp',
    },
  };

  // Retourner l'image du variant ou l'image par défaut du produit
  const product = getProductById(productId);
  if (!product) return '/coolbar1.jpeg'; // Image par défaut

  return variantImageMap[productId]?.[variant] || product.image;
};

