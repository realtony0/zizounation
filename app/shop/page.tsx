import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-dark-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Produits
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Parcourez notre collection premium de vapes de haute qualité. Choisissez parmi diverses saveurs et profitez de l'expérience de vape ultime.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass p-6 rounded-xl text-center border border-gray-700">
            <div className="text-3xl font-bold text-primary mb-1">{products.length}</div>
            <div className="text-gray-400 text-sm">Produits</div>
          </div>
          <div className="glass p-6 rounded-xl text-center border border-gray-700">
            <div className="text-3xl font-bold text-primary mb-1">
              {products.reduce((sum, p) => sum + p.variants.length, 0)}
            </div>
            <div className="text-gray-400 text-sm">Saveurs</div>
          </div>
          <div className="glass p-6 rounded-xl text-center border border-gray-700">
            <div className="text-3xl font-bold text-primary mb-1">15K</div>
            <div className="text-gray-400 text-sm">Max Bouffées</div>
          </div>
          <div className="glass p-6 rounded-xl text-center border border-gray-700">
            <div className="text-3xl font-bold text-primary mb-1">Rapide</div>
            <div className="text-gray-400 text-sm">45 min max</div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center glass p-8 rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Besoin d'Aide pour Choisir ?
          </h2>
          <p className="text-gray-400 mb-6">
            Contactez-nous et nous vous aiderons à trouver la saveur parfaite !
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-accent transition-colors"
          >
            <span>Nous Contacter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

