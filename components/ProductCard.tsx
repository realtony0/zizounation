'use client';

import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-dark-100 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">
              {product.puffs.toLocaleString()} Bouffées
            </span>
            <span className="text-2xl font-bold text-white">
              {product.price.toLocaleString()} <span className="text-sm text-gray-400">FCFA</span>
            </span>
          </div>

          {/* Variants Count */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span>{product.variants.length} Saveurs Disponibles</span>
          </div>

          {/* Box Info Badge */}
          {product.boxPrice && product.boxQuantity && (
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-lg px-3 py-1.5 text-xs">
              <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span className="text-primary font-semibold">Boîte {product.boxQuantity} : {product.boxPrice.toLocaleString()} FCFA</span>
            </div>
          )}

          {/* View Details Button */}
          <button className="mt-4 w-full bg-primary text-white font-semibold py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent">
            Voir les Détails
          </button>
        </div>
      </div>
    </Link>
  );
}

