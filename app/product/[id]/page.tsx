'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, getVariantImage } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  
  const product = getProductById(params.id as string);
  
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-dark-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Produit Introuvable</h1>
          <Link href="/shop" className="text-primary hover:underline">
            Retour à la Boutique
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedVariant, quantity);
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-dark-300 py-12">
      {/* Success Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Ajouté au panier !</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white">Boutique</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-slide-up">
            <div className="relative h-96 lg:h-[600px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              <Image
                key={selectedVariant}
                src={getVariantImage(product.id, selectedVariant)}
                alt={`${product.name} - ${selectedVariant}`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoad={() => setImageLoading(false)}
                onLoadStart={() => setImageLoading(true)}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline space-x-2 mb-6">
              <span className="text-4xl font-bold text-white">
                {product.price.toLocaleString()}
              </span>
              <span className="text-xl text-gray-400">FCFA</span>
            </div>

            {/* Puffs Info */}
            <div className="bg-dark-100 border border-gray-700 p-4 rounded-xl mb-6 inline-flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{product.puffs.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Bouffées</div>
              </div>
            </div>

            {/* Box Info */}
            {product.boxPrice && product.boxQuantity && (
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 p-6 rounded-2xl mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-primary/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-1">Boîte de {product.boxQuantity} vapes</div>
                    <div className="text-3xl font-bold text-white">
                      {product.boxPrice.toLocaleString()} <span className="text-lg text-gray-400">FCFA</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Économisez {((product.price * product.boxQuantity - product.boxPrice) / (product.price * product.boxQuantity) * 100).toFixed(0)}% en achetant la boîte complète
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-400 mb-8 text-lg">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-3 text-lg">
                Sélectionner une Saveur
              </label>
              <div className="grid grid-cols-2 gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => {
                      setImageLoading(true);
                      setSelectedVariant(variant);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedVariant === variant
                        ? 'border-primary bg-primary/10 text-white'
                        : 'border-gray-700 bg-dark-100 text-gray-400 hover:border-gray-600 hover:bg-dark-200'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-3 text-lg">
                Quantité
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-dark-100 border border-gray-700 text-white rounded-lg hover:bg-dark-200 transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-white w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-dark-100 border border-gray-700 text-white rounded-lg hover:bg-dark-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-dark-100 border border-gray-700 p-6 rounded-xl mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-lg">Total:</span>
                <span className="text-3xl font-bold text-white">
                  {(product.price * quantity).toLocaleString()} FCFA
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-dark-100 border-2 border-primary text-white font-bold py-4 rounded-xl hover:bg-primary/10 transition-all"
              >
                Ajouter au Panier
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-primary text-white font-bold py-4 rounded-xl hover:bg-accent transition-all shadow-lg"
              >
                Acheter Maintenant
              </button>
            </div>

            {/* Box Order Button */}
            {product.boxPrice && product.boxQuantity && (
              <a
                href={`https://wa.me/779706850?text=Bonjour, je souhaite commander une boîte de ${product.boxQuantity} ${product.name} au prix de ${product.boxPrice.toLocaleString()} FCFA.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-secondary to-primary text-white font-bold py-4 rounded-xl hover:from-secondary/90 hover:to-primary/90 transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Commander la Boîte ({product.boxQuantity} vapes - {product.boxPrice.toLocaleString()} FCFA)</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

